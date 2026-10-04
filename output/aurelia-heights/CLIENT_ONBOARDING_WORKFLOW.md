# Client Onboarding Workflow

The repeatable process for taking a real school from first interest to
officially ready for development. This sits between the commercial
documents (`COMMERCIAL_PRODUCT_SUMMARY.md`, `SERVICE_PACKAGES.md`,
`FEATURE_MATRIX.md`, `PRICING_FRAMEWORK.md`, `PACKAGE_COST_MODEL.md`) and
the content-handling documents (`CLIENT_REQUIREMENTS.md`,
`CONTENT_COLLECTION.md`) — it doesn't repeat either, it sequences them.

**What this document is not**: not the discovery questionnaire (Prompt
11), not the scope/change-control system (Prompt 12), not the
build/review/launch workflow (Prompt 13), not the handoff system (Prompt
14). This is specifically the path from "someone is interested" to "the
project is ready to enter development" — nothing about how development
itself proceeds.

No prices, legal requirements, client results, or technical capabilities
are invented anywhere in this document. Where a real business decision
hasn't been made yet, it's marked as a placeholder or an open question,
not guessed at.

---

## 1. The client journey

```
Interested → Qualified prospect → Package selected → Commercial terms
agreed → Project confirmed → Onboarding → Requirements collected →
Content/assets collected → Ready for development
```

| Stage | What it means |
|---|---|
| **Interested** | First contact — a message, a referral, a call. Nothing has been evaluated yet. |
| **Qualified prospect** | The school has been checked against §2 below and looks like a realistic fit — not yet committed to anything. |
| **Package selected** | Essential/Professional/Premium has been discussed and one fits the client's actual needs (§3) — not yet a commercial agreement. |
| **Commercial terms agreed** | Scope, responsibilities, and (once real policy exists) payment terms are agreed — see §4. |
| **Project confirmed** | The conditions in §5 are met — this is a real, named client with a real project, not a prospect anymore. |
| **Onboarding** | `CLIENT_REQUIREMENTS.md` and `CONTENT_COLLECTION.md` are handed off and the client starts supplying material. |
| **Requirements collected** | The "Required before build" items (`CLIENT_REQUIREMENTS.md`) are in. |
| **Content/assets collected** | The "Required before launch" content and any photography decisions (§13, and `CONTENT_COLLECTION.md`) are far enough along to start real work. |
| **Ready for development** | The formal gate in §13 is satisfied. |

## 2. Qualification

Before treating a school as a real prospect, check:

- **Fit with the ideal client** — does this school match the primary or
  secondary profile in `IDEAL_CLIENT.md` (no/outdated site, active
  WhatsApp/social use, some usable photography, actively recruiting, a
  single clear decision-maker)? Or does it match a poor-fit signal
  (already has a good site, no digital presence at all, an existing IT
  department/vendor, a public/government procurement process)?
- **Required information available** — can they realistically supply
  what's marked "Required before build" in `CLIENT_REQUIREMENTS.md`
  within a reasonable time, or is there an immediate sign they can't
  (see `IDEAL_CLIENT.md` §3, §5)?
- **Realistic budget expectations** — no price exists yet to quote (see
  `PRICING_FRAMEWORK.md`, `PACKAGE_COST_MODEL.md`), so this isn't about
  matching a number. It's about confirming the school understands this
  is a paid professional service (not a free template or a five-dollar
  builder site) before investing time in a fuller conversation.
- **Content/photo availability** — ask directly and early; this is the
  single biggest predictor of a smooth vs. stalled engagement
  (`IDEAL_CLIENT.md` §1, `CONTENT_COLLECTION.md` §9).
- **Decision-maker involvement** — confirm who actually approves the
  purchase (`IDEAL_CLIENT.md` §6) before investing significant time with
  someone who can't ultimately say yes.
- **Timeline expectations** — are they expecting something unrealistic
  given how much content they still need to produce (`CONTENT_COLLECTION.md`
  §9)?
- **Domain/hosting situation** — do they already have a domain, or need
  one; is there an existing hosting relationship that might complicate
  things (`CLIENT_REQUIREMENTS.md` §5, §18)?

