# Client Requirements

The formal requirements system for taking a school from "interested
client" to a clearly defined, buildable website project. Built against
the actual current codebase (verified by reading the source, not
assumed) and the commercial baseline in `COMMERCIAL_PRODUCT_SUMMARY.md`,
`FEATURE_MATRIX.md`, `SERVICE_PACKAGES.md`, `IDEAL_CLIENT.md`, and
`PACKAGE_COST_MODEL.md`. Intended as the foundation for a future client
questionnaire and onboarding workflow — every item below is something a
real intake form should eventually ask for.

**This is an operational checklist, not legal advice.** Nothing in this
document claims a particular document, disclosure, or process is legally
required in any jurisdiction. Where a legal question is relevant (data
privacy for analytics, permission to quote a testimonial, image usage
rights), it's flagged as "verify with the client/a qualified source," not
answered here.

## Two real bugs found while writing this document

Grounding this checklist in the actual code (not memory of it) surfaced
two concrete, verified problems that any real onboarding must account
for:

1. **`js/contact-form.js` hardcodes the destination email address
   separately from `js/config.js`**, and `scripts/rebrand.py`'s replacement
   pass does not touch this file (its target list is `*.html` files plus
   `js/config.js` only — confirmed by reading the script). Running the
   rebrand script today for a new client leaves the contact form quietly
   emailing the *previous* school's address. This must be fixed (either
   in the script or the file) before any real second client is
   onboarded — see Codex Tasks in the handoff below.
2. **The four footer/social icons (Facebook, Instagram, Twitter/X,
   YouTube) are always rendered, for every school, regardless of which
   accounts a school actually has** — confirmed by reading `index.html`;
   there is no conditional logic. A school without, say, a YouTube
   channel would still get a YouTube icon linking to a placeholder URL
   unless this is fixed or worked around. Flagged in the checklist below
   under Social Media Links.

Neither was fixed in this pass — this stage's instructions were
documentation only.

## Status key

| Tag | Meaning |
|---|---|
| **Required before build** | Development cannot meaningfully start without this |
| **Required before launch** | Development can proceed with placeholders; the real site cannot go live without it |
| **Optional** | Nice to have; the product has a real, presentable fallback if it's missing |
| **Not applicable** | Doesn't apply to this product as it exists |
| **Future/unsupported** | Not available in this product at any tier — flagged so it isn't accidentally promised during intake |

---

## 1. School identity and official naming

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Full official school name | Required before build | Client | Feeds `identity.name` — used throughout, including legal-sounding contexts (footer copyright), so get the exact preferred form |
| Short name | Required before build | Client | `identity.shortName` — used in the nav where space is tight |
| Tagline | Required before build | Client, adapted by developer | `identity.tagline` — a short line, not full copy |
| Founding year | Required before build | Client | `identity.founded` |
| Institution type (Academy/Institute/College/etc.) | Required before build | Client | Feeds nav subtitle text ("Academy · Est. 1998") — must match how the school actually refers to itself |
| Logo initials (for the generated monogram) | Required before build | Client | `identity.logoInitials` — 2 characters, used in the crest badge |
| Intended domain name | Required before launch | Client | `identity.domain` — needed for canonical URLs before going live, not before development starts |

## 2. Logo/branding assets

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Generated monogram (default) | Not applicable to request — automatic | Developer | Built from logo initials + brand colors; no client asset needed |
| Real logo file upload | **Optional add-on — currently unverified** | Client (if used) | This pattern is documented but has never been built or tested against a real logo file (`FEATURE_MATRIX.md` footnote 9). Do not promise a timeline for this without first doing the verification work. |

## 3. Colors and brand guidelines

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Choice from the pre-verified color range | Required before build (Essential) | Client chooses, developer applies | See `REBRANDING_GUIDE.md` for the safe range |
| Fully custom palette | Required before build (Professional/Premium) | Client's brand colors, contrast-checked by developer | Must be checked against the method in `REBRANDING_GUIDE.md` before use — a client's exact brand hex codes may need slight adjustment to pass accessibility contrast, and that should be discussed with the client, not silently altered |

