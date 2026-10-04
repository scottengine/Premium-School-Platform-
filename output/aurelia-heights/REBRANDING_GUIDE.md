# Rebranding Guide

How to take this site from "Aurelia Heights Academy" to a different school
— what's automated, what isn't, and why.

## The honest architecture summary

This is a static site: plain HTML/CSS/JS, no build step, no framework, no
server-side rendering. That was a deliberate choice from Stage 1 onward
(fast, cheap to host, fully crawlable by search engines, works with zero
JavaScript). It has one direct consequence for rebranding: **content can't
be data-bound at runtime the way it could be in a framework**, because
runtime data-binding would mean either shipping a build step (which this
project explicitly avoids) or rendering content client-side (which hurts
SEO and breaks the site for anyone without JavaScript — also explicitly
against this project's goals).

So rebranding here happens in two very different ways, and conflating them
is the single easiest way to think this system is more automated than it
is:

**1. Branding/identity — automated, via `scripts/rebrand.py`.**
School name, tagline, founding year, logo initials, brand colors, phone,
email, address, and social links are true template variables — every
school has an equivalent of each one, and swapping them is a mechanical
find-and-replace. The script does this for you.

**2. Content — manual, always.** Leadership bios, the headteacher's quote,
achievements, testimonials, news stories, program descriptions, curriculum
details, campus-life captions, gallery captions, admissions requirements —
none of this can be sensibly auto-generated. A new school's headteacher
didn't say the same thing Dr. Kaggwa said; their achievements aren't hers.
This is genuine authored content, and the honest expectation is that a
human writes it, using the existing pages as a structural template.

If you remember one thing from this document, remember that split. Section
30 of the Stage 5 brief calls this "a content + branding configuration
task rather than a full development task" — that's accurate, but it's
still two different kinds of task, and only one of them is scriptable.

## Quick start: rebrand to an existing preset

```bash
python3 scripts/rebrand.py presets/lira-future-academy.json output/lira-future-academy
```

This produces a complete, independent copy of the site in
`output/lira-future-academy/` with the branding pass already applied. Open
`output/lira-future-academy/index.html` in a browser to see it. The script
prints exactly what it changed and — every time — the checklist of content
that still needs a human.

`output/` is a build artifact, not source — see `.gitignore`.

## 1–8: where everything is configured

| What | Where |
|---|---|
| **School identity** (name, tagline, founding year, logo initials, institution type) | `presets/<school>.json` → `identity` |
| **Brand colors** | `presets/<school>.json` → `branding` (HSL triads); written into `css/variables.css` `:root` by the script |
| **Contact details** | `presets/<school>.json` → `contact`; also live-synced into every `tel:`/`mailto:`/`wa.me` link at runtime by `js/main.js` regardless of whether you use the script |
| **Social links** | `presets/<school>.json` → `social` |
| **Images** | Not yet automatable — see "Images" below |
| **Programs, curriculum, gallery, news** | Content, not config — edit directly in the relevant HTML page (see the per-page tables in `README.md`, which is more granular than this guide for exactly which block to edit) |
| **SEO (meta title/description)** | Content, not config — each page's `<meta name="description">` is bespoke phrasing by design (unique descriptions per page are better SEO than one repeated template sentence), so these are hand-edited per page, per school |

### Images

No real photography exists in this project — every image is a generated
placeholder (see `README.md` → "Images"). There is currently no
`images` config that the rebrand script reads, on purpose: real
photography has to be sourced or commissioned per client regardless of
what a config file says, so automating "where the config points" doesn't
remove the actual bottleneck (getting real photos). When a client's photos
are ready, follow `README.md`'s image-replacement instructions directly.

## 9. Creating a new preset

Copy `presets/aurelia-heights.json` (it's the canonical schema reference,
with every field commented) and fill in the new school's values. Required
fields:

```json
{
  "identity": { "name", "shortName", "tagline", "founded", "logoInitials", "institutionType", "domain" },
  "branding": { "primary": {h,s,l}, "accent": {h,s,l}, "secondary": {h,s,l} },
  "contact": { "phone", "phoneDigits", "email", "address", "hoursWeekday", "hoursSaturday" },
  "social": { "facebook", "instagram", "twitter", "youtube" }
}
```

**Color guidance:** keep `primary` lightness around 15–22% and `accent`
lightness around 45–55% — this is the range the design system's contrast
math has actually been checked against (see `DESIGN_SYSTEM.md` and the
comment above `--accent-deep` in `css/variables.css`). The three shipped
presets stay in the warm gold/amber/brass accent-hue range (~20–50°); a
cool-hued accent (blue, teal, purple) hasn't been contrast-verified and
may need a manual override to `--accent-deep`. Before shipping a new
preset's colors, check them the same way the shipped ones were checked —
compute contrast for `primary` on `--paper`, `--text-on-ink` on `primary`,
and `--accent-deep` on `--paper` (a short Python script using the WCAG
relative-luminance formula; see git history / prior session notes for the
exact one used).

## 10. Deploying a new school

1. Run the script against the new preset.
2. Replace placeholder images in the output copy per `README.md`.
3. Hand-author the content sections listed in the script's "not
   automated" checklist, using the existing pages as your structural
   template (same headings, same component classes — just new words).
4. Update `application/ld+json` in the output's `index.html` (not
   auto-synced — see `DESIGN_SYSTEM.md` known gaps) and each page's
   `<meta name="description">`.
