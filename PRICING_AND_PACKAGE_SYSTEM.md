# Pricing and Package System

The operational pricing reference for the school website business. This
document does what `SERVICE_PACKAGES.md` deliberately didn't do — it
attaches real, current prices to the package structure, and defines how
those prices are quoted, discounted, and governed going forward.

**This document does not replace `SERVICE_PACKAGES.md` or
`FEATURE_MATRIX.md`.** Those remain the authority on what each package
actually includes. This document is the authority on what each package
currently *costs* and how pricing is administered.

## Relationship to existing documentation

| Document | What it remains authoritative for |
|---|---|
| `SERVICE_PACKAGES.md` | What's in each package — scope, content depth, customization level |
| `FEATURE_MATRIX.md` | The precise ✓/○/—/→ feature-by-feature comparison |
| `COMMERCIAL_PRODUCT_SUMMARY.md` | The consolidated cross-document commercial overview |
| `PACKAGE_COST_MODEL.md` | The cost-driver *formula* (labor variables, margin variables) — still largely unquantified, see "Price Justification" below |
| `PRICING_FRAMEWORK.md` | The cost-category structure (one-time/recurring/maintenance/add-ons) and the discounting *principles* this document's discount policy builds on |
| `SCOPE_AND_CHANGE_CONTROL.md` | How a request is classified (A/B/C/D) — this document defines what happens commercially once something is classified |
| `BUILD_REVIEW_LAUNCH_WORKFLOW.md` | How a project is actually delivered — unaffected by this document |
| `CLIENT_HANDOFF_SYSTEM.md` | What happens at project close — unaffected by this document |
| **This document** | **Current official prices, quoting rules, discount policy, the historical-quote transition, and pricing governance** |

Nothing below contradicts any of the above — where a prior document left
something unresolved, this document preserves that rather than quietly
deciding it.

## Current official launch prices

**These prices are being established now, by this document, as the
current standard.** They did not exist in any prior documentation —
`PRICING_FRAMEWORK.md` and `PACKAGE_COST_MODEL.md` deliberately left
every price variable unset, and this is the first document in this
project to assign real figures.

| Package | Price |
|---|---|
| **Essential** | UGX 900,000 |
| **Professional** | UGX 1,500,000 |
| **Premium** | UGX 2,200,000 |

## Critical package principle (unchanged from `SERVICE_PACKAGES.md`)

These are **not** a 3-page/6-page/9-page ladder. Every package includes
the same real 9-page architecture (`FEATURE_MATRIX.md`) — the nav and
footer are built site-wide around all 9 pages, and a page-aware nav
variant doesn't exist (`SERVICE_PACKAGES.md`'s own documented reason for
this). What actually changes between tiers is **content depth,
customization depth, photography/content integration, SEO level, and
support/maintenance arrangement** — never page count.

## The three packages

### Essential — UGX 900,000

1. **Price**: UGX 900,000
2. **Positioning**: A credible, complete website, affordably, for a
   school that needs to move off no website or a badly outdated one.
3. **Included website scope**: The full 9-page architecture.
4. **Content depth**: Lighter — fewer authored news stories, standard
   admissions FAQ content (`SERVICE_PACKAGES.md`).
5. **Branding/design customization**: A palette from the pre-verified
   color range (`REBRANDING_GUIDE.md`); generated monogram logo.
6. **Photography/image treatment**: The placeholder system, or
   client-supplied photos dropped in as-is — no photography coordination
   service.
7. **SEO**: Basic per-page titles/descriptions and Open Graph tags. Not
   included: sitemap/structured data.
8. **Contact/WhatsApp functionality**: Full — the same honest
   mailto-based contact form, WhatsApp/phone/email links as every tier
   (this is core infrastructure, not tier-gated).
9. **Hosting/deployment treatment**: Standard static hosting setup
   (Netlify/Vercel/GitHub Pages).
10. **Post-launch support/update arrangement**: A defined post-launch
    correction window; no ongoing maintenance included (optional
    add-on). *Exact window length: UNRESOLVED — REQUIRES BUSINESS
    DECISION, see "What Must Not Be Promised" below.*
11. **Exclusions**: Advanced SEO, coordinated photography, ongoing
    maintenance (unless added separately).
12. **Appropriate client profile**: `IDEAL_CLIENT.md`'s primary profile,
    where the win is "dramatically better than nothing," not heavy
    customization.
