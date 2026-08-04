# Site Structure & Architecture: Sekar Bali Activity

Currently, the website is a single-page application. To scale SEO traffic, search engines need distinct URLs for distinct topics. 

We recommend moving from a single-page architecture to the following flat, accessible structure:

```text
/
├── Home (Overview, Trust Signals, Quick Links)
├── /tours
│   ├── /pejeng-village-cycling
│   ├── /luwak-coffee-plantation
│   └── /balinese-cooking-class
├── /about
│   ├── /our-story (The hosts, the village context)
│   └── /sustainability (How tours support local farmers)
├── /blog (Topical Authority Hub)
│   ├── /category/culture
│   ├── /category/food
│   └── /category/travel-tips
├── /contact
└── /faq
```

## Why this structure?
1. **Keyword Targeting:** A dedicated `/pejeng-village-cycling` page can be optimized perfectly for "Ubud cycling tours" without diluting the keyword density with cooking class content.
2. **Schema Optimization:** Each `/tours/*` page will get precise `Tour` JSON-LD schema.
3. **Internal Linking:** Blog posts can link directly to specific tour pages rather than just the homepage, sending stronger relevance signals to Google.
