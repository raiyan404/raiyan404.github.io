# Light & Dust

> *Quiet frames from a loud city*  
> A street photography archive by **Md. Raiyan Islam**

[![Author](https://img.shields.io/badge/Photographer-Md._Raiyan_Islam-e69947?style=flat-square)](https://instagram.com/raiyan._.clicks)
[![Instagram](https://img.shields.io/badge/Instagram-@raiyan._.clicks-e69947?style=flat-square&logo=instagram)](https://instagram.com/raiyan._.clicks)
[![License](https://img.shields.io/badge/License-All_Rights_Reserved-red?style=flat-square)](#copyright--license)
[![Tech Stack](https://img.shields.io/badge/Stack-Pure_HTML5_%2F_CSS3_%2F_Vanilla_JS-blue?style=flat-square)](#tech-stack)

---

## Overview

**Light & Dust** is a modern, minimal, cinematic photography portfolio built with pure HTML5, CSS3, and Vanilla JavaScript. Inspired by Magnum Photos and contemporary digital editorial art direction, it is crafted with a high-contrast dark obsidian aesthetic, generous negative space, and buttery-smooth 60–120fps interactions.

Zero build steps. Zero `node_modules`. Zero framework bloat. Double-click `index.html` or host on any static provider in seconds.

---

## The 6 Photographic Chapters

The archive contains 108 curated frames organized into six distinct collections:

1. **Skies & Light** — Dramatic sunsets, silhouettes, clouds, golden hour, and atmospheric skies.
2. **Street Life** — Candid moments of people, markets, daily life, children, vendors, and urban energy.
3. **Urban Nature** — Trees, aerial roots, parks, lakes, foliage, and nature existing within the city.
4. **Architecture & Structure** — Buildings, towers, bridges, mosques, ruins, and structural textures.
5. **Still Life & Interiors** — Vinyl, turntables, audio gear, terracotta figures, and intimate indoor scenes.
6. **Quiet Moments** — Animals, solitary figures, textures, and contemplative observational frames.

---

## Key Features

- **Cinematic Dark Aesthetic**: Obsidian base (`#060608`), warm film amber accents (`#e69947`), and refined editorial typography (`Space Grotesk`, `Inter`, `JetBrains Mono`).
- **35mm Negative Filmstrip**: Continuous horizontal marquee strip with authentic sprocket perforations (`400TX`) and frame counters.
- **Dual View Gallery**: Toggle between a fluid, hardware-accelerated **Masonry View** and a clean **Grid View**.
- **Real-Time Search & Filtering**: Instant keyword search across photo titles, tags, and camera parameters (shutter, aperture, ISO).
- **Interactive Lightbox Modal**:
  - Fullscreen view with 3-tier zoom (`1x`, `2x`, `3x` or <kbd>Z</kbd>).
  - Complete **EXIF Telemetry** panel (<kbd>I</kbd>) displaying shutter speed, aperture, ISO, focal length, Zeiss optics, camera body (Sony Xperia 5 IV), and capture timestamps.
  - Keyboard navigation (<kbd>←</kbd> / <kbd>→</kbd> / <kbd>Esc</kbd>) and mobile touch swipe gestures.
  - Filmstrip scrubber previewing neighboring frames.
- **Anti-Theft Image Shielding**:
  - Global right-click suppression on all images and frames.
  - Image drag-and-drop prevention.
  - Transparent overlay click-shields.
  - Toast warning alert on download attempts (*"Protected Frame • © Md. Raiyan Islam"*).
- **Integrated Contact Form**:
  - Powered by **FormSubmit** delivering straight to `mdraiyanislam944@proton.me`.
  - Direct quick links to Email and Instagram (`@raiyan._.clicks`).
- **Complete Cross-Platform Favicon Suite**: Vector `favicon.svg`, multi-resolution `favicon.ico` (16, 32, 48), Apple Touch Icon (`180x180`), and Web App Manifest (`site.webmanifest`).
- **Production SEO & Structured Data**: Built-in Open Graph metadata, Twitter Cards, `robots.txt`, `sitemap.xml`, and Schema.org `ImageGallery` JSON-LD.
- **Universal Device Optimization**: Notch & Dynamic Island safe-area support (`env(safe-area-inset-*)`), WCAG 2.2 touch target compliance (44x44px minimum), and responsive layouts for foldables, phones, tablets, laptops, and ultrawides.
- **High-Performance Architecture**:
  - Preloaded LCP hero image with `fetchpriority="high"`.
  - Native `loading="lazy"` and `decoding="async"` on below-the-fold images.
  - Zero Cumulative Layout Shift (CLS = 0) with reserved aspect ratios.
  - Silky 60–120fps scrolling with GPU compositor layer isolation.

---

## Directory Structure

```
photography-web/
├── css/
│   └── style.css            # Custom CSS design system, typography & animations
├── js/
│   ├── app.js               # Application logic, modals, gallery & anti-theft
│   ├── photos.js            # Auto-generated database with all 102 photographs
│   └── photosData.json      # Metadata cache (EXIF, titles, tags, orientation)
├── photos/
│   ├── display/             # Optimized WebP display images (max 1800px)
│   └── thumbs/              # Optimized WebP thumbnails (max 600px)
├── images/                  # Source image archive organized by topic
│   ├── architecture-and-structure/
│   ├── quiet-moments/
│   ├── skies-and-light/
│   ├── still-life-and-interiors/
│   ├── street-life/
│   └── urban-nature/
├── scripts/
│   ├── sync_images.py       # Python pipeline for EXIF parsing & WebP compression
│   └── generate_favicons.py # Favicon & app icon generator
├── icons/                   # High-res PWA manifest icons
├── favicon.svg              # Modern vector SVG favicon
├── favicon.ico              # Multi-size legacy favicon
├── apple-touch-icon.png     # iOS home screen bookmark icon
├── site.webmanifest         # PWA / web app manifest
├── robots.txt               # Search engine directives
├── sitemap.xml              # XML sitemap
├── index.html               # Semantic HTML5 entry point
└── README.md                # Project documentation
```

---

## How to Add New Photographs (Step-by-Step)

Adding new photos to the website is streamlined into an automated pipeline that extracts your camera's EXIF metadata, creates web-optimized WebP images, and registers the photos to the website.

### Step 1: Drop Photos into the Topic Folder
Place your raw or exported image files (`.jpg`, `.jpeg`, `.png`, or `.webp`) into the relevant collection folder inside `images/`:

- `images/skies-and-light/`
- `images/street-life/`
- `images/urban-nature/`
- `images/architecture-and-structure/`
- `images/still-life-and-interiors/`
- `images/quiet-moments/`

> **Naming Tip**: You can name your file descriptively, e.g. `monsoon_in_the_alley.jpg`. The script will automatically format this into a clean title: `"Monsoon In The Alley"`. If you leave a camera filename like `20261025_142300.jpg`, you can give it a custom title in Step 3.

---

### Step 2: Run the Metadata & Optimization Script
Open your terminal in the project directory and run:

```bash
python scripts/sync_images.py
```

**What the script does automatically**:
1. **Extracts Camera EXIF**: Reads the photo's internal metadata:
   - Shutter Speed (e.g. `1/500s`)
   - Aperture (e.g. `f/1.7`)
   - ISO Speed (e.g. `ISO 64`)
   - Focal Length (e.g. `24mm eq. Zeiss`)
   - Camera Model (e.g. `Sony Xperia 5 IV`)
   - Date and Timestamp
2. **Compresses & Generates WebP Formats**:
   - `photos/display/`: High-resolution display WebP (max 1800px width/height, 84% quality).
   - `photos/thumbs/`: Ultra-fast gallery thumbnail WebP (max 600px width/height, 75% quality).
3. **Calculates Exact Aspect Ratios**: Detects landscape, portrait, or square dimensions to guarantee zero layout shift on the website.
4. **Updates Database**: Writes the updated dataset directly to `js/photos.js` and `js/photosData.json`.

---

### Step 3: Making Photos "Website Push Worthy" (Curating Titles, Tags & Highlights)

To customize titles, add searchable tags, or feature a photo in the homepage Hero slider, open **`js/photosData.json`**.

Locate the entry for your photo by its filename. You will see an entry like this:

```json
{
  "id": "photo-103",
  "filename": "monsoon_in_the_alley.jpg",
  "displayUrl": "photos/display/monsoon_in_the_alley.webp",
  "thumbUrl": "photos/thumbs/monsoon_in_the_alley.webp",
  "blurDataUrl": "data:image/webp;base64,...",
  "width": 4032,
  "height": 2688,
  "aspectRatio": 1.5,
  "orientation": "landscape",
  "title": "Monsoon In The Alley",
  "collection": "street-life",
  "tags": ["street life"],
  "featured": false,
  "camera": {
    "model": "Sony Xperia 5 IV (SO-54C)",
    "lens": "Zeiss Vario-Tessar T*",
    "shutter": "1/500s",
    "aperture": "f/1.7",
    "iso": "ISO 64",
    "focalLength": "24.0mm (Zeiss)",
    "date": "2026-10-25 14:23:00"
  }
}
```

You can customize the following fields:

| Field | Purpose | Example |
| :--- | :--- | :--- |
| `"title"` | The visible editorial title displayed on cards and in the Lightbox. | `"The Silent Commute"` |
| `"tags"` | Keywords that visitors can search in the gallery search bar. | `["rain", "monsoon", "umbrella", "candid"]` |
| `"featured"` | Set to `true` to showcase this photo in the **Hero Carousel** at the top of the homepage. | `true` |
| `"collection"` | If you ever want to re-categorize the photo to a different chapter. | `"quiet-moments"` |

> **Important**: After editing `js/photosData.json`, run `python scripts/sync_images.py` once more. The script will preserve your custom titles, tags, and featured flags while updating `js/photos.js`.

---

### Step 4: Preview Locally

Test your changes in the browser before pushing live:

- **Option A (Instant)**: Double-click [index.html](file:///c:/Code/photography-web/index.html) to open in Chrome, Edge, Safari, or Firefox.
- **Option B (Local Web Server)**:
  ```bash
  python -m http.server 3000
  ```
  Visit [http://localhost:3000/](http://localhost:3000/) to verify your new photographs, lightbox EXIF data, search tags, and layout.

---

### Step 5: Push to Production

Once you are satisfied with your photos and metadata, push the changes to GitHub:

```bash
git add .
git commit -m "Add new photographs to street-life collection"
git push origin main
```

Because **Light & Dust** is built with zero build steps and pure static assets, your hosting provider (**GitHub Pages**, **Cloudflare Pages**, **Netlify**, or **Vercel**) will deploy the update live in seconds.

---

### Removing or Moving Photographs

- **To remove a photo**: Delete the image file from `images/<collection>/` and run `python scripts/sync_images.py`. The script will automatically delete the corresponding WebP display and thumbnail files from `photos/` and remove it from the database.
- **To move a photo**: Move the file from one folder inside `images/` to another (e.g. from `street-life` to `urban-nature`) and run `python scripts/sync_images.py`. It will update the collection assignment automatically.

---

## Copyright & License

All photographs published on **Light & Dust** are the exclusive artistic, creative, and intellectual property of **Md. Raiyan Islam**.

- **All Rights Reserved — Display Only**.
- No photograph may be downloaded, scraped, reproduced, distributed, exhibited, or ingested into machine learning / AI datasets without prior written authorization.
- For print inquiries or commercial licensing permissions, contact via the website form or email: [mdraiyanislam944@proton.me](mailto:mdraiyanislam944@proton.me).