13. **What differentiates it from Professional**: Professional adds full
    custom branding, more content depth, and advanced SEO — Essential is
    the same real architecture with a lighter content/customization
    investment.

### Professional — UGX 1,500,000

1. **Price**: UGX 1,500,000
2. **Positioning**: An established school ready for a fuller, more
   customized presence, with real content and photography ready to
   supply.
3. **Included website scope**: The full 9-page architecture.
4. **Content depth**: Fuller — more authored news stories, fully
   authored admissions content, 2–3 real articles rather than the one
   demo template.
5. **Branding/design customization**: A fully custom palette,
   contrast-checked before use (`REBRANDING_GUIDE.md`); generated
   monogram logo.
6. **Photography/image treatment**: Client-supplied photography
   integrated throughout the gallery and all relevant pages.
7. **SEO**: Everything in Essential, plus sitemap.xml/robots.txt and
   real per-client SEO work — built during delivery, since this doesn't
   exist as an automated feature yet (`FEATURE_MATRIX.md`).
8. **Contact/WhatsApp functionality**: Same as every tier.
9. **Hosting/deployment treatment**: Same as Essential.
10. **Post-launch support/update arrangement**: A longer post-launch
    window than Essential; ongoing maintenance available as an optional
    add-on. *Exact window/allowance: UNRESOLVED.*
11. **Exclusions**: Coordinated photography sourcing/shoot service,
    included ongoing maintenance (available as add-on, not bundled).
12. **Appropriate client profile**: A school with real content ready,
    wanting a distinct visual identity rather than the safe palette
    range.
13. **What differentiates it from Premium**: Premium adds a coordinated
    photography service, the longest support window, and an *included*
    (not optional) ongoing maintenance allowance.

### Premium — UGX 2,200,000

1. **Price**: UGX 2,200,000
2. **Positioning**: The fullest treatment, and an ongoing relationship
   rather than a one-time build — including a school considering a
   second campus site.
3. **Included website scope**: The full 9-page architecture.
4. **Content depth**: Fullest — a genuinely populated news archive (5+
   articles using the existing article template).
5. **Branding/design customization**: Fully custom, contrast-checked
   palette; real uploaded logo file **only after** the currently
   unverified pattern is built/tested once (`FEATURE_MATRIX.md` footnote
   9) — not promised as automatically available today.
6. **Photography/image treatment**: Coordinated photography
   sourcing/shoot-day service, in addition to full integration.
7. **SEO**: Everything in Professional, plus structured data (JSON-LD)
   extended to all 9 pages, not just the homepage — real, scoped,
   per-client work.
8. **Contact/WhatsApp functionality**: Same as every tier, plus a
   priority contact channel for support requests.
9. **Hosting/deployment treatment**: Same as other tiers, plus
   deployment assistance/handoff support.
10. **Post-launch support/update arrangement**: The longest support
    window, plus an **included** ongoing content-update allowance
    (rather than sold separately, as at Professional). *Exact
    window/allowance size: UNRESOLVED.*
11. **Exclusions**: Nothing in the current product's scope — Premium is
    the full expression of what this product can deliver today.
12. **Appropriate client profile**: `IDEAL_CLIENT.md`'s secondary
    profile — a school valuing an ongoing relationship, or considering
    multiple campuses.
13. **What differentiates it from custom work**: Premium is still this
    product's architecture, fully realized — not a custom-built system.
    Anything genuinely outside `FEATURE_MATRIX.md`'s scope (a CMS, a
    portal, payments) is never included at any tier, including Premium
    — see Custom Quotations below.

## Price justification

The ascending price reflects increasing **delivery depth**, not
increasing page count: more content preparation and authoring time, more
customization work (a fully custom palette takes real verification
effort beyond picking from a safe range), more photography
integration/coordination, more SEO work, and more support/maintenance
involvement.

Three things worth being precise about:

**A. Documented product scope** — what each tier includes is fixed by
`SERVICE_PACKAGES.md`/`FEATURE_MATRIX.md`, independent of price. This
document didn't change scope to justify a price point.

