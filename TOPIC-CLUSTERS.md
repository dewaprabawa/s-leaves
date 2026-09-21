# Topic Clusters: Sekar Bali Activity

To build "Topical Authority" in the eyes of Google and AI search engines, we will use a Hub-and-Spoke model. Instead of publishing random blog posts, we will create tight clusters of content around core pillars that naturally lead back to your tours.

## Pillar 1: Authentic Balinese Food & Culture
**Pillar Page:** *The Ultimate Guide to Traditional Balinese Food in Ubud* (3,000 words, ranks for broad terms).
* **Spoke 1:** 5 Essential Balinese Spices (Base Genep) You Need to Know ➔ *Links to Cooking Class Tour* — live `/blog/5-essential-balinese-spices`
* **Spoke 2:** What is Lawar? A Guide to Bali's Most Famous Dish ➔ *Links to Cooking Class Tour* — live `/blog/what-is-lawar-balinese-dish` (2026-09-21)
* **Spoke 3:** How Traditional Balinese Kitchens Work ➔ *Links to Cooking Class Tour* — live `/blog/how-traditional-balinese-kitchens-work` (2026-09-21)
* **Spoke 4:** Why You Should Pound Spices by Hand (Not a Blender) ➔ *Links to Cooking Class Tour* — live `/blog/pound-spices-by-hand-not-blender` (2026-09-21)
* **Commercial spokes:** worth-it 2026 · vegetarian menu · morning vs afternoon — see `clusterPostsCookingJeep.ts`

## Pillar 2: Slow Travel & Village Life in Bali
**Pillar Page:** *Escaping the Crowds: A Guide to Slow Travel in Bali* (3,000 words, ranks for "authentic bali experiences").
* **Spoke 1:** The History of Pejeng: Bali's Ancient Kingdom Near Ubud ➔ *Links to Cycling Tour*
* **Spoke 2:** What is the Subak System? Understanding Bali's Rice Terraces ➔ *Links to Cycling Tour*
* **Spoke 3:** Morning vs. Afternoon Tours in Bali: Which is Better? ➔ *Links to All Tours*
* **Spoke 4:** A Guide to Balinese Temple Etiquette ➔ *Links to Cycling Tour*
* **Cycling commercial spokes (2026-09-21):** e-bike vs pedal `/blog/ebike-vs-pedal-ubud-cycling-tour` · what to wear `/blog/what-to-wear-ubud-ricefield-cycling` · family ride `/blog/ubud-cycling-tour-for-families`

## Pillar 3: Balinese Coffee
**Pillar Page:** *The Complete Guide to Bali's Coffee Culture*
* **Spoke 1:** The Truth About Luwak Coffee: Authentic vs. Commercial ➔ *Links to Coffee Tour*
* **Spoke 2:** Traditional Balinese Fire Roasting Techniques ➔ *Links to Coffee Tour*
* **Spoke 3:** What Spices Grow in a Balinese Jungle? ➔ *Links to Coffee Tour*

## Pillar 4: Choosing the Right Ubud Adventure Operator (added 2026-09-09)
**Pillar Page:** *Bali ATV Adventure* tour page (`/tours/bali-atv-adventure`) — commercial hub.
* **Spoke 1:** Private vs Mass-Market ATV Near Ubud ➔ *Links to ATV Tour*
* **Spoke 2:** Ubud ATV Tracks Explained: Jungle Mud Trail vs Cave & Tunnel Routes ➔ *Links to ATV Tour* — new this round, addresses brand-confusion searches now that Kuber Bali Adventure and Dragon Cave are established cave/tunnel-track competitors (see `COMPETITOR-KEYWORD-REPORT.md` Round 2)
* **Spoke 3 (backlog):** "Is an Ubud ATV track safe for kids?" — blocked until All New Bali Adventure operator confirms an explicit minimum solo-ride age (competitors like Kuber publish 13+ solo / 6-and-under tandem-only)

## Pillar 5: Private Mount Batur Jeep (added 2026-09-21)
**Pillar Page:** *Private Mount Batur Jeep Tour* (`/tours/batur-sunrise-jeep-tour`) — commercial hub.
* **Spoke 1:** 2026 price guide ➔ `/blog/mount-batur-sunrise-jeep-tour-price-guide-2026`
* **Spoke 2:** Jeep vs sunrise trek ➔ `/blog/mount-batur-jeep-vs-sunrise-trek`
* **Spoke 3:** Pickup times by area ➔ `/blog/mount-batur-jeep-pickup-times-canggu-ubud-2026`
* **Spoke 4:** Sunrise vs sunset (same IDR) ➔ `/blog/mount-batur-jeep-sunrise-vs-sunset`
* **Spoke 5:** Sit-in vs tracking jeep ➔ `/blog/mount-batur-sit-in-jeep-vs-tracking`
* **Spoke 6:** Private Kintamani Day (promo 1.3M) ➔ `/blog/private-kintamani-day-jeep-itinerary`

## Implementation Rules
1. Every "Spoke" article MUST link back to its "Pillar" page.
2. Every "Spoke" article MUST link directly to the relevant Tour Booking page.
3. Spoke articles should link to 1 or 2 other relevant spokes within the same cluster to keep users engaged.
4. Comparison/disambiguation spokes that name a competitor (e.g. Kuber, Dragon Cave) must stay factual and non-disparaging, and must not fabricate competitor pricing, review counts, or safety claims we haven't verified — describe track *style*, not unverifiable specifics.