## 4. Contact information

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Phone number | Required before build | Client | Used across every page's contact points |
| WhatsApp number | Required before build | Client | Central to this product's contact design (`PRODUCT_OVERVIEW.md` §10) |
| Admissions/general email address | Required before build | Client | **See Bug #1 above** — must be set in both `config.js` and (currently, manually) `contact-form.js` |
| Physical address | Required before launch | Client | |
| Office hours (weekday/Saturday) | Required before launch | Client | |

## 5. Domain information

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Domain name decision | Required before launch | Client | Not needed to start development — a staging URL works fine until launch |
| Domain registrar access / DNS control | Required before launch | Client (or delegated to developer — clarify which) | Who actually holds the registrar account is an operational decision worth settling explicitly, not assuming |
| Who pays for renewal, and when | Required before launch | Client (per `COST_MODEL.md` — pass-through cost) | |

## 6. Social media links

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Facebook/Instagram/Twitter(X)/YouTube URLs | Optional, per account | Client | **See Bug #2 above.** If a school lacks one or more of these accounts, that must be flagged explicitly during intake — the current code has no way to hide an icon for a missing account, so either a placeholder link ships (not ideal) or this needs a small code fix first. Don't assume "leave it blank" works without checking. |

## 7. School description and history

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Founding story, philosophy, "who we are" content | Required before launch | Client supplies facts/history, developer writes final copy | Maps to the About page's story/philosophy sections — this is genuine authored content, not a template fill-in (`SERVICE_PACKAGES.md`) |
| Vision/mission statements | Required before launch | Client, refined by developer | |
| Core values (list) | Required before launch | Client | |

## 8. Leadership information

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Headteacher/principal name, title, a real quote | Required before launch | Client | The site's leadership section is built around a genuine quote, not filler — get this early, it takes real back-and-forth to draft |
| Headteacher portrait | Required before launch (or use placeholder — see Gallery/Photography) | Client | |
| Additional leadership bios (2–3 typical) | Optional, tier-dependent | Client | Professional/Premium typically include more than one leader profile (`SERVICE_PACKAGES.md`) |

## 9. Academic/program information

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Program list (e.g. Early Years/Primary/Secondary/A-Level or equivalent) | Required before build | Client | Structural — affects the Programs section layout |
| Program descriptions, age ranges | Required before launch | Client, adapted by developer | |
| Curriculum/subject list | Required before launch | Client | |
| **Note for non-K-12 institutions** | — | — | The current content structure (Programs, Curriculum accordion) is worded for a general school. A vocational college or specialized institute needs real content rework here, not just relabeling (already flagged in `IDEAL_CLIENT.md` §2) — confirm this is understood before quoting a timeline for that kind of client. |

## 10. Admissions information (including real fees/dates)

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Admissions process steps | Required before launch | Client | |
| Requirements list | Required before launch | Client | |
| Key dates (application window, intake, term start) | Required before launch | Client | |
| **Real fee figures** | **Optional — the product's designed fallback is safe to launch with** | Client | The fees table intentionally never displays invented numbers (`SERVICE_PACKAGES.md`). If real figures aren't ready, the table ships showing "Contact admissions" — this is a supported, launch-ready state, not a blocker. Get real figures when the client has them. |
| FAQ content | Required before launch | Client, drafted by developer | |

## 11. News/articles

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Initial news stories (enough for the homepage teaser + News page grid) | Required before launch | Client supplies events, developer writes stories | |
| At least one full article | Required before launch | Client, written by developer | Only one article template exists in the codebase today (`article-science-exhibition.html`) — additional articles are real authoring work, not automatic |
| Additional articles beyond the initial set | Optional, tier-dependent | Client + developer | See `SERVICE_PACKAGES.md` for how many are included per tier |

