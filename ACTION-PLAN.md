# ACTION PLAN: Sekar Bali Activity (Homepage)

**Target URL**: https://www.sekarbaliactivity.com/
**Date**: August 4, 2026

## 🔴 Critical Priority (Do This Week)

1. **Update the H1 Tag**
   * **Issue**: The current H1 (`Bali, at village pace.`) is too vague.
   * **Fix**: Change it to a keyword-rich alternative, e.g., `<h1>Authentic Bali Tours & Village Cycling in Pejeng</h1>` or keep the poetic text visually but wrap the SEO title in an invisible `<h1 class="sr-only">`.

2. **Add Missing Canonical Tag**
   * **Issue**: No canonical tag to prevent duplicate content.
   * **Fix**: Add `<link rel="canonical" href="https://www.sekarbaliactivity.com/">` to the `<head>`.

3. **Implement Open Graph and Twitter Meta Tags**
   * **Issue**: Social sharing previews are broken.
   * **Fix**: Add standard `og:title`, `og:description`, `og:image`, and `twitter:card` tags to the `<head>` in your Next.js layout/page config.

4. **Add Structured Data (JSON-LD)**
   * **Issue**: Missing rich snippet opportunities.
   * **Fix**: Implement `LocalBusiness` or `TravelAgency` schema on the homepage. Include tour offerings as `Tour` schema.

## ⚠️ High Priority (Do This Month)

5. **Expand Meta Description**
   * **Issue**: The current description is too short (77 chars).
   * **Fix**: Expand to ~155 characters. Example: "Discover extraordinary village-led tours in Pejeng, Bali. Join our small-group cycling tours, authentic cooking classes, and Luwak coffee plantation experiences."

6. **Add More Descriptive Content**
   * **Issue**: Low word count.
   * **Fix**: Add a short "About Us" paragraph detailing the history of the founders, the exact village context, and what makes these tours unique. This builds both E-E-A-T and keyword density.

## ✅ Low Priority (Ongoing)

7. **Add Specific Location Details**
   * **Issue**: Missing precise trust markers for Google Local.
   * **Fix**: While "Pejeng, Gianyar" is mentioned, providing a full business address or a Google Maps embed in the footer builds stronger local SEO signals.
