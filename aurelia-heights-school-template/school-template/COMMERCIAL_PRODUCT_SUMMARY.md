# Commercial Product Summary

The single source of truth consolidating `PRODUCT_OVERVIEW.md`,
`IDEAL_CLIENT.md`, `SERVICE_PACKAGES.md`, `FEATURE_MATRIX.md`,
`PRICING_FRAMEWORK.md`, `COST_MODEL.md`, and `PACKAGE_COST_MODEL.md`. Read
this document first; go to the individual documents for full detail on
any section. No website code was touched to produce this.

## A contradiction was found and fixed while consolidating

`SERVICE_PACKAGES.md` originally described Premium's real-logo-file
upload as "**INCLUDED**, conditional on verification." `FEATURE_MATRIX.md`
— built later, checked directly against the code — marks the same
capability "**○ Optional**" for Premium, because it's genuinely untested
and not something that can be confidently delivered by default yet.
These weren't the same claim. `SERVICE_PACKAGES.md` has been corrected to
match `FEATURE_MATRIX.md`'s framing: **logo file upload is an optional
add-on requiring a verification pass, at any tier that offers it — never
a default-included feature.** This summary uses that corrected version
throughout.

No other factual contradictions were found between the six documents on
review — the rest is consistent, cross-referenced.

## 1. Product description

A premium, rebrandable static website system for schools and other
educational institutions — nine complete, real pages (not a single
homepage), a documented design system, and a working rebrand mechanism
verified against three distinct brand configurations. No backend, no
database, no CMS — a deliberate architecture choice with real
commercial consequences (see §7). Full detail: `PRODUCT_OVERVIEW.md`.

## 2. Target customer

**Primary**: a private/independent school with no website or a badly
outdated one, already using WhatsApp/social media for parent
communication, with at least some usable photography, actively
recruiting against real competition, with one clear decision-maker.
**Poor fit**: schools with an already-good website, zero digital
presence, an existing IT department/vendor relationship, or no usable
content/photography to supply. Full detail, including buying signals and
likely objections: `IDEAL_CLIENT.md`.

## 3. Core value proposition

A real information architecture (admissions, academics, campus life,
news, gallery — not just a homepage), a coherent premium design system,
and a genuinely verified rebranding mechanism, delivered as a
config-plus-content engagement rather than a from-scratch build every
time. The commercial argument depends on client #2 costing meaningfully
less to deliver than client #1 — see `PRODUCT_OVERVIEW.md` §9.

## 4. Service packages