**Warning signs of an unsuitable or high-risk project** (from
`IDEAL_CLIENT.md` §3/§5, restated here as qualification red flags):
routes immediately to "we'd need board/ministry approval" with no
timeline; asks for CMS/portal/payment functionality early and insists on
it; can't produce any usable photography or content and shows no urgency
about it; recently paid for a website and seems attached to it despite
its quality; no single point of contact emerges after reasonable effort
to identify one.

No market statistics are used or implied in any of the above — this is
qualitative fit-checking, not a scored model.

## 3. Package selection

Match the tier to the client's actual situation, not to whichever is
most profitable to sell:

- **Essential** fits a school that needs a credible, complete site
  affordably and doesn't need heavy customization or an ongoing
  maintenance relationship yet.
- **Professional** fits a school with real content and photography
  ready, wanting full custom branding and a fuller News/Gallery
  presence.
- **Premium** fits a school wanting photography coordination as a
  service, the longest support window, and an ongoing maintenance
  relationship rather than a one-time build — or a client considering a
  second campus/preset (`SERVICE_PACKAGES.md`).

**No final price is quoted at this stage** — none exists yet
(`PRICING_FRAMEWORK.md`). The conversation is about scope fit, not
cost comparison. **Do not steer a client toward Premium if Essential or
Professional genuinely fits their situation better** — the tiers exist
to match real need (`SERVICE_PACKAGES.md`'s explicit design goal), not to
maximize deal size at the expense of fit.

## 4. Commercial confirmation

Before work begins, the following should be explicitly agreed — in
writing, even if that "writing" is a clear WhatsApp or email summary
rather than a formal contract (see the legal note below):

- Selected package (Essential/Professional/Premium)
- Scope — which pages/features apply, per `FEATURE_MATRIX.md`
- Deliverables — what "done" looks like for this engagement
- Client responsibilities — per `CLIENT_REQUIREMENTS.md` and
  `CONTENT_COLLECTION.md`
- Developer responsibilities — same sources
- Revision expectations — **the exact number of included revision
  rounds or the unit they're measured in (days/hours/rounds) has not
  been decided yet** (`PRICING_FRAMEWORK.md` flagged this as open); until
  it is, state plainly to the client that a reasonable revision window
  is included and will be clarified in the proposal, rather than citing
  a specific number that doesn't exist yet
- Timeline assumptions — framed as conditional on content arriving
  (`CONTENT_COLLECTION.md` §9), not a fixed calendar promise
- **Payment terms — PLACEHOLDER.** No deposit percentage, milestone
  structure, or upfront-payment discount policy has been decided
  (`PRICING_FRAMEWORK.md` "Discounting"). Do not tell a client a specific
  payment structure until one is actually decided.
- Hosting/domain responsibilities — an explicit decision per client, not
  assumed (`CLIENT_REQUIREMENTS.md` §18)
- Maintenance/support expectations — per the selected tier
  (`SERVICE_PACKAGES.md`)

**On contracts**: this document does not claim a written contract is
legally required — that's a legal question for a qualified source, not
something to assert here. What's recommended as good practice,
independent of any legal requirement, is that the terms above are
written down and both sides can point to the same agreed summary — a
clear message thread is sufficient for this to be true.

## 5. Project confirmation — stage distinctions

| Term | Definition |
|---|---|
| **Interested lead** | First contact only; not yet evaluated. |
| **Qualified lead** | Passed §2's qualification check; a realistic fit. |
| **Confirmed client** | Package selected (§3) and commercial terms agreed (§4) — a real, named project exists, even if payment terms are still using placeholder language. |
| **Project ready for development** | The formal gate in §13 is satisfied — this is a distinct, later state from "confirmed," not the same thing. |

A client can be "confirmed" for some time before being "ready for
development" — confirmation is a commercial agreement to proceed;
readiness is a content/information state.

## 6. Onboarding information

Immediately after confirmation, hand off:

- `CLIENT_REQUIREMENTS.md` — what's needed and when (build/launch/
  optional/future)
