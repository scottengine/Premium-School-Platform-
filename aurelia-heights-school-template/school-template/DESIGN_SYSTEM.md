# Design System — Aurelia Heights Academy Template

This document is the Stage 2 deliverable: the complete visual language
governing the site, why each decision was made, and how to verify it holds
up before shipping to a real client. It supplements — doesn't replace —
the file-by-file rebranding table in `README.md`.

## 1. Positioning

**"Excellence. Character. Possibility."** — replacing the brief's more
generic placeholder line. It reads as three commitments rather than three
adjectives, and it's short enough to survive being set in a footer strap
line or a prospectus cover.

The visual language is built to be mistaken for a real institution's site:
an admissions prospectus translated to the web, not a SaaS landing page
wearing a school's colors.

## 2. Color

Defined once, as HSL triads, in `css/variables.css`:

| Token | Role | Default |
|---|---|---|
| `--primary` | Ink navy — nav, headings, hero, footer | `hsl(219 46% 18%)` |
| `--accent` | Brass/gold — CTAs, links, active states, stat figures | `hsl(36 42% 50%)` |
| `--secondary` | Sage — used only for campus-life tags and WhatsApp | `hsl(128 18% 33%)` |
| `--paper` / `--surface` / `--surface-elevated` | Background layers | warm off-whites |
| `--success` / `--warning` / `--error` | Reserved for future form validation | muted, not saturated |

**Rebrand path**: change the three `*-h/s/l` values at the top of
`variables.css`. Every button, link, focus ring, active nav state, stat
figure and icon accent recomputes automatically because nothing downstream
hardcodes a hex value — they all reference `var(--primary)` /
`var(--accent)` / `var(--secondary)` or a value derived from them.

The accent is deliberately restrained: it appears on CTAs, links, active
underlines, stat figures and small icon details — never as a section
background or a flood color. That restraint is what keeps four brand colors
from turning into a "colorful" site once composed together.

## 3. Typography

| Role | Token | Face |
|---|---|---|
| Hero / Display | `--text-hero`, `--text-display-lg` | Fraunces, 600 |
| H3 / card headings | `--text-h3` | Fraunces, 600 |
| Body large (ledes) | `--text-body-lg` | Inter |
| Body | `--text-body` | Inter |
| Small / metadata | `--text-small` | Inter |
| Label / eyebrow | `--text-label` | IBM Plex Mono, uppercase, tracked |

Three families only, each with one clear job: Fraunces carries the
institutional voice, Inter carries readability, Plex Mono carries data and
wayfinding (labels, dates, stats, nav CTAs). No section introduces a fourth
face or an unplanned weight.

Line lengths are constrained by `.lede` (54ch) and `.program-row__desc`
(46ch) rather than left to the grid — copy never runs edge-to-edge.

## 4. Spacing

A ten-step scale (`--space-1` through `--space-10`, 4px → 144px) used
consistently for padding, gaps and margins. `--section-pad-y` is a clamp so
vertical rhythm scales smoothly between mobile and desktop instead of
jumping at breakpoints. No arbitrary pixel values appear in component CSS.

## 5. Radius

Three-and-a-half-step system, applied by role, not by element type:

- `--radius-sm` (3px) — buttons, tags, badges
- `--radius-md` (6px) — standard cards and media (news, campus tiles, testimonials)
- `--radius-lg` (10px) — the one or two most prominent items per section (leadership portrait, the largest campus tile)
- `--radius-xl` (16px) — reserved for hero-scale feature imagery in future sections

Full-bleed imagery (hero, ledger) intentionally has no radius — it's not a
floating card, it's the page edge.

## 6. Shadow

