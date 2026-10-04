# Service Packages

Three tiers for the current school website product. Every line below is
checked against what the codebase can actually deliver today (see
`PRODUCT_OVERVIEW.md`) — nothing here promises a capability that doesn't
exist without saying so explicitly.

## A design note on why tiers differ by depth, not page count

The obvious way to build a "cheaper" tier is fewer pages. That doesn't
actually work with this codebase as it stands: the nav and footer on
every page are hardcoded to link to all seven inner pages (About,
Academics, Admissions, Campus Life, News, Gallery, Contact) plus the
homepage. Deliver a client only 4 of those pages and their site ships
with dead nav links to files that don't exist — a real bug, not a
theoretical one. Building a nav variant that adapts to which pages a
client actually has isn't currently possible; it would require real
development work (see "Unsupported promises" at the end).

So these tiers differ by **content depth, customization scope, and
support**, not page count. Every tier gets the full nine-page
architecture. This also directly serves the instruction not to make
Essential look intentionally crippled — every client gets the same real
information architecture and the same design system; what changes is how
much content depth, customization, and ongoing support goes into it.

---

## ESSENTIAL

**Ideal client**: a school that needs a credible, complete site fast and
affordably — see `IDEAL_CLIENT.md` primary profile, especially a school
with no current site or a badly outdated one, where "dramatically
better than what we have now" is the whole value proposition.