- `CONTENT_COLLECTION.md` — how to actually submit it (formats, the
  per-client folder structure, the status workflow, the Client Content
  Checklist)

This document doesn't duplicate either — it's the trigger point that
says "these two now apply to this specific client," and the point at
which a per-client folder (`CONTENT_COLLECTION.md` §2) gets created.

## 7. Client communication sequence

Realistic for direct WhatsApp/email communication with a school, with no
CRM assumed:

1. **Initial response** — acknowledge interest promptly, set the
   expectation that a short qualification conversation comes next.
2. **Qualification/discovery** — the actual questions asked here are
   Prompt 11's responsibility (the discovery questionnaire); this
   document only says qualification happens at this point in the
   sequence, using §2's criteria.
3. **Package discussion** — present the tier that fits (§3), explain
   what's included at a scope level (no prices yet).
4. **Confirmation** — summarize agreed scope/responsibilities/timeline
   assumptions in writing (§4), even briefly.
5. **Onboarding instructions** — send `CLIENT_REQUIREMENTS.md`'s
   checklist and `CONTENT_COLLECTION.md`'s submission guidance (§6).
6. **Content collection reminders** — a periodic, low-pressure check-in
   if material stalls, escalating in tone only if a longer silence
   follows (see §9 — exact cadence is a suggested practice, not a fixed
   rule).
7. **Readiness confirmation** — an explicit message confirming the
   project has met the gate in §13 and is moving into development.

## 8. Responsibility matrix (onboarding phase specifically)

| Responsibility | Owner |
|---|---|
| Identifying a realistic fit (§2) | Developer |
| Deciding which package to request | Client, guided by developer (§3) |
| Confirming scope/responsibilities/timeline in writing | Shared — both sides should be able to point to the same summary |
| Supplying required content/photos on the agreed timeline | Client |
| Tracking content status and following up | Developer (`CONTENT_COLLECTION.md` §4, §6) |
| Deciding domain/hosting ownership | Shared decision, client typically holds the account (`CLIENT_REQUIREMENTS.md` §18) |
| Flagging scope creep before it's accommodated | Developer (§10) |
| Confirming a single point of contact for approvals | Client, requested by developer |

## 9. Timeline control

| Situation | Practical guidance |
|---|---|
| **Client delays content** | Follow up per the cadence in §7; shift the timeline expectation accordingly rather than treating the original estimate as fixed regardless of input delays. |
| **Client stops responding** | The project should move to a distinct "paused" state rather than being left ambiguously "in progress" — **the exact non-response threshold before this happens is not yet decided; mark it as an open policy question (see §14), not a rule to enforce today.** |
| **Required information is missing** | Use `CONTENT_COLLECTION.md`'s status workflow (Requested → Needs clarification, etc.) rather than guessing or proceeding without it. |
| **Multiple people give conflicting instructions** | Request a single point of contact for content approval explicitly (`IDEAL_CLIENT.md` §6, `CONTENT_COLLECTION.md` §9) rather than trying to reconcile conflicting instructions from several staff members. |
| **The school changes its mind after confirmation** | A genuinely different scope after confirmation is a change request, not a silent accommodation — this belongs to the scope/change-control system (**Prompt 12, not yet built**). Until that exists, treat any significant change of mind as requiring a fresh commercial conversation (back to §4), not an assumption that the original terms just stretch to cover it. |

No punitive policy (late fees, automatic cancellation, etc.) is defined
here — none has been decided, and inventing one wasn't asked for.

## 10. Scope protection during onboarding

Points in this workflow where scope creep should be caught **before**
development starts, not discovered mid-build:

- **During qualification (§2)**: an early ask for CMS/portal/payment
  functionality is a direct signal to address immediately, not to note
  and move past.
- **During package discussion (§3)**: if a client's actual need doesn't
  match any of the three tiers (e.g. a fundamentally different
  information architecture — see `CLIENT_REQUIREMENTS.md` §9's note on
  non-K-12 institutions), that's worth surfacing before commercial terms
  are agreed, not after.
- **During commercial confirmation (§4)**: writing scope down explicitly
  is itself the main scope-protection mechanism — an agreement that
  only exists verbally is much easier to "expand" later by both sides
  misremembering it differently.
