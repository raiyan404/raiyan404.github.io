import os
from PIL import Image, ImageDraw

icons_dir = 'icons'
os.makedirs(icons_dir, exist_ok=True)

# Generate SVG favicon
svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <radialGradient id="lensGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f5aa56" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#e69947" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#060608" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5aa56"/>
      <stop offset="100%" stop-color="#e69947"/>
    </linearGradient>
  </defs>

  <!-- Deep Obsidian Background -->
  <rect width="512" height="512" rx="112" fill="#060608"/>
  <rect width="504" height="504" x="4" y="4" rx="108" fill="none" stroke="#22222c" stroke-width="8"/>

  <!-- Outer Lens Ring -->
  <circle cx="256" cy="256" r="180" fill="none" stroke="#20202c" stroke-width="14"/>
  <circle cx="256" cy="256" r="150" fill="url(#lensGlow)"/>
  <circle cx="256" cy="256" r="150" fill="none" stroke="#e69947" stroke-width="6" stroke-opacity="0.4"/>

  <!-- Camera Aperture Blades (Geometric Minimalist) -->
  <g stroke="url(#amberGrad)" stroke-width="14" stroke-linecap="round" fill="none">
    <!-- 6 Aperture Blades / Framing Corners -->
    <path d="M190 140 L340 140 L370 200"/>
    <path d="M370 200 L370 340 L310 380"/>
    <path d="M310 380 L170 380 L140 320"/>
    <path d="M140 320 L140 180 L200 140"/>
  </g>

  <!-- Central Camera Sensor Point -->
  <circle cx="256" cy="256" r="28" fill="url(#amberGrad)"/>
  <circle cx="256" cy="256" r="10" fill="#060608"/>

  <!-- Subtle Shutter Axis Ticks -->
  <circle cx="256" cy="88" r="5" fill="#e69947"/>
  <circle cx="256" cy="424" r="5" fill="#e69947"/>
  <circle cx="88" cy="256" r="5" fill="#e69947"/>
  <circle cx="424" cy="256" r="5" fill="#e69947"/>
</svg>
"""

with open('favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)
with open(os.path.join(icons_dir, 'favicon.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_content)

print("Generated favicon.svg")

# Render High-Quality PNG Favicons using PIL
def draw_icon(size):
    # Render with 4x supersampling for ultra crisp edges
    scale = 4
    canvas_size = size * scale
    im = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(im)

    pad = 8 * scale
    corner_r = int(canvas_size * 0.22)
    
    # Outer Rounded Rectangle (Obsidian)
    draw.rounded_rectangle(
        [pad, pad, canvas_size - pad, canvas_size - pad],
        radius=corner_r,
        fill=(6, 6, 8, 255),
        outline=(34, 34, 44, 255),
        width=int(6 * scale)
    )

    center = canvas_size // 2
    r_outer = int(canvas_size * 0.36)
    r_inner = int(canvas_size * 0.28)
    r_center = int(canvas_size * 0.08)
    r_core = int(canvas_size * 0.03)

    # Outer lens circle
    draw.ellipse(
        [center - r_outer, center - r_outer, center + r_outer, center + r_outer],
        outline=(230, 153, 71, 140),
        width=int(4 * scale)
    )

    # Inner aperture ring
    draw.ellipse(
        [center - r_inner, center - r_inner, center + r_inner, center + r_inner],
        outline=(230, 153, 71, 230),
        width=int(6 * scale)
    )

    # Center sensor dot
    draw.ellipse(
        [center - r_center, center - r_center, center + r_center, center + r_center],
        fill=(230, 153, 71, 255)
    )
    draw.ellipse(
        [center - r_core, center - r_core, center + r_core, center + r_core],
        fill=(6, 6, 8, 255)
    )

    # Downsample with Lanczos
    return im.resize((size, size), Image.Resampling.LANCZOS)

sizes = [
    ('favicon-16x16.png', 16),
    ('favicon-32x32.png', 32),
    ('apple-touch-icon.png', 180),
    ('icon-192.png', 192),
    ('icon-512.png', 512),
]

generated_images = {}
for name, s in sizes:
    img = draw_icon(s)
    img.save(os.path.join(icons_dir, name), 'PNG')
    if s in (16, 32, 180):
        img.save(name, 'PNG')
    generated_images[s] = img
    print(f"Generated {name} ({s}x{s})")

# Generate standard multi-size favicon.ico
ico_img = draw_icon(48)
ico_img.save(
    'favicon.ico',
    format='ICO',
    sizes=[(16, 16), (32, 32), (48, 48)]
)
print("Generated favicon.ico (16, 32, 48)")