5. Replace `assets/logo/favicon.svg` if the client has a real logo; if
   not, the generated crest monogram (now token-driven — see "Logo
   system" below) works as a placeholder identity mark.
6. Deploy the output folder's contents to any static host.

## Logo system

The nav/footer "logo" is a generated initials-crest (a colored badge with
the school's initials), not an uploaded image file — this was a Stage 2
design decision, not a limitation. Its colors are now fully token-driven
(`.crest-bg`, `.crest-ring`, `.crest-mono` classes in `css/components.css`
reference `var(--primary)` / `var(--accent)` / `var(--text-on-ink)`), so a
color rebrand updates it automatically with zero HTML edits. Its initials
are set by `identity.logoInitials` and updated by the script.

**If a client supplies a real logo file** instead of using the generated
monogram: replace the `<svg class="nav__crest">...</svg>` block (appears
once in the nav, once in the footer, per page) with an `<img>` sized to
the same 40×40px box, using `object-fit: contain` so the layout doesn't
care about the source image's aspect ratio — this protects against wide,
tall, or square source logos without distortion, per the robustness
requirement this stage asked for. This hasn't been done for any of the
three shipped presets (they all use the generated monogram), so it's
untested in this codebase — flagged as a real gap below, not a finished
feature.

## Content-length safety

The nav's school name now truncates gracefully instead of overflowing if
a school's name is much longer than "Aurelia Heights" (see
`.nav__school-name` / `.nav__school-name-primary` in `css/components.css`
— a real bug found and fixed during this stage). The footer's brand name
wraps instead of overflowing for the same reason. Both were verified
against the Northern Scholars Institute preset, which was deliberately
given a longer name specifically to exercise this. Other long-content
risks (a long program title, a long news headline) were reasoned through
but not exhaustively tested — see the handoff notes for what's still
open.

One more constraint worth knowing when writing new CTA copy for a client:
`.btn` (every button on the site) is `white-space: nowrap` by design —
buttons don't wrap. That's fine as long as button labels stay short (as
they do throughout this project — "Apply Now", "Talk to Admissions"), but
a much longer CTA label could push a neighboring element (like the mobile
nav toggle) in a tight row. This wasn't turned into a defensive CSS fix
because button copy is author-controlled, not variable-length user data
the way a school name is.

## What the rebranding test actually proved (not just claimed)

`scripts/rebrand.py` was run against all three presets this session. Each
output was verified for: zero leftover references to the previous
school's name/contact info, correctly updated brand-color tokens,
correctly updated logo monogram, and structurally valid HTML/CSS (tag
balance, brace balance) after the text substitution. One real bug was
found and fixed in the process — a WhatsApp share link on the article page
spelled the school name with `%20` instead of spaces, which the plain-text
replacement pass didn't originally match. Fixed by adding a URL-encoded
variant to the replacement list.
