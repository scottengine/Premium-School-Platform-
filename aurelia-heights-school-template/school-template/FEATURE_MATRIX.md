# Feature Matrix

A plain comparison of what each package actually includes, verified
against the real codebase (not against what would be nice to offer). If
you're a school administrator comparing these three options, this is the
document to read — `SERVICE_PACKAGES.md` has more detail if you want it.

## Legend

| Symbol | Meaning |
|---|---|
| ✓ | Included |
| ○ | Optional — available, at extra cost or by request |
| — | Not included, and not currently available at any price |
| → | Future upgrade — doesn't exist in the product today at all; would be a separate, larger engagement if ever built |

## The matrix

| Feature | Essential | Professional | Premium |
|---|---|---|---|
| Responsive design (works on phones/tablets/desktops) [^1] | ✓ | ✓ | ✓ |
| Homepage | ✓ | ✓ | ✓ |
| About page | ✓ | ✓ | ✓ |
| Academics page | ✓ | ✓ | ✓ |
| Admissions page [^2] | ✓ | ✓ | ✓ |
| Campus Life page | ✓ | ✓ | ✓ |
| News page [^3] | ✓ | ✓ | ✓ |
| Gallery page (with filtering) | ✓ | ✓ | ✓ |
| Contact page | ✓ | ✓ | ✓ |
| WhatsApp contact links | ✓ | ✓ | ✓ |
| Contact form [^4] | ✓ | ✓ | ✓ |
| SEO — page titles & descriptions | ✓ | ✓ | ✓ |
| SEO — sitemap & advanced search-engine data [^5] | — | ✓ | ✓ |
| Analytics (visitor tracking) [^6] | ○ | ○ | ○ |
| Custom domain (yourschool.com instead of a generic address) [^7] | ✓ | ✓ | ✓ |
| Hosting/deployment setup | ✓ | ✓ | ✓ |
| Content updates after launch [^8] | ○ | ○ | ✓ |
| Ongoing maintenance | ○ | ○ | ✓ |
| Self-service content editing (a login where staff edit the site themselves) | → | → | → |
| Custom logo file upload [^9] | — | ○ | ○ |
| Student/parent portal, online payments, or similar systems | → | → | → |
| "Supabase" or any other backend/database system | → | → | → |
| Other advanced integrations (booking systems, CRM connections, etc.) | → | → | → |

## Footnotes — what the symbols above don't say on their own

[^1]: Built and reasoned through carefully for phone/tablet/desktop
sizes, including real bugs found and fixed during development. It has
**not** been tested on actual physical phones or in a real browser lab —
only through code analysis. This is disclosed plainly rather than
implied to be fully verified.

[^2]: The admissions page includes a fees section, but it never displays
invented numbers — it ships as an empty table structure until the school
supplies real figures. This is the same at every tier; it's a policy
decision (never show made-up prices), not a tier limitation.

[^3]: The News page and its "read a full story" template exist at every
tier. How many actual stories are written for the school differs by
tier — see `SERVICE_PACKAGES.md`. The page and its mechanism are
identical either way.

[^4]: Important: this form does **not** deliver messages to an inbox by
itself. When a visitor submits it, it opens their own email app with the
message already written, and they send it from there. It is not
connected to any server. This is disclosed to site visitors directly,
not hidden — see `PRODUCT_OVERVIEW.md`.

[^5]: "Advanced search-engine data" means a sitemap file and structured
data that helps Google show richer search results (e.g., a knowledge
panel). As of this document, **this has not actually been built for any
real client yet** — it's real, well-understood work that's included in
the Professional/Premium delivery process, not a feature that already
exists and gets switched on.

[^6]: No analytics tool (Google Analytics, Plausible, or similar) is
built into the product today. It's a small, well-understood addition if
a school wants to see visitor numbers — available on request at any
tier, not tier-restricted.

[^7]: The site can be pointed at a school's own domain name — that's a
standard hosting configuration, not a special feature. The school (or
this business, if arranged separately) still needs to own/register that
domain name; that cost is separate from this product.

[^8]: There is no way for school staff to edit the website themselves at
any tier (see the "self-service content editing" row — that's a
different, much larger product that doesn't exist yet). "Content
updates" here means a developer makes the change for you. Essential and
Professional include a limited window of this after launch, then it's
billed separately; Premium includes an ongoing allowance.

[^9]: The product's default "logo" is a generated badge using the
school's initials, and it works well without a real logo file. If a
school has an actual logo image to upload instead, that capability is
**designed but has never actually been built or tested** — flagged
honestly here rather than promised as a sure thing. See
`SERVICE_PACKAGES.md` "Unsupported promises."

## Things I explicitly won't guess about

- Whether a specific school's *existing* domain registrar or DNS
  provider will cause any friction connecting a custom domain — this
  varies per registrar and can't be answered in the abstract.
- Whether analytics, once added, would need to comply with any specific
  data-privacy requirement for a given school's country — that's a legal
  question, not a technical one, and hasn't been researched.
- Exact turnaround time for any tier — this depends on how quickly a
  school supplies content and photography, which varies per client (see
  `IDEAL_CLIENT.md` §3 on why this matters).

## No website code was modified for this stage

The verification pass for this matrix (checking for analytics scripts,
backend/CMS references, and sitemap/structured-data files) found no
inconsistency between what was already documented and what's actually in
the codebase, so no code changes were made or needed.

## Handoff update

`FEATURE_MATRIX.md` created — a verified, plain-language feature
comparison across the three tiers, cross-checked against the actual
codebase (confirmed: zero analytics/CMS/backend code exists anywhere;
zero sitemap or robots.txt files exist; JSON-LD exists on the homepage
only). No unresolved technical questions from this stage — the ambiguous
items (contact form behavior, fees table, logo upload, advanced SEO) were
resolved by flagging them explicitly in the footnotes rather than
guessing, per this stage's instructions.

No Codex prompt generated — this stage was verification and documentation
only.

Not proceeding to Prompt 5 automatically.