| Area | Scope |
|---|---|
| **Included pages** | INCLUDED — all 9 pages (Homepage, About, Academics, Admissions, Campus Life, News, Gallery, Contact), full architecture |
| **Branding customization** | INCLUDED — a palette from the verified-safe color range (see `REBRANDING_GUIDE.md`), applied via `scripts/rebrand.py`; generated monogram logo (client's initials, token-driven — no separate logo file needed) |
| **Imagery** | INCLUDED — the existing placeholder system (professionally designed, not a blank box — see `DESIGN_SYSTEM.md`), used as the delivered state unless the client supplies their own photos to drop in |
| **Gallery** | INCLUDED — full filterable gallery page (this is existing, already-built infrastructure — there's no cheaper version to offer instead) |
| **News/Events** | INCLUDED — news page + the one existing demo article as a working template; content limited to what the client supplies at this tier (fewer authored stories than Professional/Premium, since story-writing is billable time) |
| **Admissions functionality** | INCLUDED — process timeline, requirements list, FAQ; fees section ships as the no-invented-figures table structure (client must supply real numbers for it to be meaningful, at any tier) |
| **Contact functionality** | INCLUDED — the honest mailto-based form, WhatsApp/phone/email links, live-synced from one config |
| **SEO** | INCLUDED — per-page title/meta description, Open Graph tags. NOT included: sitemap.xml/robots.txt (not yet built for any tier — see below), structured data beyond the homepage (see Premium) |
| **Deployment** | INCLUDED — static hosting setup (Netlify/Vercel/GitHub Pages) |
| **Support** | INCLUDED — a defined post-launch correction window (e.g. minor text/content fixes for a set number of days); no ongoing retainer |
| **Maintenance** | OPTIONAL ADD-ON — any changes after the support window closes are billed separately (there's no CMS — every content change requires a developer, at every tier, permanently; see `PRODUCT_OVERVIEW.md` §6) |
| **Optional upgrades** | Real photography sourcing, additional news articles, extended support window, custom (non-preset-range) color palette |

---

## PROFESSIONAL

**Ideal client**: an established school ready to invest in a fuller,
more customized presence — the primary/secondary profiles in
`IDEAL_CLIENT.md` who already have usable photography and real content
ready to supply.

| Area | Scope |
|---|---|
| **Included pages** | INCLUDED — same full 9-page architecture as Essential |
| **Branding customization** | INCLUDED — a fully custom color palette (not limited to the pre-verified range), contrast-checked against the method in `REBRANDING_GUIDE.md` before delivery; generated monogram logo |
| **Imagery** | INCLUDED — client-supplied photography integrated throughout (replacing placeholders), assuming the client can provide it; placeholder system used as fallback for any gaps |
| **Gallery** | INCLUDED — full filterable gallery, populated with client photography across all categories |
| **News/Events** | INCLUDED — news page with a fuller set of authored stories and the article template used for 2–3 real articles (not just the one demo) |
| **Admissions functionality** | INCLUDED — same as Essential, with fully authored content (real requirements, real dates, real FAQ answers specific to the client) |
| **Contact functionality** | INCLUDED — same as Essential |
| **SEO** | INCLUDED — everything in Essential, plus sitemap.xml/robots.txt (built during delivery — not currently in the codebase, so this is real scoped work each time, not automated) |
| **Deployment** | INCLUDED — same as Essential |
| **Support** | INCLUDED — a longer post-launch window than Essential, covering minor content corrections and small adjustments |
| **Maintenance** | OPTIONAL ADD-ON — an ongoing monthly content-update allowance (a defined number of edits/month, delivered by the developer since there's no CMS) |
| **Optional upgrades** | Real logo file integration (flagged below — needs verification before it can be sold confidently), additional articles beyond the included set, a second preset for a sister campus |

---

## PREMIUM

**Ideal client**: a school (or small group of schools/campuses) wanting
the fullest treatment and an ongoing relationship, not just a one-time
build — including institutions in `IDEAL_CLIENT.md`'s secondary profile
considering a second campus site.

| Area | Scope |
|---|---|
| **Included pages** | INCLUDED — same 9-page architecture |
| **Branding customization** | INCLUDED — fully custom palette, contrast-verified; generated monogram logo. OPTIONAL ADD-ON — real uploaded logo file integration, *not automatically included even at this tier*, since the pattern is documented in `REBRANDING_GUIDE.md` but explicitly marked "untested in this codebase" — see Unsupported Promises. Corrected here to match `FEATURE_MATRIX.md`'s more accurate framing (this line originally read "INCLUDED, conditional," which overstated it). |
| **Imagery** | INCLUDED — coordinated photography sourcing/shoot-day service (a real service commitment, not a code feature) in addition to full integration |
| **Gallery** | INCLUDED — full filterable gallery, fully populated |
| **News/Events** | INCLUDED — full news architecture with a genuinely populated set of articles (5+), all using the existing article template |
| **Admissions functionality** | INCLUDED — same as Professional, fully authored |
| **Contact functionality** | INCLUDED — same as Essential/Professional |
| **SEO** | INCLUDED — everything in Professional, plus structured data (JSON-LD) extended to all 9 pages, not just the homepage (currently only the homepage has it — this is real, scoped, per-client delivery work, not something that ships automatically) |
| **Deployment** | INCLUDED — same as other tiers, plus deployment assistance/handoff support |
| **Support** | INCLUDED — the longest post-launch window of the three tiers, plus a priority contact channel (e.g. WhatsApp) for support requests |
| **Maintenance** | INCLUDED — a defined ongoing content-update allowance built into the tier (rather than sold separately, as in Professional) |
| **Optional upgrades** | A second preset/campus site at a reduced rate (reusing the same underlying build); anything explicitly listed as Future Product below, scoped and quoted separately if a client wants to commission it as custom work outside this product |

---

## Explicitly FUTURE PRODUCT (not sellable at any tier today)

These do not exist in the codebase in any form. Selling them as part of
any package today would be a false promise:

- A CMS or any self-service content editing for the client
- Student, parent, or teacher portals
- Authentication/login of any kind
- Online fee payment
- An admin dashboard
- Multi-language support (the site is English-only; no i18n scaffolding
  exists)

If a client asks for any of these, the honest answer is that it's a
separate, larger, custom-scoped engagement — not an upgrade path within
these three tiers.

## Unsupported promises — must be resolved before selling as described

- **Essential's premise (fewer content, same page architecture) doesn't
  require code changes — but if a future version of Essential is meant
  to ship fewer *pages*, not just less content, the nav needs a
  page-aware variant that doesn't exist yet.** Flagging this now so it
  isn't accidentally promised in a sales conversation.
- **Real uploaded logo file support (Premium) is documented but
  untested.** `REBRANDING_GUIDE.md` describes the pattern (an `<img>`
  with `object-fit: contain` replacing the generated monogram) but it's
  never been built or verified against a real logo file — wide, tall, or
  transparent. This needs a short verification pass before it's sold
  with confidence, not assumed to just work.
- **Sitemap.xml/robots.txt do not exist anywhere in the codebase today.**
  Listed as included in Professional/Premium above on the basis that
  building them is small, well-understood, per-client delivery work —
  but as of this document, zero clients have received them, so this is
  a promise about delivery process, not an existing asset.
- **JSON-LD structured data exists only on the homepage today.**
  Premium's promise to extend it to all 9 pages is real, scoped work
  that hasn't been done for any actual client yet — same category as
  the sitemap item above.

## Unresolved business questions

- No prices are set (deliberately, per this stage's instructions) —
  packages need to be priced against actual delivery time/cost once
  that's been measured on a real engagement, not estimated in the
  abstract.
- Is "support window" measured in days, in a number of revision rounds,
  or in developer hours? This document uses "window" language
  deliberately vague because that decision affects delivery cost
  directly and hasn't been made.
- Is the Professional/Premium monthly maintenance allowance meant to be
  a recurring subscription (ongoing revenue) or a one-time bundled
  allowance that expires? This is a real business-model decision, not a
  packaging detail.
- Should Essential exist at all if it requires the same 9-page build
  effort as the other tiers (per the design note above)? If the real
  cost driver is content-authoring time rather than page count, it may
  be worth testing whether "Essential" is priced meaningfully lower in
  practice, or whether it should be repositioned as "Professional, less
  content" rather than a structurally distinct tier.

No Codex prompt generated for this stage — package design is a business
document, not a coding task. The two flagged technical items above (logo
file verification, sitemap/JSON-LD work) are real future engineering
tasks, but building them now would be getting ahead of a pricing/business
decision that hasn't been made yet, which this stage's instructions
specifically avoid doing.
