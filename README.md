# ancy-tech-world.com

Personal portfolio site for Ancy Mol KK — Magento 2 Developer / PHP Backend Developer / Laravel Developer.

Files:
- `index.html` — all page content
- `style.css` — design, layout, responsive rules
- `script.js` — animated background, scroll reveals, mobile nav
- `CNAME` — tells GitHub Pages which custom domain to serve (already set to `ancy-tech-world.com`)

## Host it free with your own domain (GitHub Pages)

**1. Push the code to GitHub**
- Create a new repository, e.g. `ancy-tech-world` (can be public or private — Pages works on free plans either way for public repos).
- Upload these 4 files to the repository root (or `git push` if using Git locally).

**2. Turn on GitHub Pages**
- In the repo: **Settings → Pages**.
- Under "Build and deployment", set **Source** to `Deploy from a branch`.
- Branch: `main`, folder: `/ (root)`. Save.
- GitHub will give you a URL like `https://<username>.github.io/ancy-tech-world` — check it loads before moving on.

**3. Point your domain at GitHub Pages**
Go to wherever you bought `ancy-tech-world.com` (GoDaddy, Namecheap, etc.) and edit DNS records:

| Type  | Host/Name | Value                  |
|-------|-----------|-------------------------|
| A     | @         | 185.199.108.153         |
| A     | @         | 185.199.109.153         |
| A     | @         | 185.199.110.153         |
| A     | @         | 185.199.111.153         |
| CNAME | www       | `<username>.github.io`  |

(These are GitHub's official Pages IP addresses.)

**4. Add the custom domain in GitHub**
- Back in **Settings → Pages → Custom domain**, enter `ancy-tech-world.com` and save. (The `CNAME` file in this repo does this automatically once DNS is pointed correctly.)
- Wait for DNS to propagate (10 minutes–a few hours).
- Once it shows a green check, tick **Enforce HTTPS** so the site loads securely.

That's it — no server, no hosting bill, and the domain is fully yours.

## Editing content later
All text lives directly in `index.html` (experience, projects, skills). Colors and fonts are defined as CSS variables at the top of `style.css` under `:root` if you want to adjust the palette.
