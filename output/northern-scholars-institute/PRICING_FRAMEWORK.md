# Pricing Framework

A structure for turning real delivery cost into a price — not a price
list. No UGX figures in this document are real market prices; anywhere a
number appears, it's either a placeholder explicitly marked as such, or
part of a worked example showing how the formula works. Treating any
number here as a quote would be a mistake.

## Why this is a formula, not a price list

`SERVICE_PACKAGES.md` already found that the three tiers don't actually
differ in build effort (all nine pages, same architecture, every time) —
they differ in **content depth, customization, photography, and support**.
That means the real cost driver for any given client isn't "which tier,"
it's "how much content-authoring and customization work does this
specific school actually need." A price list that ignores that will
either overcharge an easy client or eat margin on a hard one. A formula
that starts from real cost components and lets tier + client specifics
feed into it is the only version of this that stays accurate as the
business takes on real clients.

## The four categories, kept strictly separate

### ONE-TIME DEVELOPMENT

Everything paid once, at delivery. This is where almost all of the real
labor cost lives.

| Component | What drives the cost | Scales with |
|---|---|---|
| Base build & configuration | Running the rebrand script, applying/verifying the color palette, deploying the 9-page architecture | Fixed per engagement — this is the part the reusable architecture (Stage 5) specifically makes cheap and fast, and the core commercial argument for having built it that way (see `PRODUCT_OVERVIEW.md` §9) |
| Content authoring | Writing/adapting real copy for every page section (leadership bios, program descriptions, achievements, admissions FAQ, news stories) | Content depth (tier) and how much the client can supply themselves vs. needing it written from scratch |
| Photography integration | Cropping, optimizing, and placing client-supplied photos throughout the site | Number of photos and how much they need editing |
| Photography sourcing (if commissioned) | Coordinating or shooting new photography | Whether the client has usable photos already (see `IDEAL_CLIENT.md` §1) — this is the single biggest cost swing between an easy and a hard engagement |
| Advanced SEO setup | Building sitemap.xml/robots.txt and extending structured data to all pages — real work, not yet automated (see `FEATURE_MATRIX.md`) | Fixed per engagement, once built once as a reusable pattern |
| Custom color verification | Contrast-checking a palette outside the pre-verified range (see `REBRANDING_GUIDE.md`) | Fixed, small, only if the client wants a custom (non-preset-range) palette |
| Logo file integration | Only sellable once the currently-untested pattern is verified (see `FEATURE_MATRIX.md` footnote 9) | Fixed, small, one-time cost to build and test the capability itself before it can be resold repeatedly |
| QA pass | Link-check, responsive/content review before handoff | Fixed per engagement |
| Deployment | Connecting hosting + domain | Fixed per engagement |

### RECURRING COSTS

Costs that continue after launch, separate from anything this business
charges for its own service — these are largely pass-through.

| Component | Notes |
|---|---|
| Domain registration | Paid annually to a registrar, typically by or on behalf of the client. Whether this business marks it up or passes it through at cost is a policy decision, not a technical one — not decided here. |
| Hosting | Static sites at this scale typically cost very little to nothing on standard hosts (Netlify/Vercel/GitHub Pages free tiers) — but exact terms depend on the specific host and traffic, so "free" shouldn't be promised as a guarantee, only as the typical case. |

### MAINTENANCE

Recurring revenue for this business specifically — separate from the
pass-through recurring costs above.

| Component | Notes |
|---|---|
| Content-update allowance | A defined number of edits/month, delivered by a developer since there is no CMS at any tier (see `FEATURE_MATRIX.md`). Bundled into Premium; an optional paid add-on for Essential/Professional. |
| Extended support window | Beyond the included post-launch correction period. |

This is the category that should fund ongoing product development (new
presets, the logo-upload verification work, sitemap automation, etc.) —
see "Sustainability," below.

### OPTIONAL ADD-ONS

One-time, separately priced, not bundled into any tier by default.

- Additional news articles beyond the included set
- A second preset/campus site (reduced relative cost, since the base
  build is reused — see `SERVICE_PACKAGES.md`)
- Analytics setup
- Extended one-time support window (as opposed to an ongoing
  subscription)

## The formula

```
One-time price = Base Build Fee
                + (Content Hours × Hourly Rate)
                + (Photo Integration Hours × Hourly Rate)
                + (Photography Sourcing, if commissioned — quoted separately)
                + Advanced SEO Fee (if tier includes it)
                + Custom Palette Verification Fee (if requested)
                + Logo Integration Fee (if requested, and only once built/verified)

Recurring (optional) = Maintenance Allowance Fee (monthly)
                      + Domain (pass-through, annual)
                      + Hosting (pass-through, typically minimal)
```

