# Assets

Source images, re-optimized at build by `astro:assets` (large source files are fine).

```
assets/
├─ hero/          # full-bleed hero backgrounds (CSS background-image, optimized to WebP)
├─ services/      # one photo per service (slug-named); used on cards + service pages
└─ maps/          # static map art if you ever drop the live embeds
```

Service photos are best at **3:2 landscape** (they're cropped to 3:2 on city-page cards and
shown at natural ratio on the homepage rows). Drop in large files freely — `astro:assets`
resizes/compresses them at build; only the optimized variants ship.

## ⚠️ These are PLACEHOLDERS

The current images are **free-licensed standby-generator photos pulled from Wikimedia Commons** so
the build resolves and the site looks like a real generator business, not broken. They are generic
stock — standby units, transfer switches, and install/service shots, none of them shot in Western
NC. **Replace them with real job photos before launch** — real local proof (a unit you installed,
a generator running on a mountain lot, your crew on a Henderson County property) is load-bearing
for this kind of site (see SPEC §2). Keep the same filenames (or update the `import`s in
`src/config/services.ts`) so nothing breaks.

> Source/licensing note: placeholders came from Wikimedia Commons (a mix of CC0, public domain,
> and CC BY / CC BY-SA). They're fine as stand-ins, but confirm licensing/attribution or, better,
> shoot your own before launch. `public/og.jpg` (1200×630 social-share image) was cropped from
> `hero/hero.jpg`.

### Where each image is referenced

| File | Used by |
|---|---|
| `hero/hero.jpg` | site-wide default hero (`src/lib/images.ts` → `defaultHero`) + source for `public/og.jpg` |
| `services/generator-services.jpg` | `generator-services` service (hub catch-all) |
| `services/standby-generator-installation.jpg` | `standby-generator-installation` service |
| `services/whole-house-generator-installation.jpg` | `whole-house-generator-installation` service |
| `services/generator-repair.jpg` | `generator-repair` service |
| `services/generator-maintenance.jpg` | `generator-maintenance` service |
| `services/transfer-switch-installation.jpg` | `transfer-switch-installation` service |
| `services/generator-replacement.jpg` | `generator-replacement` service |
| `services/emergency-generator-service.jpg` | `emergency-generator-service` service (emergency) |

Service photos are imported at the top of `src/config/services.ts`. Per-city overrides go in
`city.serviceImages` / `city.heroImage` in `src/config/cities.ts`.

### Favicons

This site ships **no favicon on purpose** (see `BaseLayout.astro`) — search engines fall back to a
generic icon and there are no favicon files to maintain. If you want a brand mark later, add the
favicon files to `public/` and the `<link>` tags to `BaseLayout.astro`.
