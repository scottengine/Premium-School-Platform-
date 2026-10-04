# Package Delivery Cost Model

A per-package labor/cost breakdown feeding three price formulas —
**minimum viable**, **target**, and **healthy-margin** — for Essential,
Professional, and Premium. This is not a price list. Every number that
would need real data (an hourly rate, a task's actual hours, a margin
percentage) is left as an explicit variable. None are estimated, guessed,
or filled in with illustrative figures, because none of that data exists
yet — no real engagement has been delivered or timed, so inventing hour
counts would be exactly the "pretend we have historical client data"
this stage rules out.

**Source of truth used**: the current codebase and `FEATURE_MATRIX.md`
(verified against the code in Stage 6.4) for what each package actually
includes; `SERVICE_PACKAGES.md` for tier scope; `COST_MODEL.md` for which
infrastructure costs are real ($0 for hosting/SSL/deployment/storage) vs.
which are pass-through (domain) vs. genuinely optional (analytics).

## How to read this document

Every cost component below is a **named variable**, not a number. Where
this document shows a number, it is explicitly a symbolic placeholder
used once, in one worked example, purely to demonstrate how the
arithmetic combines — never a recommendation, an estimate, or a market
rate. Fill in the real variables by timing actual engagements (see
"How to calibrate this," at the end) rather than by guessing at what
seems reasonable.

## Shared variables (used across all three packages)

| Variable | What it represents | Status |
|---|---|---|
| `R` | Blended hourly labor rate for this business | UNKNOWN — requires real market research, same open item as `PRICING_FRAMEWORK.md` |
| `M_target` | Target profit margin (as a percentage over cost) | UNKNOWN — a business decision about sustainable margin, not a market fact to look up |
| `M_healthy` | Healthy/aspirational margin (percentage over cost, higher than `M_target`) | UNKNOWN — same, a deliberate business decision |
| `Domain_Cost` | Annual domain registration fee, passed through to client | UNKNOWN — varies by registrar and TLD; check at time of purchase, don't assume a figure |
| `Hosting_Cost` | Recurring hosting fee | `$0` — established in `COST_MODEL.md`: free-tier static hosting comfortably covers this product's needs; not a placeholder, this is the actual current answer |

## Per-package labor components (all hour counts are unset variables)

Every `H_*` variable below is genuinely unknown until it's measured on a
real engagement. The names describe what the hours cover; they carry no
assumed value.

### ESSENTIAL

| Component | Variable | Covers |
|---|---|---|
| Base build & configuration | `H_base_E` | Running the rebrand script, applying a pre-verified color palette, initial deploy |
| Content authoring | `H_content_E` | Writing/adapting copy at Essential's lighter content depth (see `SERVICE_PACKAGES.md`) |
| Photo integration | `H_photo_E` | Placing client-supplied photos, or leaving the placeholder system in place if none supplied |
| Revisions | `H_revision_E` | Correction rounds within the included post-launch window |
| QA & deployment | `H_qa_E` | Link-check, responsive review, domain/hosting connection |

Advanced SEO and logo-file integration are not included at this tier
(`FEATURE_MATRIX.md`), so there's no labor variable for them here.

**One-time labor hours (Essential)**:
```
Hours_E = H_base_E + H_content_E + H_photo_E + H_revision_E + H_qa_E
```

### PROFESSIONAL

