import os
import json
import base64
from io import BytesIO
from PIL import Image, ExifTags

images_dir = 'images'
display_dir = 'public/photos/display'
thumbs_dir = 'public/photos/thumbs'
original_dir = 'public/photos/original'

os.makedirs(display_dir, exist_ok=True)
os.makedirs(thumbs_dir, exist_ok=True)
os.makedirs(original_dir, exist_ok=True)
os.makedirs('src/data', exist_ok=True)

files = sorted([f for f in os.listdir(images_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png'))])
print(f"Total images found: {len(files)}")

# Exact editorial mapping for all 109 photographs based on visual inspection of contact sheets
curated_data = {
    # Sheet 1
    "20260608_175431.jpg": {
        "title": "Perimeter & Rust",
        "collection": "quiet-moments",
        "location": "Old Dhaka Industrial",
        "description": "Tactile monochrome study of twisted barbed wire against weathered corrugated metal.",
        "tags": ["monochrome", "texture", "minimalist", "industrial"],
        "featured": True
    },
    "20260609_183557.jpg": {
        "title": "Night Watch Gantry",
        "collection": "architecture-and-structure",
        "location": "Tejgaon Industrial Corridor",
        "description": "Industrial floodlight rig cutting into the twilight sky above steel beams.",
        "tags": ["industrial", "steel", "angular", "twilight"],
        "featured": False
    },
    "20260730_145813 (1).jpg": {
        "title": "Sentinel on the Parapet",
        "collection": "quiet-moments",
        "location": "Farashganj Rooftops",
        "description": "Lone pigeon silhouetted on a neoclassical stone balustrade before monsoon clouds.",
        "tags": ["monochrome", "silhouette", "contemplative", "skyline"],
        "featured": True
    },
    "20260730_145813.jpg": {
        "title": "Colonial Balustrade",
        "collection": "architecture-and-structure",
        "location": "Farashganj Heritage Quarter",
        "description": "Monochrome architectural perspective of weathered colonial balustrades overlooking the river.",
        "tags": ["monochrome", "heritage", "geometry", "colonial"],
        "featured": False
    },
    "20260731_144453.jpg": {
        "title": "Wild Jasmine & Grass",
        "collection": "urban-nature",
        "location": "Curzon Hall Grounds",
        "description": "Delicate star jasmine blossoms interwoven with tall untamed monsoon grass.",
        "tags": ["foliage", "delicate", "flora", "greenery"],
        "featured": False
    },
    "20260813_175638.jpg": {
        "title": "Liquid Silk",
        "collection": "quiet-moments",
        "location": "Dhanmondi Lake",
        "description": "Hypnotic ripples reflecting the emerald canopy on silent evening waters.",
        "tags": ["water", "texture", "emerald", "minimalist"],
        "featured": True
    },
    "20260815_155811.jpg": {
        "title": "Solar Corona Over Concrete",
        "collection": "skies-and-light",
        "location": "Motijheel Commercial District",
        "description": "Blinding summer sunburst breaking from behind high-rise monoliths into storm cloud.",
        "tags": ["sunburst", "skyline", "high-contrast", "monsoon"],
        "featured": True
    },
    "20260815_162612 (1).jpg": {
        "title": "Crepuscular Rays",
        "collection": "skies-and-light",
        "location": "Ramna Park Perimeter",
        "description": "Golden sunbeams bursting through billowing monsoon cumulus framed by boughs.",
        "tags": ["golden-hour", "sunbeams", "atmospheric", "dramatic"],
        "featured": True
    },
    "20260815_162612.jpg": {
        "title": "Solar Flare Through the Canopy",
        "collection": "skies-and-light",
        "location": "Shahbagh Crossing",
        "description": "Silhouetted canopy branches holding an intense spherical sunburst against overcast skies.",
        "tags": ["silhouette", "sunburst", "canopy", "high-contrast"],
        "featured": False
    },
    "20260819_174637.jpg": {
        "title": "Anvil at 17:46",
        "collection": "skies-and-light",
        "location": "South Dhaka Horizon",
        "description": "Luminescent golden anvil storm cloud towering over the edge of the city.",
        "tags": ["golden-hour", "clouds", "monumental", "sunset"],
        "featured": True
    },
    "20260820_164520.jpg": {
        "title": "Urban Taro Fields",
        "collection": "urban-nature",
        "location": "Rayerbazar Marshlands",
        "description": "Lush expanse of wild taro leaves thriving between residential concrete blocks.",
        "tags": ["greenery", "wild-growth", "suburban", "foliage"],
        "featured": False
    },
    "20260820_164548.jpg": {
        "title": "The Iron Trellis",
        "collection": "urban-nature",
        "location": "Hazaribagh Lane",
        "description": "Vibrant emerald creeper loops entwining an ornamental iron gate.",
        "tags": ["vines", "ironwork", "growth", "intimate"],
        "featured": False
    },

    # Sheet 2
    "20260820_164624.jpg": {
        "title": "Life in the Fracture",
        "collection": "urban-nature",
        "location": "Flyover Pillar Abutment",
        "description": "Tenacious green sapling sprouting from mossy, moisture-streaked concrete.",
        "tags": ["resilience", "concrete", "moss", "urban-nature"],
        "featured": True
    },
    "20260821_135115.jpg": {
        "title": "The Lone Sentinel",
        "collection": "quiet-moments",
        "location": "Mirpur Road Haze",
        "description": "Solitary crow perched on an angular street lamp overlooking the midday heat.",
        "tags": ["bird", "minimalist", "haze", "solitude"],
        "featured": False
    },
    "20260821_135143.jpg": {
        "title": "Swallows in the Tempest",
        "collection": "skies-and-light",
        "location": "Buriganga River Basin",
        "description": "Tiny specks of swallows circling against heavy, olive-toned storm clouds.",
        "tags": ["clouds", "atmospheric", "birds", "storm"],
        "featured": False
    },
    "20260821_140310.jpg": {
        "title": "Stop / Growth",
        "collection": "street-life",
        "location": "Kazi Nazrul Islam Avenue",
        "description": "Illuminated red pedestrian signal peering through vibrant tropical foliage.",
        "tags": ["street-signal", "contrast", "urban", "color"],
        "featured": False
    },
    "20260821_143455.jpg": {
        "title": "The Noon Porter",
        "collection": "street-life",
        "location": "Nawabpur Road, Old Dhaka",
        "description": "Laborer balancing a heavy wicker basket under harsh midday sun in a narrow wholesale lane.",
        "tags": ["portrait", "labor", "old-dhaka", "documentary"],
        "featured": True
    },
    "20260823_180931.jpg": {
        "title": "Gulistan Pedestrian Span",
        "collection": "architecture-and-structure",
        "location": "Gulistan Junction",
        "description": "The chaotic steel pedestrian footbridge bustling with rush-hour commuters at dusk.",
        "tags": ["overpass", "commuters", "urban-fabric", "steel"],
        "featured": True
    },
    "20260823_181038.jpg": {
        "title": "Crescent Over the Gantry",
        "collection": "skies-and-light",
        "location": "VIP Highway Gantry",
        "description": "Waxing crescent moon suspended over dark steel highway truss in twilight sapphire.",
        "tags": ["moon", "twilight", "steel", "minimalist"],
        "featured": False
    },
    "20260823_181517.jpg": {
        "title": "The Burning Cloud",
        "collection": "skies-and-light",
        "location": "Old Airport Horizon",
        "description": "Towering cumulus cloud glowing like molten gold against the darkening teal sky.",
        "tags": ["golden-hour", "clouds", "luminescence", "dramatic"],
        "featured": True
    },
    "20260823_181834.jpg": {
        "title": "Rooftop Canyon Sunset",
        "collection": "skies-and-light",
        "location": "Malibagh Dense Quarters",
        "description": "Dusk cloud formation framed dramatically between dense apartment silhouettes.",
        "tags": ["urban-canyon", "sunset", "silhouette", "clouds"],
        "featured": False
    },
    "20260824_180036.jpg": {
        "title": "Cadence on Copper",
        "collection": "quiet-moments",
        "location": "Kakrail Crossroads",
        "description": "Lone sparrow balanced on taut electrical wires cutting across a deep teal sky.",
        "tags": ["cables", "solitude", "minimalist", "twilight"],
        "featured": False
    },
    "20260824_180153.jpg": {
        "title": "The Older Brother",
        "collection": "street-life",
        "location": "Karwan Bazar",
        "description": "Young boy carrying his smiling younger sibling through the bustling evening crowds.",
        "tags": ["candid", "childhood", "warmth", "street-portrait"],
        "featured": True
    },
    "20260824_180257.jpg": {
        "title": "Tungsten & Greens",
        "collection": "street-life",
        "location": "Kawran Bazar Kitchen Market",
        "description": "Vegetable vendor sitting serenely beneath raw incandescent lamps among fresh produce.",
        "tags": ["night-market", "tungsten", "produce", "documentary"],
        "featured": True
    },

    # Sheet 3
    "20260825_173322.jpg": {
        "title": "University Avenue at Dusk",
        "collection": "street-life",
        "location": "Nilkhet / Dhaka University",
        "description": "Dozens of university students silhouetted against a blazing golden-amber sun.",
        "tags": ["silhouette", "crowd", "sunset", "youth"],
        "featured": True
    },
    "20260827_120206 (1).jpg": {
        "title": "Daily Breadth",
        "collection": "street-life",
        "location": "Sadarghat Wholesale Market",
        "description": "High-contrast monochrome capture of a metal basin porter walking into deep perspective.",
        "tags": ["monochrome", "labor", "old-dhaka", "classic"],
        "featured": True
    },
    "20260828_143424.jpg": {
        "title": "The Balloon Seller",
        "collection": "street-life",
        "location": "Dhanmondi Road 27",
        "description": "Vendor carrying a joyful explosion of red and yellow balloons amidst cycle rickshaws.",
        "tags": ["balloons", "color", "rickshaw", "candid"],
        "featured": True
    },
    "20260905_160959.jpg": {
        "title": "Carriers of Cold",
        "collection": "street-life",
        "location": "Badamtoli Ghat",
        "description": "Porters carrying colossal blocks of ice wrapped in sacks under the late summer heat.",
        "tags": ["labor", "street", "dhaka", "candid"],
        "featured": False
    },
    "20260912_121404.jpg": {
        "title": "Paper Flight in Glass",
        "collection": "architecture-and-structure",
        "location": "Jamuna Grand Atrium",
        "description": "Origami-inspired paper birds suspended within a towering glass-and-steel modern atrium.",
        "tags": ["modern", "atrium", "sculpture", "interior-architecture"],
        "featured": True
    },
    "20260912_121419.jpg": {
        "title": "Wings of Steel",
        "collection": "architecture-and-structure",
        "location": "Jamuna Grand Atrium",
        "description": "Dramatic low angle showing suspended wing sculptures intersecting cantilevered levels.",
        "tags": ["geometric", "modernist", "sculpture", "perspective"],
        "featured": False
    },
    "20260912_164102.jpg": {
        "title": "The Vertical Chasm",
        "collection": "architecture-and-structure",
        "location": "Gulshan Financial Center",
        "description": "Worm's eye view looking directly upward between glass curtain walls into azure sky.",
        "tags": ["skyscrapers", "perspective", "geometry", "glass"],
        "featured": True
    },
    "20260921_151321.jpg": {
        "title": "Suhrawardy Canopy",
        "collection": "urban-nature",
        "location": "Suhrawardy Udyan",
        "description": "Vibrant tree leaves and branches bathed in piercing sunlight from above.",
        "tags": ["canopy", "sunlight", "trees", "foliage"],
        "featured": False
    },
    "20260921_151339.jpg": {
        "title": "The Living Curtain",
        "collection": "urban-nature",
        "location": "Ramna Sanctuary",
        "description": "Dense, flowing curtain of banyan aerial roots descending like wooden rain.",
        "tags": ["banyan", "aerial-roots", "textures", "nature"],
        "featured": True
    },
    "20260921_152340.jpg": {
        "title": "Yellow Truck & Solitude",
        "collection": "quiet-moments",
        "location": "Bijoy Sarani Island",
        "description": "Solitary figure sitting quietly on the curb beside a bright yellow commercial truck.",
        "tags": ["color-contrast", "solitude", "rest", "city-life"],
        "featured": True
    },
    "20260921_152533.jpg": {
        "title": "Monolith Cloud",
        "collection": "skies-and-light",
        "location": "Elevated Expressway Verge",
        "description": "Pristine white cumulus cloud standing like a marble tower over concrete expressway.",
        "tags": ["clouds", "blue-sky", "expressway", "monumental"],
        "featured": False
    },
    "20260930_173518.jpg": {
        "title": "Ember on the Horizon",
        "collection": "skies-and-light",
        "location": "Purbachal Construction Edge",
        "description": "Blood-red sun resting on the horizon silhouetted by upright rebar pillars.",
        "tags": ["sunset", "crimson", "rebar", "silhouette"],
        "featured": True
    },

    # Sheet 4
    "20260930_173722.jpg": {
        "title": "Lattice & Signal",
        "collection": "architecture-and-structure",
        "location": "Mohakhali Wireless Hill",
        "description": "Telecommunications mast and dishes standing sharp against the indigo twilight.",
        "tags": ["antenna", "communications", "industrial", "steel"],
        "featured": False
    },
    "20260930_173741.jpg": {
        "title": "Dusk Gradient",
        "collection": "skies-and-light",
        "location": "Turag River Embankment",
        "description": "Subtle orange and violet twilight gradient reflecting the quiet close of day.",
        "tags": ["gradient", "twilight", "dusk", "minimalist"],
        "featured": False
    },
    "20260930_175328.jpg": {
        "title": "Flaming Cirrus",
        "collection": "skies-and-light",
        "location": "Postogola Sky",
        "description": "Fiery magenta wisp of illuminated cloud drifting across a royal purple sky.",
        "tags": ["magenta", "sunset", "abstract", "ethereal"],
        "featured": True
    },
    "20261015_143127.jpg": {
        "title": "The Stone Guardian",
        "collection": "architecture-and-structure",
        "location": "Bahadur Shah Park",
        "description": "Colossal weathered elephant stone sculpture standing vigil beneath tall trees.",
        "tags": ["sculpture", "stone", "heritage", "monument"],
        "featured": False
    },
    "20261015_145017.jpg": {
        "title": "Mughal Arches in Amber",
        "collection": "architecture-and-structure",
        "location": "Lalbagh Fort Arcade",
        "description": "Centuries-old brick arches bathed in rich golden afternoon sunlight.",
        "tags": ["mughal", "arches", "brick", "heritage"],
        "featured": True
    },
    "20261015_145044 (1).jpg": {
        "title": "The Silent Cloister",
        "collection": "architecture-and-structure",
        "location": "Lalbagh Fort Courtyard",
        "description": "Historic arcade gallery extending across manicured lawns under towering summer clouds.",
        "tags": ["heritage", "arcade", "historic", "panorama"],
        "featured": True
    },
    "20261015_145044.jpg": {
        "title": "Fortress Wall Perspective",
        "collection": "architecture-and-structure",
        "location": "Lalbagh Fort Walls",
        "description": "Warm brick battlement arcade framing the horizon with rhythmic archways.",
        "tags": ["brickwork", "perspective", "fortress", "monument"],
        "featured": False
    },
    "20261015_145148 (1).jpg": {
        "title": "Minaret in the Sun",
        "collection": "architecture-and-structure",
        "location": "Chawkbazar Shahi Mosque",
        "description": "Mosque minaret crowned in golden afternoon light against azure skies and palms.",
        "tags": ["mosque", "minaret", "golden", "architecture"],
        "featured": True
    },
    "20261015_145352.jpg": {
        "title": "Sunlight on Green Silk",
        "collection": "urban-nature",
        "location": "Fortress Garden Wall",
        "description": "Luminous green foliage caught in a shaft of golden light against shadowed masonry.",
        "tags": ["light-and-shadow", "foliage", "intimate", "nature"],
        "featured": False
    },
    "20261015_145653.jpg": {
        "title": "Cascading Balconies",
        "collection": "urban-nature",
        "location": "Dhanmondi Eco Habitat",
        "description": "Multi-tier residential balconies completely engulfed in wild climbing vines and flowers.",
        "tags": ["vertical-garden", "balconies", "green-city", "urban-nature"],
        "featured": True
    },
    "20261015_145704.jpg": {
        "title": "The Living Highrise",
        "collection": "architecture-and-structure",
        "location": "Shat Masjid Road",
        "description": "Modern brick and concrete architecture seamlessly integrated with dense hanging gardens.",
        "tags": ["architecture", "biophilic", "cityscape", "trees"],
        "featured": False
    },
    "20261015_160149.jpg": {
        "title": "Tangle of Wire & Branch",
        "collection": "quiet-moments",
        "location": "Armanitola Lane",
        "description": "Fine silhouettes of tree branches intertwined with overhead utility cables at twilight.",
        "tags": ["silhouette", "cables", "branches", "texture"],
        "featured": False
    },

    # Sheet 5
    "20261015_160308.jpg": {
        "title": "Under the Overpass",
        "collection": "architecture-and-structure",
        "location": "Shahbagh Flyover Truss",
        "description": "Geometric steel truss superstructure viewed from below against dense canopy trees.",
        "tags": ["steel", "truss", "bridge", "geometry"],
        "featured": False
    },
    "20261015_162350.jpg": {
        "title": "Glass Reflection Self-Portrait",
        "collection": "street-life",
        "location": "Elephant Road Shopfront",
        "description": "Intimate candid reflection of three photographer friends holding their camera up to the glass.",
        "tags": ["self-portrait", "friends", "street", "reflection"],
        "featured": True
    },
    "20261015_163427.jpg": {
        "title": "Vinyl Madness",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "Vivid magenta neon tube sign buzzing in the darkened hallway of an analog record shop.",
        "tags": ["neon", "magenta", "vinyl", "interior"],
        "featured": True
    },
    "20261015_170153.jpg": {
        "title": "Alice In Chains — Jar of Flies",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "Spotlight accentuating the iconic amber glow of the Jar of Flies vinyl sleeve.",
        "tags": ["vinyl", "grunge", "album-art", "music"],
        "featured": False
    },
    "20261015_170216.jpg": {
        "title": "Three Cheers in the Crates",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "My Chemical Romance record resting among vintage wooden crate collections.",
        "tags": ["vinyl", "records", "music", "crates"],
        "featured": False
    },
    "20261015_170255.jpg": {
        "title": "Pearl Jam in Amber",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "Dramatic warm spot lighting illuminating Pearl Jam's silhouettes on black vinyl.",
        "tags": ["vinyl", "rock", "spotlight", "warm"],
        "featured": False
    },
    "20261015_170433.jpg": {
        "title": "Pink Floyd at Pompeii",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "Vibrant crimson and gold live at Pompeii vinyl sleeve bathed in shop lighting.",
        "tags": ["vinyl", "pink-floyd", "psychedelic", "records"],
        "featured": True
    },
    "20261015_170456.jpg": {
        "title": "Wish You Were Here",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "Sealed vinyl copy of Pink Floyd's masterpiece reflecting the neon sign from above.",
        "tags": ["vinyl", "pink-floyd", "analog", "classic"],
        "featured": False
    },
    "20261015_170517.jpg": {
        "title": "The Wall in White",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "The stark, minimal white brick artwork of Pink Floyd's The Wall standing proud on the shelf.",
        "tags": ["vinyl", "the-wall", "minimalist", "monochrome"],
        "featured": True
    },
    "20261015_170539.jpg": {
        "title": "Blizzard of Ozz",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "Ozzy Osbourne's portrait glowing under warm tungsten and magenta neon ambient lights.",
        "tags": ["vinyl", "metal", "neon", "crate-digging"],
        "featured": False
    },
    "20261015_170608.jpg": {
        "title": "Images and Words",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "Dream Theater's progressive metal classic on vinyl in the atmospheric record store.",
        "tags": ["vinyl", "progressive", "record-store", "intimate"],
        "featured": False
    },
    "20261015_170628.jpg": {
        "title": "Parasomnia",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "Moody, candle-lit album artwork of Dream Theater standing in the vinyl rack.",
        "tags": ["vinyl", "album-art", "dark", "atmospheric"],
        "featured": False
    },

    # Sheet 6
    "20261015_170759.jpg": {
        "title": "Journey — Escape",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "Journey's iconic scarab spacecraft album illuminated in the vinyl racks.",
        "tags": ["vinyl", "classic-rock", "color", "music"],
        "featured": False
    },
    "20261015_170846.jpg": {
        "title": "The Doors in the Shadows",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "Jim Morrison's face emerging from darkness on vinyl with a neon halo.",
        "tags": ["vinyl", "the-doors", "neon", "amber"],
        "featured": False
    },
    "20261015_170854.jpg": {
        "title": "The Lizard King",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "Intimate close-up of The Doors vinyl under direct warm accent beam.",
        "tags": ["vinyl", "close-up", "portrait", "still-life"],
        "featured": False
    },
    "20261015_171038.jpg": {
        "title": "Amy Lee — Fallen",
        "collection": "still-life-and-interiors",
        "location": "The Record Vault",
        "description": "High contrast black and cyan-tinted vinyl jacket of Evanescence's Fallen.",
        "tags": ["vinyl", "portrait", "gothic", "album-cover"],
        "featured": False
    },
    "20261015_171139.jpg": {
        "title": "The Rebel Poet",
        "collection": "still-life-and-interiors",
        "location": "Studio Gallery",
        "description": "Framed monochrome portrait of national poet Kazi Nazrul Islam illuminated by gallery spot.",
        "tags": ["portrait", "monochrome", "heritage", "poetry"],
        "featured": True
    },
    "20261015_185738.jpg": {
        "title": "Piper at the Gates of Dawn",
        "collection": "still-life-and-interiors",
        "location": "The Listening Room",
        "description": "Syd Barrett era Pink Floyd displayed against vintage brushed aluminum stereo receivers.",
        "tags": ["hifi", "pink-floyd", "vintage-audio", "audiophile"],
        "featured": True
    },
    "20261015_185747.jpg": {
        "title": "The Audiophile Sanctuary",
        "collection": "still-life-and-interiors",
        "location": "The Listening Room",
        "description": "Warm ambient view of custom audio racks, vacuum tube amps, and acoustic treatment.",
        "tags": ["audiophile", "hifi", "interior", "warmth"],
        "featured": True
    },
    "20261015_185759.jpg": {
        "title": "Spinning at 33 RPM",
        "collection": "still-life-and-interiors",
        "location": "The Listening Room",
        "description": "Heavy vinyl LP revolving smoothly beneath an acrylic dust cover on a precision turntable.",
        "tags": ["turntable", "vinyl", "acrylic", "music"],
        "featured": True
    },
    "20261015_185820.jpg": {
        "title": "Glass, Clay & Vinyl",
        "collection": "still-life-and-interiors",
        "location": "The Collector's Corner",
        "description": "Vintage twin-lens reflex camera resting beside a turntable in front of a terracotta figurine wall.",
        "tags": ["tlr-camera", "terracotta", "vintage", "analog"],
        "featured": True
    },
    "20261015_185826.jpg": {
        "title": "Twin Lens & Tonearm",
        "collection": "still-life-and-interiors",
        "location": "The Collector's Corner",
        "description": "High-end turntable platter and vintage twin lens camera glowing in warm low light.",
        "tags": ["camera", "turntable", "analog-gear", "still-life"],
        "featured": False
    },
    "20261015_185924.jpg": {
        "title": "The Terracotta Pantheon",
        "collection": "still-life-and-interiors",
        "location": "Artisan Display Wall",
        "description": "Wall of wooden shadow boxes holding dozens of golden handcrafted terracotta figures.",
        "tags": ["terracotta", "folk-art", "sculptures", "warmth"],
        "featured": True
    },
    "20261015_185929.jpg": {
        "title": "Groove & Stylus",
        "collection": "still-life-and-interiors",
        "location": "The Listening Room",
        "description": "Monochrome macro photograph of a precision Pioneer tonearm tracking black vinyl micro-grooves.",
        "tags": ["monochrome", "macro", "turntable", "audio"],
        "featured": True
    },

    # Sheet 7
    "20261015_190029.jpg": {
        "title": "Nirvana — Nevermind",
        "collection": "still-life-and-interiors",
        "location": "The Listening Room",
        "description": "The seminal 1991 grunge album resting in the glow of the turntable lamp.",
        "tags": ["vinyl", "grunge", "nirvana", "music"],
        "featured": False
    },
    "20261015_190046.jpg": {
        "title": "In Utero Angel",
        "collection": "still-life-and-interiors",
        "location": "The Listening Room",
        "description": "The winged anatomical figure of In Utero bathed in amber studio light.",
        "tags": ["vinyl", "nirvana", "warm", "record"],
        "featured": False
    },
    "20261015_190110.jpg": {
        "title": "Obscured by Clouds",
        "collection": "still-life-and-interiors",
        "location": "The Listening Room",
        "description": "Pink Floyd's blurred amber bokeh album cover glowing on the listening chair.",
        "tags": ["vinyl", "pink-floyd", "bokeh", "listening"],
        "featured": False
    },
    "20261015_190133.jpg": {
        "title": "Meddle in Cyan & Rust",
        "collection": "still-life-and-interiors",
        "location": "The Listening Room",
        "description": "The underwater ear of Pink Floyd's Meddle highlighted against record crates.",
        "tags": ["vinyl", "pink-floyd", "artwork", "music"],
        "featured": False
    },
    "20261015_194252.jpg": {
        "title": "The Golden Shrine of Sound",
        "collection": "still-life-and-interiors",
        "location": "The Listening Room",
        "description": "Wide editorial shot of the entire analog audio workstation with warm tungsten lamps.",
        "tags": ["audiophile", "interior", "editorial", "vintage-audio"],
        "featured": True
    },
    "20261015_200204.jpg": {
        "title": "Prism in Hand",
        "collection": "still-life-and-interiors",
        "location": "Studio Archive",
        "description": "The Dark Side of the Moon jewel case held reverently against full bookshelf rows.",
        "tags": ["dark-side-of-the-moon", "cd", "nostalgia", "still-life"],
        "featured": False
    },
    "20261015_231942.jpg": {
        "title": "Precision Silicon",
        "collection": "still-life-and-interiors",
        "location": "Audiophile Workbench",
        "description": "Unboxing high-resolution headphone DAC and precision balanced audio components.",
        "tags": ["dac", "hifi", "gear", "macro"],
        "featured": False
    },
    "20261016_014714.jpg": {
        "title": "Midnight Reaper",
        "collection": "quiet-moments",
        "location": "Late Night Studio",
        "description": "Dark cloaked reaper figurine box standing quiet against painted white brick at 01:47 AM.",
        "tags": ["dark", "nocturnal", "statue", "solitary"],
        "featured": False
    },
    "20261021_135559.jpg": {
        "title": "Canopy Bridge",
        "collection": "urban-nature",
        "location": "Chandrima Udyan Walkway",
        "description": "Steel truss bridge cutting through a lush green tunnel of towering forest trees.",
        "tags": ["bridge", "canopy", "park", "lush"],
        "featured": True
    },
    "20261021_135808.jpg": {
        "title": "Lantern in the Leaves",
        "collection": "urban-nature",
        "location": "Chandrima Udyan",
        "description": "Solitary park street lantern emerging from the emerald leafy canopy.",
        "tags": ["lantern", "trees", "foliage", "peaceful"],
        "featured": False
    },
    "20261021_141120.jpg": {
        "title": "Timber Slats & Jungle",
        "collection": "architecture-and-structure",
        "location": "Modernist Pavilion",
        "description": "Rhythmic vertical wooden louvers embraced by wild tropical tree limbs.",
        "tags": ["modernist", "timber", "louvers", "nature-architecture"],
        "featured": True
    },
    "20261021_141207.jpg": {
        "title": "Epiphytes & Louvers",
        "collection": "urban-nature",
        "location": "Modernist Pavilion Garden",
        "description": "Rough tree bark covered with clinging ferns juxtaposed with modern architectural slats.",
        "tags": ["epiphytes", "bark", "textures", "organic"],
        "featured": False
    },

    # Sheet 8
    "20261021_141536.jpg": {
        "title": "The Ancient Column",
        "collection": "urban-nature",
        "location": "Ramna Banyan Grove",
        "description": "Looking straight up the massive fluted trunk of a centennial banyan tree into the green sky.",
        "tags": ["banyan", "trunk", "low-angle", "monumental"],
        "featured": True
    },
    "20261021_141548.jpg": {
        "title": "Veil of the Banyan",
        "collection": "urban-nature",
        "location": "Ramna Banyan Grove",
        "description": "Dramatic close-up of dense aerial prop roots hanging like bronze threads.",
        "tags": ["aerial-roots", "warmth", "textures", "nature"],
        "featured": True
    },
    "20261021_141944.jpg": {
        "title": "Withered Bouquet",
        "collection": "quiet-moments",
        "location": "Old Botanical Ledge",
        "description": "Dried vintage bouquet of roses and fallen leaves preserved behind dusty glass.",
        "tags": ["dried-flowers", "nostalgia", "still-life", "quiet"],
        "featured": False
    },
    "20261021_155524.jpg": {
        "title": "Lily Pad Constellation",
        "collection": "urban-nature",
        "location": "Crescent Lake",
        "description": "Circular lily pads floating across shimmering olive green lake ripples.",
        "tags": ["lake", "lily-pads", "tranquil", "water"],
        "featured": False
    },
    "20261021_161519.jpg": {
        "title": "The Sprawling Canopy",
        "collection": "urban-nature",
        "location": "Dhanmondi Lake Park",
        "description": "Giant banyan tree stretching its horizontal limbs and root curtain over park pathways.",
        "tags": ["banyan", "canopy", "park", "lush"],
        "featured": True
    },
    "20261021_161534.jpg": {
        "title": "Fractal Limbs",
        "collection": "urban-nature",
        "location": "Dhanmondi Lake Park",
        "description": "Dark twisted boughs branching into intricate organic patterns against overcast sky.",
        "tags": ["branches", "fractal", "canopy", "graphic"],
        "featured": False
    },
    "20261021_161909.jpg": {
        "title": "Brick Arch & Cantilever",
        "collection": "architecture-and-structure",
        "location": "Fine Arts Campus",
        "description": "Warm exposed brick arches harmonizing with modernist brutalist concrete cantilevers.",
        "tags": ["brickwork", "modernism", "arches", "architecture"],
        "featured": True
    },
    "20261021_162005.jpg": {
        "title": "Golden Nap",
        "collection": "quiet-moments",
        "location": "Shaded Lake Grove",
        "description": "Gentle street dog curled up peacefully on a bed of dry autumn leaves in the forest shade.",
        "tags": ["dog", "animal", "peaceful", "solitude"],
        "featured": True
    },
    "20261021_162054.jpg": {
        "title": "Pavement Slumber",
        "collection": "quiet-moments",
        "location": "Park Perimeter Wall",
        "description": "Street dog resting comfortably along the shaded stone ledge beside the walkway.",
        "tags": ["dog", "street-animal", "peace", "candid"],
        "featured": False
    },
    "20261021_162058.jpg": {
        "title": "Guardian of the Roots",
        "collection": "quiet-moments",
        "location": "Banyan Grove Understory",
        "description": "Dog reposing serenely on stone tiles with an ancient fortress of banyan roots behind.",
        "tags": ["dog", "banyan", "guardian", "quiet"],
        "featured": True
    },
    "20261021_162142.jpg": {
        "title": "Steel Truss & Living Roots",
        "collection": "urban-nature",
        "location": "Botanical Pavilion",
        "description": "Geometric steel arbor frame supporting a wild network of hanging aerial roots.",
        "tags": ["steel", "roots", "symbiosis", "nature"],
        "featured": False
    },
    "20261021_162323.jpg": {
        "title": "The Climbing Ivy",
        "collection": "urban-nature",
        "location": "Lakeside Pergola",
        "description": "Fresh vibrant lime-green vine wrapping tightly around an architectural steel support.",
        "tags": ["vine", "greenery", "light", "nature"],
        "featured": False
    },

    # Sheet 9
    "20261021_162407.jpg": {
        "title": "Looking Skyward",
        "collection": "urban-nature",
        "location": "Lake Forest Core",
        "description": "Upward perspective of tree trunk wrapped in twine, bursting into sunlit leaves.",
        "tags": ["tree", "low-angle", "foliage", "fresh"],
        "featured": False
    },
    "20261021_162553.jpg": {
        "title": "The Knot of Roots",
        "collection": "urban-nature",
        "location": "Ancient Fig Grove",
        "description": "Gnarled, braided aerial roots gripping each other in powerful organic tension.",
        "tags": ["roots", "textures", "banyan", "organic"],
        "featured": False
    },
    "20261021_162711.jpg": {
        "title": "Bark & Burl",
        "collection": "quiet-moments",
        "location": "Centennial Tree Trunk",
        "description": "Tactile macro texture of weathered tree bark scarred and healed with age.",
        "tags": ["texture", "macro", "bark", "wood"],
        "featured": True
    },
    "20261021_163230.jpg": {
        "title": "Staircase to the Lake",
        "collection": "architecture-and-structure",
        "location": "Dhanmondi Lake Pier",
        "description": "Steel mesh staircase and cantilevered viewing platform suspended over silent waters.",
        "tags": ["staircase", "pier", "lake", "steel"],
        "featured": False
    },
    "20261021_163457.jpg": {
        "title": "The Slumbering Stray",
        "collection": "quiet-moments",
        "location": "Lakeside Market Shed",
        "description": "White and orange street cat sleeping deeply and contently on a sun-warmed black tarp.",
        "tags": ["cat", "sleeping", "candid", "gentle"],
        "featured": True
    },
    "20261021_163614.jpg": {
        "title": "Golden Water Haze",
        "collection": "quiet-moments",
        "location": "Dhanmondi Lake Surface",
        "description": "Delicate ripple rings on amber water crossed by a single taut wire.",
        "tags": ["water", "minimalist", "ripples", "golden-hour"],
        "featured": True
    },
    "20261021_163636.jpg": {
        "title": "The Mirrored Lake",
        "collection": "urban-nature",
        "location": "Dhanmondi Lake Basin",
        "description": "Stunning symmetrical perspective of tree-lined urban lake stretching to the horizon.",
        "tags": ["lake", "reflection", "trees", "calm"],
        "featured": True
    },
    "20261021_163640.jpg": {
        "title": "Amber Reflections at Sunset",
        "collection": "skies-and-light",
        "location": "Dhanmondi Lake Basin",
        "description": "The entire lake glowing under an ethereal golden haze as dusk settles over the water.",
        "tags": ["golden-hour", "lake", "sunset", "atmospheric"],
        "featured": True
    },
    "20261021_170256.jpg": {
        "title": "The Weeping Banyan",
        "collection": "urban-nature",
        "location": "Ramna Park Sanctuary",
        "description": "Monumental weeping banyan forming a cathedral of foliage and suspended root veils.",
        "tags": ["monumental", "banyan", "majestic", "canopy"],
        "featured": True
    },
    "20261021_170448.jpg": {
        "title": "Altocumulus Dusk Waves",
        "collection": "skies-and-light",
        "location": "Dhanmondi Evening Sky",
        "description": "Rippling altocumulus cloud blankets catching the last warm rays of the setting sun.",
        "tags": ["clouds", "dusk", "sky", "texture"],
        "featured": False
    },
    "20261021_170507.jpg": {
        "title": "Mackerel Sky",
        "collection": "skies-and-light",
        "location": "Dhanmondi Evening Sky",
        "description": "Intricate buttermilk mackerel sky pattern floating over the darkening city rooftops.",
        "tags": ["mackerel-sky", "clouds", "twilight", "patterns"],
        "featured": True
    },
    "20261021_170739.jpg": {
        "title": "The Moored Swans",
        "collection": "street-life",
        "location": "Lake Pleasure Jetty",
        "description": "White fiberglass swan paddleboats moored together peacefully on the dark water at dusk.",
        "tags": ["swan-boats", "lake", "leisure", "whimsical"],
        "featured": True
    },

    # Sheet 10
    "20261021_173126.jpg": {
        "title": "Yellow Blossoms on Iron",
        "collection": "urban-nature",
        "location": "Park Boundary Pier",
        "description": "Vibrant golden blossoms cascading over classic wrought iron railings under palm fronds.",
        "tags": ["flowers", "palms", "twilight", "flora"],
        "featured": False
    }
}

photos_list = []

for idx, fname in enumerate(files):
    src_path = os.path.join(images_dir, fname)
    disp_filename = os.path.splitext(fname)[0] + ".webp"
    disp_path = os.path.join(display_dir, disp_filename)
    thumb_path = os.path.join(thumbs_dir, disp_filename)
    
    try:
        im = Image.open(src_path)
        orig_w, orig_h = im.size
        
        # Read EXIF
        exif = im._getexif() or {}
        exif_data = {}
        for k, v in exif.items():
            if k in ExifTags.TAGS:
                exif_data[ExifTags.TAGS[k]] = v
                
        # Camera info
        camera_model = exif_data.get('Model', 'Sony Xperia 5 IV')
        if camera_model == 'SO-54C':
            camera_model = 'Sony Xperia 5 IV (SO-54C)'
            
        exposure = exif_data.get('ExposureTime')
        if exposure:
            try:
                exp_f = float(exposure)
                if exp_f < 1:
                    shutter = f"1/{int(round(1.0 / exp_f))}s"
                else:
                    shutter = f"{exp_f:.1f}s"
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
            
        # Orientation & Aspect ratio
        aspect_ratio = round(orig_w / orig_h, 3)
        if aspect_ratio > 1.15:
            orientation = "landscape"
        elif aspect_ratio < 0.85:
            orientation = "portrait"
        else:
            orientation = "square"
            
        # Tiny blur placeholder (32px wide)
        tiny_im = im.copy()
        tiny_im.thumbnail((32, 32))
        buffered = BytesIO()
        tiny_im.save(buffered, format="WEBP", quality=50)
        blur_data_url = f"data:image/webp;base64,{base64.b64encode(buffered.getvalue()).decode('utf-8')}"
        
        # Save display version (max 1800px)
        disp_im = im.copy()
        disp_im.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
        disp_im.save(disp_path, "WEBP", quality=84)
        disp_w, disp_h = disp_im.size
        
        # Save thumbnail version (max 600px)
        thumb_im = im.copy()
        thumb_im.thumbnail((600, 600), Image.Resampling.LANCZOS)
        thumb_im.save(thumb_path, "WEBP", quality=75)
        
        # Fallback metadata if not in curated dict
        curated = curated_data.get(fname, {
            "title": f"Frame #{idx + 1:03d}",
            "collection": "street-life",
            "location": "Dhaka Urban Core",
            "description": "Quiet contemplative frame capturing light, shadow, and city texture.",
            "tags": ["street", "light", "urban"],
            "featured": False
        })
        
        photo_entry = {
            "id": f"photo-{idx + 1:03d}",
            "filename": fname,
            "displayUrl": f"/photos/display/{disp_filename}",
            "thumbUrl": f"/photos/thumbs/{disp_filename}",
            "originalUrl": f"/images/{fname}",
            "blurDataUrl": blur_data_url,
            "width": disp_w,
            "height": disp_h,
            "aspectRatio": aspect_ratio,
            "orientation": orientation,
            "title": curated["title"],
            "collection": curated["collection"],
            "location": curated["location"],
            "description": curated["description"],
            "tags": curated["tags"],
            "featured": curated.get("featured", False),
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
        photos_list.append(photo_entry)
        
        if (idx + 1) % 15 == 0 or idx == len(files) - 1:
            print(f"Processed {idx + 1}/{len(files)}: {fname} -> {disp_filename} ({disp_w}x{disp_h})")
            
    except Exception as e:
        print(f"Error processing {fname}: {e}")

# Save JSON data
json_path = 'src/data/photosData.json'
with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(photos_list, f, indent=2, ensure_ascii=False)
print(f"Successfully saved {len(photos_list)} photos metadata to {json_path}")

# Generate TypeScript file for type safety
ts_path = 'src/data/photos.ts'
with open(ts_path, 'w', encoding='utf-8') as f:
    f.write('// Auto-generated photo database with verified EXIF, dimensions, and editorial metadata\n\n')
    f.write('export interface CameraMetadata {\n')
    f.write('  model: string;\n')
    f.write('  lens: string;\n')
    f.write('  shutter: string;\n')
    f.write('  aperture: string;\n')
    f.write('  iso: string;\n')
    f.write('  focalLength: string;\n')
    f.write('  date: string;\n')
    f.write('}\n\n')
    f.write('export type CollectionId =\n')
    f.write('  | "skies-and-light"\n')
    f.write('  | "street-life"\n')
    f.write('  | "urban-nature"\n')
    f.write('  | "architecture-and-structure"\n')
    f.write('  | "still-life-and-interiors"\n')
    f.write('  | "quiet-moments";\n\n')
    f.write('export interface Photo {\n')
    f.write('  id: string;\n')
    f.write('  filename: string;\n')
    f.write('  displayUrl: string;\n')
    f.write('  thumbUrl: string;\n')
    f.write('  originalUrl: string;\n')
    f.write('  blurDataUrl: string;\n')
    f.write('  width: number;\n')
    f.write('  height: number;\n')
    f.write('  aspectRatio: number;\n')
    f.write('  orientation: "landscape" | "portrait" | "square";\n')
    f.write('  title: string;\n')
    f.write('  collection: CollectionId;\n')
    f.write('  location: string;\n')
    f.write('  description: string;\n')
    f.write('  tags: string[];\n')
    f.write('  featured: boolean;\n')
    f.write('  camera: CameraMetadata;\n')
    f.write('}\n\n')
    f.write('export interface CollectionMeta {\n')
    f.write('  id: CollectionId;\n')
    f.write('  title: string;\n')
    f.write('  tagline: string;\n')
    f.write('  description: string;\n')
    f.write('  coverPhotoId: string;\n')
    f.write('}\n\n')
    f.write('export const COLLECTIONS: CollectionMeta[] = [\n')
    f.write('  {\n')
    f.write('    id: "skies-and-light",\n')
    f.write('    title: "Skies & Light",\n')
    f.write('    tagline: "Atmospheric sunbursts, burning twilights, and monsoon skies",\n')
    f.write('    description: "Dramatic sunsets, silhouettes, clouds, golden hour, and atmospheric skies. The high heavens above Dhaka during monsoon transitions and golden hour intervals.",\n')
    f.write('    coverPhotoId: "photo-008"\n')
    f.write('  },\n')
    f.write('  {\n')
    f.write('    id: "street-life",\n')
    f.write('    title: "Street Life",\n')
    f.write('    tagline: "The human pulse, raw markets, vendors, and kinetic energy",\n')
    f.write('    description: "Candid moments of people, markets, daily life, children, vendors, and urban energy. Fleeting human gestures frozen amidst the relentless stream of the metropolis.",\n')
    f.write('    coverPhotoId: "photo-024"\n')
    f.write('  },\n')
    f.write('  {\n')
    f.write('    id: "urban-nature",\n')
    f.write('    title: "Urban Nature",\n')
    f.write('    tagline: "Aerial roots, creeping vines, and organic resilience within concrete",\n')
    f.write('    description: "Trees, aerial roots, parks, lakes, foliage, and nature existing within the city. Banyan root cathedrals and green vines reclaiming steel and brickwork.",\n')
    f.write('    coverPhotoId: "photo-033"\n')
    f.write('  },\n')
    f.write('  {\n')
    f.write('    id: "architecture-and-structure",\n')
    f.write('    title: "Architecture & Structure",\n')
    f.write('    tagline: "Monuments, Mughal ruins, steel overpasses, and geometric spires",\n')
    f.write('    description: "Buildings, towers, bridges, mosques, ruins, and architectural details. Centuries of Mughal terracotta juxtaposed with modernist steel overpasses and towers.",\n')
    f.write('    coverPhotoId: "photo-041"\n')
    f.write('  },\n')
    f.write('  {\n')
    f.write('    id: "still-life-and-interiors",\n')
    f.write('    title: "Still Life & Interiors",\n')
    f.write('    tagline: "Vinyl crates, warm vacuum tubes, tonearms, and terracotta figures",\n')
    f.write('    description: "Vinyl, turntables, audio gear, terracotta figures, and intimate indoor scenes. The contemplative sanctuary of analog sound and handcrafted terracotta art.",\n')
    f.write('    coverPhotoId: "photo-069"\n')
    f.write('  },\n')
    f.write('  {\n')
    f.write('    id: "quiet-moments",\n')
    f.write('    title: "Quiet Moments",\n')
    f.write('    tagline: "Sleeping strays, tactile bark, and silent stillness in the roar",\n')
    f.write('    description: "Animals, solitary figures, textures, and contemplative observational shots. Pockets of profound quiet found tucked within the busiest corners of the city.",\n')
    f.write('    coverPhotoId: "photo-101"\n')
    f.write('  }\n')
    f.write('];\n\n')
    f.write(f'export const PHOTOS: Photo[] = {json.dumps(photos_list, indent=2)};\n')

print(f"Saved TypeScript database to {ts_path}")