**B. Current pricing decision** — the three figures above are a
deliberate business decision, made now, at this point in the business's
life. They are **not** derived from `PACKAGE_COST_MODEL.md`'s formulas —
that document's labor variables (`H_base`, `H_content`, `H_photo`, etc.),
hourly rate (`R`), and margin variables (`M_target`, `M_healthy`) remain
genuinely unset. Setting a launch price ahead of having fully quantified
costs is a normal, legitimate way to enter a market — but it means these
prices haven't yet been checked against real delivery-time data.

**C. Future variables that may affect pricing** — once real engagements
are timed (per `PACKAGE_COST_MODEL.md`'s own calibration guidance), the
actual labor hours and a real hourly rate could be compared against
these launch prices to see whether they hold up as sustainable margin,
need adjustment, or turn out to already be well-calibrated by
instinct/market positioning. That comparison hasn't happened yet — this
document doesn't pretend it has.

**No labor-hour calculation, margin percentage, or market-research claim
is fabricated here to make these prices look mathematically derived.**
They're presented as what they are: a business decision.

## Price consistency rule

**Current standard public pricing**: Essential UGX 900,000 / Professional
UGX 1,500,000 / Premium UGX 2,200,000. New quotations use these prices
unless an approved exception applies (see Discounts, below). Random,
uncoordinated client-by-client pricing is not the operating model — any
deviation must be a documented, deliberate exception, not an ad hoc
decision made mid-conversation.

## Discounts

A discount is always an **exception applied to the standard price**, not
a silent redefinition of it:

- **Standard price** — the table above.
- **Approved promotional/introductory discount** — if this business
  chooses to run one (e.g., for its first several real clients while
  building a portfolio), it should be defined explicitly, with a stated
  scope (which packages, how long it runs, how many clients) — **no
  specific percentage or amount is set by this document**, since none
  exists in prior documentation to draw from.
- **Custom quotation** — see below.
- **Exceptional commercial decision** — a one-off judgment call for a
  specific situation, recorded (see the Quote Reference template) rather
  than treated as a new normal.

When any discount is given, the quotation shows the arithmetic, not just
the final number:

```
Standard package price: UGX ___________
Approved discount:      UGX ___________
Final quoted price:     UGX ___________
```

**No filled-in discount example is provided here** — doing so would risk
implying an official discount rate exists. None does.

## The 250,000 / 500,000 / 700,000 issue

A previous prospect was informally told Essential = UGX 250,000,
Professional = UGX 500,000, Premium = UGX 700,000, before this pricing
system existed. **These are not the current standard prices.** This
needs a professional, consistent process — not silence, not automatic
honoring, and not treating the prospect as having been misled in bad
faith (the numbers were genuinely preliminary at the time).

1. **Identify whether that earlier figure was informal/preliminary or a
   formally accepted quotation.** These call for different handling —
   this document assumes the informal case unless a specific engagement
   shows otherwise.
2. **Check whether the client has already accepted the quotation or
   committed to the project** (e.g., paid a deposit, signed something,
   explicitly confirmed proceeding). If so, that's a distinct situation
   requiring individual review — this document does not resolve it by
   default in either direction.
3. **If no formal acceptance or commitment exists**: the honest,
   professional explanation is that the package structure and pricing
   were finalized after that preliminary conversation — this is true,
   not a excuse, and can be said plainly.
4. **Present the current official package structure** (this document's
   tables above) as the current offer.
5. **If an exceptional transition arrangement is commercially
   appropriate** (e.g., honoring something close to the original figure
   as a one-time goodwill gesture, given the earlier conversation) —
   record that explicitly as an exception (per Discounts, above), never
   as a silent new standard price.
6. **Do not promise that every previous informal quote will be
   honored** — that would make the new standard pricing meaningless.
7. **Do not automatically cancel or invalidate a formally accepted
   agreement** — if one genuinely exists, it needs its own review, not a
   default policy from this document.

This is a commercial communication process, not legal guidance — nothing
here constitutes a legal opinion on what any earlier conversation
obligates either party to.

## Custom quotations

A client needs a custom quotation, not a standard package price, when
the request is genuinely outside the documented architecture — using
`SCOPE_AND_CHANGE_CONTROL.md`'s classification directly:

- **Class C (requires scope evaluation)** or **Class D (outside the
  current product)** requests: unsupported functionality, unusual
  integrations, major custom development, substantial additional
  content work beyond a tier's normal depth, an additional campus
  (though note — per `SCOPE_AND_CHANGE_CONTROL.md` §11 — this one is
  usually a legitimate lower-cost add-on, not full custom-quote
  territory), or any expansion beyond the 9-page architecture.

**Not every small change becomes a custom quote.** Class A (already
included) work follows the normal package price and workflow; Class B
(optional/quoted add-on) work is quoted as an add-on, not re-priced as a
"custom project." Only genuine Class C/D requests warrant a full custom
quotation process.

## Additional work (interaction with `SCOPE_AND_CHANGE_CONTROL.md`)

A request made after a package is selected does **not** automatically
become a free addition, and does **not** automatically require a full
re-quote either — it follows the same classification every time:

1. Identify the request.
2. Determine whether it's already included in the selected package
   (Class A) — if so, it's implemented through the normal workflow, no
   additional charge.
3. If optional/additional (Class B) — evaluate and quote it separately.
4. If evaluation-required (Class C) — assess before committing to
   anything, including a price.
5. If outside the current product (Class D) — explain plainly that it's
   not currently offered (`SCOPE_AND_CHANGE_CONTROL.md` §3, §15).

**No hourly rate or specific add-on price is invented here** — none
exists in `PACKAGE_COST_MODEL.md` or any prior document to draw from;
add-on pricing remains a case-by-case judgment until that changes.

## Package upgrades

For a client moving Essential→Professional, Professional→Premium, or
Essential→Premium, review against:

- Work already completed on the lower tier
- The additional scope the higher tier actually requires
- **The price difference** — this is now a real, computable number
  given the official prices above (e.g., Essential→Professional is a
  UGX 600,000 difference; Professional→Premium is UGX 700,000;
  Essential→Premium is UGX 1,300,000) — though the *actual* amount to
  charge for a mid-project upgrade may reasonably differ from the flat
  difference, depending on how much lower-tier work is reused vs.
  redone
- What project stage the upgrade happens at (before any work started vs.
  partway through changes the calculus)
- Any previously approved discount (does it carry forward, get
  re-evaluated, or apply only to the original tier — a case-by-case
  call, not a fixed rule)
- Work already delivered that would need to be redone or extended

**No upgrade-credit formula is invented** — the final commercial
treatment for any specific upgrade should be documented in that
project's own record (see the Quote Reference template), not governed by
a fixed formula this document doesn't have the data to construct
responsibly.

## What the client sees (reusable comparison)

A plain, non-exaggerated version suitable for WhatsApp, a proposal, or a
quotation:

> **Essential — UGX 900,000**
> A complete, credible school website — the same real information
> architecture as every tier, with standard content depth and a
> professionally pre-verified color palette.
>
> **Professional — UGX 1,500,000**
> Everything in Essential, plus fully custom branding, deeper content
> across news and admissions, and search-engine optimization work built
> in.
>
> **Premium — UGX 2,200,000**
> Everything in Professional, plus coordinated photography, the fullest
> content depth, site-wide SEO, and an ongoing support arrangement
> rather than a one-time handoff.

No claim of "unlimited," "lifetime," or a specific turnaround time
appears in this comparison — none of those are defined (see below).

## What must not be promised (UNRESOLVED — REQUIRES BUSINESS DECISION)

None of the following are decided anywhere in this project's
documentation, and none are invented here:

- Exact payment schedule — **UNRESOLVED**
- Deposit percentage — **UNRESOLVED**
- Exact revision count (or the unit it's measured in) — **UNRESOLVED**
- Exact support duration per tier — **UNRESOLVED**
- Exact response-time guarantee — **UNRESOLVED**
- Exact maintenance duration/allowance size — **UNRESOLVED**
- Exact maintenance pricing (for Essential/Professional's optional
  add-on) — **UNRESOLVED**
- Domain renewal responsibility (who pays, ongoing) — **UNRESOLVED**
- Hosting renewal responsibility — **UNRESOLVED**
- Cancellation/termination treatment — **UNRESOLVED**
- Refund policy — **UNRESOLVED**
- Source-file ownership/delivery (does the client receive their raw
  project files, or only the live site — first raised in
  `CLIENT_HANDOFF_SYSTEM.md`) — **UNRESOLVED**
- Exact add-on pricing — **UNRESOLVED**

**"Unlimited revisions" and "lifetime support" are never used anywhere
in this pricing system** — both would misrepresent a genuinely
undecided policy as a guarantee.

## Quote / sales reference (reusable template)

```
QUOTATION

Client/school: ___________________________________________
Date: _____________________________________________________
Selected package: [ ] Essential (UGX 900,000)
                  [ ] Professional (UGX 1,500,000)
                  [ ] Premium (UGX 2,200,000)

Standard package price: UGX ______________
Approved discount, if any: UGX ______________ (reason: ______________)
Final quoted amount: UGX ______________

Included scope: (reference SERVICE_PACKAGES.md / FEATURE_MATRIX.md for this package)
Optional/additional work discussed: _______________________
Domain/hosting treatment: _________________________________
Content/assets responsibility: (reference CLIENT_REQUIREMENTS.md)

Payment terms: UNRESOLVED — not yet officially defined
Validity period: UNRESOLVED — not yet officially defined

Notes: ______________________________________________________
Approval/status: [ ] Draft  [ ] Sent  [ ] Accepted  [ ] Declined
```

Payment terms and validity period are left as explicit "UNRESOLVED"
placeholders in every quotation until this business decides them — not
filled in with a plausible-sounding default.

## Pricing governance

A package price is never changed casually inside a client conversation.
Any future revision should:

1. Be an intentional, approved decision — not an improvisation.
2. Update this document (`PRICING_AND_PACKAGE_SYSTEM.md`) as the single
   source of truth for current prices.
3. Check whether `SERVICE_PACKAGES.md`/`FEATURE_MATRIX.md` need any
   corresponding scope clarification.
4. Check existing quotations already issued at the old price — decide
   explicitly whether they're honored at the old price or require
   re-quoting, rather than leaving it ambiguous.
5. Establish a clear effective date for the new pricing.
6. Avoid retroactively confusing any project that was already approved
   under the previous price.
7. Update whatever client-facing materials exist (the comparison in
   "What the Client Sees," any proposal templates) to match.

## Pricing system version/change log

- **Current standard launch pricing established** by this document:
  Essential — UGX 900,000; Professional — UGX 1,500,000; Premium — UGX
  2,200,000. This is the first point in this project where real prices
  were assigned to the package structure.
- **Historical informal figures on record**: UGX 250,000 / 500,000 /
  700,000 were communicated to at least one prospect before this pricing
  system existed. These are explicitly **not** current standard pricing
  — see "The 250,000/500,000/700,000 Issue," above, for the handling
  process.
- No specific calendar date is recorded for either entry above, since
  none was available to this document at the time of writing — a future
  update to this log should include one.

---

## PRICING SYSTEM STATUS

- **Document created**: `PRICING_AND_PACKAGE_SYSTEM.md`, yes.
- **Current official prices**: Essential UGX 900,000 / Professional UGX
  1,500,000 / Premium UGX 2,200,000 — consistently written throughout
  this document, matching the figures specified for this stage.
- **Major decisions established**: real launch pricing exists for the
  first time; a discount-as-exception policy (not a silent new price);
  a specific, professional transition process for the 250k/500k/700k
  historical figures; a custom-quotation trigger tied directly to
  `SCOPE_AND_CHANGE_CONTROL.md`'s existing classification; a pricing
  governance process for future changes.
- **Unresolved business decisions**: all thirteen items listed in "What
  Must Not Be Promised" remain genuinely open — payment schedule,
  deposit %, revision count/unit, support duration, response time,
  maintenance duration/pricing, domain/hosting renewal responsibility,
  cancellation/termination treatment, refund policy, source-file
  ownership, and exact add-on pricing.
- **Contradictions found**: none within the documented system itself —
  no prior document asserted a different price for any package, since
  none had assigned prices before this document. The only tension
  identified is the external, undocumented historical quote (250k/500k/
  700k), which is addressed by its own dedicated process rather than
  treated as a documentation contradiction requiring these new prices to
  change.
- **Recommended follow-up documentation**: once this business decides
  any of the "UNRESOLVED" items above, the corresponding section of this
  document should be updated directly (per the Pricing Governance
  process) rather than creating a separate, potentially conflicting
  document. If a promotional/introductory discount is ever formally
  adopted, it should be added explicitly to the Discounts section rather
  than improvised per client.
- **Whether any code changes are required**: no. This is a pricing/
  business document only — no website code, `rebrand.py`, presets, or
  any implementation file was touched or needs to be.

Stopping after Prompt 15, per the instruction. Not proceeding to Prompt
16.