Three tiers — **Essential, Professional, Premium** — that differ by
**content depth, customization scope, photography handling, and
support/maintenance**, not by page count. All three include the full
9-page architecture; a "fewer pages" tier isn't currently possible
without new engineering (the nav/footer are hardcoded to link to all 9
pages across every file — a page-aware nav variant doesn't exist yet).
Full detail: `SERVICE_PACKAGES.md`.

| | Essential | Professional | Premium |
|---|---|---|---|
| Content depth | Lighter | Full | Fullest (5+ articles) |
| Color customization | Pre-verified palette range | Fully custom, contrast-checked | Fully custom, contrast-checked |
| Logo | Generated monogram | Generated monogram | Generated monogram (real file upload available as a verified-first optional add-on — see correction above) |
| Photography | Placeholder or client-supplied | Client-supplied, fully integrated | Client-supplied or coordinated shoot |
| Advanced SEO (sitemap, full structured data) | Not included | Included | Included |
| Support window | Shortest | Longer | Longest, priority channel |
| Ongoing maintenance | Optional add-on | Optional add-on | Included allowance |

## 5. Feature matrix (condensed — see `FEATURE_MATRIX.md` for the full version with footnotes)

- **Always included, every tier**: all 9 pages, responsive design
  (code-verified, not device-tested — see §9), WhatsApp links, the
  contact form (mailto-based — does not deliver to an inbox by itself,
  see `FEATURE_MATRIX.md` footnote 4), basic SEO, custom domain
  connection, deployment.
- **Tier-dependent**: advanced SEO (Professional/Premium only), content
  update/maintenance allowance (Premium only by default, optional
  add-on otherwise).
- **Optional at any tier, never bundled by default**: analytics, logo
  file upload (post-correction, see above), extra articles, a second
  preset/campus.
- **Not available at any price today** (`→` in the matrix — a genuinely
  different, larger product if ever built): a CMS or any self-service
  editing, student/parent portals, authentication, online payments, an
  admin dashboard, any Supabase/backend/database integration,
  multi-language support.

## 6. Pricing methodology

Two documents cover this, at different levels of detail, and should be
read together — not treated as competing models:

- **`PRICING_FRAMEWORK.md`** — the original cost-category framework
  (ONE-TIME DEVELOPMENT / RECURRING COSTS / MAINTENANCE / OPTIONAL
  ADD-ONS) and the discounting policy (never cut scope silently, never
  negotiate the headline price ad hoc, never discount maintenance).
- **`PACKAGE_COST_MODEL.md`** — the more detailed, later, per-package
  refinement: named labor variables (`H_base`, `H_content`, `H_photo`,
  etc.) per tier, feeding **Minimum Viable**, **Target**, and
  **Healthy-Margin** price formulas. Treat this as the current
  authoritative structure for actually computing a price once real
  numbers exist — `PRICING_FRAMEWORK.md`'s original worked example used
  a coarser "Base Build Fee" concept that `PACKAGE_COST_MODEL.md`
  correctly resolves into `H_base × R` instead of a separate flat fee.

**No real hourly rate, margin percentage, or hour estimate exists in
either document** — every such variable (`R`, `M_target`, `M_healthy`,
every `H_*`) is explicitly unset, because no engagement has been timed
and no market rate research has been done. This is the single largest
gap between "a pricing framework exists" and "this product has a price"
— see Open Questions.

## 7. Recurring costs

From `COST_MODEL.md`, cross-checked against `PACKAGE_COST_MODEL.md`:

- **Effectively $0 to this business**: hosting, SSL, deployment, storage,
  image delivery — all covered by free-tier static hosting
  (Netlify/Vercel/Cloudflare Pages/GitHub Pages), a direct consequence of
  the no-backend architecture, not a cost optimization applied
  separately.
- **Pass-through, billed to client**: domain registration (markup policy
  undecided — see Open Questions).
- **Optional, client's choice**: analytics tooling (free Google Analytics
  vs. a paid privacy-respecting alternative).
- **This business's own recurring revenue** (not a cost): the
  maintenance/content-update allowance, sold at Professional (optional)
  and included at Premium.

## 8. Optional upgrades

Analytics setup; additional news articles beyond a tier's included set;
a second preset/campus site (reduced relative cost — the base build is
reused); real logo file integration (requires a verification pass first,
at any tier that offers it — see the correction above); extended support
window as a one-time purchase rather than a subscription.

## 9. Current limitations

Stated plainly, consolidated from `PRODUCT_OVERVIEW.md` §6 and confirmed
consistent across every other document:

- **No real photography exists anywhere** — every image is a generated
  placeholder. The single biggest gap before any real client sees this
  as finished.
- **No rendered visual QA has ever been performed** — every
  responsive/accessibility check made during development was static
  code analysis (computed contrast math, link-checking, breakpoint
  logic tracing), not an actual browser, device, or tool like Lighthouse
  or axe. This applies to the whole product, not one package.
- **SEO metadata is inconsistent** — structured data and Open Graph
  images exist on the homepage only.
- **Only one full article page exists**, demonstrating the pattern
  rather than a populated news archive.
- **The rebrand script only covers identity/branding/contact** —
  leadership bios, testimonials, news, achievements, and program content
  are permanently manual authoring work for every client, by design, not
  a temporary gap.
- **No page-aware nav variant exists** — every client currently gets all
  9 pages; a "fewer pages" tier would need real engineering work first
  (see §4).
- **No pricing numbers exist yet** — every formula in
  `PRICING_FRAMEWORK.md` and `PACKAGE_COST_MODEL.md` is unset (see §6).
