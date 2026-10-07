# Kshetry & Co. — Website Revamp

> Legal Solutions Beyond Borders

Next.js implementation of the Kshetry & Co. website, built to the
*Complete Website Revamp — Website Master Content & Design Specification*
prepared by Adv. Shaina Z.

**Delivered:** design system, homepage, map animation, and all inner pages with full SEO.

---

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

| Route | What it is |
| --- | --- |
| `/` | Homepage — the nine-step sequence from §20 of the brief |
| `/about` | The firm, its approach, journey and what defines it |
| `/practice-areas` | Twelve practice areas, sticky clause index, scroll-spy |
| `/network` | The large interactive map plus the five jurisdictions |
| `/recognition` | Stats, the founder, award timeline, gallery |
| `/insights` | Featured editorial, filterable archive, series, quick briefs |
| `/careers` | Why the firm, filterable job board, process, application form |
| `/contact` | Office selector and the two-column enquiry form |
| `/faqs` | 26 questions in six accordion groups |
| `/disclaimer` `/terms` `/privacy` `/cookies` | The firm's own legal wording |
| `/design-system` | Living design-system reference (noindex) |

Copy the environment file before running:

```bash
cp .env.example .env.local
```

---

## Stack

- **Next.js 16** (App Router, React 19, Turbopack)
- **Tailwind CSS v4** — brand tokens declared in `@theme`, bespoke classes in `@layer components`
- **TypeScript**, strict
- **No animation library.** Every motion is CSS or a single `requestAnimationFrame`,
  which is what keeps the brief's "must not lag on PC, tablet or mobile" honest.

---

## Design system

Defined once in `src/app/globals.css`.

### Colour

| Token | Hex | Use |
| --- | --- | --- |
| `--color-burgundy` | `#6F1028` | Logo, headings, CTAs, active navigation |
| `--color-burgundy-deep` | `#3B0718` | Footer, dark hero, premium sections |
| `--color-gold` | `#C8A15A` | Dividers, icons, arrows, hover, map lines |
| `--color-gold-light` | `#E8D5AF` | Backgrounds, map illumination, decoration |
| `--color-ivory` | `#F8F5EF` | Primary light background |
| `--color-charcoal` | `#242124` | Body text |
| `--color-line` | `#E2DBCE` | Hairline rules |

Gold is an accent, never a dominant colour.

### Typography

Two-font architecture, both self-hosted through `next/font`:

- **Cormorant Garamond** — H1, section headings, quotes, editorial headlines (`.display`, `.display-xl|lg|md|sm`)
- **Manrope** — navigation, body, buttons, labels, forms, metadata (`.eyebrow`, `.lede`, `.body-copy`)

### Motion

`fade-in headings · letter-spacing · gold line expansion · arrow movement ·
map illumination · travelling arrows · number counters · jurisdiction marquee`

Deliberately avoided, per §19: spinning globes, particle effects, bouncing
buttons, flashy gradients, constant animation, oversized video backgrounds.

Everything collapses under `prefers-reduced-motion: reduce`.

---

## The global network map

`src/components/map/`

The showpiece, and the part worth understanding before changing it.

| File | Responsibility |
| --- | --- |
| `projection.ts` | Equirectangular lon/lat → grid units; decodes the land bitmask; builds arc paths |
| `LandCanvas.tsx` | Draws the champagne dot matrix and its illumination on a canvas |
| `WorldMap.tsx` | SVG overlay — connecting lines, travelling arrows, glowing nodes, labels, hover |
| `palette.ts` | The two inks: `light` (ivory hero) and `dark` (burgundy feature section) |

**Landmass.** `src/data/world-mask.ts` is a 360×150 equirectangular land bitmask
(16,071 land cells, ~9 KB base64), generated from Natural Earth data:

```bash
node scripts/gen-map.mjs   # rewrites src/data/world-mask.ts
```

It is decoded once into dot centres, compiled into a single cached `Path2D`, and
painted with **one** `ctx.fill()` call. Illumination is a `source-atop`
composite, so the glow lands on the dots and never on the empty sea. A hover or
a resize therefore costs one fill, not sixteen thousand arcs.

**Travelling arrows.** USA → UK → UAE → India → Thailand, as four quadratic arcs.
Each leg owns a quarter of a shared 12-second cycle (`km-relay` / `km-run` in
`globals.css`), so the route relays one leg at a time rather than firing all at
once — §18.01 of the brief.

**Interaction.** Hover, keyboard focus and tap all illuminate a location,
brighten its region of the map, dim the unrelated legs and swap the detail panel.

