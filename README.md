# Leaves

Leaves is an automated, agentic SEO workflow engine designed for high-performance content sites and Next.js applications. It powers the local tourism site *Sekar Bali Activity* to maximize search engine discoverability and conversion.

## Why Leaves?
Traditional SEO is highly manual and reactive. Leaves flips this by integrating SEO audits, structured data generation (JSON-LD), AI search engine optimization (GEO/AEO), and repository discoverability checks directly into your CI/CD pipeline and local development workflow.

## Features
- **Generative Engine Optimization (GEO)**: Automated `llms.txt` and `robots.txt` generation for Perplexity, SearchGPT, and Claude indexing.
- **Technical SEO Assertions**: strict security headers, HSTS, mobile-first indexability, and Core Web Vitals checks.
- **Schema & Rich Snippets**: Deep `LocalBusiness` and `Tour` JSON-LD structures.
- **GitHub Discoverability**: Topic optimization, community health metrics, and automated search benchmarking.

## Proof and Results
Leaves continuously runs 10 specialist agent workflows (Technical, Content, Performance, Schema, Sitemap, Visual, etc.). It actively audits applications and surfaces issues *before* deployment.

Example Output from the Global Verifier:
- **On-Page SEO**: 75/100
- **Technical Posture**: Checked against CSP, HSTS, and referrer policies.
- **AI Search Readiness**: Passes `llms.txt` and `robots.txt` crawler policies.

## Installation & Quickstart

To run the Next.js application locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

## Contributing
We welcome contributions! Please read our [Contributing Guidelines](.github/CONTRIBUTING.md) and check out our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md) if you encounter any issues.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
