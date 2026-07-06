# Media Assets Guide — Green Lines for Investment

Every replaceable image on the website is a **physical PNG file** whose
filename equals its media code: `CODE.png`. The site always renders that
file directly. There is **no status flag** — a slot shows whatever is in
the PNG, whether it is the designed placeholder or the final image.

## Default image replacement workflow

1. Find the image code shown on the page placeholder.
2. Go to the exact path shown in the placeholder.
3. Replace the PNG file with the real image.
4. Keep the exact same filename.
5. Refresh the browser.
6. For production, commit, push, and redeploy.

**Important:**
- No code change is required.
- No media registry status change is required.
- No Claude update is required.

> If the browser still shows the old placeholder after replacement, use
> Ctrl+F5 or restart `npm run dev`. In production, redeploy the site.

## About media slots

| Code | Page | Section | Save file as | Recommended size |
|------|------|---------|--------------|------------------|
| IMG-ABOUT-HERO-01 | About | Hero visual | public/images/about/IMG-ABOUT-HERO-01.png | 1600 × 900 |
| IMG-ABOUT-ECOSYSTEM-01 | About | Who We Are visual | public/images/about/IMG-ABOUT-ECOSYSTEM-01.png | 1400 × 900 |
| IMG-ABOUT-AGRI-01 | About | Ecosystem — Agriculture | public/images/about/IMG-ABOUT-AGRI-01.png | 1200 × 800 |
| IMG-ABOUT-FACTORY-01 | About | Ecosystem — Manufacturing | public/images/about/IMG-ABOUT-FACTORY-01.png | 1200 × 800 |
| IMG-ABOUT-QUALITY-01 | About | Ecosystem — Quality | public/images/about/IMG-ABOUT-QUALITY-01.png | 1200 × 800 |
| IMG-ABOUT-SUSTAINABILITY-01 | About | Ecosystem — Sustainability | public/images/about/IMG-ABOUT-SUSTAINABILITY-01.png | 1200 × 800 |

All six About files currently contain real approved images.

## Leadership & Governance media slots

| Code | Page | Section | Save file as | Recommended size |
|------|------|---------|--------------|------------------|
| IMG-LEADERSHIP-HERO-01 | Leadership hub | Hero visual | public/images/leadership/IMG-LEADERSHIP-HERO-01.png | 1600 × 900 |
| IMG-LEADERSHIP-GOVERNANCE-01 | Governance Framework | Hero visual | public/images/leadership/IMG-LEADERSHIP-GOVERNANCE-01.png | 1400 × 900 |
| IMG-LEADERSHIP-ADVISORY-01 | Advisory Council | Hero visual | public/images/leadership/IMG-LEADERSHIP-ADVISORY-01.png | 1200 × 800 |
| IMG-LEADERSHIP-EXPERTS-01 | Expert Network | Hero visual | public/images/leadership/IMG-LEADERSHIP-EXPERTS-01.png | 1200 × 800 |
| IMG-LEADERSHIP-TEAMS-01 | Core Teams | Hero visual | public/images/leadership/IMG-LEADERSHIP-TEAMS-01.png | 1200 × 800 |
| IMG-LEADERSHIP-ORG-CHART-01 | Organization Structure | Hero / chart visual | public/images/leadership/IMG-LEADERSHIP-ORG-CHART-01.png | 1600 × 1000 |

Currently: HERO and GOVERNANCE contain real images; ADVISORY, EXPERTS,
TEAMS, and ORG-CHART contain designed placeholder PNGs awaiting real
photography — overwrite them whenever the final images are ready.

### Special approved assets (do not rename or overwrite)

| File | Used on |
|------|---------|
| public/images/leadership/image-ceo-ar.png | Chairman visual — Arabic (RTL) pages |
| public/images/leadership/image-ceo-en.png | Chairman visual — en/it/de/fr/es pages |
| public/images/leadership/khalid-alotaiby-ceo.png | About page portrait card |

These keep their own filenames. Logo files in `public/brand` must never
be edited, renamed, or restyled.

## Contact media slots

| Code | Page | Section | Save file as | Recommended size |
|------|------|---------|--------------|------------------|
| IMG-CONTACT-HERO-01 | Contact | Hero visual | public/images/contact/IMG-CONTACT-HERO-01.png | 1600 × 900 |
| IMG-CONTACT-LOCATION-01 | Contact | Location visual (beside map) | public/images/contact/IMG-CONTACT-LOCATION-01.png | 1400 × 900 |
| IMG-CONTACT-SUPPORT-01 | Contact | Why Connect With Us visual | public/images/contact/IMG-CONTACT-SUPPORT-01.png | 1200 × 800 |

All three currently contain designed placeholder PNGs — overwrite them
with real imagery whenever ready (same filename, no code change).

## Future pages — media naming rule (mandatory)

Any new page must define physical PNG slots from the start, registered in
`src/content/mediaRegistry.ts`:

- Code format: `IMG-<SECTION>-<NAME>-<NN>`
- File: `public/images/<section>/CODE.png`
- Public path: `/images/<section>/CODE.png`

Example for the future Business Sectors page:

| Code | Save file as |
|------|--------------|
| IMG-SECTORS-HERO-01 | public/images/business-sectors/IMG-SECTORS-HERO-01.png |
| IMG-SECTORS-AGRI-01 | public/images/business-sectors/IMG-SECTORS-AGRI-01.png |
| IMG-SECTORS-FOOD-MANUFACTURING-01 | public/images/business-sectors/IMG-SECTORS-FOOD-MANUFACTURING-01.png |

Never use lowercase filenames that differ from the code. Code and
filename must always match.

## Generating placeholder PNGs

After adding new slots to the registry, run:

```bash
npm run media:placeholders
```

This creates missing `CODE.png` placeholder files (premium ivory cards
showing code, size, and save path) at the recommended dimensions.
Existing files are never overwritten (use `-- --force` only if you
intentionally want to regenerate placeholders — it will overwrite any
generic `CODE.png` slot file, so avoid it once real images are in place).
Requires the `sharp` devDependency (`npm install`).
