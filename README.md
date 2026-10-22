# zactassone.com.au

Personal brand website for Zac Tassone.

## How it deploys
The site is a single static page (`index.html`) hosted on Zectron's cPanel server.
cPanel Git Version Control pulls this repository and runs `.cpanel.yml`, which copies the site files into `public_html`.

To publish a change:
1. Edit and commit to `main`.
2. In cPanel > Git Version Control > zactassone.com.au > Pull or Deploy, click **Update from Remote**, then **Deploy HEAD Commit**.
