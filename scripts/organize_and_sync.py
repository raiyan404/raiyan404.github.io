import os
import shutil
import json
import base64
from io import BytesIO
from PIL import Image, ExifTags

images_root = 'images'
display_dir = 'public/photos/display'
thumbs_dir = 'public/photos/thumbs'

os.makedirs(display_dir, exist_ok=True)
os.makedirs(thumbs_dir, exist_ok=True)
os.makedirs('src/data', exist_ok=True)

# The 6 canonical topics
COLLECTION_IDS = [
    "skies-and-light",
    "street-life",
    "urban-nature",
    "architecture-and-structure",
    "still-life-and-interiors",
    "quiet-moments"
]

def normalize_collection_name(name):
    clean = name.lower().replace('&', 'and').replace('_', '-').replace(' ', '-')
    while '--' in clean:
        clean = clean.replace('--', '-')
    clean = clean.strip('-')
    if clean in COLLECTION_IDS:
        return clean
    # Fuzzy match
    for cid in COLLECTION_IDS:
        if clean in cid or cid in clean:
            return cid
    return "quiet-moments"

# 1. Create the 6 folders in images/
for cid in COLLECTION_IDS:
    os.makedirs(os.path.join(images_root, cid), exist_ok=True)

# 2. Load existing metadata dictionary to preserve curated titles & tags
existing_data_map = {}
if os.path.exists('src/data/photosData.json'):
    try:
        with open('src/data/photosData.json', 'r', encoding='utf-8') as f:
            for item in json.load(f):
                existing_data_map[item['filename']] = item
    except Exception as e:
        print("Could not load existing data:", e)

# Fix swans placement in existing data
if '20261021_170739.jpg' in existing_data_map:
    existing_data_map['20261021_170739.jpg']['collection'] = 'urban-nature'

# 3. Move loose images currently in images/ into their assigned topic folder
loose_files = [f for f in os.listdir(images_root) if os.path.isfile(os.path.join(images_root, f)) and f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]

for fname in loose_files:
    meta = existing_data_map.get(fname)
    if meta:
        target_folder = meta['collection']
    else:
        # Default fallback if newly dropped
        target_folder = "quiet-moments"
    
    src = os.path.join(images_root, fname)
    dst_folder = os.path.join(images_root, target_folder)
    dst = os.path.join(dst_folder, fname)
    shutil.move(src, dst)
    print(f"Moved {fname} -> {target_folder}/")

# 4. Now scan all 6 topic folders in images/
all_photos_list = []
active_filenames = set()

# Process each folder
for folder_name in os.listdir(images_root):
    folder_path = os.path.join(images_root, folder_name)
    if not os.path.isdir(folder_path):
        continue
    
    collection_id = normalize_collection_name(folder_name)
    files = sorted([f for f in os.listdir(folder_path) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))])
    
    for fname in files:
        file_path = os.path.join(folder_path, fname)
        active_filenames.add(fname)
        base_name = os.path.splitext(fname)[0]
        disp_filename = base_name + ".webp"
        disp_path = os.path.join(display_dir, disp_filename)
        thumb_path = os.path.join(thumbs_dir, disp_filename)
        
        try:
            im = Image.open(file_path)
            orig_w, orig_h = im.size
            aspect_ratio = round(orig_w / orig_h, 3)
            
            if aspect_ratio > 1.15:
                orientation = "landscape"
            elif aspect_ratio < 0.85:
                orientation = "portrait"
            else:
                orientation = "square"
                
            # Read EXIF
            exif = im._getexif() or {}
            exif_data = {}
            for k, v in exif.items():
                if k in ExifTags.TAGS:
                    exif_data[ExifTags.TAGS[k]] = v
                    
            camera_model = str(exif_data.get('Model', 'Sony Xperia 5 IV (SO-54C)'))
            if camera_model == 'SO-54C':
                camera_model = 'Sony Xperia 5 IV (SO-54C)'
                
            exposure = exif_data.get('ExposureTime')
            if exposure:
                try:
                    exp_f = float(exposure)
                    shutter = f"1/{int(round(1.0 / exp_f))}s" if exp_f < 1 else f"{exp_f:.1f}s"
                except:
                    shutter = str(exposure)
            else:
                shutter = "1/250s"
                
            f_number = exif_data.get('FNumber')
            if f_number:
                try:
                    aperture = f"f/{float(f_number):.1f}"
                except:
                    aperture = str(f_number)
            else:
                aperture = "f/1.7"
                
            iso = exif_data.get('ISOSpeedRatings')
            iso_str = f"ISO {iso}" if iso else "ISO 64"
            
            focal_len = exif_data.get('FocalLength')
            if focal_len:
                try:
                    focal_str = f"{float(focal_len):.1f}mm (Zeiss)"
                except:
                    focal_str = str(focal_len)
            else:
                focal_str = "24mm eq. Zeiss"
                
            date_str = str(exif_data.get('DateTimeOriginal', '2026-08-24 18:00:00'))
            if len(date_str) >= 10 and date_str[4] == ':' and date_str[7] == ':':
                date_str = date_str[:10].replace(':', '-') + date_str[10:]

            # Generate display WebP if missing
            if not os.path.exists(disp_path):
                disp_im = im.copy()
                disp_im.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
                disp_im.save(disp_path, "WEBP", quality=84)
                print(f"Generated display version: {disp_filename}")
                
            # Generate thumb WebP if missing
            if not os.path.exists(thumb_path):
                thumb_im = im.copy()
                thumb_im.thumbnail((600, 600), Image.Resampling.LANCZOS)
                thumb_im.save(thumb_path, "WEBP", quality=75)
                print(f"Generated thumbnail version: {disp_filename}")

            # Blur data url for instant placeholder
            tiny_im = im.copy()
            tiny_im.thumbnail((24, 24))
            buffered = BytesIO()
            tiny_im.save(buffered, format="WEBP", quality=40)
            blur_data_url = f"data:image/webp;base64,{base64.b64encode(buffered.getvalue()).decode('utf-8')}"
            
            # Preserve or generate title
            existing = existing_data_map.get(fname, {})
            title = existing.get('title')
            if not title:
                # Clean title from filename
                title = base_name.replace('_', ' ').replace('-', ' ').title()
                
            tags = existing.get('tags', [collection_id.replace('-', ' ')])
            featured = existing.get('featured', False)
            
            photo_entry = {
                "id": f"photo-{len(all_photos_list) + 1:03d}",
                "filename": fname,
                "displayUrl": f"/photos/display/{disp_filename}",
                "thumbUrl": f"/photos/thumbs/{disp_filename}",
                "blurDataUrl": blur_data_url,
                "width": orig_w,
                "height": orig_h,
                "aspectRatio": aspect_ratio,
                "orientation": orientation,
                "title": title,
                "collection": collection_id,
                "tags": tags,
                "featured": featured,
                "camera": {
                    "model": camera_model,
                    "lens": "Zeiss Vario-Tessar T*",
                    "shutter": shutter,
                    "aperture": aperture,
                    "iso": iso_str,
                    "focalLength": focal_str,
                    "date": date_str
                }
            }
            all_photos_list.append(photo_entry)
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

