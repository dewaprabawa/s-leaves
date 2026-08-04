# FULL AUDIT REPORT: Sekar Bali Activity (Homepage)

**Target URL**: https://www.sekarbaliactivity.com/
**Audit Method**: LLM-First Analysis (Environment limitation: Python scripts blocked)
**Date**: August 4, 2026

## Page Score Card

Overall Score: 60/100

On-Page SEO:     65/100  ██████░░░░
Content Quality: 70/100  ███████░░░
Technical:       40/100  ████░░░░░░
Schema:          0/100   ░░░░░░░░░░
Images:          85/100  ████████░░

## Environment Limitations
*Automated scripts (readability, PageSpeed, Core Web Vitals) could not be run because Python is not installed on this system. The analysis relies on LLM-first reasoning and source code inspection of the live URL.*

## 1. On-Page SEO (65/100)

**Title Tag**: 
* **Finding**: `Sekar Bali Activity | Premium Bali Tours`
* **Evidence**: Source code `<title>` tag.
* **Impact**: Good length (40 chars) and includes a solid keyword ("Premium Bali Tours").
* **Severity**: ✅ Pass

**Meta Description**:
* **Finding**: `Discover extraordinary tours and private transfers across Bali and Indonesia.`
* **Evidence**: Source code `<meta name="description">` tag.
* **Impact**: Too short (~77 characters, target is 150-160). It misses long-tail keywords about Pejeng, cycling, or cooking classes.
* **Severity**: ⚠️ Warning

**H1 Tag**:
* **Finding**: `Bali, at village pace.`
* **Evidence**: Source code `<h1>` tag.
* **Impact**: Very poetic for UX, but poor for SEO. It lacks primary keywords like "Bali Tours", "Activities", or location modifiers. Search engines rely heavily on the H1 to understand page context.
* **Severity**: 🔴 Critical

**Heading Hierarchy (H2-H3)**:
* **Finding**: Good logical structure.
* **Evidence**: H2s include "Three windows into everyday Bali" and "Follow the Pejeng route". H3s cover tour names.
* **Impact**: Helps search engines parse the sections.
* **Severity**: ✅ Pass

## 2. Content Quality (70/100)

**Word Count & Depth**:
* **Finding**: The homepage is visually heavy but content-light (< 400 words).
* **Evidence**: Text extraction from source.
* **Impact**: Google struggles to rank pages with thin content, especially for competitive travel keywords.
* **Severity**: ⚠️ Warning

**E-E-A-T Signals**:
* **Finding**: High emphasis on "local hosts," "village-led," and "family table."
* **Evidence**: "Your visit directly supports village hosts..."
* **Impact**: Great trust signals (Experience and Trust). Missing author/founder names or exact addresses (only "Pejeng, Gianyar").
* **Severity**: ✅ Pass

## 3. Technical SEO (40/100)

**Canonical Tag**:
* **Finding**: Missing.
* **Evidence**: No `<link rel="canonical">` found in the `<head>`.
* **Impact**: Could lead to duplicate content issues if the site is accessed via HTTP/HTTPS or WWW/non-WWW without strict redirects.
* **Severity**: 🔴 Critical

**Social Meta Tags (Open Graph & Twitter)**:
* **Finding**: Missing.
* **Evidence**: No `og:` or `twitter:` tags in the `<head>`.
* **Impact**: When the site is shared on WhatsApp, Facebook, or Twitter, it will not display a rich preview image or custom title, severely hurting CTR.
* **Severity**: 🔴 Critical

**Language & Hreflang**:
* **Finding**: Uses `<html lang="en">` but lacks hreflang.
* **Evidence**: Source code.
* **Impact**: Good for English localization, but missing opportunities if targeting multiple countries/languages.
* **Severity**: ℹ️ Info

## 4. Schema / Structured Data (0/100)

**JSON-LD Markup**:
* **Finding**: No structured data detected on the live site.
* **Evidence**: Checked `<script type="application/ld+json">`.
* **Impact**: Missing out on Rich Snippets in Google Search. The site sells tours but lacks `LocalBusiness`, `Product`, or `Tour` schema. (Note: A new FAQPage schema was recently implemented in the codebase but is not yet deployed to the live URL).
* **Severity**: 🔴 Critical

## 5. Images & Performance (85/100)

**Alt Text**:
* **Finding**: Present and descriptive.
* **Evidence**: `<img alt="Ancient Balinese temple surrounded by lush tropical greenery">`, `<img alt="Cycling Tour">`.
* **Impact**: Excellent for accessibility and Google Images ranking.
* **Severity**: ✅ Pass

**Preloading & Core Web Vitals (INP/LCP)**:
* **Finding**: Next.js optimizations are active.
* **Evidence**: Font and hero images use `<link rel="preload">`. Next.js static chunks are used.
* **Impact**: Likely fast LCP (Largest Contentful Paint) and good CLS.
* **Severity**: ✅ Pass
