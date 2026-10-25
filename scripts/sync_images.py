import os
import json
import base64
from io import BytesIO
from PIL import Image, ExifTags

images_root = 'images'
display_dir = 'photos/display'
thumbs_dir = 'photos/thumbs'

os.makedirs(display_dir, exist_ok=True)
os.makedirs(thumbs_dir, exist_ok=True)
os.makedirs('js', exist_ok=True)

COLLECTION_MAP = {
    "skies-and-light": "skies-and-light",
    "street-life": "street-life",
    "urban-nature": "urban-nature",
    "architecture-and-structure": "architecture-and-structure",
    "still-life-and-interiors": "still-life-and-interiors",
    "quiet-moments": "quiet-moments"
}

def normalize_collection_name(name):
    clean = name.lower().replace('&', 'and').replace('_', '-').replace(' ', '-')
    while '--' in clean:
        clean = clean.replace('--', '-')
    clean = clean.strip('-')
    if clean in COLLECTION_MAP:
        return clean
    for cid in COLLECTION_MAP:
        if clean in cid or cid in clean:
            return cid
    return "quiet-moments"

existing_data_map = {}
json_path = 'js/photosData.json'
if not os.path.exists(json_path) and os.path.exists('src/data/photosData.json'):
    json_path = 'src/data/photosData.json'

if os.path.exists(json_path):
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            for item in json.load(f):
                existing_data_map[item['filename']] = item
    except Exception as e:
        print("Warning loading photosData.json:", e)

all_photos_list = []
active_filenames = set()

# Scan folders in images/
subfolders = [f for f in os.listdir(images_root) if os.path.isdir(os.path.join(images_root, f))]

for folder_name in sorted(subfolders):
    collection_id = normalize_collection_name(folder_name)
    folder_path = os.path.join(images_root, folder_name)
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

            # Generate display WebP if not yet created
            if not os.path.exists(disp_path):
                disp_im = im.copy()
                disp_im.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
                disp_im.save(disp_path, "WEBP", quality=84)
                
            # Generate thumb WebP if not yet created
            if not os.path.exists(thumb_path):
                thumb_im = im.copy()
                thumb_im.thumbnail((600, 600), Image.Resampling.LANCZOS)
                thumb_im.save(thumb_path, "WEBP", quality=75)

            # Lightweight blur placeholder
            tiny_im = im.copy()
            tiny_im.thumbnail((24, 24))
            buffered = BytesIO()
            tiny_im.save(buffered, format="WEBP", quality=40)
            blur_data_url = f"data:image/webp;base64,{base64.b64encode(buffered.getvalue()).decode('utf-8')}"
            
            existing = existing_data_map.get(fname, {})
            title = existing.get('title')
            if not title:
                title = base_name.replace('_', ' ').replace('-', ' ').title()
                
            tags = existing.get('tags', [collection_id.replace('-', ' ')])
            featured = existing.get('featured', False)
            
            photo_entry = {
                "id": f"photo-{len(all_photos_list) + 1:03d}",
                "filename": fname,
                "displayUrl": f"photos/display/{disp_filename}",
                "thumbUrl": f"photos/thumbs/{disp_filename}",
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

# Purge removed images
for folder in [display_dir, thumbs_dir]:
    if os.path.exists(folder):
        for f in os.listdir(folder):
            base = os.path.splitext(f)[0]
            match = any(os.path.splitext(af)[0] == base for af in active_filenames)
            if not match:
                dead_path = os.path.join(folder, f)
                try:
                    os.remove(dead_path)
                except:
                    pass

# Save JSON data
with open('js/photosData.json', 'w', encoding='utf-8') as f:
    json.dump(all_photos_list, f, indent=2, ensure_ascii=False)

collection_covers = {}
for p in all_photos_list:
    cid = p['collection']
    if cid not in collection_covers or p.get('featured'):
        collection_covers[cid] = p['id']

collections_data = [
    { "id": "skies-and-light", "title": "Skies & Light", "coverPhotoId": collection_covers.get('skies-and-light', all_photos_list[0]['id'] if all_photos_list else '') },
    { "id": "street-life", "title": "Street Life", "coverPhotoId": collection_covers.get('street-life', all_photos_list[0]['id'] if all_photos_list else '') },
    { "id": "urban-nature", "title": "Urban Nature", "coverPhotoId": collection_covers.get('urban-nature', all_photos_list[0]['id'] if all_photos_list else '') },
    { "id": "architecture-and-structure", "title": "Architecture & Structure", "coverPhotoId": collection_covers.get('architecture-and-structure', all_photos_list[0]['id'] if all_photos_list else '') },
    { "id": "still-life-and-interiors", "title": "Still Life & Interiors", "coverPhotoId": collection_covers.get('still-life-and-interiors', all_photos_list[0]['id'] if all_photos_list else '') },
    { "id": "quiet-moments", "title": "Quiet Moments", "coverPhotoId": collection_covers.get('quiet-moments', all_photos_list[0]['id'] if all_photos_list else '') }
]

# Output Vanilla JavaScript dataset for static website
js_content = f"""// Light & Dust — Photographic Database
// Synchronized from images/ topic folders
(function() {{
  const COLLECTIONS = {json.dumps(collections_data, indent=2, ensure_ascii=False)};
  const PHOTOS = {json.dumps(all_photos_list, indent=2, ensure_ascii=False)};

  if (typeof window !== 'undefined') {{
    window.COLLECTIONS = COLLECTIONS;
    window.PHOTOS = PHOTOS;
  }}
  if (typeof module !== 'undefined' && module.exports) {{
    module.exports = {{ COLLECTIONS, PHOTOS }};
  }}
}})();
"""

with open('js/photos.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Synchronization complete: {len(all_photos_list)} active photos across {len(subfolders)} topic folders.")
