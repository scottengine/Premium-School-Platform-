# Content Collection System

The practical system for collecting, organizing, validating, and
tracking the materials a school must provide before and during
development. This is the next layer under `CLIENT_REQUIREMENTS.md` (which
defines *what's needed and when*) — this document defines *how it gets
collected, in what format, where it lives, and what to do when it's
messy*.

**This is not the discovery questionnaire** (that's Prompt 11) and **not
the onboarding workflow** (that's Prompt 10). This document is the
content-handling system those two will eventually plug into.

Grounded in the current codebase and `CLIENT_REQUIREMENTS.md`,
`COMMERCIAL_PRODUCT_SUMMARY.md`, `SERVICE_PACKAGES.md`,
`FEATURE_MATRIX.md`, and `REBRANDING_GUIDE.md` — no new product
functionality is invented here, only the process around collecting real
content for the product that already exists.

## Status key (same tags as `CLIENT_REQUIREMENTS.md`, plus one)

| Tag | Meaning |
|---|---|
| Required before build | Can't meaningfully start development without it |
| Required before launch | Development can proceed with placeholders; can't go live without it |
| Optional | Nice to have; the product has a real, presentable fallback |
| **Developer-created/adapted** | The client supplies raw facts; final wording is written or adapted by the developer |
| Future/unsupported | Not part of this product at any tier — flag immediately if a client tries to submit something in this category |

---

## 1. What the client needs to submit, and in what format

| Content | Status | Preferred submission format |
|---|---|---|
| School identity (full name, short name, tagline, founding year, institution type, logo initials) | Required before build | Plain text (a short document or even a message is fine) |
| Logo/branding — real logo file (optional add-on, currently unverified — see `FEATURE_MATRIX.md` footnote 9) | Optional | Image file (vector if they have it, PNG with transparent background otherwise) |
| Brand colors | Required before build (custom palette tiers) / Optional (choose from pre-verified range) | Hex codes if the client has brand guidelines; otherwise verbal description ("navy and gold") is enough to start from |
| Contact details (phone, WhatsApp, admissions email, address, hours) | Required before build (phone/WhatsApp/email) / Required before launch (address/hours) | Plain text/contact card |
| Social media links | Optional, per account | URL/link — or explicit confirmation an account doesn't exist |
| School history/story | Required before launch | Text — a document, an email, or even rough notes; doesn't need to be polished, that's the developer's job (see §7) |
| Vision, mission, values | Required before launch | Text |
| Leadership information + photographs | Required before launch | Text (name/title/quote) + image file per person |
| Academic/program information | Required before build (program names — structural) / Required before launch (descriptions) | Text, a simple list is fine |
| Curriculum/subjects | Required before launch | Text |
| Admissions information (process, requirements, dates) | Required before launch | Text |
| Fees | **Optional** — see `CLIENT_REQUIREMENTS.md` §10; the product launches safely without them | Text/spreadsheet, whichever the school already uses internally |
| News/events | Required before launch | Text, one item per story is easiest to manage |
| Articles (full stories) | Required before launch (at least one) | Text — this can be the same raw notes as News/Events, expanded |
| Facilities | Required before launch | Text — a simple list, must reflect what the school actually has (`SERVICE_PACKAGES.md` explicitly warns against claiming facilities a client doesn't have) |
| Campus-life information | Required before launch | Text |
| Gallery photographs | Optional — see §8 | Image files |
| Testimonials | Required before launch | Text — see §9 for handling |
| Achievements | Required before launch | Text — see §9 for handling |
| SEO information (any specific keywords/phrases the school wants to rank for) | Optional | Text — most SEO metadata is developer-drafted (see `CLIENT_REQUIREMENTS.md` §16) |
| Domain/hosting information | Required before launch | Plain text/account access details |

Nothing above requires a spreadsheet, a shared drive, or specialized
software to submit — plain text and image files cover every category.
Don't ask a school to use a tool they don't already have.

## 2. Folder organization (per client)

One folder per client, kept separate from every other client's
materials from the first contact:

```
clients/
  <client-slug>/                    e.g. clients/lira-future-academy/
    00-status.md                    the tracking checklist (see §6, §10)
    01-identity-branding/           name, tagline, colors, logo file if supplied
    02-contact-domain/              phone/whatsapp/email/address, domain/hosting info
    03-text-content/                story, vision/mission/values, programs, curriculum,
                                     admissions, news/article drafts, facilities, campus life
    04-leadership/                  bios, quotes, portraits (one subfolder per person if several)
    05-testimonials-achievements/   raw quotes and claims, with permission notes (§9)
    06-photography/
      raw/                          everything the client sends, unsorted
      selected/                    the photos actually chosen for use, organized by
                                     category (campus/academics/sports/events/arts/
                                     students/community — matching gallery.html's
                                     existing categories, so selection maps directly
                                     onto the site)
    07-correspondence/              anything worth keeping a record of — clarifications,
                                     approvals, sign-offs on placeholders/fallbacks
```

Keep this consistent across every client — the value is in never having
to think about where something goes, and never mixing one school's
materials with another's.

## 3. How to handle messy or missing content

| Situation | Rule |
|---|---|
| **Missing information** | Mark it "Requested" (see §6), follow up, and keep working on whatever isn't blocked by it. Never fill a gap with an invented fact — use the product's documented fallback where one exists (the fees placeholder, the photography placeholder system), or leave it visibly pending internally until the client responds. |
| **Poor-quality photographs** | A photo is usable if it's reasonably in focus, reasonably lit, and isn't a screenshot of a screenshot or carrying a third-party watermark. It does **not** need to be professionally shot — an ordinary phone photo taken for the school's own Facebook page is a perfectly usable submission (see `IDEAL_CLIENT.md` §1, `PRODUCT_OVERVIEW.md`). If a photo genuinely isn't usable, ask for a replacement; if none is available, fall back to the placeholder system rather than using something that looks broken. |
| **Conflicting information** (e.g. two different fee figures from two staff members) | Never guess which version is correct. Flag the conflict explicitly and ask the client to confirm the current, authoritative version in writing before it's used anywhere. |
| **Outdated information** | Anything with a date attached (admissions windows, term dates, a statistic) should be reconfirmed as still current before publishing, not assumed still valid because it was correct when first supplied. |
| **Incomplete information** | Ask for the specific missing piece — don't guess at it, and don't publish a half-complete version hoping it goes unnoticed. |
| **Information needing clarification** | Mark it "Needs clarification" (§6) and ask one specific, answerable question — not a vague "can you clarify this?" that just generates another round of back-and-forth. |
| **Information that should never be invented, under any circumstance** | Fees, statistics/achievements, testimonial wording or attribution, specific dates, facilities the school doesn't actually have, and anything presented as a legal or compliance claim. This list matches the "never fabricate" principle already established throughout this product's design (`SERVICE_PACKAGES.md`, `PRODUCT_OVERVIEW.md`). |

## 4. Content status workflow

```
Not requested → Requested → Received → Needs clarification → Approved → Used on website
```

- **Not requested** — hasn't come up yet; the default state for anything
  not yet reached in the current phase of the project.
- **Requested** — asked for, waiting on the client.
- **Received** — the client has sent something, but it hasn't been
  reviewed yet.
- **Needs clarification** — reviewed, and something about it is
  missing, conflicting, outdated, or unclear (see §3); a specific
  follow-up question has been sent.
- **Approved** — the client has confirmed the final wording/image is
  correct and ready to use. For anything the developer wrote or adapted
  (see §5), this step is not optional — client sign-off on the final
  version, not just the raw material, is what "Approved" means.
- **Used on website** — actually placed in the live/staging site.

An item can move backward (e.g. from Approved back to Needs
clarification, if something changes) — this workflow isn't strictly
one-directional, it's just the normal forward path.

## 5. Client facts vs. developer-written copy

Two genuinely different things get called "content," and conflating them
causes real confusion:

- **Client-supplied facts**: the raw truth — the headteacher's actual
  quote, the actual founding year, the actual achievement. These should
  never be altered in substance, only in minor phrasing/grammar if
  needed for the site's tone.
- **Developer-written/adapted copy**: the polished version that actually
  appears on the page — turning a client's rough notes about "why we
  started the school" into the About page's story section, for example.
  This is real, valuable, billable work (`SERVICE_PACKAGES.md`,
  `PACKAGE_COST_MODEL.md`'s `H_content` variables), not just data entry.

The rule that keeps this honest: **developer-written copy always needs
client approval before publishing** — the developer can draft freely
from real facts, but the client is the one who confirms the final
wording is accurate and something they're comfortable putting their name
behind.

## 6. The reusable Client Content Checklist

Copy this for every new client engagement:

```
CLIENT CONTENT CHECKLIST
Client: ______________________        Package tier: ______________________
Started: ______________________       Target launch: ______________________

Status legend: NR=Not requested  R=Requested  RC=Received  NC=Needs clarification
               A=Approved  U=Used on website

REQUIRED BEFORE BUILD
[ ] School identity (name/short name/tagline/founded/type)     status: ___
[ ] Logo initials                                               status: ___
[ ] Color choice or custom palette                              status: ___
[ ] Phone / WhatsApp / admissions email                         status: ___
[ ] Academic program names (structural)                         status: ___

REQUIRED BEFORE LAUNCH
[ ] Address / office hours                                      status: ___
[ ] Domain decision                                              status: ___
[ ] School story / vision / mission / values                    status: ___
[ ] Leadership name(s), quote(s), portrait(s)                    status: ___
[ ] Program descriptions & curriculum                            status: ___
[ ] Admissions process / requirements / dates                   status: ___
[ ] Initial news stories + at least one full article             status: ___
[ ] Facilities & campus life descriptions                        status: ___
[ ] Testimonials (permission confirmed) & achievements           status: ___
[ ] SEO review sign-off                                          status: ___

OPTIONAL (confirm launch-with-fallback if not supplied)
[ ] Real logo file                        status: ___   [ ] launching with generated monogram instead
[ ] Fee figures                           status: ___   [ ] launching with "contact admissions" placeholder
[ ] Real photography                      status: ___   [ ] launching with placeholder system
[ ] Social media links                    status: ___   (note which accounts don't exist)

FLAGGED IF REQUESTED (Future/unsupported — redirect, don't accommodate)
[ ] CMS / self-service editing requested?
[ ] Portal / login / payments requested?
[ ] Other functionality outside this product's scope?
```

## 7. Photography — what's useful, and what happens without it

**What's useful** (matching the gallery's existing categories, so
submissions map directly onto the site): campus exterior/courtyard
shots, classrooms in use, sports/athletics, school events (Founders' Day
or equivalent), arts/music/creative spaces, students engaged in an
activity, and community/service initiatives if the school runs any.

**Quality/orientation**: keep this practical, not technical — reasonably
in focus, reasonably lit, landscape orientation works best for
wide/hero-style placements, portrait or roughly square works best for
individual leadership portraits. **Professional photography is not
required** — an ordinary phone photo taken for the school's own social
media is a genuinely usable submission (see §3 above).

**Naming/organization**: ask for photos grouped loosely by the
categories above if the client can manage it (a folder per category is
plenty); if not, developer-side sorting into
`06-photography/selected/<category>/` (see §2) is straightforward as
long as the raw photos are reasonably identifiable.

**If photography is unavailable**: this does not block launch. The
placeholder system already built into the product is a genuine,
presentable fallback (`PRODUCT_OVERVIEW.md`, `CLIENT_REQUIREMENTS.md`
§13) — not a broken or embarrassing state. Confirm explicitly with the
client that they're comfortable launching this way (see the Content
Checklist above), rather than leaving it ambiguous.

## 8. Testimonials, achievements, and other sensitive claims

- **The client supplies the factual material** — the actual quote, the
  actual achievement, in their own words or close to it.
- **The developer does not fabricate, exaggerate, or invent** any part
  of a testimonial or achievement — this is a firm rule, not a
  guideline, consistent with this product's design philosophy
  throughout (`SERVICE_PACKAGES.md`, `PRODUCT_OVERVIEW.md`).
- **The client reviews and approves the final wording** before it's
  published — see the Approved status in §4.
- **Permission/rights questions should be confirmed with the client** —
  specifically, that anyone quoted in a testimonial has agreed to be
  quoted, and that anyone identifiable in a photograph (especially a
  minor) has appropriate consent. **This document does not make a legal
  claim about what's required** — it's an operational reminder to ask
  the client to confirm this, the same position taken in
  `CLIENT_REQUIREMENTS.md` §14.

## 9. Content collection problems — the biggest causes of delay, and how to prevent them

Based on what's already been identified across `IDEAL_CLIENT.md` and
`CLIENT_REQUIREMENTS.md`, consolidated here as the practical failure
modes to watch for:

- **Leadership quotes and bios take real time to write** — this is
  personal content a busy headteacher has to actually sit down and
  think about, not a form field. *Prevention*: request this early,
  before it's the last blocking item, and offer to draft something from
  a short conversation/interview rather than asking for a finished
  written quote cold.
- **No usable photography, and no plan to get any** — the single
  biggest quality gap identified across this whole product
  (`PRODUCT_OVERVIEW.md` §6). *Prevention*: ask about photography
  availability at first contact (this connects directly to
  `IDEAL_CLIENT.md`'s buying-signal criteria), and get explicit sign-off
  early if the answer is "launch with placeholders."
- **Fee/admissions data withheld pending internal school decisions** —
  common and legitimate, but can stall a whole section if treated as
  blocking. *Prevention*: this product's fees fallback exists exactly
  for this reason — use it, and don't let one pending internal decision
  hold up the rest of the site.
- **Conflicting information from multiple staff contacts** — happens
  when there's no single clear point of contact (see
  `IDEAL_CLIENT.md` §6 on identifying the actual decision-maker).
  *Prevention*: establish one point of contact for content approval
  specifically, even if other staff supply raw material.
- **Open-ended, indefinite revision requests** — reviewing "final" copy
  repeatedly without ever reaching Approved. *Prevention*: the Approved
  status in §4 should mean something — treat it as a real commitment
  point, not a formality, and use the defined support/revision windows
  in `SERVICE_PACKAGES.md` to bound how much back-and-forth is included
  before further rounds are a billable add-on.

---

## Handoff update

Created `CONTENT_COLLECTION.md`: submission-format table across all
content categories, a per-client folder structure, explicit handling
rules for messy/missing/conflicting content, the six-stage status
workflow, the client-fact vs. developer-copy distinction, a copyable
Client Content Checklist, a practical (non-mandatory) photography
process, sensitive-claims handling for testimonials/achievements, and a
delay-prevention section. No website code was touched. No questionnaire
or onboarding workflow was created (reserved for Prompts 11 and 10
respectively, per instruction).

### Key decisions
- Plain text and image files are sufficient for every content category
  — no spreadsheet, shared drive, or specialized tool is required of a
  client, matching the instruction not to prescribe unnecessarily
  complicated formats.
- The per-client folder structure numbers folders by content type,
  mirroring `CLIENT_REQUIREMENTS.md`'s categories, so nothing needs to be
  reorganized when moving from "requirements" to "actually collecting
  it."
- Photo categories in the collection process deliberately mirror
  `gallery.html`'s existing categories (campus/academics/sports/events/
  arts/students/community), so a client's photo submissions map directly
  onto the site's actual structure without an extra translation step.
- "Approved" in the status workflow explicitly requires client sign-off
  on developer-written copy, not just on the raw facts — this is the
  single mechanism preventing "client facts vs. developer copy" from
  becoming a source of disputes later.

### Assumptions
- That a single point of contact per client is achievable in practice —
  `IDEAL_CLIENT.md` already flags that this varies by institution size
  and should be confirmed, not assumed, per engagement.
- That developer-side photo sorting (if a client can't organize their
  own submissions by category) is a reasonable and expected part of the
  service, not an imposition — not stated explicitly as billable time
  anywhere yet (see Unresolved Questions).

### Unresolved questions
- Whether developer-side photo sorting/organizing time should be counted
  under `PACKAGE_COST_MODEL.md`'s `H_photo_*` labor variables explicitly,
  or treated as included overhead — not decided in either document yet.
- Whether the per-client folder structure should live in a shared drive,
  local storage, or something else — a tooling decision genuinely out of
  scope for this document (it defines the organization, not the storage
  platform).
- How long a "Needs clarification" item should sit before it's treated
  as a delivery risk worth escalating to the client directly — no
  specific timeframe is defined here.

### Future technical/Codex tasks
None generated this stage. The two bugs found in `CLIENT_REQUIREMENTS.md`
(the contact-form email not being rebrand-safe, and non-conditional
social icons) remain open and are not repeated here — see that
document's handoff notes for their Codex prompts. No new technical work
was identified while building this content-collection system; it's a
process document layered on top of the existing, already-verified
codebase.

## Remaining prompts (10–35)

Not defined in this session — no content for Prompts 10–35 has been
provided yet (Prompt 10 is confirmed to be the onboarding workflow and
Prompt 11 the discovery questionnaire, per this stage's own instruction,
but neither has been written). This document does not speculate on
Prompts 12–35.

Stopping after Prompt 9, per the instruction. Not proceeding to Prompt 10
automatically.
