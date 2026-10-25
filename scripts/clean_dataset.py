import os
import json

with open('src/data/photosData.json', 'r', encoding='utf-8') as f:
    photos = json.load(f)

for p in photos:
    if 'location' in p:
        del p['location']

with open('src/data/photosData.json', 'w', encoding='utf-8') as f:
    json.dump(photos, f, indent=2, ensure_ascii=False)

ts_content = f"""// Clean minimal photography database without locations
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
  {{ id: "skies-and-light", title: "Skies & Light", coverPhotoId: "photo-008" }},
  {{ id: "street-life", title: "Street Life", coverPhotoId: "photo-024" }},
  {{ id: "urban-nature", title: "Urban Nature", coverPhotoId: "photo-033" }},
  {{ id: "architecture-and-structure", title: "Architecture & Structure", coverPhotoId: "photo-041" }},
  {{ id: "still-life-and-interiors", title: "Still Life & Interiors", coverPhotoId: "photo-069" }},
  {{ id: "quiet-moments", title: "Quiet Moments", coverPhotoId: "photo-101" }}
];

export const PHOTOS: Photo[] = {json.dumps(photos, indent=2, ensure_ascii=False)};
"""

with open('src/data/photos.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Removed all location fields completely.")