Used three times in the whole system: the nav once it's scrolled solid, the
lightbox, and floating labels (the hero's "Kampala Campus" note tag). Every
other section relies on spacing, contrast and typography for hierarchy —
per the brief's own instruction, elevation is the exception, not the
default.

## 7. Buttons

- **Primary** (`--btn--primary`) — gold fill, ink text. Used once per view
  for the single most important action ("Apply Now").
- **Ghost** (`--btn--ghost` / `--btn--ghost-ink`) — bordered, transparent.
  Secondary actions on light or dark backgrounds respectively.
- **Text** (`--btn--text`) — no padding, underline on hover. Inline "read
  more" / "learn more" links.
- **WhatsApp** (`.contact-whatsapp`) — sage fill, deliberately distinct from
  the brand primary/accent pairing so it reads as "external channel," not
  a third-tier CTA.

All four states are defined: default, `:hover` (lift + color shift),
`:active` (settles back down, deeper fill), `:focus-visible` (2px accent
outline, global), and `:disabled` / `[aria-disabled]` (42% opacity,
pointer-events off).

## 8. Icon buttons

One shared shape (`.icon-btn` in `base.css`): 44×44px circle, hairline
border, hover brightens the border to accent. Used identically for the
lightbox close/prev/next controls and the mobile menu close button — a
visitor should never be able to tell those were built by different
components.

## 9. Cards — deliberately not identical

Per the brief's own warning against "icon + title + paragraph in 15
identical boxes," each content type gets a composition suited to it:

| Content | Component | Why it's different |
|---|---|---|
| Programs | `.program-row` — a horizontal ledger row with a Roman numeral | The four stages are a real sequence; a numbered list is honest here |
| Values | `.value-card` — bordered grid cell, icon + heading + text | The one place a classic feature-card pattern is actually correct (four parallel, non-sequential claims) |
| Campus life | `.campus-tile` — asymmetric photo mosaic, no text card at all | Sells an experience; imagery does the work, not copy |
| News | `.news-card` — image, category/date meta, heading, excerpt | Editorial, scannable, familiar from real school news pages |
| Testimonials | `.testimonial-card` — serif pull-quote + avatar | Reads as a quote, not a review-widget |
| Leadership | Two-column portrait + blockquote, no card chrome at all | The one section that should feel like a letter, not a component |

## 10. Navigation

Two states, one component:

- **Overlay** (default, over the dark hero): transparent background, light
  text (`--text-on-ink`), no border, no shadow.
- **Scrolled** (`[data-nav-scrolled="true"]`, set by `navigation.js` once
  the hero has passed): solid paper background at 92% opacity with blur,
  ink text, hairline border, `--shadow-sm`.

Both states share every rule except four custom properties
(`--nav-fg`, `--nav-fg-muted`, `--nav-bg`, `--nav-border`) — there is no
duplicated nav markup or a second stylesheet block. An interior page with
no dark hero under the nav can force the solid state permanently by adding
`data-nav-force-solid="true"` to the `<header class="nav">` element.

Mobile navigation is a full-height slide-in panel (not a bare dropdown),
with a scrim, focus return on close, and Escape-to-close.

## 11. Motion

Fade/translate reveal on scroll (`IntersectionObserver`, 18px, 700ms),
counter count-up on the stats ledger, underline sweep on nav links, lift on
button hover, gallery caption reveal on hover/focus. Every animation is
instant or skipped entirely under `prefers-reduced-motion`. Nothing spins,
bounces, or parallaxes.

## 12. Accessibility baseline

Skip link, one `<h1>` per page, semantic landmarks, visible 2px
focus-visible outline on every interactive element (never suppressed), all
icon-only controls sized to a 44px touch target, `aria-label`s on icon
buttons and image placeholders, `aria-modal`/focus-trap/Escape on the
lightbox and mobile menu, and full `prefers-reduced-motion` support.

---

## Visual QA checklist

Run through this before presenting to a client or duplicating for a new
school:

- [ ] **Typography** — does the Fraunces/Inter/Plex Mono pairing still read
      as premium at every heading level, or has a section drifted to a
      default system font?
- [ ] **Color** — does the palette still feel institutional after a
      rebrand, or did the new brand colors push the accent into "flood"
      territory (accent used as a background, not a detail)?
- [ ] **Spacing** — does every section still breathe at `--section-pad-y`,
      or has new content forced a cramped override?
- [ ] **Components** — do cards, buttons and the nav still feel like one
      family after edits, or has a one-off style crept in?
- [ ] **Imagery** — once real photography replaces the `.ph` placeholders,
      does the cropping/aspect-ratio still hold (check `.hero__media`,
      `.leadership__portrait`, `.campus-tile--a` especially — they're the
      largest, most forgiving-to-distort frames)?
- [ ] **Mobile** — test at 320 / 360 / 375 / 390 / 412 / 430px: no
      horizontal scroll, no touch target under 44px, mobile nav panel
      opens/closes/traps focus correctly.
- [ ] **Rebranding** — can a new school go live by editing only
      `variables.css` (colors/fonts) and the content blocks listed in
      `README.md`, with zero changes to `components.css`?
- [ ] **Consistency** — screenshot the nav, a button, a card and the
      footer side by side — do they read as one brand?

## What changed in this stage vs. Stage 1

- Added `--success` / `--warning` / `--error` tokens (reserved for future
  form validation), `--radius-xl`, and a `--nav-height` token.
- Nav rebuilt from a static sticky bar into a two-state overlay→solid
  system driven by scroll position (`navigation.js` + four CSS custom
  properties), matching the "cinematic hero" requirement.
- Added `scroll-margin-top` globally so anchor navigation clears the now-
  fixed nav.
- Formalized button `:active`/`:disabled` states.
- Introduced the shared `.icon-btn` component and applied it to all three
  icon-only controls that were previously styled ad hoc.
- Nudged the radius scale to distinguish the leadership portrait and the
  largest campus tile from standard cards, per the "cards should not all
  look identical" instruction.

No section was rebuilt from scratch; no existing markup, config structure,
or file layout from Stage 1 was discarded.