# 5. Clean up any display/thumb files that are no longer in active images
for folder in [display_dir, thumbs_dir]:
    for f in os.listdir(folder):
        base = os.path.splitext(f)[0]
        # check if base is in any active filename
        match = any(os.path.splitext(af)[0] == base for af in active_filenames)
        if not match:
            dead_path = os.path.join(folder, f)
            os.remove(dead_path)
            print(f"Purged deleted image: {dead_path}")

print(f"\nTotal synchronized photos: {len(all_photos_list)}")

# Save updated JSON and TypeScript
with open('src/data/photosData.json', 'w', encoding='utf-8') as f:
    json.dump(all_photos_list, f, indent=2, ensure_ascii=False)

# Cover photos for each collection
collection_covers = {}
for p in all_photos_list:
    cid = p['collection']
    if cid not in collection_covers or p.get('featured'):
        collection_covers[cid] = p['id']

ts_content = f"""// Auto-generated photo database synchronized with images/ topic folders
export interface CameraMetadata {{
  model: string;
  lens: string;
  shutter: string;
  aperture: string;
  iso: string;
  focalLength: string;
  date: string;
}}

export type CollectionId =
  | "skies-and-light"
  | "street-life"
  | "urban-nature"
  | "architecture-and-structure"
  | "still-life-and-interiors"
  | "quiet-moments";

export interface Photo {{
  id: string;
  filename: string;
  displayUrl: string;
  thumbUrl: string;
  blurDataUrl: string;
  width: number;
  height: number;
  aspectRatio: number;
  orientation: "landscape" | "portrait" | "square";
  title: string;
  collection: CollectionId;
  tags: string[];
  featured: boolean;
  camera: CameraMetadata;
}}

export interface CollectionMeta {{
  id: CollectionId;
  title: string;
  coverPhotoId: string;
}}

export const COLLECTIONS: CollectionMeta[] = [
  {{ id: "skies-and-light", title: "Skies & Light", coverPhotoId: "{collection_covers.get('skies-and-light', all_photos_list[0]['id'] if all_photos_list else '')}" }},
  {{ id: "street-life", title: "Street Life", coverPhotoId: "{collection_covers.get('street-life', all_photos_list[0]['id'] if all_photos_list else '')}" }},
  {{ id: "urban-nature", title: "Urban Nature", coverPhotoId: "{collection_covers.get('urban-nature', all_photos_list[0]['id'] if all_photos_list else '')}" }},
  {{ id: "architecture-and-structure", title: "Architecture & Structure", coverPhotoId: "{collection_covers.get('architecture-and-structure', all_photos_list[0]['id'] if all_photos_list else '')}" }},
  {{ id: "still-life-and-interiors", title: "Still Life & Interiors", coverPhotoId: "{collection_covers.get('still-life-and-interiors', all_photos_list[0]['id'] if all_photos_list else '')}" }},
  {{ id: "quiet-moments", title: "Quiet Moments", coverPhotoId: "{collection_covers.get('quiet-moments', all_photos_list[0]['id'] if all_photos_list else '')}" }}
];

export const PHOTOS: Photo[] = {json.dumps(all_photos_list, indent=2, ensure_ascii=False)};
"""

with open('src/data/photos.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Saved clean src/data/photos.ts!")