| Component | Variable | Covers |
|---|---|---|
| Base build & configuration | `H_base_P` | Same as Essential, plus custom (non-preset-range) palette verification if requested |
| Content authoring | `H_content_P` | Fuller content depth — more authored news stories, fully authored admissions FAQ, etc. |
| Photo integration | `H_photo_P` | Full integration across all pages/categories |
| Advanced SEO build | `H_seo_P` | Building sitemap.xml/robots.txt (doesn't exist yet — real one-time build work, see `FEATURE_MATRIX.md`) |
| Revisions | `H_revision_P` | Correction rounds within Professional's longer post-launch window |
| QA & deployment | `H_qa_P` | Same as Essential |

**One-time labor hours (Professional)**:
```
Hours_P = H_base_P + H_content_P + H_photo_P + H_seo_P + H_revision_P + H_qa_P
```

### PREMIUM

| Component | Variable | Covers |
|---|---|---|
| Base build & configuration | `H_base_PR` | Same as Professional |
| Content authoring | `H_content_PR` | Fullest content depth (5+ authored news stories, etc.) |
| Photo integration | `H_photo_int_PR` | Integrating supplied/commissioned photography |
| Photography coordination | `H_photo_coord_PR` | *This business's own time* coordinating a shoot — separate from any photographer's fee (see third-party costs below) |
| Advanced SEO build | `H_seo_PR` | Extending structured data to all 9 pages (currently homepage-only — real work, see `FEATURE_MATRIX.md`) |
| Logo file integration | `H_logo_PR` | *Only if requested* — and only sellable after the untested pattern is built/verified once (`FEATURE_MATRIX.md` footnote 9); this is real one-time capability-building work the first time, smaller each time after |
| Revisions | `H_revision_PR` | Correction rounds within Premium's longest window |
| QA & deployment | `H_qa_PR` | Same as other tiers |

**One-time labor hours (Premium)**:
```
Hours_PR = H_base_PR + H_content_PR + H_photo_int_PR + H_photo_coord_PR
         + H_seo_PR + H_revision_PR + H_qa_PR
         [+ H_logo_PR, only if a client requests it]
```

## Third-party/pass-through costs (not this business's labor)

| Cost | Variable | Applies to | Notes |
|---|---|---|---|
| Domain registration | `Domain_Cost` | All tiers | Client-billed pass-through (`COST_MODEL.md`) |
| Photographer's fee | `Photo_Vendor_Fee` | Premium only, and only if a photographer is actually commissioned | `$0` if the client supplies their own usable photography instead — this is genuinely conditional, not a fixed line item |
| Analytics tool subscription | `Analytics_Fee` | Any tier, only if the client chooses a paid tool (e.g. Plausible) over free Google Analytics | Optional, per `COST_MODEL.md` |

## Recurring maintenance labor (monthly)

| Package | Variable | Notes |
|---|---|---|
| Essential | `H_maint_E` | Not included by default — optional add-on, billed per request at the same `R` |
| Professional | `H_maint_P` | Not included by default — optional monthly allowance add-on |
| Premium | `H_maint_PR` | Included allowance — a defined number of hours/month bundled into the tier |

## The three price formulas

For each package (using Essential as the pattern — substitute `_P` or
`_PR` variables for the other two):

```
One-Time Delivery Cost (Essential) = Hours_E × R

Minimum Viable Price (Essential) = One-Time Delivery Cost (Essential)
    [+ Domain_Cost and/or Photo_Vendor_Fee, ONLY if this business
       chooses to bundle those into the headline price rather than
       bill them separately — a policy decision, not resolved here]

Target Price (Essential) = Minimum Viable Price (Essential) × (1 + M_target)

Healthy-Margin Price (Essential) = Minimum Viable Price (Essential) × (1 + M_healthy)
```

**Monthly recurring price** (where maintenance is sold, at any tier):
```
Monthly Maintenance Price = (H_maint × R) × (1 + M_target)
```
— reusing `M_target` here is a starting assumption, not a rule; recurring
and one-time work are often priced with different margin logic in
practice, so this may deserve its own `M_maintenance_target` variable
once real numbers exist to reason about it.

### Worked example — arithmetic demonstration only, not an estimate

To show how the formula behaves, and *only* to show that — the numbers
below are arbitrary placeholders, not estimates of real Essential-tier
hours or a real hourly rate:

```
If Hours_E were (hypothetically) 20, and R were (hypothetically) some
placeholder rate "r":

  One-Time Delivery Cost = 20r
  Minimum Viable Price   = 20r
  Target Price           = 20r × (1 + M_target)
  Healthy-Margin Price   = 20r × (1 + M_healthy)
```

The only thing this demonstrates is that Minimum Viable, Target, and
Healthy-Margin scale off the same base cost by different multipliers —
not what any of them are actually worth. Once `Hours_E` and `R` are real,
this same arithmetic produces a real number.

## How to calibrate this (turning variables into real numbers)

1. **Time the first 2–3 real engagements**, logging hours against each
   `H_*` component separately (not just total project time) — this is
   the only reliable way to fill in the `Hours_*` variables, and
   `PRICING_FRAMEWORK.md` already flagged this same need.
2. **Set `R`** from real local market research into what comparable
   freelance/agency web work commands — not from this document, which
   deliberately doesn't guess at it.
3. **Set `M_target` and `M_healthy`** as a deliberate business decision
   about sustainability (see `PRICING_FRAMEWORK.md` "Sustainability"),
   informed by, but not dictated by, market research into what similar
   services charge.
4. Re-run the formulas above with real numbers to get the first real
   Minimum Viable / Target / Healthy-Margin price per package.

---

## Handoff update

Created `PACKAGE_COST_MODEL.md`: per-package labor variable breakdown
(Essential/Professional/Premium), pass-through/third-party cost
variables, and Minimum Viable / Target / Healthy-Margin price formulas.
Deliberately contains zero invented hour estimates or market rates —
every `H_*`, `R`, `M_target`, and `M_healthy` variable is unset by
design, consistent with the instruction not to pretend historical client
data exists. Cross-checked against `FEATURE_MATRIX.md` and
`SERVICE_PACKAGES.md` for what's actually in each tier, and against
`COST_MODEL.md` for which infrastructure costs are real ($0 hosting) vs.
pass-through (domain) vs. optional (analytics). No website code was
touched.

## Assumptions made explicit

- Assumed the same `R` (blended hourly rate) applies across all three
  packages — a simplification; a real business might reasonably use a
  different effective rate for senior-level customization work
  (Premium) vs. routine content entry (Essential), which isn't modeled
  here and could be revisited once real data exists.
- Assumed `M_target`/`M_healthy` apply uniformly to one-time pricing
  across all three packages, and flagged (not assumed) that recurring
  maintenance pricing might deserve its own margin variable rather than
  reusing `M_target`.
- Assumed domain/photographer pass-through costs are billed separately
  by default, with bundling into the headline price as an explicit
  optional policy choice rather than the default.

## Unresolved questions

- All `H_*` variables, `R`, `M_target`, and `M_healthy` remain unset —
  this document is the formula, not the answer; the answer requires
  timing real engagements and doing real rate/margin research (see
  "How to calibrate this," above).
- Whether Premium's photography coordination time (`H_photo_coord_PR`)
  should be billed at the same rate `R` as content/build work, or at a
  different rate reflecting different skill/effort — not decided here.
- Whether a different effective hourly rate should apply to
  higher-skill customization work (custom palette verification, logo
  integration) vs. routine content entry — flagged as a possible future
  refinement, not resolved.

No Codex prompt generated — this stage was cost-modeling documentation
only; no website code was modified or needs to be.

Stopping after this prompt, per the instruction not to proceed
automatically.