- **During content collection (§6 onward)**: a client submitting
  material for something outside scope (e.g. content clearly meant for
  a student portal) should be caught by `CONTENT_COLLECTION.md`'s
  handling rules, not built around.

Distinguishing the three categories, per `FEATURE_MATRIX.md`:

- **Included work**: whatever the selected package's scope actually
  covers.
- **Optional quoted work**: real add-ons that exist and can be
  delivered (extra articles, a second preset, analytics setup) —
  quoted, not silently absorbed.
- **Future/unsupported work**: a CMS, portals, payments, authentication,
  custom backend functionality, or anything else in
  `FEATURE_MATRIX.md`'s `→` category. Named as a separate, larger,
  future engagement — never quietly folded into the current one.

## 11. Onboarding checklist (copyable per client)

```
CLIENT ONBOARDING CHECKLIST
Client: ______________________            Date first contact: ___________

QUALIFICATION
[ ] Checked against IDEAL_CLIENT.md fit criteria
[ ] Content/photo availability discussed
[ ] Decision-maker identified
[ ] Domain/hosting situation understood
[ ] No major warning signs present (or explicitly accepted as a risk)

PACKAGE SELECTION
[ ] Package recommended based on actual need, not upsold
[ ] Client understands what's included/optional/unsupported at this tier

COMMERCIAL CONFIRMATION
[ ] Scope confirmed in writing
[ ] Responsibilities (client/developer) confirmed in writing
[ ] Revision expectations communicated (using current placeholder language if unit not yet decided)
[ ] Timeline framed as conditional on content arrival
[ ] Payment terms communicated using placeholder language (not yet decided — see PRICING_FRAMEWORK.md)
[ ] Hosting/domain ownership decided
[ ] Maintenance/support expectations for this tier communicated

PROJECT CONFIRMED
[ ] Single point of contact identified
[ ] CLIENT_REQUIREMENTS.md checklist sent
[ ] CONTENT_COLLECTION.md submission guidance sent
[ ] Per-client content folder created (CONTENT_COLLECTION.md §2)

READY FOR DEVELOPMENT (see §13 for full gate)
[ ] All "Required before build" items Approved
[ ] No outstanding scope-creep flags
[ ] Readiness confirmation message sent to client
```

## 12. Project status model

```
New Lead → Qualified → Proposal/Package Discussion → Awaiting Confirmation
→ Confirmed → Onboarding → Awaiting Client Materials → Ready for Development
```

This maps directly onto §1's journey — this is the short label set to
actually use for tracking a project day to day; §1 is the fuller
explanation of what each point means.

## 13. Onboarding exit criteria — the "Ready for Development" gate

A project may move from Onboarding into development only when:

- Package, scope, and responsibilities are confirmed in writing (§4).
- Every item marked "Required before build" in `CLIENT_REQUIREMENTS.md`
  is at "Approved" status per `CONTENT_COLLECTION.md`'s workflow.
- A single point of contact for content approval has been identified.
- Domain/hosting ownership has been decided (even if the domain isn't
  registered yet — the *decision* of who's responsible is what's
  required here, not the registration itself, which is properly a
  "Required before launch" item).
- No open scope-creep flags remain unresolved (§10).
- The client has explicitly acknowledged the current placeholder
  payment-terms language (§4) — i.e., they've agreed to proceed knowing
  final payment terms will be confirmed before invoicing, not left
  uninformed about that gap.

"Required before launch" items (per `CLIENT_REQUIREMENTS.md`) do **not**
need to be complete to pass this gate — development can begin once the
build-blocking items are in, with launch-blocking items continuing to
arrive during development. This distinction is what lets real projects
start without waiting for every last piece of content.

## 14. Business assumptions and unresolved decisions

Carried forward explicitly, not resolved here:

- **Payment terms** (deposit %, milestone structure, upfront-payment
  discount) — undecided (`PRICING_FRAMEWORK.md`).
- **Revision round definition** (days vs. hours vs. number of rounds) —
  undecided (`PRICING_FRAMEWORK.md`).