`Hourly Rate` is deliberately left as **[PLACEHOLDER — requires real
local market research before use]**. Everything else in this framework is
structural; that one variable is the only thing standing between this
document and a real price, and it should be set from actual observed
delivery time on real engagements plus a deliberate margin decision (see
"Sustainability" below) — not asserted here as a market fact nobody has
verified.

### Worked example (illustrative math only — not a quote)

If, hypothetically, `Hourly Rate` were set at some placeholder value
`R`, and a Professional-tier engagement took 6 base hours + 14 content
hours + 4 photo-integration hours + a fixed advanced-SEO fee `S`:

```
Price = Base Build Fee + (18 hours × R) + S
```

The point of showing this isn't the arithmetic — it's that once `R` is
set from real data, this framework produces a *different, defensible*
number for an easy client (school supplies great content and photos,
fewer hours) versus a hard one (everything needs to be written and
sourced from scratch), rather than one flat number for both.

## Client size and urgency

Two factors this framework accounts for without inventing numbers for
them yet:

- **Client size**: a larger school with more programs, more leadership
  bios, or a second campus adds real content-authoring hours — priced
  through the formula's Content Hours term, not through a separate "large
  school surcharge."
- **Urgency**: a rushed timeline compresses the same amount of work into
  less calendar time, which is a real cost (evening/weekend work,
  reduced ability to batch multiple clients) — if this business wants to
  charge for rush delivery, that should be a defined rush multiplier
  applied to the whole one-time price, decided deliberately rather than
  improvised per request.

## Discounting — without destroying perceived value

The goal stated for this stage is a sustainable business, not the
cheapest possible websites. That means discounting has to be structured,
not improvised:

- **Never discount by silently cutting scope** (e.g., quietly skipping
  the QA pass to hit a lower number) — that's a quality failure wearing
  a pricing decision's clothes.
- **Never negotiate the headline one-time price ad hoc** in a live
  conversation — an unstructured discount teaches every future client
  that the listed price is a suggestion, which erodes pricing power
  permanently, not just for one deal.
- **Discount through defined mechanisms only**, each with a clear reason
  a client can understand:
  - *Bundling*: a second preset/campus at a reduced rate, because the
    base build is genuinely reused — this is a real cost saving being
    passed through, not an arbitrary concession.
  - *Payment terms*: a modest discount for full payment upfront versus
    installments — this is compensating for cash-flow/collection risk,
    a legitimate business tradeoff.
  - *Time-boxed early-adopter positioning*: if this business wants its
    first few clients priced below the eventual standard rate to build
    a portfolio, that should be framed explicitly as "founding client"
    terms with a stated limited number of slots — not as evidence the
    standard price is negotiable.
- **Never discount the maintenance/recurring category** — that's the
  category meant to fund future development (see below), and discounting
  it first undermines the one part of the business model designed to be
  sustainable rather than one-off.

## Sustainability — what margin is actually for

This stage's brief is explicit that the goal isn't "cheap websites," it's
margin that funds future development. Concretely, that means the pricing
model should be set up so that revenue from real engagements can fund:
building and verifying the logo-upload capability, automating the
currently-manual sitemap/structured-data work, expanding the preset
library, and eventually the genuinely larger future-product work (a CMS,
if ever pursued) flagged in `SERVICE_PACKAGES.md` and `FEATURE_MATRIX.md`.
None of that gets funded by a race-to-the-bottom price; it gets funded by
`Hourly Rate` (once set) reflecting real value delivered, plus a
maintenance category that isn't the first thing discounted away.

---

## Handoff update

Created `PRICING_FRAMEWORK.md`: a cost-driver-based formula (not a price
list), with ONE-TIME DEVELOPMENT / RECURRING COSTS / MAINTENANCE /
OPTIONAL ADD-ONS kept strictly separate as instructed, an explicit
placeholder for the one number this framework can't set on its own
(`Hourly Rate`), and a discounting policy designed to protect perceived
value rather than just describing what a discount is.

## Unresolved questions

- `Hourly Rate` (or an equivalent day-rate) needs to be set from real
  local market research — this document deliberately does not guess at
  one, per the instruction not to present guesses as market facts.
- No actual engagement has been timed yet (Stage 6.3 already flagged
  this), so the "Content Hours" and "Photo Integration Hours" estimates
  used in the worked example are illustrative, not calibrated — the
  first 1–2 real engagements should be time-tracked specifically to
  calibrate this formula.
- Whether domain registration is passed through at cost or with a markup
  is a policy decision this document intentionally leaves open.
- Whether "founding client" discount terms will actually be used, and
  how many slots, is a business decision, not something to decide here.

No Codex prompt generated — this stage was a pricing/business framework,
not a technical task, and no website code was touched.

Not proceeding automatically.