> Map geometry is rounded to three decimals in `project()` and in the midpoint
> markers. `Math.atan2` differs in its last bits between Node and the browser,
> and without the rounding that shows up as a hydration mismatch.

---

## Homepage sequence

Built in the exact order specified in §20:

1. **Hero** — `Legal Solutions Beyond Borders` over the animated global network
2. **The Firm** — *A Global Perspective. A Personal Approach.* + four defining statements
3. **Practice** — six editorial rows; hover floods the row burgundy (§18.02)
4. **Global Network** — the illuminated interactive map on dark burgundy
5. **Selected Insights** — featured editorial + four latest
6. **Recognition** — counters, award timeline, press marquee
7. **Careers** — *Build your practice. Expand your perspective.*
8. **Contact** — *Let's discuss your matter.* + location selector + disclaimer
9. **Footer** — dark burgundy, four columns

---

## Content

No copy is hard-coded in a component. It all lives in `src/data/`:

| File | Holds |
| --- | --- |
| `site.ts` | Navigation, network nodes (the lon/lat that drive the map), homepage sections, footer |
| `practices.ts` | The twelve practice areas and their write-ups |
| `pages.ts` | About, network, recognition, insights, careers, contact and FAQ content |
| `contact.ts` | Office details and enquiry channels |
| `legal.ts` | Disclaimer, Terms and Privacy — generated, see below |
| `world-mask.ts` | The land bitmask — generated, see below |

`src/data/legal.ts` is produced from the specification PDF so the firm's legal
wording stays verbatim:

```bash
node scripts/gen-legal.mjs <extracted-spec.txt>
```

The source text is extracted with pdfplumber at `x_tolerance=1.5`; pypdf splits
words across justified lines and corrupts the clauses.

These files are the seam the CMS plugs into: swap the exported constants for
fetches and the pages do not change.

---

## SEO

Every page carries a unique title and description, a canonical URL, Open Graph
and Twitter cards, exactly one `<h1>`, and JSON-LD.

| Piece | Where |
| --- | --- |
| Metadata builder | `src/lib/seo.ts` — `pageMetadata()` |
| Structured data | `src/lib/schema.ts`, emitted via `src/components/seo/JsonLd.tsx` |
| Sitemap | `src/app/sitemap.ts` — 13 URLs with priorities |
| robots.txt | `src/app/robots.ts` — disallows `/design-system` only |
| Social card | `src/app/opengraph-image.tsx` (1200×630, generated) |
| Favicon | `src/app/icon.tsx` |

Schema graph: `LegalService` + `Organization` and `WebSite` site-wide, then
`WebPage` + `BreadcrumbList` per page, plus `ItemList` (practice areas, network,
insights), `Article` (each insight), `JobPosting` (each vacancy), `FAQPage`
(FAQs and careers FAQ), `ContactPage` and `Person` (the founder).

**Before launch**, two things need the client:

1. **Set `NEXT_PUBLIC_SITE_URL`** to the real domain. Everything canonical
   derives from it.
2. **Supply office addresses, phone numbers and inboxes** (`src/data/contact.ts`).
   They are `null` today and the schema deliberately omits `address` and
   `telephone` rather than guessing — an invented postal address is worse for
   local SEO than none. Once they land, add `PostalAddress` and `telephone` to
   `organizationSchema()` and fill `SOCIAL_PROFILES` for `sameAs`.

## Forms

`/api/enquiry` takes the contact, application and newsletter forms. It validates
server-side, drops honeypot submissions, then forwards to `ENQUIRY_WEBHOOK_URL`.
With no webhook configured it returns 503 and the UI says delivery is not yet
connected — it never reports a false success. CV *files* are not transmitted
yet; the form captures the filename and asks for a link until the upload
pipeline lands.

## Still to come

- **Days 3–5** — CMS and backend so the firm can publish insights, vacancies
  and recognition without a deploy; secure CV upload
- **Days 6–7** — four site copies and content entry
- **Day 8** — device testing, speed checks, launch

## Notes for the next developer

- Photography is specified throughout the brief ("use original photos and
  videos"). Where images are not yet available the layout uses abstract
  burgundy/champagne graphics — see the featured insight card. Swap in
  `next/image` when assets land.
- Section components take no props by design; they read from `src/data/site.ts`.
  Keep it that way until the CMS arrives, then pass data in at the page level.
- `.shell` is the only layout container. Don't introduce a second max-width.
- The nav flips to ivory ink over dark heroes via `body:has([data-hero="dark"])`
  in `globals.css`. A page sets that by passing `tone="dark"` to `PageHero`.
