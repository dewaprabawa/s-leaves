#!/usr/bin/env python3
"""Repo SEO/GEO coverage gap scan for all tour slugs."""
import json
import re
from pathlib import Path

root = Path("/workspace")
tours_src = (root / "src/data/tours.ts").read_text()
park_src = (root / "src/data/parkWorkshopTours.ts").read_text()
geo_src = (root / "src/data/activityGeo.ts").read_text()
park_geo = (root / "src/data/parkWorkshopGeo.ts").read_text()
kw_src = (root / "src/data/activityKeywords.ts").read_text()
llms_src = (root / "src/data/geoContent.ts").read_text()
footer = (root / "src/data/seoFooterLinks.ts").read_text()
guides = (root / "src/data/tourGuides.ts").read_text()
hub = (root / "src/data/clusterPostsActivities.ts").read_text()

slugs = re.findall(r'slug:\s*"([^"]+)"', tours_src) + re.findall(
    r'slug:\s*"([^"]+)"', park_src
)
slugs += re.findall(r"slug:\s*([A-Z_]+)", tours_src)
const_map = {
    "GIRLS_TRIP_SLUG": "bali-private-itinerary",
    "UTV_BUGGY_SLUG": "utv-buggy-bali-adventure",
    "BALI_SAFARI_SLUG": "bali-safari-and-marine-park",
    "MOTORBIKE_TRIP_SLUG": "bali-motorbike-traveling-trip",
}
slugs = [const_map.get(s, s) for s in slugs]
seen = set()
uniq = []
for s in slugs:
    if s not in seen and re.match(r"^[a-z0-9-]+$", s):
        seen.add(s)
        uniq.append(s)

titles = re.findall(r'seoTitle:\s*"([^"]+)"', tours_src + park_src)

print(f"TOURS found: {len(uniq)}")
print("slug | geo keywords llms summary footer guides hub")
gaps = []
for slug in uniq:
    const_names = [name for name, value in const_map.items() if value == slug]
    row = {
        "slug": slug,
        "geo": slug in geo_src or slug in park_geo or any(name in geo_src for name in const_names),
        "keywords": slug in kw_src,
        "llms": slug in llms_src,
        "summary": f"slug: '{slug}'" in llms_src or f'slug: "{slug}"' in llms_src,
        "footer": slug in footer,
        "guides": slug in guides,
        "hub": slug in hub,
    }
    missing = [k for k, v in row.items() if k != "slug" and not v]
    if missing:
        gaps.append({**row, "missing": missing})
    flags = " ".join(("Y" if row[k] else "N") for k in ["geo", "keywords", "llms", "summary", "footer", "guides", "hub"])
    print(f"{slug:55} {flags}")

print("\n=== TITLE LENGTHS ===")
for t in titles:
    n = len(t)
    mark = "OK" if 30 <= n <= 60 else ("SHORT" if n < 30 else "LONG")
    print(f"{n:3} {mark:5} {t}")

print("\n=== GAPS ===")
print(json.dumps(gaps, indent=2))