- **Domain registration markup policy** (at cost vs. with markup) —
  undecided, appears in three prior documents now.
- **Non-response timeout threshold** before a project is marked
  "paused" — new in this document, undecided.
- **Whether Essential survives as a distinct tier**, given it costs the
  same build effort as the others — undecided (`SERVICE_PACKAGES.md`).
- **Whether a formal written contract will be used**, and if so, its
  content — a decision for the business (with qualified legal input if
  desired), not resolved or assumed here.
- **Scope-change handling after confirmation** — deferred entirely to
  Prompt 12, deliberately not designed here.

This document assumes: a single developer or small team handling
communication directly (no CRM, no sales team) — consistent with every
prior document's framing of this as a small, direct-to-school service
business, not assumed newly here.

## 15. Future automation (identified, not built)

Parts of this workflow that could eventually be automated — none of this
is built, promised, or assumed to exist:

- A simple CRM or spreadsheet-based pipeline tracking the status model
  in §12 across multiple simultaneous prospects/clients, once volume
  makes manual tracking unwieldy.
- An online intake form replacing the manual "send the checklist, wait
  for replies" pattern in §6 — Prompt 11's questionnaire could
  eventually feed one.
- Automated reminder messages for stalled content collection (§9),
  rather than manual follow-up.
- A shared dashboard (potentially backed by something like Supabase, if
  this business ever adopts backend infrastructure — explicitly not
  part of the current product per `FEATURE_MATRIX.md`) giving a client
  visibility into their own onboarding/content status, rather than
  relying on direct messages.

None of the above should be built speculatively before real onboarding
volume actually justifies it — consistent with `COST_MODEL.md`'s
standing warning against building ahead of demonstrated need.

---

## Handoff update

Created `CLIENT_ONBOARDING_WORKFLOW.md`: the full journey from interested
lead to the ready-for-development gate, qualification criteria, package
selection guidance (needs-based, not upsell-driven), a commercial
confirmation checklist with explicit placeholders for undecided payment/
revision policy, project-status distinctions, a communication sequence,
a responsibility matrix, timeline-control guidance for delays/silence/
conflicting instructions/scope changes, scope-protection checkpoints, a
copyable onboarding checklist, the formal status model, and the Ready
for Development exit gate. No website code was touched. No
questionnaire, scope/change-control system, build workflow, or handoff
system was created, per instruction.

### Key decisions
- "Confirmed client" and "ready for development" are treated as
  genuinely distinct states — a project can be commercially agreed while
  still waiting on required content, and development shouldn't wait for
  every optional/launch-only item to arrive.
- Package selection is explicitly framed as needs-matching, with a
  direct instruction not to steer toward Premium when a lower tier
  actually fits — operationalizing `SERVICE_PACKAGES.md`'s own stated
  goal.
- Scope-change handling after confirmation is deliberately not designed
  here — pointed at Prompt 12 instead of improvised.

### Assumptions
- A single developer/small team handling this directly, no CRM, no sales
  team — consistent with, not new relative to, every prior document.
- "Written" confirmation can mean a clear message thread, not
  necessarily a formal contract — stated as a practice recommendation,
  not a legal claim.

### Unresolved questions
All carried forward explicitly in §14 — payment terms, revision-round
definition, domain markup policy, non-response timeout threshold,
Essential tier's long-term viability, whether a formal contract will be
used, and scope-change handling (deferred to Prompt 12). None invented
or silently resolved here.

### Future technical/Codex tasks
None generated this stage. The two bugs logged under Prompt 8's handoff
(contact-form email not rebrand-safe; non-conditional social icons)
remain open and unrepeated here. No new technical work was identified —
this document is process only, layered on the already-verified
codebase and existing commercial documents.

## Remaining prompts (11–35)

Confirmed so far: Prompt 11 = discovery questionnaire, Prompt 12 =
scope/change-control system, Prompt 13 = build/review/launch workflow,
Prompt 14 = handoff system. Prompts 15–35 are not yet defined — no
content for them has been provided, and this document does not
speculate on their scope.

Stopping after Prompt 10, per the instruction. Not proceeding to Prompt
11 automatically.
