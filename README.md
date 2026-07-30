# What changed

**1. Full Stack rebrand**
- Title/meta, hero heading, hero role line, and About copy now lead with
  "Full Stack Developer" instead of Magento-first branding.
- Stack section reordered so **Frontend** comes first, section head renamed
  "Every layer, one developer."
- Magento 2, PHP, Laravel, MySQL are kept front and center as your real
  specialization — nothing fabricated, just reframed as the full-stack
  skillset it already is (frontend + backend + database + deployment).

**2. Hero background video**
- Your uploaded video is now layered *behind* the existing particle-network
  canvas in the hero (`assets/hero-bg.mp4`, poster frame at
  `assets/hero-poster.jpg`), per your choice to keep both effects.
- It's muted, autoplaying, loops, and is paused automatically when the hero
  scrolls out of view or the visitor has "reduce motion" turned on — so it
  never drags on load time or accessibility.

**3. Vintage script headings**
- Every heading (`h1–h4`, section titles, card titles, nav logo) now uses
  **Lobster**, a bold connected script in the spirit of the "Vintage" font
  image you sent — the *exact* font in that image is a paid/branded stock
  asset, not something safe to lift pixel-for-pixel, so Lobster is the
  closest free Google Font with the same rounded, bold, retro-badge feel.
- Large headings (hero, section titles) get a white fill + dark stroke +
  drop shadow so they read like an inked badge, matching the reference
  image's look. Smaller headings (card titles) use a lighter version of the
  same treatment so body content stays readable.
- If you own a license for the actual font in your reference image, tell me
  its name (or send the `.woff2`/`.ttf` file) and I'll swap it in directly.

# Files
- `index.html` — page content
- `style.css` — design tokens, layout, the new heading treatment, video layer
- `script.js` — nav, scroll reveals, hero video playback, particle canvas
- `assets/hero-bg.mp4`, `assets/hero-poster.jpg` — your uploaded video + its poster frame
- `CNAME` — your GitHub Pages custom domain (`ancy-tech-world.com`)

# Redeploying (same GitHub Pages setup as before)
1. Push all files **including the `assets/` folder** to your repo root
   (`git add . && git commit -m "Full stack rebrand + hero video + font" && git push`).
2. GitHub Pages will rebuild automatically (Settings → Pages already points
   at `main` / root from your original setup) — no new configuration needed.
3. Give it a minute, then hard-refresh `ancy-tech-world.com` to see the update.

Note: the video adds ~2.8MB to your repo/page weight. If load time on mobile
matters to you, I can compress it further or trim it to a shorter loop.