## 12. Campus/facility information

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Facilities list (classrooms, labs, library, etc.) | Required before launch | Client | Must reflect facilities the school actually has — don't reuse demo facilities that don't apply (`SERVICE_PACKAGES.md` explicitly warns against claiming facilities a client doesn't have) |
| Campus life descriptions (sports, arts, clubs, events) | Required before launch | Client | |

## 13. Gallery/photography requirements

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Real photography (campus, classrooms, students, events) | **Optional — placeholder system is a genuine, presentable fallback** | Client | This is the single biggest quality gap in the product today if missing (`PRODUCT_OVERVIEW.md` §6) — strongly recommended before launch, but the site does not break or look broken without it |
| Photo usage rights/consent (especially images of students) | Required before launch, if real photos are used | Client | **Not a legal claim from this document** — verify with the client that they have the right to use any photo supplied, particularly images of minors; this is the client's responsibility to confirm, not something this business can verify independently |

## 14. Testimonials and achievements

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Testimonial quotes (parent/student/alumni) | Required before launch | Client | **Client must obtain permission from anyone quoted** — an operational requirement to flag during intake, not a legal opinion from this document |
| Achievements/track record | Required before launch | Client | Must be real, verifiable claims — the product's design philosophy throughout is to never invent or exaggerate (`SERVICE_PACKAGES.md`, `PRODUCT_OVERVIEW.md`) |

## 15. WhatsApp/contact preferences

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| WhatsApp number confirmed as Business-capable (if relevant) | Required before build | Client | |
| Preferred contact form destination email | Required before build | Client | **See Bug #1** — must be applied in two places today, not one |
| Any preference for how "urgent" admissions enquiries are routed | Optional | Client | Not currently configurable beyond the single email/WhatsApp number — flag if a client wants more complex routing (out of scope, see Future/Unsupported) |

## 16. SEO information

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Per-page title/meta description | Required before launch | Developer drafts, client reviews | |
| Open Graph tags | Required before launch | Developer | |
| Structured data (JSON-LD) across all pages | Optional, tier-dependent | Developer | Currently only exists on the homepage in the base product — extending it to all 9 pages is real, scoped work included at Professional/Premium (`FEATURE_MATRIX.md`) |
| Sitemap.xml / robots.txt | Optional, tier-dependent | Developer | Doesn't exist in the codebase for any client yet — real work each time until automated (`FEATURE_MATRIX.md`, `COST_MODEL.md`) |

## 17. Analytics requirements (if requested)

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Choice of tool (free Google Analytics vs. a paid privacy-respecting alternative) | Optional | Client decides | Not built into the product by default (`FEATURE_MATRIX.md`) |
| Analytics account/tracking ID | Optional, if analytics requested | Client (owns the account) or developer (sets one up for the client) | Clarify explicitly who owns the analytics account — recommended default is the client owns it, to avoid handoff complications later |
| Any data-privacy requirement analytics must comply with | Optional, if analytics requested | **Verify independently — not answered by this document** | This is a legal/compliance question specific to the school's country and shouldn't be assumed one way or the other |

## 18. Hosting/domain responsibilities

| Item | Status | Supplied by | Notes |
|---|---|---|---|
| Who registers/owns the domain | Required before launch | Client (recommended default) | |
| Who owns the hosting account (Netlify/Vercel/etc.) | Required before launch | Client (recommended default, for long-term control) or developer (if managed as part of an ongoing relationship) | An explicit decision, not an assumption — affects what happens if the business relationship ends later |
| Who is responsible for renewing the domain annually | Required before launch | Client, unless a maintenance agreement explicitly covers it | |

## 19. Content the client must supply vs. what this business creates/adapts

A direct summary, consolidating the "supplied by" column above:

**Client must supply (raw material)**: identity facts, contact details,
domain preference, real photography (or explicit sign-off to launch with
placeholders), leadership names/quotes/portraits, real program/curriculum
facts, real admissions requirements/dates/fees (or sign-off to use the
"contact admissions" fallback), real achievements, real testimonials
(with permission obtained), facility list, social media account URLs (or
explicit confirmation an account doesn't exist).

**This business creates/adapts**: final polished copy from client-supplied
facts, color palette contrast verification, per-page SEO metadata,
sitemap/structured data (where included), the generated logo monogram,
QA and deployment, any custom logo file integration (only after the
verification work is done once).

## 20. Anything that could create scope creep or delay delivery

- **Requests for functionality in Future/Unsupported** (a CMS, self-
  service editing, portals, payments, authentication, multi-language) —
  redirect to "that's a separate, larger engagement," don't quietly try
  to accommodate a piece of it inside this product.
- **A client that can't produce photography, leadership content, or
  real achievements in a reasonable timeframe** — per `IDEAL_CLIENT.md`
  §3, this turns a content-configuration engagement into an
  indefinitely-stalled one; a delivery timeline should be conditioned on
  content arriving, not promised independent of it.
- **Requests for more news articles, leaders, or gallery categories than
  the tier includes** — real additional authoring work, should be quoted
  as an add-on, not absorbed silently.
- **A non-K-12 institution's program/curriculum structure** — flagged
  in item 9 above; don't assume this is a simple relabeling job.
- **Requests to edit content themselves after launch** — there is no
  CMS at any tier; this needs to be set expectation clearly at intake,
  not discovered by the client after the fact.
- **Unclear domain/hosting account ownership** — resolve explicitly
  before launch, not after a dispute.
- **The two known bugs at the top of this document** — if either is
  still unfixed when a real second client is onboarded, that's a
  concrete delivery risk (wrong-email contact form) or minor
  presentation issue (a social icon linking to a placeholder URL), not
  a hypothetical one.

## Missing client information (tracking template — use per engagement)

For any real client, track outstanding items here before development
begins in earnest:

```
Client: ______________________
Package tier: ______________________

REQUIRED BEFORE BUILD — outstanding:
[ ] School name / short name / tagline / founding year / institution type
[ ] Logo initials
[ ] Color choice or custom palette
[ ] Phone / WhatsApp / admissions email

REQUIRED BEFORE LAUNCH — outstanding:
[ ] Domain decision
[ ] Address / office hours
[ ] School story / vision / mission / values
[ ] Leadership name(s), quote(s), portrait(s)
[ ] Program & curriculum details
[ ] Admissions process/requirements/dates (fees optional — see §10)
[ ] Initial news stories + at least one full article
[ ] Facilities & campus life descriptions
[ ] Testimonials (with permission confirmed) & achievements
[ ] Social media links (or confirmation an account doesn't exist)
[ ] SEO review sign-off

CONFIRMED SIGN-OFF TO LAUNCH WITH FALLBACKS (if applicable):
[ ] Placeholder photography acceptable for launch
[ ] "Contact admissions" fees placeholder acceptable for launch
```

## Client responsibilities

- Supply all "required before build/launch" content above, in a
  reasonably timely manner — delivery timelines are conditioned on this.
- Confirm rights/permission for any photography and testimonial quotes
  supplied.
- Decide and communicate domain/hosting account ownership.
- Review and approve final copy, SEO metadata, and any adapted content
  before launch.
- Register and pay for the domain (or explicitly agree to a different
  arrangement).

## Developer responsibilities

- Fix or account for the two known bugs above before onboarding a real
  second client (see Codex Tasks in the handoff).
- Verify any custom color palette for contrast before use
  (`REBRANDING_GUIDE.md`).
- Never invent fees, achievements, statistics, or facilities not
  confirmed by the client.
- Flag — rather than quietly absorb — any request that falls under
  Future/Unsupported or represents likely scope creep (§20).
- Keep the "missing client information" tracker current per engagement
  rather than discovering gaps mid-build.

---

## Handoff update

Created `CLIENT_REQUIREMENTS.md`: a full requirements checklist across
20 categories, each item tagged Required-before-build /
Required-before-launch / Optional / Not-applicable / Future-unsupported,
plus tracking template, client/developer responsibility summaries, and a
scope-creep risk list. Built directly against the current code, not
assumption — two real bugs were found and verified in the process (not
fixed, per this stage's instructions):

1. `js/contact-form.js`'s destination email is hardcoded separately from
   `js/config.js` and is not touched by `scripts/rebrand.py`'s
   replacement pass — a rebranded site's contact form would silently
   email the previous school's address.
2. The four social-media icons are always rendered for every school with
   no conditional logic — a school missing an account still gets that
   icon linking to a placeholder URL.

### Key decisions made in this document
- Fees are explicitly Optional, not Required-before-launch, because the
  product's fallback (a labeled placeholder table) is a genuine,
  supported launch-ready state, not a broken one.
- Photography is Optional for the same reason — the placeholder system
  is a real fallback, not a broken state — though strongly recommended.
- Domain/hosting account ownership is called out as an explicit decision
  to make per client, not assumed to default to either party.
- No CMS, portal, authentication, Supabase, or payment functionality
  appears anywhere in this checklist, per the instruction not to
  introduce it "because it might be useful later."

### Assumptions
- That a client will generally supply raw facts/photos while this
  business writes/adapts final copy — consistent with
  `SERVICE_PACKAGES.md`'s existing config-vs-content split, not a new
  assumption invented here.
- That domain/hosting ownership defaults to the client for long-term
  control, though this is presented as a decision to confirm per
  engagement, not a rule.

### Unresolved questions
- Should the two bugs found here block onboarding a real second client,
  or can the first real engagement proceed if it happens to reuse the
  same (Aurelia Heights) contact email/socials? This is a real
  sequencing question, not answered here.
- No actual client questionnaire/form exists yet — this document is the
  content foundation for one, not the form itself.
- Whether social-icon conditional rendering (Bug #2) is worth fixing
  proactively or only once a real client is missing an account.

### Future/technical tasks and Codex-ready prompts

**Fix Bug #1 (contact form email not rebrand-safe)** — high priority,
should happen before any real second client is onboarded:
```
In this school-template project, js/contact-form.js hardcodes
"admissions@aureliaheights.edu" as the mailto destination, independently
of js/config.js's contact.email field. scripts/rebrand.py's replacement
pass does not include js/contact-form.js in its target file list, so
running the rebrand script for a new school leaves the contact form
emailing the wrong address. Fix this so the contact form's destination
email is always correct after a rebrand — either by having
contact-form.js read the destination from window.SCHOOL_CONFIG at
runtime (consistent with how main.js already syncs other contact fields
from config.js), or by adding js/contact-form.js to rebrand.py's target
list so the existing string-replacement pass covers it too. Prefer the
first approach if it doesn't conflict with the project's static-site/
no-build-step constraints (see README.md, REBRANDING_GUIDE.md) — it
fixes the bug at the source rather than relying on the rebrand script
being run correctly every time, including for manual (non-scripted)
rebrands. Verify the fix by re-running scripts/rebrand.py for the
existing lira-future-academy.json and northern-scholars-institute.json
presets and confirming js/contact-form.js (or the config it reads from)
no longer references aureliaheights.edu in the output.
```

**Fix Bug #2 (non-conditional social icons)** — lower priority, only
blocking if a real client is actually missing an account:
```
In this school-template project, the four social media icons (Facebook,
Instagram, Twitter/X, YouTube) in the footer are always rendered on
every page, with no way to omit one if a school doesn't have that
account. Add conditional rendering — likely via a small main.js check
against window.SCHOOL_CONFIG.social (already used for other contact-info
syncing) that hides an icon's <a> element if that platform's URL is
missing/empty in config. Confirm this doesn't break the footer's layout
(css/components.css .footer__social) when fewer than 4 icons are
present — check spacing/alignment at 1, 2, 3, and 4 icons, and at
mobile widths.
```

Neither prompt has been executed — both are documented for a future
session, per this stage's "do not modify website code" instruction.

## Remaining prompts (9–35)

Not defined in this session — these numbers were referenced in the
stage instruction but no content for Prompts 9–35 has been provided yet.
This document does not speculate on what they cover.

Stopping after Prompt 8, per the instruction. Not proceeding to Prompt 9
automatically.
