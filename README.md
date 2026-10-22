# zactassone.com.au

Personal brand website for Zac Tassone. Static HTML, CSS and JS, no build step required to deploy.

## Structure
- `index.html`: the whole site on one page (About, What I do, Zac the IT Guy, Speaking, Contact sections)
- `assets/site.css`, `assets/site.js`: shared styles and scripts (mobile menu, scroll animations, HubSpot form)
- `assets/og.png`: social share image
- `.htaccess`: HTTPS redirect, security headers, caching
- `robots.txt`, `sitemap.xml`: SEO

## Contact form
Submits to HubSpot form "zactassone.com.au Contact (Personal brand)" via the HubSpot Forms API (no keys in this repo).

## How it deploys
cPanel Git Version Control pulls this repository and runs `.cpanel.yml`, which copies the site into `public_html`.

To publish a change:
1. Commit to `main`.
2. In cPanel > Git Version Control > zactassone.com.au > Pull or Deploy, click **Update from Remote**, then **Deploy HEAD Commit**.
