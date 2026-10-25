// Light & Dust — Photographic Database
// Synchronized from images/ topic folders
(function() {
  const COLLECTIONS = [
  {
    "id": "skies-and-light",
    "title": "Skies & Light",
    "coverPhotoId": "photo-042"
  },
  {
    "id": "street-life",
    "title": "Street Life",
    "coverPhotoId": "photo-078"
  },
  {
    "id": "urban-nature",
    "title": "Urban Nature",
    "coverPhotoId": "photo-100"
  },
  {
    "id": "architecture-and-structure",
    "title": "Architecture & Structure",
    "coverPhotoId": "photo-013"
  },
  {
    "id": "still-life-and-interiors",
    "title": "Still Life & Interiors",
    "coverPhotoId": "photo-069"
  },
  {
    "id": "quiet-moments",
    "title": "Quiet Moments",
    "coverPhotoId": "photo-029"
  }
];
  const PHOTOS = [
  {
    "id": "photo-001",
    "filename": "brick-arch-cantilever.jpg",
    "displayUrl": "photos/display/brick-arch-cantilever.webp",
    "thumbUrl": "photos/thumbs/brick-arch-cantilever.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpwAAABXRUJQVlA4IJAAAACQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JYwC7L1yBfJmrEfvj3bpEfimACAAA/SZaVmq1aPcgRObKHbk9lSEiLquMVHWr7FXGJD/s+BYF9JzZrSAZ6PIZ5n0QlBTCkx3f0TpWQ9SOGL5fkQsfNlpsVhePv30ZbiV6uk6Klr6OkPaSS/jxS/004L4HM4AAAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Brick Arch & Cantilever",
    "collection": "architecture-and-structure",
    "tags": [
      "brickwork",
      "modernism",
      "arches",
      "architecture"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/160s",
      "aperture": "f/2.4",
      "iso": "ISO 320",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-10-21 16:19:09"
    }
  },
  {
    "id": "photo-002",
    "filename": "gulistan-pedestrian-span.jpg",
    "displayUrl": "photos/display/gulistan-pedestrian-span.webp",
    "thumbUrl": "photos/thumbs/gulistan-pedestrian-span.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpwAAABXRUJQVlA4IJAAAADQAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JYwC/P3gAiC+cGZroknAA3mbHOGvBRG+GUrq9ulvo/U5xXKM3lZH+dnvk6I1OZZdNA4rRLk6/WBRucVra46cagTO3VpZbysXm3Mz9Zp0QOqJGxgRxcKlFPlyJpCTcdG4S/8UL2XnNC393htez7wquEFIttJkM4AA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Gulistan Pedestrian Span",
    "collection": "architecture-and-structure",
    "tags": [
      "overpass",
      "commuters",
      "urban-fabric",
      "steel"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/20s",
      "aperture": "f/2.4",
      "iso": "ISO 40",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-08-23 18:09:31"
    }
  },
  {
    "id": "photo-003",
    "filename": "lattice-signal.jpg",
    "displayUrl": "photos/display/lattice-signal.webp",
    "thumbUrl": "photos/thumbs/lattice-signal.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAADwAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JYgCdMoABXieMt7uuDC8AAP0SnigYExWHpdk05/gH9QnMTo22EoSkUfdyWHYUf4kgilq+j8QzRh2A+IPvihtGGHuxqtJN8q7uj8Juab1k9AAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Lattice & Signal",
    "collection": "architecture-and-structure",
    "tags": [
      "antenna",
      "communications",
      "industrial",
      "steel"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/320s",
      "aperture": "f/2.4",
      "iso": "ISO 160",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-09-30 17:37:22"
    }
  },
  {
    "id": "photo-004",
    "filename": "minaret-in-the-sun.jpg",
    "displayUrl": "photos/display/minaret-in-the-sun.webp",
    "thumbUrl": "photos/thumbs/minaret-in-the-sun.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAABQBACdASoYABAAPu1kqk4ppaQiMAgBMB2JQBUehF2K+ozWeentwnE4dvEAAPtwCFnDTFQCgTr3tG5v8cMu5J2HWDPLwI9cx17qAGACprbl96iKFo8+C/G+mfiYj4p3gV+E3sInlHfSDghLJd6XoxCAmZM3zp3jH+vVHlcUEA4K450lxRAAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Minaret in the Sun",
    "collection": "architecture-and-structure",
    "tags": [
      "mosque",
      "minaret",
      "golden",
      "architecture"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/8000s",
      "aperture": "f/2.2",
      "iso": "ISO 320",
      "focalLength": "2.7mm (Zeiss)",
      "date": "2026-10-15 14:51:48"
    }
  },
  {
    "id": "photo-005",
    "filename": "mughal-arches-in-amber.jpg",
    "displayUrl": "photos/display/mughal-arches-in-amber.webp",
    "thumbUrl": "photos/thumbs/mughal-arches-in-amber.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAAAQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JZgCdAB4mlMhm+O/UVyyAAAD+J7gbhunJtoG65IF75tyvRbQX6MsF/D5wBD854t2bFQR131vxSSLZIqG/K54lAq5Lj6FHdPAP+YIPhVy8YgEUBgQYpaLWkHaxeK1O4/ijQpUNd+ZsAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Mughal Arches in Amber",
    "collection": "architecture-and-structure",
    "tags": [
      "mughal",
      "arches",
      "brick",
      "heritage"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/3200s",
      "aperture": "f/2.4",
      "iso": "ISO 320",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-10-15 14:50:17"
    }
  },
  {
    "id": "photo-006",
    "filename": "night-watch-gantry.jpg",
    "displayUrl": "photos/display/night-watch-gantry.webp",
    "thumbUrl": "photos/thumbs/night-watch-gantry.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAABQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JZwDCgCHvaKaOuzVpiFtZKI4AAPvdn3hWft+2YQnas+mOWblAA54XlYvRbTZ9jlFSV8XEt4WDzh2LA8oalgbGFg0UKHjZfIWNyteB5/jKO1dDjFknwwaESZz6oinM+nOF0WBXknfvbyp/sZgAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Night Watch Gantry",
    "collection": "architecture-and-structure",
    "tags": [
      "industrial",
      "steel",
      "angular",
      "twilight"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/100s",
      "aperture": "f/2.4",
      "iso": "ISO 200",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-06-09 18:35:57"
    }
  },
  {
    "id": "photo-007",
    "filename": "paper-flight-in-glass.jpg",
    "displayUrl": "photos/display/paper-flight-in-glass.webp",
    "thumbUrl": "photos/thumbs/paper-flight-in-glass.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAADQAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JYgCdAB9BNDjMuMr+HIAA/uYBdJ78u+hCY+TenutKT+NeFwRU1Skh9UMIdVYjowbryjdIZpsMIm8yHMR7xy1PpI/fKvnKKmzvlTVsKxdbPM66+9QXbUspzkQHlhnUN8QAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Paper Flight in Glass",
    "collection": "architecture-and-structure",
    "tags": [
      "modern",
      "atrium",
      "sculpture",
      "interior-architecture"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/3200s",
      "aperture": "f/1.7",
      "iso": "ISO 1000",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-09-12 12:14:04"
    }
  },
  {
    "id": "photo-008",
    "filename": "staircase-to-the-lake.jpg",
    "displayUrl": "photos/display/staircase-to-the-lake.webp",
    "thumbUrl": "photos/thumbs/staircase-to-the-lake.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAAAwBACdASoYABAAPu1iqU2ppaQiMAgBMB2JYgC06CFc25LIsXwoAQEOWJAA/sAiehpBDBOrC7wEuSRoMEVOpTB0+o4rYQWY1ofnjdbbO+uSM3ju0r9UOaGSUTvwt1IR2RP/uBPs0rdPWwYd75ArMQdlKN+ZoVUAAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Staircase to the Lake",
    "collection": "architecture-and-structure",
    "tags": [
      "staircase",
      "pier",
      "lake",
      "steel"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/250s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 16:32:30"
    }
  },
  {
    "id": "photo-009",
    "filename": "the-living-highrise.jpg",
    "displayUrl": "photos/display/the-living-highrise.webp",
    "thumbUrl": "photos/thumbs/the-living-highrise.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpwAAABXRUJQVlA4IJAAAAAQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JZACsACBoOdwfez9gSOATAADMUMO0LAoubpe/SBtmPEUjotZDI1LbyG6WyGe37JJbYpNoxrAa36Kz29YheX587nPC09SKX++vzPSIa3JMyiRgTIaSiK+cRIs0xFTTms6Ihwupe9/2d24rnG30f0qvBPakaKIDAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Living Highrise",
    "collection": "architecture-and-structure",
    "tags": [
      "architecture",
      "biophilic",
      "cityscape",
      "trees"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/1600s",
      "aperture": "f/2.2",
      "iso": "ISO 320",
      "focalLength": "2.7mm (Zeiss)",
      "date": "2026-10-15 14:57:04"
    }
  },
  {
    "id": "photo-010",
    "filename": "the-silent-cloister.jpg",
    "displayUrl": "photos/display/the-silent-cloister.webp",
    "thumbUrl": "photos/thumbs/the-silent-cloister.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAACQAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JQBOgAqusLQe5bm0wAP6USk0WLlMseAc2L3wMXYLvuw67scpI0yZwfg0Ds52loGhZzakeIaHKXXs1VudT9PbmUAoKfAXWB0RibnIBN04zidTOT3fB3CKdDrCosWRzwRQT3A0cAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Silent Cloister",
    "collection": "architecture-and-structure",
    "tags": [
      "heritage",
      "arcade",
      "historic",
      "panorama"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/8000s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 14:50:44"
    }
  },
  {
    "id": "photo-011",
    "filename": "the-stone-guardian.jpg",
    "displayUrl": "photos/display/the-stone-guardian.webp",
    "thumbUrl": "photos/thumbs/the-stone-guardian.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAADwAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JYgC/WMgDAO44ed/zZGOgAP70KHn2uVt3odDnjc1Yj4oE85KLx7sJn+8T86QuD5UkorwH4bIPvIBQPHG2kG+MZwaanqir/JRbsmTBd20AAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Stone Guardian",
    "collection": "architecture-and-structure",
    "tags": [
      "sculpture",
      "stone",
      "heritage",
      "monument"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/2000s",
      "aperture": "f/2.2",
      "iso": "ISO 320",
      "focalLength": "2.7mm (Zeiss)",
      "date": "2026-10-15 14:31:27"
    }
  },
  {
    "id": "photo-012",
    "filename": "the-vertical-chasm.jpg",
    "displayUrl": "photos/display/the-vertical-chasm.webp",
    "thumbUrl": "photos/thumbs/the-vertical-chasm.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRqQAAABXRUJQVlA4IJgAAACQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbAC7GuAAQGLBsJyDe/78VTFDtDAA/vEV78uwCCt+lXlTSmp8UpUNLEgX9agswkCuzmOy47863FX/tSlLS8nDtiE6vNX/JzEoRULcu9bmsoMbeH84CXvO5qlFvXtFePYmzHP4XyyPsiNSTfEaH2v6KTb5HPkd11hHZqpxMAAAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Vertical Chasm",
    "collection": "architecture-and-structure",
    "tags": [
      "skyscrapers",
      "perspective",
      "geometry",
      "glass"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/640s",
      "aperture": "f/2.2",
      "iso": "ISO 64",
      "focalLength": "2.7mm (Zeiss)",
      "date": "2026-09-12 16:41:02"
    }
  },
  {
    "id": "photo-013",
    "filename": "timber-slats-jungle.jpg",
    "displayUrl": "photos/display/timber-slats-jungle.webp",
    "thumbUrl": "photos/thumbs/timber-slats-jungle.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAADwAwCdASoYABAAPu1kqU2ppaOiMAgBMB2JQBWGUABnRqj3N+EyIdaQAP7o2zK37hLp8pEhVBDQcm+4jksrXTDYkmXELIF73Au6ned0Jc9SctiuA753RLvExewkK/d4MUCHxIdxkBx+QLfSU/9ZBnSwAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Timber Slats & Jungle",
    "collection": "architecture-and-structure",
    "tags": [
      "modernist",
      "timber",
      "louvers",
      "nature-architecture"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/3200s",
      "aperture": "f/1.7",
      "iso": "ISO 1600",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 14:11:20"
    }
  },
  {
    "id": "photo-014",
    "filename": "under-the-overpass.jpg",
    "displayUrl": "photos/display/under-the-overpass.webp",
    "thumbUrl": "photos/thumbs/under-the-overpass.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAABQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JQBOgVf4Xf6rjUv4t80gk973QAP1L7EXV1o/pppMf7YKI3eFslZECW0ZzSVvIraB2ClDbSZLHRdc4bL75EYcjGK0wBO6cOqwNhpfJsIsnp5/tbCFCrf9zLL7FuHAZLXR+q0YOJ2n6RcrEC/AAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Under the Overpass",
    "collection": "architecture-and-structure",
    "tags": [
      "steel",
      "truss",
      "bridge",
      "geometry"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/160s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 16:03:08"
    }
  },
  {
    "id": "photo-015",
    "filename": "wings-of-steel.jpg",
    "displayUrl": "photos/display/wings-of-steel.webp",
    "thumbUrl": "photos/thumbs/wings-of-steel.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAABQBACdASoYABAAPu1iqk2ppaQiMAgBMB2JYgCdACPaqP/H8Vp//h/NOnAAAP7um35Datzvtk7ZOZ8L8r5lrhaa2UMJEdeQL9kiw9uYGuaduncx/tzJAD1URmzQDXM8KJacWdd/hKQMVauJCA4u9r065OLaaCEi+vy4AA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Wings of Steel",
    "collection": "architecture-and-structure",
    "tags": [
      "geometric",
      "modernist",
      "sculpture",
      "perspective"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/1600s",
      "aperture": "f/2.4",
      "iso": "ISO 1000",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-09-12 12:14:19"
    }
  },
  {
    "id": "photo-016",
    "filename": "bark-burl.jpg",
    "displayUrl": "photos/display/bark-burl.webp",
    "thumbUrl": "photos/thumbs/bark-burl.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAABwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JYgCdAYwc5f3hBHYbiXfdU0yKAAD+4wMgZu+8U8VMCcH9PXhpXCboSM1PkFCkb2Y+hsMsFENuaT8ACLKN+koAeT5jwRh/GrewILvvHz1tzc5vBT8YVFtajuCkLMKBnUDTTiZHDEn8qBDeYwk8QjgmJ2QoAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Bark & Burl",
    "collection": "quiet-moments",
    "tags": [
      "texture",
      "macro",
      "bark",
      "wood"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/100s",
      "aperture": "f/2.2",
      "iso": "ISO 320",
      "focalLength": "2.7mm (Zeiss)",
      "date": "2026-10-21 16:27:11"
    }
  },
  {
    "id": "photo-017",
    "filename": "cadence-on-copper.jpg",
    "displayUrl": "photos/display/cadence-on-copper.webp",
    "thumbUrl": "photos/thumbs/cadence-on-copper.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADwAwCdASoYABAAPu1kq04ppaQiMAgBMB2JYwCdACHfx258k0Bs9XEAAP7ZB9U8uqk1Pt88kxoEz4Wq3eoqDIVU+faCI8i21OPqgQtLZjt+JQAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Cadence on Copper",
    "collection": "quiet-moments",
    "tags": [
      "cables",
      "solitude",
      "minimalist",
      "twilight"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/3200s",
      "aperture": "f/2.4",
      "iso": "ISO 800",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-08-24 18:00:36"
    }
  },
  {
    "id": "photo-018",
    "filename": "golden-nap.jpg",
    "displayUrl": "photos/display/golden-nap.webp",
    "thumbUrl": "photos/thumbs/golden-nap.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAAAwBACdASoYAA4APu1iqU2ppaOiMAgBMB2JYgCdMoADAS1N6KA4/AK1RaAA/uzZQZ2rCEYxiEn3054ibFGyLro1OVvdkUWXNT4R+/1jZzo2hW3eKhN3gJGIfa7SfIZfwLmV85oHRyBmXqTk34kQY3ascUesCoAA",
    "width": 3444,
    "height": 2058,
    "aspectRatio": 1.673,
    "orientation": "landscape",
    "title": "Golden Nap",
    "collection": "quiet-moments",
    "tags": [
      "dog",
      "animal",
      "peaceful",
      "solitude"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/25s",
      "aperture": "f/2.4",
      "iso": "ISO 320",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-10-21 16:20:05"
    }
  },
  {
    "id": "photo-019",
    "filename": "golden-water-haze.jpg",
    "displayUrl": "photos/display/golden-water-haze.webp",
    "thumbUrl": "photos/thumbs/golden-water-haze.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAABQBACdASoYABAAPu1mq04ppaQiMAgBMB2JagCdACLvcCyZlb5dBovFE2EAAP7lLJMfi6BcZXziUWYgYxximMZ7oD0tMlNfwj8bxvEricS+vm6XjDOxHpAHW91SPHMHxQan3i0gH9+x0t3kAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Golden Water Haze",
    "collection": "quiet-moments",
    "tags": [
      "water",
      "minimalist",
      "ripples",
      "golden-hour"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/800s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 16:36:13"
    }
  },
  {
    "id": "photo-020",
    "filename": "guardian-of-the-roots.jpg",
    "displayUrl": "photos/display/guardian-of-the-roots.webp",
    "thumbUrl": "photos/thumbs/guardian-of-the-roots.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAABQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdL1yBysPezgX+LpLa6/O0AP7vY08FOH2ftTab6xVqtERx+MPjzgljsgk8JGjLXC6/SwpEf1tWNYLMHGfpeqGn46z9Pl8ETXsy2LBtMEdDHEtVn6ym46TaglXWGBbCpMhM3ZeZuqVPVBvgAA==",
    "width": 3395,
    "height": 2245,
    "aspectRatio": 1.512,
    "orientation": "landscape",
    "title": "Guardian of the Roots",
    "collection": "quiet-moments",
    "tags": [
      "dog",
      "banyan",
      "guardian",
      "quiet"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/60s",
      "aperture": "f/2.4",
      "iso": "ISO 320",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-10-21 16:20:58"
    }
  },
  {
    "id": "photo-021",
    "filename": "liquid-silk.jpg",
    "displayUrl": "photos/display/liquid-silk.webp",
    "thumbUrl": "photos/thumbs/liquid-silk.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAACwAwCdASoYAA4APu1iqU2ppaQiMAgBMB2JQBWAA0TQzJUifpTJgAD+6/6KNrveuPSeR3J1swCK2db1pimT+wdSyyyjIHhiAUIAAA==",
    "width": 4032,
    "height": 2268,
    "aspectRatio": 1.778,
    "orientation": "landscape",
    "title": "Liquid Silk",
    "collection": "quiet-moments",
    "tags": [
      "water",
      "texture",
      "emerald",
      "minimalist"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/1000s",
      "aperture": "f/2.4",
      "iso": "ISO 1250",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-08-13 17:56:38"
    }
  },
  {
    "id": "photo-022",
    "filename": "pavement-slumber.jpg",
    "displayUrl": "photos/display/pavement-slumber.webp",
    "thumbUrl": "photos/thumbs/pavement-slumber.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAACQBACdASoYAA8APu1iqU2ppaOiMAgBMB2JZgCdMoADDVowpdfpeVHtfVRAzoAA/vF0MdjNWDg7nok/tX8NtDXEMNzPMftXhrOfwOxNe3zvwcYwjiI/qwBfbEmD2DkdWy5X5gZ8/zdF7XGVXvfs7yrXzxncdCzPfXmDJ7so+c15+ApdbCTKnsejZ9XruCFzZcRgiSDaYAA=",
    "width": 3207,
    "height": 2006,
    "aspectRatio": 1.599,
    "orientation": "landscape",
    "title": "Pavement Slumber",
    "collection": "quiet-moments",
    "tags": [
      "dog",
      "street-animal",
      "peace",
      "candid"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/125s",
      "aperture": "f/2.4",
      "iso": "ISO 320",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-10-21 16:20:54"
    }
  },
  {
    "id": "photo-023",
    "filename": "perimeter-rust.jpg",
    "displayUrl": "photos/display/perimeter-rust.webp",
    "thumbUrl": "photos/thumbs/perimeter-rust.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAACQAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JaQAASk/rAoUEBngAAPwRAPTFiyfsjH0lU12aq3G8hedmZ16QWQz2PsA/JiCww8cfkhBfAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Perimeter & Rust",
    "collection": "quiet-moments",
    "tags": [
      "monochrome",
      "texture",
      "minimalist",
      "industrial"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/50s",
      "aperture": "f/1.7",
      "iso": "ISO 200",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-06-08 17:54:31"
    }
  },
  {
    "id": "photo-024",
    "filename": "sentinel-on-the-parapet.jpg",
    "displayUrl": "photos/display/sentinel-on-the-parapet.webp",
    "thumbUrl": "photos/thumbs/sentinel-on-the-parapet.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAACwAwCdASoYAA4APu1iqU2ppaOiMAgBMB2JaQABHtPykFdE21uugAD+9aP8tDb+7ytRpm7E1TMf+9kxZ3tkl5KoDTgms/3v2/52jFJQTDb7oyO4+lTt3t8CWgT67dm+PtCTBiSUfLupAs6I3R2Rn2AA",
    "width": 4032,
    "height": 2268,
    "aspectRatio": 1.778,
    "orientation": "landscape",
    "title": "Sentinel on the Parapet",
    "collection": "quiet-moments",
    "tags": [
      "monochrome",
      "silhouette",
      "contemplative",
      "skyline"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/40000s",
      "aperture": "f/2.4",
      "iso": "ISO 1250",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-07-30 14:58:13"
    }
  },
  {
    "id": "photo-025",
    "filename": "tangle-of-wire-branch.jpg",
    "displayUrl": "photos/display/tangle-of-wire-branch.webp",
    "thumbUrl": "photos/thumbs/tangle-of-wire-branch.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JQBdgBFEjrCE1LPJd+IBgMuAA/twsgg4ktvkgis+hbu57/cA1/mJERd3dOqVXvp138UaqGdLBwx0T/M8MkOMrW1wAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Tangle of Wire & Branch",
    "collection": "quiet-moments",
    "tags": [
      "silhouette",
      "cables",
      "branches",
      "texture"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/250s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 16:01:49"
    }
  },
  {
    "id": "photo-026",
    "filename": "the-lone-sentinel.jpg",
    "displayUrl": "photos/display/the-lone-sentinel.webp",
    "thumbUrl": "photos/thumbs/the-lone-sentinel.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAAAQBACdASoYAA4APu1mqk4ppaOiMAgBMB2JYwABJNdXawlqFLUIwcnNwADOGmPIX1Xsqw2xfDfjMW1IWiAW8CENP8LKQbZduUTLUq/JO/cd3/H1ZBDk+nSnAKeTYZNgT6dSseS+feWz4TA7q+DRgAAA",
    "width": 4032,
    "height": 2268,
    "aspectRatio": 1.778,
    "orientation": "landscape",
    "title": "The Lone Sentinel",
    "collection": "quiet-moments",
    "tags": [
      "bird",
      "minimalist",
      "haze",
      "solitude"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/40000s",
      "aperture": "f/2.4",
      "iso": "ISO 1600",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-08-21 13:51:15"
    }
  },
  {
    "id": "photo-027",
    "filename": "the-slumbering-stray.jpg",
    "displayUrl": "photos/display/the-slumbering-stray.webp",
    "thumbUrl": "photos/thumbs/the-slumbering-stray.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAAAQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JYwCo9BerRcghXvXAsDahwAD+zYSAYk3jtMDNk2yqw8o4BCDu3ivemOi9d98DKq1vl2Hft/nIHS+B863B9q2BuePuZzexCMJ6mfUIk50evIoBKznwVPZfOwgCg+e+24prWqaNub4AV+IuWAHxoZwAAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Slumbering Stray",
    "collection": "quiet-moments",
    "tags": [
      "cat",
      "sleeping",
      "candid",
      "gentle"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/60s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 16:34:57"
    }
  },
  {
    "id": "photo-028",
    "filename": "withered-bouquet.jpg",
    "displayUrl": "photos/display/withered-bouquet.webp",
    "thumbUrl": "photos/thumbs/withered-bouquet.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAACQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JQBOmUABSJk2E4UPsU27t9ddAVmAA9kOtdMQBe8+5h8M5IlwauTohu3efZbinZUGGQo9s/JHOpJQWUbNYrM/fd9i0QaZtr9og1/4hmY1PPL3vv3SbE5ExVFCuSa31PrULmqRdIg5zGgzEawViAQd8QPzX1AAA",
    "width": 3445,
    "height": 2297,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Withered Bouquet",
    "collection": "quiet-moments",
    "tags": [
      "dried-flowers",
      "nostalgia",
      "still-life",
      "quiet"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/2000s",
      "aperture": "f/1.7",
      "iso": "ISO 1600",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 14:19:44"
    }
  },
  {
    "id": "photo-029",
    "filename": "yellow-truck-solitude.jpg",
    "displayUrl": "photos/display/yellow-truck-solitude.webp",
    "thumbUrl": "photos/thumbs/yellow-truck-solitude.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAAAwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JZACdMoACtXQTatSTgP5LLAAA/uy+dhl12Zg2vUw0MCnnCKLk3NO0g1tDnYHGFpKHzJ+OdIghFsZUPp3OpYHf3dxeaebsqzH3hkyH2zpyK6/G147XnLz+Uv9Brc+eTbFqHV0Q+iaV+Ka/IQPMkr8QdRSgAAAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Yellow Truck & Solitude",
    "collection": "quiet-moments",
    "tags": [
      "color-contrast",
      "solitude",
      "rest",
      "city-life"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/125s",
      "aperture": "f/2.4",
      "iso": "ISO 40",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-09-21 15:23:40"
    }
  },
  {
    "id": "photo-030",
    "filename": "amber-reflections-at-sunset.jpg",
    "displayUrl": "photos/display/amber-reflections-at-sunset.webp",
    "thumbUrl": "photos/thumbs/amber-reflections-at-sunset.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAABQBACdASoYABAAPu1iqk2ppaQiMAgBMB2JbACdMoACtA444hz/5DWO2iAAAP7pHjkLlLzESJoJDbH6AXOXtByf7LxYdaAlIxroSKutOYjx79QmTa1w7SZJtFcre5zieYyw/c7nPsmhIm9fwlaGu0Ak1io+q8XsHUsjzbLQgsPLzemuqJMvxO1X5gAAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Amber Reflections at Sunset",
    "collection": "skies-and-light",
    "tags": [
      "golden-hour",
      "lake",
      "sunset",
      "atmospheric"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/10000s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 16:36:40"
    }
  },
  {
    "id": "photo-031",
    "filename": "anvil-at-17-46.jpg",
    "displayUrl": "photos/display/anvil-at-17-46.webp",
    "thumbUrl": "photos/thumbs/anvil-at-17-46.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAQBACdASoYAA4APu1krU2ppaSiMAgBMB2JQBdmUABoxjIT/eVrGzUQwAD+fJ8dPKIADWVetnC4TWYMDb/Z35f5VVb5R4Ld7kNC46jHRdyn8J5uBx5UHKS1FKxniKOAAAA=",
    "width": 4032,
    "height": 2268,
    "aspectRatio": 1.778,
    "orientation": "landscape",
    "title": "Anvil at 17:46",
    "collection": "skies-and-light",
    "tags": [
      "golden-hour",
      "clouds",
      "monumental",
      "sunset"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/4000s",
      "aperture": "f/2.4",
      "iso": "ISO 200",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-08-19 17:46:37"
    }
  },
  {
    "id": "photo-032",
    "filename": "crescent-over-the-gantry.jpg",
    "displayUrl": "photos/display/crescent-over-the-gantry.webp",
    "thumbUrl": "photos/thumbs/crescent-over-the-gantry.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADwAwCdASoYABAAPu1iqU2ppaQiMAgBMB2JZgCdMoADTqGywWYZpVgAAP7LroQFNaoqThGm8VLVJ/LCJ7uKsf6bli3UQw6ziI9vEI4rSgdfYw0vRX35+JTIgAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Crescent Over the Gantry",
    "collection": "skies-and-light",
    "tags": [
      "moon",
      "twilight",
      "steel",
      "minimalist"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/500s",
      "aperture": "f/2.4",
      "iso": "ISO 40",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-08-23 18:10:38"
    }
  },
  {
    "id": "photo-033",
    "filename": "dusk-gradient.jpg",
    "displayUrl": "photos/display/dusk-gradient.webp",
    "thumbUrl": "photos/thumbs/dusk-gradient.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAAAwBACdASoYABAAPu1orU2ppqSiMAgBMB2JYgC7ACHhmKXJPoZ2WEtokNAA/vDTYeizDYKwV3R94qhZn5LRMK5206r7edP6lknsnLe3+uOdE8gwWgSGMGQA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Dusk Gradient",
    "collection": "skies-and-light",
    "tags": [
      "gradient",
      "twilight",
      "dusk",
      "minimalist"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/1000s",
      "aperture": "f/2.2",
      "iso": "ISO 160",
      "focalLength": "2.7mm (Zeiss)",
      "date": "2026-09-30 17:37:41"
    }
  },
  {
    "id": "photo-034",
    "filename": "ember-on-the-horizon.jpg",
    "displayUrl": "photos/display/ember-on-the-horizon.webp",
    "thumbUrl": "photos/thumbs/ember-on-the-horizon.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAACwAwCdASoYABAAPu1iqk2ppaQiMAgBMB2JagCdABue4AAAH4vSQAD+6/6GDPXHZo3MCMkjSrzGiwfoj7VoYxtCmBj++2TDkzcrgAAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Ember on the Horizon",
    "collection": "skies-and-light",
    "tags": [
      "sunset",
      "crimson",
      "rebar",
      "silhouette"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/1000s",
      "aperture": "f/2.4",
      "iso": "ISO 160",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-09-30 17:35:18"
    }
  },
  {
    "id": "photo-035",
    "filename": "flaming-cirrus.jpg",
    "displayUrl": "photos/display/flaming-cirrus.webp",
    "thumbUrl": "photos/thumbs/flaming-cirrus.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAAAQBACdASoYABAAPu1kqk4ppaQiMAgBMB2JbACdAB4kHYyi7LCclMXh4AD+8N+l8bAbzeSgUIojBFicnXCLw9PzJXeMi90V/xnsKpJxhmiY3EfKhubOdGQwAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Flaming Cirrus",
    "collection": "skies-and-light",
    "tags": [
      "magenta",
      "sunset",
      "abstract",
      "ethereal"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/200s",
      "aperture": "f/1.7",
      "iso": "ISO 160",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-09-30 17:53:28"
    }
  },
  {
    "id": "photo-036",
    "filename": "mackerel-sky.jpg",
    "displayUrl": "photos/display/mackerel-sky.webp",
    "thumbUrl": "photos/thumbs/mackerel-sky.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAACQAwCdASoYABAAPu1krU6ppaSiMAgBMB2JZwAAXntOmEPyPKl4APicqIqpgQQLkmOJqm1fqAgc5MD9IKCdfXlUUm15prZufPcD9GPebAgAAA==",
    "width": 3365,
    "height": 2242,
    "aspectRatio": 1.501,
    "orientation": "landscape",
    "title": "Mackerel Sky",
    "collection": "skies-and-light",
    "tags": [
      "mackerel-sky",
      "clouds",
      "twilight",
      "patterns"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/2500s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 17:05:07"
    }
  },
  {
    "id": "photo-037",
    "filename": "monolith-cloud.jpg",
    "displayUrl": "photos/display/monolith-cloud.webp",
    "thumbUrl": "photos/thumbs/monolith-cloud.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRqYAAABXRUJQVlA4IJoAAAAQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdAB6u/HmoiuJ7hWQ8OAD+8ZqgwVDjZ2qKPjGM3vRJ7nrrdDOybM6bHnIyIZaoQAGbwlhUvJEDcGfJGOrhuV0e419FzKSoDpw9SIueJJuKxl+FwzWqZLnx3E8HYjJruFUfloNIYme/6Hk9pDwwMP/p1cu1wRdv+ZX8C9OvAAAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Monolith Cloud",
    "collection": "skies-and-light",
    "tags": [
      "clouds",
      "blue-sky",
      "expressway",
      "monumental"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/8000s",
      "aperture": "f/2.4",
      "iso": "ISO 160",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-09-21 15:25:33"
    }
  },
  {
    "id": "photo-038",
    "filename": "rooftop-canyon-sunset.jpg",
    "displayUrl": "photos/display/rooftop-canyon-sunset.webp",
    "thumbUrl": "photos/thumbs/rooftop-canyon-sunset.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAABwAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JYwC7ABjSD9oE2AAA/vQyoPHB9b64TS6ms/L+mUcRltCBpEG/OnMtegb9o5XEudxO+M/uSrrwrbY4Hrj2yxKFxAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Rooftop Canyon Sunset",
    "collection": "skies-and-light",
    "tags": [
      "urban-canyon",
      "sunset",
      "silhouette",
      "clouds"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/500s",
      "aperture": "f/2.4",
      "iso": "ISO 64",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-08-23 18:18:34"
    }
  },
  {
    "id": "photo-039",
    "filename": "solar-corona-over-concrete.jpg",
    "displayUrl": "photos/display/solar-corona-over-concrete.webp",
    "thumbUrl": "photos/thumbs/solar-corona-over-concrete.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADQAwCdASoYAA4APu1kqk4ppaQiMAgBMB2JZQDCgBwfa3AmVp81joAA/uv+ixjYXM65c+s8BqAc/okOX1sq4iGwprbHX9F7/iN9UzAqYM9843CgCAA=",
    "width": 4032,
    "height": 2268,
    "aspectRatio": 1.778,
    "orientation": "landscape",
    "title": "Solar Corona Over Concrete",
    "collection": "skies-and-light",
    "tags": [
      "sunburst",
      "skyline",
      "high-contrast",
      "monsoon"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/16000s",
      "aperture": "f/1.7",
      "iso": "ISO 64",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-08-15 15:58:11"
    }
  },
  {
    "id": "photo-040",
    "filename": "solar-flare-through-the-canopy.jpg",
    "displayUrl": "photos/display/solar-flare-through-the-canopy.webp",
    "thumbUrl": "photos/thumbs/solar-flare-through-the-canopy.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAABwBACdASoYABIAPu1erE2ppKSiMBgMATAdiWcAAC5Snr7wadFpDGB9dsmQgAD+8NFJBfkf6CC/icfolBi5dxnMiW+m+bNJyT1CWsGBF4MNV2SVysGJqBYUyb2wWh5J70Y7cxg/YeDlE60BhlQAAA==",
    "width": 4016,
    "height": 3008,
    "aspectRatio": 1.335,
    "orientation": "landscape",
    "title": "Solar Flare Through the Canopy",
    "collection": "skies-and-light",
    "tags": [
      "silhouette",
      "sunburst",
      "canopy",
      "high-contrast"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/16000s",
      "aperture": "f/1.7",
      "iso": "ISO 64",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-08-15 16:26:12"
    }
  },
  {
    "id": "photo-041",
    "filename": "swallows-in-the-tempest.jpg",
    "displayUrl": "photos/display/swallows-in-the-tempest.webp",
    "thumbUrl": "photos/thumbs/swallows-in-the-tempest.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAQAwCdASoYAA4APu1iqU2ppaOiMAgBMB2JQAADO7jfsAAA+efUafq94Bb84sYR3tXjIHX9yfrFJud8AZ/q+0JorN3fcp14AAA=",
    "width": 4032,
    "height": 2268,
    "aspectRatio": 1.778,
    "orientation": "landscape",
    "title": "Swallows in the Tempest",
    "collection": "skies-and-light",
    "tags": [
      "clouds",
      "atmospheric",
      "birds",
      "storm"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/40000s",
      "aperture": "f/2.4",
      "iso": "ISO 1600",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-08-21 13:51:43"
    }
  },
  {
    "id": "photo-042",
    "filename": "the-burning-cloud.jpg",
    "displayUrl": "photos/display/the-burning-cloud.webp",
    "thumbUrl": "photos/thumbs/the-burning-cloud.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQBACdASoYABAAPu1kq04ppaQiMAgBMB2JbACo9CHfcg7rn38SCHJVAAD+6MV14VecyAZPniD0Kpfn2NJMfGoPOR9e+eHto9yovCQhlupOyMAyAb8lPGxM4FOV/wtuQ3nOabMAAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Burning Cloud",
    "collection": "skies-and-light",
    "tags": [
      "golden-hour",
      "clouds",
      "luminescence",
      "dramatic"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/1000s",
      "aperture": "f/2.4",
      "iso": "ISO 64",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-08-23 18:15:17"
    }
  },
  {
    "id": "photo-043",
    "filename": "alice-in-chains-jar-of-flies.jpg",
    "displayUrl": "photos/display/alice-in-chains-jar-of-flies.webp",
    "thumbUrl": "photos/thumbs/alice-in-chains-jar-of-flies.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAACQBACdASoYABAAPu1kqU2ppaOiMAgBMB2JbACdMoR3ACWZxcTqedfOUnDwsgAA/vLK3MurtCKhCzQ+zUvToJmThE4MnVaIclVXLnBewTpIo+rveOoFWd5UgErIZuinU++AODYdajNZx2WM0TkpBmbkQt6oivChcOe6fvqEVaZONlr70UDAOIAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Alice In Chains — Jar of Flies",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "grunge",
      "album-art",
      "music"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/60s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 17:01:53"
    }
  },
  {
    "id": "photo-044",
    "filename": "amy-lee-fallen.jpg",
    "displayUrl": "photos/display/amy-lee-fallen.webp",
    "thumbUrl": "photos/thumbs/amy-lee-fallen.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAAAwBACdASoYABAAPu1kqU2ppaOiMAgBMB2JaACsACHpSIw/h2PjVoELgAAA/vQiVc9KAkUs1yTb37yPxIFKPLDTuaTqZswtu9fUZtm/on2dyGKo3RWr4wRxE9Q/dcu6E+3se1JfPVKOu2W0x/EWUz9vDg+prwMv6IAAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Amy Lee — Fallen",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "portrait",
      "gothic",
      "album-cover"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/50s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 17:10:38"
    }
  },
  {
    "id": "photo-045",
    "filename": "blizzard-of-ozz.jpg",
    "displayUrl": "photos/display/blizzard-of-ozz.webp",
    "thumbUrl": "photos/thumbs/blizzard-of-ozz.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAAAQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdMoADSwJbl/jo6TnBAAD+8qT0HY6vlGjvbctr2N1amXcudfKR5NdhNWpEn5BUp7nCjNtPh8Xy8PjB1LWZh97YFR0PjoYhIaAGArgANl8lLdAvttFtw8k/XQepyM7hT9RQBlXiOYo4AAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Blizzard of Ozz",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "metal",
      "neon",
      "crate-digging"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/40s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 17:05:39"
    }
  },
  {
    "id": "photo-046",
    "filename": "glass-clay-vinyl.jpg",
    "displayUrl": "photos/display/glass-clay-vinyl.webp",
    "thumbUrl": "photos/thumbs/glass-clay-vinyl.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRsIAAABXRUJQVlA4ILYAAAAwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JaACsEf/gNly/1TYOi8J70wAA/tKgKhOvN5qcc2s3WGWnhn9yA+9UX/uRM6q9LcPAVWN5MbV++CmR4S+60RfF/O3ZToVqXncm7o5tAdTzM77A2JKPO2yrazlmrOy5OMYh4D2gYg2KuISZf1IGYsAnWTV2dvvr9wgUVhIVR/9Z7Ms59zEadwEXwOL0hQPrAueljltZNdmrWkzwQAAAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Glass, Clay & Vinyl",
    "collection": "still-life-and-interiors",
    "tags": [
      "tlr-camera",
      "terracotta",
      "vintage",
      "analog"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/30s",
      "aperture": "f/1.7",
      "iso": "ISO 800",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 18:58:20"
    }
  },
  {
    "id": "photo-047",
    "filename": "groove-stylus.jpg",
    "displayUrl": "photos/display/groove-stylus.webp",
    "thumbUrl": "photos/thumbs/groove-stylus.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRrQAAABXRUJQVlA4IKgAAAAwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JaQAD5bmkzjGEmeFJVP2VmgAA/ubRkKhrrjZg8n70PlD3jG7G169a+tUM5rdX0Cd32dbQ37OIym/UismMJSbXe2egBy31Wq3JuwDHhDKEXoGm/Nyy82q++jqT1qjVYqXXk4zd8aMZ5PXSK2DH+0QVZjLOeQlvXQoJLt7DWVw+W5cFyZXAl3Wnt3CPEHwAAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Groove & Stylus",
    "collection": "still-life-and-interiors",
    "tags": [
      "monochrome",
      "macro",
      "turntable",
      "audio"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/80s",
      "aperture": "f/1.7",
      "iso": "ISO 800",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 18:59:29"
    }
  },
  {
    "id": "photo-048",
    "filename": "images-and-words.jpg",
    "displayUrl": "photos/display/images-and-words.webp",
    "thumbUrl": "photos/thumbs/images-and-words.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAAAwBACdASoYABAAPu1mqk2ppaQiMAgBMB2JbACsACHgEAtr5lNazAW3ugAA/vQrLnKnrBFwUXio2uoEjf7gKY/blZVKlZhLx3D4tkAZMHZuVP8gaWHuydqfnzLimOaSDb0zqUd+H56GOteHmF9SW+7zczrxmDIAAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Images and Words",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "progressive",
      "record-store",
      "intimate"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/80s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 17:06:08"
    }
  },
  {
    "id": "photo-049",
    "filename": "in-utero-angel.jpg",
    "displayUrl": "photos/display/in-utero-angel.webp",
    "thumbUrl": "photos/thumbs/in-utero-angel.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRs4AAABXRUJQVlA4IMIAAADQBQCdASoYABUAPu1mqk8ppaOiKA1RMB2JbACdMoR3MKlBPj1KGzGGC3IKUHSRl/1fw2EgvpMYAP7xZZI2h/otioDd94M46tH66hoPMzsYRRcH4Qu05S1CZYAG6ypGUISPlBusY+iWasOrwh2OC6bY1D5h7TSr5lVznMVlIGRbCnCOQdq/exSZWYEW/dFAaOklQQ0SPsgLRgCv49yawlIe6CgZdL7bwCxse+dq2ociVrmbpoN6HhSdzDbiw6mRaEAAAA==",
    "width": 3077,
    "height": 2688,
    "aspectRatio": 1.145,
    "orientation": "square",
    "title": "In Utero Angel",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "nirvana",
      "warm",
      "record"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/20s",
      "aperture": "f/1.7",
      "iso": "ISO 800",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 19:00:46"
    }
  },
  {
    "id": "photo-050",
    "filename": "journey-escape.jpg",
    "displayUrl": "photos/display/journey-escape.webp",
    "thumbUrl": "photos/thumbs/journey-escape.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAAAQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdMoADSwAuh2u9zCjN4AD+9CtbNAXoTgyrhrmkw6Lrk/jZQh0Zq59tRTFQIHiGkf/0cLfiI/fzUwsSvaKRvh4o8GN6YRgr55Cp2zlsPWas1q0slvgf8mlmD53cgpxgAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Journey — Escape",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "classic-rock",
      "color",
      "music"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/60s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 17:07:59"
    }
  },
  {
    "id": "photo-051",
    "filename": "meddle-in-cyan-rust.jpg",
    "displayUrl": "photos/display/meddle-in-cyan-rust.webp",
    "thumbUrl": "photos/thumbs/meddle-in-cyan-rust.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRsQAAABXRUJQVlA4ILgAAADwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdMoHgd59uyTAMWCuS6Umh7+Mwg8AA/u7GyY6YVF+o5J/ntteCLF/XOQggFX9xHZ2Uh7D4ExL1TkjU9kScXygSkck0+aU1DYp/+C8OrHzI9BrHbY3/TbJx9aLgAJIxz647Jy9kKc/hzB6GSsTinLV2WhvwlTr6bJEkVNprmzRmN78up6yxgRHaCP8Yszt7g6OR+6XL3n+FIC/uAAAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Meddle in Cyan & Rust",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "pink-floyd",
      "artwork",
      "music"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/30s",
      "aperture": "f/1.7",
      "iso": "ISO 640",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 19:01:33"
    }
  },
  {
    "id": "photo-052",
    "filename": "nirvana-nevermind.jpg",
    "displayUrl": "photos/display/nirvana-nevermind.webp",
    "thumbUrl": "photos/thumbs/nirvana-nevermind.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRtIAAABXRUJQVlA4IMYAAABwBQCdASoYABcAPu1ur1KppiQiqAgBMB2JaACdMoHhA55UA9L53EtOLGq1xxunsQJzHfgAAP7d80K2S/CiWurfOVr2X9a6aXAbQphOoIZKEGC6gpbuNzLXQ6+jq+JV6ojHqO649E9jvRzeGqapeidVMxyt8nqmqX4XPAd0T/l+XtMmEgvyGTvlLEk4w8j3C5+f8Y1I+yAxFzI/biUpbKYECdc++5LgaOXD4zTqXRBEl0/6nW0i/9/0C4vrAYsVLHNjg0oAAAA=",
    "width": 2861,
    "height": 2688,
    "aspectRatio": 1.064,
    "orientation": "square",
    "title": "Nirvana — Nevermind",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "grunge",
      "nirvana",
      "music"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/13s",
      "aperture": "f/1.7",
      "iso": "ISO 800",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 19:00:29"
    }
  },
  {
    "id": "photo-053",
    "filename": "obscured-by-clouds.jpg",
    "displayUrl": "photos/display/obscured-by-clouds.webp",
    "thumbUrl": "photos/thumbs/obscured-by-clouds.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRsAAAABXRUJQVlA4ILQAAADwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdMoR4PoK8AAq9bkfKTmedD1NXsbAA9rfDKSV1JeG/BJFXmp6+SIbvWPMbIS2MwAUDpPsqpGsq8Lsr2jvFtBV1U5S3BeHY0/kcdiVU03DBSSg+2jke1S04anvC7hZ9nWEQpMJsp7rokHgIEYGjhQdyAtFm7rZjLEfGTrfid8lDAfk5W47MyLHIGjOK3YCvV61hdZfvLJk7tAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Obscured by Clouds",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "pink-floyd",
      "bokeh",
      "listening"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/20s",
      "aperture": "f/1.7",
      "iso": "ISO 800",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 19:01:10"
    }
  },
  {
    "id": "photo-054",
    "filename": "parasomnia.jpg",
    "displayUrl": "photos/display/parasomnia.webp",
    "thumbUrl": "photos/thumbs/parasomnia.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAABQBACdASoYABAAPu1iqk2ppaQiMAgBMB2JagCdMoADT7S9E6eoJHqrZgYAAP7ypE+fkasNVLuu97dGCm6wtcvrUh0zaiCP21MvTwx4dtzTxTX1QWQV3+O3nSs+CxBAUr52egOXYa8M4+WSd5qlr3H8CEEzw/PhH4nbbgN7eFaDz3+hxZ/VCFMAAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Parasomnia",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "album-art",
      "dark",
      "atmospheric"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/40s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 17:06:28"
    }
  },
  {
    "id": "photo-055",
    "filename": "pearl-jam-in-amber.jpg",
    "displayUrl": "photos/display/pearl-jam-in-amber.webp",
    "thumbUrl": "photos/thumbs/pearl-jam-in-amber.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRqAAAABXRUJQVlA4IJQAAADQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdMoR3N6SAYeMcZI9065fxV7nfmAD+8R9rq1RsOmTHKS5KhIbB8CuWbQ7nR+rxPIRrdMx7I4KwTe1uj1xLwnrE5lC8LovIQb3FW10NfUCJ2QaYBxXqsrT2lcnzXJA1F9ZYaPSS1HaVzf60pbiDdocz6LjfI2eDNSwA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Pearl Jam in Amber",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "rock",
      "spotlight",
      "warm"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/40s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 17:02:55"
    }
  },
  {
    "id": "photo-056",
    "filename": "pink-floyd-at-pompeii.jpg",
    "displayUrl": "photos/display/pink-floyd-at-pompeii.webp",
    "thumbUrl": "photos/thumbs/pink-floyd-at-pompeii.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAABwBACdASoYABAAPu1iqk2ppaQiMAgBMB2JbACdMoRwACUMt4IjJUPRtsVsgAD+9DLcKuXFcFRH5xKcyXnMgiMZXklRSlHhQKZJK9rLJ1ZKqFkXzO3HOecbJ1YMslOYcRSEJfolTBhFvdi501umdfiULTzZOZCbbEaNMqAAAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Pink Floyd at Pompeii",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "pink-floyd",
      "psychedelic",
      "records"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/40s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 17:04:33"
    }
  },
  {
    "id": "photo-057",
    "filename": "piper-at-the-gates-of-dawn.jpg",
    "displayUrl": "photos/display/piper-at-the-gates-of-dawn.webp",
    "thumbUrl": "photos/thumbs/piper-at-the-gates-of-dawn.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRqoAAABXRUJQVlA4IJ4AAABwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdMoRwACmZ8JlxJboIXYFcwAD+8toWGH1APcslCZpQnnkbRe0gf8wpbvOXoYvLJfwGthWMuPOUDcVqX6hQJmJyiaQtqVQNKcEc3nBJZ/o0c869yaMWdZuXNhQBtF78irlhWvWP83H8nRy/O71lrNrBASvhbkzCIWPu6s6sgbzc+wAAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Piper at the Gates of Dawn",
    "collection": "still-life-and-interiors",
    "tags": [
      "hifi",
      "pink-floyd",
      "vintage-audio",
      "audiophile"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/15s",
      "aperture": "f/1.7",
      "iso": "ISO 800",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 18:57:38"
    }
  },
  {
    "id": "photo-058",
    "filename": "prism-in-hand.jpg",
    "displayUrl": "photos/display/prism-in-hand.webp",
    "thumbUrl": "photos/thumbs/prism-in-hand.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAABQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JQBOmUABfkcS2z+trFQUMeEMgAP7vbPvckdmC7Nse05Mv+EtgfaWe3ohjLGAR1xY/+Jg7yoWvaFLJ3MZDEmkYWFpxyh5aeY32liX/aoNPNlQK8PIE3eP/GJEg7NeeAAA=",
    "width": 2688,
    "height": 4032,
    "aspectRatio": 0.667,
    "orientation": "portrait",
    "title": "Prism in Hand",
    "collection": "still-life-and-interiors",
    "tags": [
      "dark-side-of-the-moon",
      "cd",
      "nostalgia",
      "still-life"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/25s",
      "aperture": "f/1.7",
      "iso": "ISO 1250",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 20:02:04"
    }
  },
  {
    "id": "photo-059",
    "filename": "spinning-at-33-rpm.jpg",
    "displayUrl": "photos/display/spinning-at-33-rpm.webp",
    "thumbUrl": "photos/thumbs/spinning-at-33-rpm.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRqwAAABXRUJQVlA4IKAAAADwAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JZACdAB5UG2ujTA9OBfcAAP7tGsTDR5DZJ5DH61emmMLlDc+dn4u7hPfvg2HXZaO2inqlN+s270IMUBeNefGAYZJDeDmiP4aOhY7vzzrx6g749+/lEB86dJEhu5BuLERC6T8FqHMaWVJXg02FMjk2lYgXg9eW26yttGbddSXyGl+FWSDSAAAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Spinning at 33 RPM",
    "collection": "still-life-and-interiors",
    "tags": [
      "turntable",
      "vinyl",
      "acrylic",
      "music"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/50s",
      "aperture": "f/1.7",
      "iso": "ISO 800",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 18:57:59"
    }
  },
  {
    "id": "photo-060",
    "filename": "the-audiophile-sanctuary.jpg",
    "displayUrl": "photos/display/the-audiophile-sanctuary.webp",
    "thumbUrl": "photos/thumbs/the-audiophile-sanctuary.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRrQAAABXRUJQVlA4IKgAAABwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdMoGv/i2LFljsHe9j/t6oAAD+n+WPN3wATWaXx7q2i9y9oPP5eQjjzs4xjnMJ0IixmwpT6vEusGpn2Cq+eg0Mp2GG1e5w7kHWNezbYKdqWkjwLQEKVNsZ1iR9K3yoERb67fX8XyV4us59AGeGcEVMrk5dlJ9QAX/3pNLr7suQmLcd64TO4uccHwogAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Audiophile Sanctuary",
    "collection": "still-life-and-interiors",
    "tags": [
      "audiophile",
      "hifi",
      "interior",
      "warmth"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/15s",
      "aperture": "f/2.2",
      "iso": "ISO 800",
      "focalLength": "2.7mm (Zeiss)",
      "date": "2026-10-15 18:57:47"
    }
  },
  {
    "id": "photo-061",
    "filename": "the-doors-in-the-shadows.jpg",
    "displayUrl": "photos/display/the-doors-in-the-shadows.webp",
    "thumbUrl": "photos/thumbs/the-doors-in-the-shadows.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAABwBACdASoYABQAPu1osFAppaSiqAqpMB2JaAC7ABEc3TS2rjQfdlh74VyqAAD+9CJZ8j+/5RY35UAoAshgwyhD2KFQryDlugfWMbAVrNWn6INx1/UJnd0TqhlecI34kAxQxaxjPKp6uBWPbM0vSd5tdyQDrh1xV416HHauQ0wf13T2AkHdXdg4IpC3BnJKnJHcy1cAAAA=",
    "width": 3310,
    "height": 2688,
    "aspectRatio": 1.231,
    "orientation": "landscape",
    "title": "The Doors in the Shadows",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "the-doors",
      "neon",
      "amber"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/50s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 17:08:46"
    }
  },
  {
    "id": "photo-062",
    "filename": "the-golden-shrine-of-sound.jpg",
    "displayUrl": "photos/display/the-golden-shrine-of-sound.webp",
    "thumbUrl": "photos/thumbs/the-golden-shrine-of-sound.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAABwBACdASoYAA4APu1iqU2ppaOiMAgBMB2JbACdMoRwACUtmXT00X707yqEAAD+STQF1SUs4//NeY5HnjtIDsvaxGR4k4VxIP3BJR7XHVrfQ2knJjzcTwXS6ENqKPeJz8RgpvQsUp/sO7CZiupCL16+hIM9g6u4yOsg1+/aW/0Y0UHt6aYSRpqZsznCNvYLxauXYQfvyVcPlYkdBgBS+LAi5WW0OvZ9pYywzKTIOTk8VVhDVT96IipUwbAAAA==",
    "width": 3840,
    "height": 2160,
    "aspectRatio": 1.778,
    "orientation": "landscape",
    "title": "The Golden Shrine of Sound",
    "collection": "still-life-and-interiors",
    "tags": [
      "audiophile",
      "interior",
      "editorial",
      "vintage-audio"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/50s",
      "aperture": "f/1.7",
      "iso": "ISO 400",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 19:42:51"
    }
  },
  {
    "id": "photo-063",
    "filename": "the-lizard-king.jpg",
    "displayUrl": "photos/display/the-lizard-king.webp",
    "thumbUrl": "photos/thumbs/the-lizard-king.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAADQAwCdASoYABAAPu1kqk4ppaQiMAgBMB2JbACdACFsGOSMXxvJ8EAA/vQrMLVFWxD7z/hBUARHFx986g6r0FPfyRA4dWvDYOuKDggvYfOdqNXaavalGAP9kf0ZOS5EVO2miL1/uoba0RsCBuf9XBs897FbUMAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Lizard King",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "close-up",
      "portrait",
      "still-life"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/30s",
      "aperture": "f/2.4",
      "iso": "ISO 320",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-10-15 17:08:54"
    }
  },
  {
    "id": "photo-064",
    "filename": "the-rebel-poet.jpg",
    "displayUrl": "photos/display/the-rebel-poet.webp",
    "thumbUrl": "photos/thumbs/the-rebel-poet.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAADwAwCdASoYABAAPu1iqU2ppaQiMAgBMB2JaQAAUSYR1xPzeVLxyg6QAP7y3Ptws0SMN8Z2sf2/8dHzmo78lW+xCpH6JcgP7rfDMNj+DKJBmqkf/uL+RgBk8TmWrVUq9w1hi8baINj3TyxB8SBtR8wsi6nF9pnV3riPAAAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Rebel Poet",
    "collection": "still-life-and-interiors",
    "tags": [
      "portrait",
      "monochrome",
      "heritage",
      "poetry"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/30s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 17:11:39"
    }
  },
  {
    "id": "photo-065",
    "filename": "the-terracotta-pantheon.jpg",
    "displayUrl": "photos/display/the-terracotta-pantheon.webp",
    "thumbUrl": "photos/thumbs/the-terracotta-pantheon.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAABQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JaACdMoR3ACnIMYiGnY2YH7UwAP7yoVwUFfhA8740glOASGbDE1oB9/jJMj+ANqMpsUWBRpf/+3rUEMgIInNjJHV4FrHPCfRUA//rKfcxV3yBZ4FTRlADdUiPaY4Qu0cmVPotJ9drKcJ0aG7+AAAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Terracotta Pantheon",
    "collection": "still-life-and-interiors",
    "tags": [
      "terracotta",
      "folk-art",
      "sculptures",
      "warmth"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/20s",
      "aperture": "f/1.7",
      "iso": "ISO 800",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 18:59:24"
    }
  },
  {
    "id": "photo-066",
    "filename": "the-wall-in-white.jpg",
    "displayUrl": "photos/display/the-wall-in-white.webp",
    "thumbUrl": "photos/thumbs/the-wall-in-white.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAAAQBACdASoYABAAPu1mqk4ppaOiMAgBMB2JbAC7ACHlqDSJlpWOpW84AAD+9Ctz2WynwQwK8ZXSC0iAtDIfkLco6yXtGS8KicktJcz2Jj5w9QP3lAQTLD704g82BjX81bUeiGaiUjvVQAUzgRn8g+AST9UXcgodZfvBdzWv31tNiZqmZ6lyQAAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Wall in White",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "the-wall",
      "minimalist",
      "monochrome"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/100s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 17:05:17"
    }
  },
  {
    "id": "photo-067",
    "filename": "three-cheers-in-the-crates.jpg",
    "displayUrl": "photos/display/three-cheers-in-the-crates.webp",
    "thumbUrl": "photos/thumbs/three-cheers-in-the-crates.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRqAAAABXRUJQVlA4IJQAAABQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdMoADT5AtUrw3Ighk9bxAAP7vZOva7lAnoC7ZUHeWPqBFyRcoSuiAtzsIDu4zuEJLwq+ArHEucYbqCNJWv+wNbnX0108e6O/aFzfRn/0VC/9jzBdv5cOIxYROQjW4uvzYl/Yx65QODKvewxSZTVLGsrBGLFfjUgAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Three Cheers in the Crates",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "records",
      "music",
      "crates"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/40s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 17:02:16"
    }
  },
  {
    "id": "photo-068",
    "filename": "twin-lens-tonearm.jpg",
    "displayUrl": "photos/display/twin-lens-tonearm.webp",
    "thumbUrl": "photos/thumbs/twin-lens-tonearm.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRrwAAABXRUJQVlA4ILAAAABQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JaACdMoMpAEGoN3oKh0+SR6+AAP70Mtf0qMKn0APJNAVoKkFXnfUxofBznl405Zs3Uwl41bFUW8uUETgTeuM1b+utSwbIsu6LfExTUz99VtU/J0V1KyIvWtHw2DVxK1ezO1SUgyJIp5RA0KX4ee8RenzFeR3n3gQYLJVaH79z/mRRtObTPhhDVPIVIPAfm803Y9FbbAAAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Twin Lens & Tonearm",
    "collection": "still-life-and-interiors",
    "tags": [
      "camera",
      "turntable",
      "analog-gear",
      "still-life"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/50s",
      "aperture": "f/1.7",
      "iso": "ISO 800",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 18:58:26"
    }
  },
  {
    "id": "photo-069",
    "filename": "vinyl-madness.jpg",
    "displayUrl": "photos/display/vinyl-madness.webp",
    "thumbUrl": "photos/thumbs/vinyl-madness.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRrYAAABXRUJQVlA4IKoAAACQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACsLwJ5WAYe+eM3vxXBOor4HwAA/vKqhvvxjtB1rXaXFED2Znvk1tMr3r0PzBjtSAZIjKY6ToYM/gg4Vl37S96txwj4hGqz0ARqgPscYRakJXSZmJIR4a0l3dxs6COb9jXCWhpPltqbsqitsGqpxA/J2NdV7AS63flb+iwGpW+gXbwotGsVChQ4mvXAajgAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Vinyl Madness",
    "collection": "still-life-and-interiors",
    "tags": [
      "neon",
      "magenta",
      "vinyl",
      "interior"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/25s",
      "aperture": "f/2.4",
      "iso": "ISO 320",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-10-15 16:34:27"
    }
  },
  {
    "id": "photo-070",
    "filename": "wish-you-were-here.jpg",
    "displayUrl": "photos/display/wish-you-were-here.webp",
    "thumbUrl": "photos/thumbs/wish-you-were-here.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAAAwBACdASoYABAAPu1kqk4ppaQiMAgBMB2JbACdMoADSy8JQ7b7d9zZrYAA/vKlGL5z3Dn5KsvPMDsiHbkkTYw6eW86/xAKlqby5zH9uEK5cKL3i8zarmfOcm7ShBmk43+uH+azWxhEiGcWJYZ2EXtlNG1/dgyR5Vv7hv9KpfNXT7WD3xKGAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Wish You Were Here",
    "collection": "still-life-and-interiors",
    "tags": [
      "vinyl",
      "pink-floyd",
      "analog",
      "classic"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/40s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-15 17:04:56"
    }
  },
  {
    "id": "photo-071",
    "filename": "carriers-of-cold.jpg",
    "displayUrl": "photos/display/carriers-of-cold.webp",
    "thumbUrl": "photos/thumbs/carriers-of-cold.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRsYAAABXRUJQVlA4ILoAAABwBQCdASoYABIAPu1qrlCppaQiqAqpMB2JYgCpBfVAHod6MoAVLEb9MDRZleXOTNq40jJgAP7y184RJwuNOUw5lvmS5CHAyoeGgT6I7fXSJQ5pquNuTGd87bM2xU5yE+Fw0Fm4h9e2FxD6KIMr+SU2XzxFO7vaIcrFAsbNyxFOx3kXgwSxF0NA4cajWaIMSmhZt/6U+Z8REt278BGbXuQWT7gx6fEwdaTasfdyvJ/zEi2em0opmfL3aAA=",
    "width": 4016,
    "height": 3008,
    "aspectRatio": 1.335,
    "orientation": "landscape",
    "title": "Carriers of Cold",
    "collection": "street-life",
    "tags": [
      "labor",
      "street",
      "dhaka",
      "candid"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/3200s",
      "aperture": "f/2.4",
      "iso": "ISO 1000",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-09-05 16:09:59"
    }
  },
  {
    "id": "photo-072",
    "filename": "daily-breadth.jpg",
    "displayUrl": "photos/display/daily-breadth.webp",
    "thumbUrl": "photos/thumbs/daily-breadth.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRrAAAABXRUJQVlA4IKQAAAAwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JaQAAWsU+aYeMAYfw0np56AAA/ud97kQzxUqGAqPBvwYJQ5fz4TGNlSt4qjlmzCMRjgaZW++R5lBDzk4gao9dFLQUEalD0VEHY1bp4Q7WUf/7DB/SfK9mr+tojLPXz6aGY7TZM/fvnsTSGbPEogmUZVxLnvLWPIpYt9QHbbPcPfyYd8rpstWyC1iAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Daily Breadth",
    "collection": "street-life",
    "tags": [
      "monochrome",
      "labor",
      "old-dhaka",
      "classic"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/320s",
      "aperture": "f/1.7",
      "iso": "ISO 64",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-08-27 12:02:06"
    }
  },
  {
    "id": "photo-073",
    "filename": "stop-growth.jpg",
    "displayUrl": "photos/display/stop-growth.webp",
    "thumbUrl": "photos/thumbs/stop-growth.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRqgAAABXRUJQVlA4IJwAAAAwBACdASoYAA4APu1iqU2ppaQiMAgBMB2JbAAD5gHnQHcekGgu7mSxZBAA/u/WiVoRrRG27c3wEBLCvUyclNeTtzGSd848SW09q15Ww93yqSB43XbaxQQTXf71pmWNW/ttROHTn6qKM647NxQTSEnJQ5PDPEe4Cw1crJWwwdMcXo/xIDi7pnNU2deKvaQNfiGMrIItU3im0wGPAAA=",
    "width": 4032,
    "height": 2268,
    "aspectRatio": 1.778,
    "orientation": "landscape",
    "title": "Stop / Growth",
    "collection": "street-life",
    "tags": [
      "street-signal",
      "contrast",
      "urban",
      "color"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/8000s",
      "aperture": "f/2.4",
      "iso": "ISO 1600",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-08-21 14:03:10"
    }
  },
  {
    "id": "photo-074",
    "filename": "the-balloon-seller.jpg",
    "displayUrl": "photos/display/the-balloon-seller.webp",
    "thumbUrl": "photos/thumbs/the-balloon-seller.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRrYAAABXRUJQVlA4IKoAAABwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdMoR3N6SAKqFfaFZZomTfAAD+uk4iPXPQqb5RdLHEINdGOaguxMK6EAM+unBG336DBB4mFWj2HoyZewLhET+z/iNK6BBpa0j6Vn4V95uLcY+Wtod47GS8SFYue5vNWg3Byls8e4q1xXNwhrgNkLgHH6TBA0gTHWPbe29MPufk2tKKd64+4+b6Uu4tNiUAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Balloon Seller",
    "collection": "street-life",
    "tags": [
      "balloons",
      "color",
      "rickshaw",
      "candid"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/640s",
      "aperture": "f/1.7",
      "iso": "ISO 64",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-08-28 14:34:24"
    }
  },
  {
    "id": "photo-075",
    "filename": "the-noon-porter.jpg",
    "displayUrl": "photos/display/the-noon-porter.webp",
    "thumbUrl": "photos/thumbs/the-noon-porter.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRqgAAABXRUJQVlA4IJwAAABQBACdASoYAA4APu1iqU2ppaOiMAgBMB2JZACdMoACsNOBjVe9DjUGFKAAAP7p3ToZSyoqDQH82nyS63sNvlFXejPN1BuEB0MpZyV0pkYZCpylW+MtIEbPaWOROz6YLj8w4n7Z4zjfjuyXjL+x13IkqGJl47AqhQ4PuJyx35pyltYZWkKq9LY4HKoGgzBcZMgWejPzuylsgP/zAAA=",
    "width": 4032,
    "height": 2268,
    "aspectRatio": 1.778,
    "orientation": "landscape",
    "title": "The Noon Porter",
    "collection": "street-life",
    "tags": [
      "portrait",
      "labor",
      "old-dhaka",
      "documentary"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/16000s",
      "aperture": "f/1.7",
      "iso": "ISO 1600",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-08-21 14:34:55"
    }
  },
  {
    "id": "photo-076",
    "filename": "the-older-brother.jpg",
    "displayUrl": "photos/display/the-older-brother.webp",
    "thumbUrl": "photos/thumbs/the-older-brother.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpwAAABXRUJQVlA4IJAAAABQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbAC7ABuiBlo2dVigF/W14ZsAAP6CDTKjWoqG4j0+YeQuqCMg7jl3+NdruxiP0RRHVnLYm3JLdbY/jg+Kpo5mwdjuNJHGn77t9Outu23KsCtP/KWMPDqsKywMKWqBY87JHverzICuLivyeiVn/tDYhfrfYn+VIAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Older Brother",
    "collection": "street-life",
    "tags": [
      "candid",
      "childhood",
      "warmth",
      "street-portrait"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/200s",
      "aperture": "f/1.7",
      "iso": "ISO 800",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-08-24 18:01:53"
    }
  },
  {
    "id": "photo-077",
    "filename": "tungsten-greens.jpg",
    "displayUrl": "photos/display/tungsten-greens.webp",
    "thumbUrl": "photos/thumbs/tungsten-greens.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRrwAAABXRUJQVlA4ILAAAAAwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JagCAAAis52TETU39c62LMLgA/vKxT34pmMUuzEa3CPaFE/fT1ucSJGBz5qbE+LUK3VZ6a/6i17roTb2OYc2sFLISCH6dQGRcgD6HNJYq7DrJn+K20qqj3TlMulMtxvs6ZtZ/mEuft6L/tz3q2efruN9GOL2ykWbMDxyGMWFfpxd4ZlHwCXsE3/0ge8JkawwA6gElnovAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Tungsten & Greens",
    "collection": "street-life",
    "tags": [
      "night-market",
      "tungsten",
      "produce",
      "documentary"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/160s",
      "aperture": "f/2.4",
      "iso": "ISO 800",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-08-24 18:02:57"
    }
  },
  {
    "id": "photo-078",
    "filename": "university-avenue-at-dusk.jpg",
    "displayUrl": "photos/display/university-avenue-at-dusk.webp",
    "thumbUrl": "photos/thumbs/university-avenue-at-dusk.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADwAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JZACo9BAY6YAkzsQWTjUgAP5zF0vYVYIpULa+E34N/fkQPiPMo7gh6cUD8Fzmc0j8gsm3KKNZw0eFqEki172Q3gZiFwM8qJTgAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "University Avenue at Dusk",
    "collection": "street-life",
    "tags": [
      "silhouette",
      "crowd",
      "sunset",
      "youth"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/6400s",
      "aperture": "f/1.7",
      "iso": "ISO 64",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-08-25 17:33:22"
    }
  },
  {
    "id": "photo-079",
    "filename": "canopy-bridge.jpg",
    "displayUrl": "photos/display/canopy-bridge.webp",
    "thumbUrl": "photos/thumbs/canopy-bridge.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAABQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JZgCsACPqUIWz7z7vnsItv/5KAP7M7z5G1NBggAFNA8ia44EFe7647e5Ym4iYrtepnEQTugKe+4diQ0ivkWu/oxWG3S2M6LKdiIpiBfF+lML9XnhvAsQ1jWRvugAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Canopy Bridge",
    "collection": "urban-nature",
    "tags": [
      "bridge",
      "canopy",
      "park",
      "lush"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/10000s",
      "aperture": "f/1.7",
      "iso": "ISO 2500",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 13:55:59"
    }
  },
  {
    "id": "photo-080",
    "filename": "cascading-balconies.jpg",
    "displayUrl": "photos/display/cascading-balconies.webp",
    "thumbUrl": "photos/thumbs/cascading-balconies.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAABwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdMoR3ABUtrIEdHzgSwpYgEAD33orMVcmsBuHsfmahpR+rVBDAhNhAqLcFwv1oqDR2L+3LA6lFoiI5396RYixu2o7FLEBgmdggaxJ50OAMwcZvmjiI+csndEmx2wbhPL2uh9ywF/LXgLTvqVtAAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Cascading Balconies",
    "collection": "urban-nature",
    "tags": [
      "vertical-garden",
      "balconies",
      "green-city",
      "urban-nature"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/1250s",
      "aperture": "f/2.4",
      "iso": "ISO 320",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-10-15 14:56:53"
    }
  },
  {
    "id": "photo-081",
    "filename": "epiphytes-louvers.jpg",
    "displayUrl": "photos/display/epiphytes-louvers.webp",
    "thumbUrl": "photos/thumbs/epiphytes-louvers.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAABQBACdASoYABAAPu1iqU2ppaQiMAgBMB2JYwCdAB0kthOlN0FMBRX4gPJgAPuBWDkGlLpyO8PjfG1YvV6Tvnwnx87uaPppEwye2b0vpA/2qCT+cgtF2VbJfDSfbGHrpJv6IfwS8SFbGAb8q2bpD4We02lmADYHMzbD+UNgov8mQVITFGAAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Epiphytes & Louvers",
    "collection": "urban-nature",
    "tags": [
      "epiphytes",
      "bark",
      "textures",
      "organic"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/400s",
      "aperture": "f/2.4",
      "iso": "ISO 1600",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-10-21 14:12:07"
    }
  },
  {
    "id": "photo-082",
    "filename": "fractal-limbs.jpg",
    "displayUrl": "photos/display/fractal-limbs.webp",
    "thumbUrl": "photos/thumbs/fractal-limbs.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAAAQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JZwAIEAPD6bN4+BqDPG5hAAD2b1oVDLOrqnwV6WJFqN5dk9O2gu3DboNNSI3rIcl4h9BbNIwWNK5vWxtjMA9RBamXodHh+JPg34LfD2flsTpiNVker4nxnqAogZitu6NQkOwmQMd/oEAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Fractal Limbs",
    "collection": "urban-nature",
    "tags": [
      "branches",
      "fractal",
      "canopy",
      "graphic"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/80s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 16:15:34"
    }
  },
  {
    "id": "photo-083",
    "filename": "lantern-in-the-leaves.jpg",
    "displayUrl": "photos/display/lantern-in-the-leaves.webp",
    "thumbUrl": "photos/thumbs/lantern-in-the-leaves.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpwAAABXRUJQVlA4IJAAAAAwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JYgCw7CKKecr1OA8xX/rrpdwA/uyvGFkV6bYukB8L6TiGXBkUjW9CnS/DJNaZaDNiWLGLDdUBD78w4q+XGHMwn5BHyb7omKAOpkC+Klzfh1rknVe4TiYI6UI019XKtGV50riNa4P4uz7p+b+AhgUicuvGM2ECFAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Lantern in the Leaves",
    "collection": "urban-nature",
    "tags": [
      "lantern",
      "trees",
      "foliage",
      "peaceful"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/12000s",
      "aperture": "f/1.7",
      "iso": "ISO 2500",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 13:58:08"
    }
  },
  {
    "id": "photo-084",
    "filename": "life-in-the-fracture.jpg",
    "displayUrl": "photos/display/life-in-the-fracture.webp",
    "thumbUrl": "photos/thumbs/life-in-the-fracture.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAADwAwCdASoYAA4APu1iqU2ppaOiMAgBMB2JQBOgA4mzN/PDjmvBHxtAAP7EPxyW30qQVTZWOc/XwfNCwsAHlP7pK8REo4OHqWd+VWXSW0/zgkZOOF+aXJRA5lWDB6ZfjtTcWD+sP1DyTQAgB2N3ws8X7wreQfVgAAA=",
    "width": 4032,
    "height": 2268,
    "aspectRatio": 1.778,
    "orientation": "landscape",
    "title": "Life in the Fracture",
    "collection": "urban-nature",
    "tags": [
      "resilience",
      "concrete",
      "moss",
      "urban-nature"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/2000s",
      "aperture": "f/2.4",
      "iso": "ISO 1600",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-08-20 16:46:24"
    }
  },
  {
    "id": "photo-085",
    "filename": "lily-pad-constellation.jpg",
    "displayUrl": "photos/display/lily-pad-constellation.webp",
    "thumbUrl": "photos/thumbs/lily-pad-constellation.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAACQBACdASoYAA4APu1iqU2ppaQiMAgBMB2JagCdMoR3ABwzeSaKmvAp3Yq/nmQA/sv7HyIY/o4lgDP4FYxmuvxV1ZyXtoRVkV+w+23XW0JXKOaLdEW6x4BhkSuUBJW1vD17tt/NiCoMhheo64IaIzUAx/+AVzWeEt2QLxCQwAA=",
    "width": 3826,
    "height": 2216,
    "aspectRatio": 1.727,
    "orientation": "landscape",
    "title": "Lily Pad Constellation",
    "collection": "urban-nature",
    "tags": [
      "lake",
      "lily-pads",
      "tranquil",
      "water"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/320s",
      "aperture": "f/2.4",
      "iso": "ISO 320",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-10-21 15:55:24"
    }
  },
  {
    "id": "photo-086",
    "filename": "looking-skyward.jpg",
    "displayUrl": "photos/display/looking-skyward.webp",
    "thumbUrl": "photos/thumbs/looking-skyward.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRqoAAABXRUJQVlA4IJ4AAAAwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdABbatD415dsK2VkvJUAA/rc9IQKk9wbFUnGjaA1XOl3IqBsyO8hif3hwNl60pqfYaKRAgP/ymNl9eO3K9hZuA/oh9tmanenmiIenCUk3E25qUHtgkHYs5hfa11oacf37JxqcJqRrq3rAprjndKTa4wZJIgh1kFEPZ0Rlt1wg8YyAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Looking Skyward",
    "collection": "urban-nature",
    "tags": [
      "tree",
      "low-angle",
      "foliage",
      "fresh"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/60s",
      "aperture": "f/2.2",
      "iso": "ISO 320",
      "focalLength": "2.7mm (Zeiss)",
      "date": "2026-10-21 16:24:07"
    }
  },
  {
    "id": "photo-087",
    "filename": "steel-truss-living-roots.jpg",
    "displayUrl": "photos/display/steel-truss-living-roots.webp",
    "thumbUrl": "photos/thumbs/steel-truss-living-roots.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBACdASoYABEAPu1irFAppSQisBgIATAdiWNMAFR+CT/k0+S6YLU05QAA/u1ZPqLVn2vDrQh1QokBIUtp35TdcINuLn9hhL9VXEEcI16WjAoirIhQp/GBbOw2ZYF4DgwdbpLROxSYk15MOMtFEIxm51AAAA==",
    "width": 3909,
    "height": 2688,
    "aspectRatio": 1.454,
    "orientation": "landscape",
    "title": "Steel Truss & Living Roots",
    "collection": "urban-nature",
    "tags": [
      "steel",
      "roots",
      "symbiosis",
      "nature"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/160s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 16:21:42"
    }
  },
  {
    "id": "photo-088",
    "filename": "suhrawardy-canopy.jpg",
    "displayUrl": "photos/display/suhrawardy-canopy.webp",
    "thumbUrl": "photos/thumbs/suhrawardy-canopy.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAABwBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbAC06BhzrFavxAU0p/UD+mqcwAD+71lGAZdzHHndxwf327/oR/6s6UvGxIBmhBvPoggZfd6G69vsVBikD6Bv6IoTecNLmW16m2fVPo/eHIv7Q8fr7zo8tuWKYuMQ7AqpQDEV1Uu8ID6mdQFkvUmAAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Suhrawardy Canopy",
    "collection": "urban-nature",
    "tags": [
      "canopy",
      "sunlight",
      "trees",
      "foliage"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/500s",
      "aperture": "f/1.7",
      "iso": "ISO 64",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-09-21 15:13:21"
    }
  },
  {
    "id": "photo-089",
    "filename": "sunlight-on-green-silk.jpg",
    "displayUrl": "photos/display/sunlight-on-green-silk.webp",
    "thumbUrl": "photos/thumbs/sunlight-on-green-silk.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRqwAAABXRUJQVlA4IKAAAACQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JbACdMoAluxeSA9mqKXEofi3aCAAA/vEZlC1y5eD/ATDWj1DAs3jEucRsgitsKxJ+4aNiLKiYE9Tmtj2luF3Rml8d8eTW3Bh2qa5gTAZ+/aAG/t/CnagoTNUts9/0RE2k8B+tk4D7oVnv/TaYOt2UsVEL136Wbyq4gPUckhjEsbA7pUF+vYAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Sunlight on Green Silk",
    "collection": "urban-nature",
    "tags": [
      "light-and-shadow",
      "foliage",
      "intimate",
      "nature"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/400s",
      "aperture": "f/2.4",
      "iso": "ISO 320",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-10-15 14:53:52"
    }
  },
  {
    "id": "photo-090",
    "filename": "the-ancient-column.jpg",
    "displayUrl": "photos/display/the-ancient-column.webp",
    "thumbUrl": "photos/thumbs/the-ancient-column.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAABwBACdASoYABAAPu1iqk2ppaQiMAgBMB2JZAC7MoADg2JEpm+fgd/92z6bgAD9R5TC0MNVsnDCNGVEKqJaC0mvxgZWPcuzm4qTNFaKe6CDWWtKYnml8yTPpleLWy7EsAqLToj9bmq6XAKuKa9y2wAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Ancient Column",
    "collection": "urban-nature",
    "tags": [
      "banyan",
      "trunk",
      "low-angle",
      "monumental"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/2000s",
      "aperture": "f/1.7",
      "iso": "ISO 1600",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 14:15:36"
    }
  },
  {
    "id": "photo-091",
    "filename": "the-climbing-ivy.jpg",
    "displayUrl": "photos/display/the-climbing-ivy.webp",
    "thumbUrl": "photos/thumbs/the-climbing-ivy.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRrQAAABXRUJQVlA4IKgAAADQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JZADCgdwLgsZ5TYE9T8XzxEAbZXEdAAD+1/XBgBtUi+XloS8rhJDkf3xKZbatb6ph/l3WtyD6fpg1cV6NnFvHDGL25HOChbmHWTCfTwUYpj45rmWFJ5sYP1DuWhXc9fsFh5Da2z5DROXr972qDI9uBjl8Rw8WSbI6yrCqpQHb9bciMvUoUJQgI9yvS53AAAA=",
    "width": 3664,
    "height": 2443,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Climbing Ivy",
    "collection": "urban-nature",
    "tags": [
      "vine",
      "greenery",
      "light",
      "nature"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/250s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 16:23:23"
    }
  },
  {
    "id": "photo-092",
    "filename": "the-iron-trellis.jpg",
    "displayUrl": "photos/display/the-iron-trellis.webp",
    "thumbUrl": "photos/thumbs/the-iron-trellis.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRp4AAABXRUJQVlA4IJIAAAAwBACdASoYAA4APu1iqU2ppaOiMAgBMB2JZgC06CK12jOv8aMJ+asmqgAA/sJ3S6AjKXJ6FTkShrFrxkT96o+fGCKDtdd3rSqhRhMnZIqCkEw/UTmw03ZLgveXt5v+nuIefkAYDOF7xFCN59bYy1E8nFqt8qjH7qoZHOJ7s7Eaj59cYg1qaXfXKBipnxqdT2gAAA==",
    "width": 4032,
    "height": 2268,
    "aspectRatio": 1.778,
    "orientation": "landscape",
    "title": "The Iron Trellis",
    "collection": "urban-nature",
    "tags": [
      "vines",
      "ironwork",
      "growth",
      "intimate"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/16000s",
      "aperture": "f/1.7",
      "iso": "ISO 3200",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-08-20 16:45:48"
    }
  },
  {
    "id": "photo-093",
    "filename": "the-knot-of-roots.jpg",
    "displayUrl": "photos/display/the-knot-of-roots.webp",
    "thumbUrl": "photos/thumbs/the-knot-of-roots.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAACwAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JZQAAQPX8qOPK3pyRAAD+uwy6OWNP7E7Dvjz9IUey6jSVVpjX7VgGKjHb4jrQBPb58S972LHE6wjuKE2SBnaSua2SlQW0dovU1FL9oA0iefAPfdJ3Okv6yatBinpZI6AC6qCgAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Knot of Roots",
    "collection": "urban-nature",
    "tags": [
      "roots",
      "textures",
      "banyan",
      "organic"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/40s",
      "aperture": "f/2.4",
      "iso": "ISO 320",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-10-21 16:25:53"
    }
  },
  {
    "id": "photo-094",
    "filename": "the-living-curtain.jpg",
    "displayUrl": "photos/display/the-living-curtain.webp",
    "thumbUrl": "photos/thumbs/the-living-curtain.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAABQBACdASoYABAAPu1iqU2ppaOiMAgBMB2JaACdMoACj5wwhru7Ft+jf6lwAP66f2WnB4ydXHWLGNDMIIuYu8fjYemLdbatVloeaNdxZTd4dkVNLNIWw0RNousXoXhz0aZOB3uMyPVUlVvrjLFBaKE/FLo7a58lzVEDBHmJIcZPWQoAAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Living Curtain",
    "collection": "urban-nature",
    "tags": [
      "banyan",
      "aerial-roots",
      "textures",
      "nature"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/50s",
      "aperture": "f/2.4",
      "iso": "ISO 64",
      "focalLength": "7.0mm (Zeiss)",
      "date": "2026-09-21 15:13:39"
    }
  },
  {
    "id": "photo-095",
    "filename": "the-mirrored-lake.jpg",
    "displayUrl": "photos/display/the-mirrored-lake.webp",
    "thumbUrl": "photos/thumbs/the-mirrored-lake.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAAAwBACdASoYABAAPu1kqU2ppaQiMAgBMB2JZQC7ACLv1G10Bit0YV+8GAAA/tlfU3wwau+yUE0nGtrytcCPhI6noVyb7VHCEbLmQHIB/GwgzvgKC2f7hLIBfc2i0/d7ZKjtE70zAQT4VbuVS1wuTkWpY6tHggAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Mirrored Lake",
    "collection": "urban-nature",
    "tags": [
      "lake",
      "reflection",
      "trees",
      "calm"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/1600s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 16:36:37"
    }
  },
  {
    "id": "photo-096",
    "filename": "the-moored-swans.jpg",
    "displayUrl": "photos/display/the-moored-swans.webp",
    "thumbUrl": "photos/thumbs/the-moored-swans.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAACQAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JZwAAUkd8sJANA3QAAP7QPZgU0F9cCXkn/j7LWMpIjyZw4l2vOcnlnYpEjWokNOT5JjFN/3ZyHsjfee4CqbJR8/1QR3OyGvHOrO2uD6S8KWKNfVvb0okAlZG4oAAA",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Moored Swans",
    "collection": "urban-nature",
    "tags": [
      "swan-boats",
      "lake",
      "leisure",
      "whimsical"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/80s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 17:07:39"
    }
  },
  {
    "id": "photo-097",
    "filename": "the-sprawling-canopy.jpg",
    "displayUrl": "photos/display/the-sprawling-canopy.webp",
    "thumbUrl": "photos/thumbs/the-sprawling-canopy.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAADwAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JaACdAB6XJTwhDUZxgx3AAP7sCHS7LBCwTjFBEDtBbhu4+arfOGWM+e3JDx2kGZ11TvVEMw63QDcwAM8rUbxKyd7GLDsXmvdAFaEX3CzjoeA1vN7NASC22wboDiv+RPTUSA9m+U+DlRs1YpQEBzw8AAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "The Sprawling Canopy",
    "collection": "urban-nature",
    "tags": [
      "banyan",
      "canopy",
      "park",
      "lush"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/80s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 16:15:19"
    }
  },
  {
    "id": "photo-098",
    "filename": "the-weeping-banyan.jpg",
    "displayUrl": "photos/display/the-weeping-banyan.webp",
    "thumbUrl": "photos/thumbs/the-weeping-banyan.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAAAwBACdASoYABQAPu1qrVCppaQiqAqpMB2JZwAAJrsyneqnbY4JHWsHocAA/sGBhxMb8D8oTodtraOR/M654JQfF+V0qVWP4guWNj8cNZ9qwedUbCa+pSv7LXkmf/dRupR3ATCVhe1a+Cc7kCEl1JdWCq7qeZ7LpUBwxNdhW8cPNlD2RqaYVr9QAAA=",
    "width": 3295,
    "height": 2688,
    "aspectRatio": 1.226,
    "orientation": "landscape",
    "title": "The Weeping Banyan",
    "collection": "urban-nature",
    "tags": [
      "monumental",
      "banyan",
      "majestic",
      "canopy"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/60s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 17:02:56"
    }
  },
  {
    "id": "photo-099",
    "filename": "urban-taro-fields.jpg",
    "displayUrl": "photos/display/urban-taro-fields.webp",
    "thumbUrl": "photos/thumbs/urban-taro-fields.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAABwBQCdASoYABIAPu1mp02ppaOiMBgMATAdiWIAxnwR/+c3pySsXd+e5joKee+/Uc5KJ8YAAP7J2P+GTehRUd9Q9DNPnSgAvUlPe738OlGt+71SFV6rK0QZRJ9rB6kpnsAEhG2A2Jwc847Mry4V0eSccH4EX1YHzZWC+czaCqu8ULPx/aji8aVQ5nSmTAAA",
    "width": 4016,
    "height": 3008,
    "aspectRatio": 1.335,
    "orientation": "landscape",
    "title": "Urban Taro Fields",
    "collection": "urban-nature",
    "tags": [
      "greenery",
      "wild-growth",
      "suburban",
      "foliage"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/16000s",
      "aperture": "f/1.7",
      "iso": "ISO 3200",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-08-20 16:45:20"
    }
  },
  {
    "id": "photo-100",
    "filename": "veil-of-the-banyan.jpg",
    "displayUrl": "photos/display/veil-of-the-banyan.webp",
    "thumbUrl": "photos/thumbs/veil-of-the-banyan.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAACwAwCdASoYABAAPu1kqU4ppaOiMAgBMB2JYgCdMoABymFmImsH/AD+40GRhiRoKZ3/kUplu990BwtQ501WYtzq+EANMTtP4HiT2Z29d0Fte8bzud1TzjejG57a9AojZPo/aQ+kUh96Aw58NTUFIBxuXuOwq75fx7aGrHZ2YP90ApaofArWHjmeojgAAA==",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Veil of the Banyan",
    "collection": "urban-nature",
    "tags": [
      "aerial-roots",
      "warmth",
      "textures",
      "nature"
    ],
    "featured": true,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/800s",
      "aperture": "f/2.2",
      "iso": "ISO 1600",
      "focalLength": "2.7mm (Zeiss)",
      "date": "2026-10-21 14:15:48"
    }
  },
  {
    "id": "photo-101",
    "filename": "wild-jasmine-grass.jpg",
    "displayUrl": "photos/display/wild-jasmine-grass.webp",
    "thumbUrl": "photos/thumbs/wild-jasmine-grass.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAAAQBACdASoYAA4APu1iqU2ppaOiMAgBMB2JYgAOcAOVNJrJVO0zttNlAAD+n4NuWJmji2P5JPdKbP+e24itnwiqwSD8sD7nGWK2f9JxAUgtv8OBmrcAnnlRyXfd93axT6/xocCg7m7gGfBpaSOsum1TLx7kQ1EaZRE1/rcIAAA=",
    "width": 4032,
    "height": 2268,
    "aspectRatio": 1.778,
    "orientation": "landscape",
    "title": "Wild Jasmine & Grass",
    "collection": "urban-nature",
    "tags": [
      "foliage",
      "delicate",
      "flora",
      "greenery"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/16000s",
      "aperture": "f/1.7",
      "iso": "ISO 1250",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-07-31 14:44:53"
    }
  },
  {
    "id": "photo-102",
    "filename": "yellow-blossoms-on-iron.jpg",
    "displayUrl": "photos/display/yellow-blossoms-on-iron.webp",
    "thumbUrl": "photos/thumbs/yellow-blossoms-on-iron.webp",
    "blurDataUrl": "data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAADwAwCdASoYABAAPu1iqU2ppaOiMAgBMB2JZwAAVLWByWB2XZHZrZoAAP7ZXJI1V2oBdCypR25lQ+ndRS+eabaKfH8Itwnop7qKeKF2bjxGXvyvCacZXH91PXZNhZa5bwdZtuVh27wWU+FuZaL2+tyOsYAKN2M/iryKhJl8khrPgAwAAAA=",
    "width": 4032,
    "height": 2688,
    "aspectRatio": 1.5,
    "orientation": "landscape",
    "title": "Yellow Blossoms on Iron",
    "collection": "urban-nature",
    "tags": [
      "flowers",
      "palms",
      "twilight",
      "flora"
    ],
    "featured": false,
    "camera": {
      "model": "Sony Xperia 5 IV (SO-54C)",
      "lens": "Zeiss Vario-Tessar T*",
      "shutter": "1/30s",
      "aperture": "f/1.7",
      "iso": "ISO 320",
      "focalLength": "5.1mm (Zeiss)",
      "date": "2026-10-21 17:31:26"
    }
  }
];

  if (typeof window !== 'undefined') {
    window.COLLECTIONS = COLLECTIONS;
    window.PHOTOS = PHOTOS;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COLLECTIONS, PHOTOS };
  }
})();