- No CMS, portals, authentication, payments, admin dashboard, or
  multi-language support — by design, not oversight (§5).

## 10. Future opportunities

Explicitly out of the current product, consolidated from
`SERVICE_PACKAGES.md` and `FEATURE_MATRIX.md`: a CMS/self-service editing
product, student/parent portals, online payments, an admin dashboard,
multi-language support. Nearer-term, smaller opportunities already
identified across the six/seven documents: building and verifying the
real-logo-upload pattern once (after which it's resellable repeatedly),
automating sitemap/structured-data generation instead of hand-building it
per client, and expanding the preset library. None of these should be
built speculatively before a client has actually paid for the need — see
`COST_MODEL.md`'s explicit warning against that.

---

## Assumptions made explicit (not verified facts)

- That free-tier static hosting will comfortably cover a real school
  site's traffic — reasoned from how these platforms are commonly
  described, not measured against an actual deployment (`COST_MODEL.md`).
- That the same blended hourly rate `R` applies across all three
  packages and all types of work — a simplification flagged in
  `PACKAGE_COST_MODEL.md`, not a conclusion.
- That `M_target` (recurring maintenance margin) can reuse the same
  margin variable as one-time work — flagged as possibly needing its own
  variable, not decided.
- That domain registration is billed to the client either at cost or
  with a markup — which one, is explicitly undecided (appears as an open
  question in three separate documents, which is itself a signal it
  should be resolved soon).

## Master project handoff

**COMPLETED**
`PRODUCT_OVERVIEW.md`, `IDEAL_CLIENT.md`, `SERVICE_PACKAGES.md` (now
corrected), `FEATURE_MATRIX.md`, `PRICING_FRAMEWORK.md`,
`PACKAGE_COST_MODEL.md`, `COST_MODEL.md`, and this consolidating
`COMMERCIAL_PRODUCT_SUMMARY.md`. One real contradiction found between
`SERVICE_PACKAGES.md` and `FEATURE_MATRIX.md` (logo-upload framing) and
corrected at the source. All seven documents cross-checked for further
contradictions; none else found.

**REMAINING**
No real pricing numbers exist (every `H_*`, `R`, `M_target`, `M_healthy`
variable is unset). No real photography. No rendered/device QA ever
performed. Only one article page exists. No page-aware nav variant for a
true fewer-pages tier. Sitemap/structured-data work not yet built for any
real client. Logo-file-upload pattern not yet built or verified.

**OPEN QUESTIONS**
Domain markup policy (at cost vs. with markup) — unresolved across three
documents. Whether Essential is worth keeping as a distinct tier if it
costs the same build effort as the others (`SERVICE_PACKAGES.md`).
Whether recurring/maintenance work needs its own margin variable
separate from one-time `M_target`. Whether a different effective hourly
rate should apply to higher-skill work (custom palette, logo
integration) vs. routine content entry. Whether there's an existing
target-school list or outreach starts from zero. Whether a
support/maintenance retainer is actually planned as a real recurring
revenue line, which several objection-handling answers in
`IDEAL_CLIENT.md` depend on.

**BUSINESS ASSUMPTIONS**
Listed in full above ("Assumptions made explicit"). The load-bearing one:
this entire commercial model assumes client #2 costs meaningfully less
to deliver than client #1 because of the reusable architecture — that
assumption hasn't been tested against a real second client yet.

**TECHNICAL TASKS** (not started — business/pricing decisions should
likely come first, per each source document's own sequencing)
Build and verify real-logo-file-upload support. Automate
sitemap.xml/robots.txt generation. Extend structured data to all 9
pages. Build a page-aware nav variant if a true fewer-pages tier is ever
wanted. Source or commission real photography for the flagship demo.

**CODEX TASKS**
None generated this stage — consolidating documentation revealed no
technical work that's ready to start ahead of the pricing/business
decisions listed above. The five items under Technical Tasks are real,
but per `COST_MODEL.md`'s explicit warning against building
speculatively, none should be turned into a Codex prompt until a
business decision (or a paying client) actually calls for it.

Not beginning Prompt 8 automatically, per the instruction.
