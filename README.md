# fodekami.github.io

Source code for Fodekami's personal website, designed for GitHub Pages.

## What is included

- Minimal three-entry homepage in `index.html`
- Three subpages: `about.html`, `projects.html`, and `notes.html`
- Fixed bottom-right contact dock with GitHub and email icons
- English and Chinese language switching with saved preference
- Custom styling in `styles.css`
- Small progressive enhancements in `script.js`
- SEO metadata, Open Graph tags, JSON-LD profile data, sitemap, robots file, and web app manifest
- No build step and no external runtime dependency

## Local preview

Open `index.html` directly in a browser, or serve the folder locally:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Customize

Update these areas first:

1. `index.html`
   - Rename the four homepage entries if the main sections change.
2. `script.js`
   - Update the `translations` dictionary when changing bilingual copy.
3. `about.html`
   - Update your profile, working style, and strengths.
4. `projects.html`
   - Replace project cards with real repositories, demos, or case studies.
5. `notes.html`
   - Replace writing topics with real notes or article links.
6. `script.js`
   - Replace `hello@example.com` and the GitHub URL near the top if your contact details change.
7. `site.webmanifest`
   - Update the site name and theme colors if your brand changes.
8. `sitemap.xml`
   - Keep URLs under `https://fodekami.github.io/`.

## Deploy

This repository is already named for a user GitHub Pages site. Push changes to `main`, then make sure GitHub Pages is enabled for the repository in:

`Settings -> Pages -> Build and deployment -> Source -> Deploy from a branch -> main / root`
