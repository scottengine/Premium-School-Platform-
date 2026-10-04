# Delivery Cost Model

What it actually costs, in cash, to deliver and run one school website on
this product — as distinct from `PRICING_FRAMEWORK.md`, which covers what
gets *charged*. Nothing here is purchased or activated; this is analysis
only, and no dollar/UGX figures below should be read as verified pricing
— provider terms should be checked directly before relying on any of
this for a real client.

## The headline finding

Because this product is a static site with no database, no backend, and
no CMS (a deliberate architectural choice from Stage 1 onward, not a
cost-cutting measure — but it has this side effect), **almost every
traditional "website hosting business" cost in the list this stage asked
about simply doesn't apply.** The real cost of delivering this product is
overwhelmingly the developer's own time — which is exactly what
`PRICING_FRAMEWORK.md`'s `Hourly Rate` is meant to price — not recurring
cash outlay. Protecting that fact is the point of this document: the
fastest way to accidentally build a business where the developer earns
little while bleeding out to infrastructure bills is to assume paid
tools are needed when the free option already does the job. This
document defaults to "no" on paid infrastructure unless there's a
specific reason.

## DEVELOPER-ABSORBED COST (i.e., effectively $0 today)

| Item | Why it's free |
|---|---|
| **Hosting** | The site is static HTML/CSS/JS. Netlify, Vercel, Cloudflare Pages, and GitHub Pages all offer free tiers built specifically for this kind of site, and a small school site's realistic traffic sits comfortably inside those free tiers' typical limits. (Verify the specific provider's current free-tier terms before committing — they do change over time — but there's no structural reason a site like this needs a paid hosting plan.) |
| **SSL certificate (the padlock/https)** | Provided free and automatically by every host listed above (commonly via Let's Encrypt). This isn't a cost to plan for at all — it used to be a real line item industry-wide years ago, and isn't anymore. |
| **Deployment pipeline** | Pushing an update to any of the above hosts is free and doesn't require separate CI/CD tooling. |
| **Storage** | The entire site (HTML/CSS/JS/images) is a few megabytes at most. This is bundled into the free hosting tier — there's no reason to use a separate storage service (e.g. S3) for a product this size. |
| **Image delivery** | Images are served as static files by the same free host. No image CDN (Cloudinary, imgix, etc.) is needed at this scale — see "Optional Cost" for when that could change. |
| **Third-party APIs / database** | None exist in the product today (verified by code search during Stage 6.4) and none are needed for the current scope. |

## CLIENT-BILLED COST (pass-through, not this business's expense)

| Item | Notes |
|---|---|
| **Domain registration** | Paid annually to a domain registrar. This is the client's cost either way — the only open question (already flagged in `PRICING_FRAMEWORK.md`) is whether this business passes it through at cost or with a small markup for handling it on the client's behalf. Either way, it is not a cost this business should absorb indefinitely. |
| **Email (e.g. admissions@theirschool.edu)** | Out of scope entirely. The contact form works by opening the *visitor's* email client, addressed to whatever email the client configures — this product never sends, receives, or hosts email itself. If a client wants a professional email address, that's their own arrangement with a provider (Google Workspace, Zoho Mail, or similar), not something this business needs to provide, host, or pay for. |

## OPTIONAL COST (only if a client specifically wants it)

| Item | Notes |
|---|---|
| **Analytics** | Google Analytics is free but sends data to Google; privacy-respecting alternatives (Plausible, Fathom, etc.) typically charge a small recurring fee. Neither is required by the product — this is purely a client preference, and if chosen, the *recurring* cost should be billed to the client (or built into their maintenance fee), not absorbed. |
| **Premium/managed hosting** | Only relevant if a client has traffic or reliability needs that exceed what a free static host provides — unlikely for a school site, but not impossible for a very large multi-campus deployment. Should be quoted and billed specifically if it ever comes up, not assumed as a default. |
| **Image CDN/optimization service** | Only worth considering if a client's site ends up with unusually heavy, high-traffic photography needs. Not needed for the product as it exists today. |
| **Custom logo file integration work** | This is a one-time development cost (see `PRICING_FRAMEWORK.md`), not an infrastructure cost, but it's listed here as a reminder that it requires actual build/verification time before it can be resold — see `FEATURE_MATRIX.md` footnote 9. |

## FUTURE COST (only relevant if the product scope ever expands)

These only become real costs if this business ever builds the
explicitly-out-of-scope future product features (`SERVICE_PACKAGES.md`,
`FEATURE_MATRIX.md`):

| Item | Would apply if... |
|---|---|
| **Database / backend hosting** (e.g. Supabase or similar) | A CMS, student/parent portal, or authentication is ever built. Not needed for the current product and shouldn't be provisioned speculatively. |
| **Payment gateway fees** | Online fee payment is ever built. Payment processors typically take a per-transaction cut — a real, ongoing cost that would need to be factored into that feature's pricing specifically, not absorbed by this business as overhead. |
| **Authentication/session infrastructure costs** | Any login system is ever built. |

## Development time and revision time — labor, not cash cost

Development time, revision time, and ongoing maintenance are real costs,
but they're the developer's *time*, not a cash outlay — they belong in
`PRICING_FRAMEWORK.md`'s `Hourly Rate` term, not in this document. Listing
them here as a cash "cost" would double-count the same hours in two
places and risk under-pricing the actual engagement. The only reason
they're mentioned in this document at all is to say explicitly: **the
overwhelming majority of what it costs to deliver this product is time,
not infrastructure** — which is exactly the condition that needs to hold
for the margin discussion in `PRICING_FRAMEWORK.md` to actually work as
intended.

## The risk this document is specifically trying to prevent

A business built on this product could still lose money if it:

- Adopted a paid hosting plan "to be safe" without checking whether the
  free tier already covers the real need.
- Set up a paid analytics or image-CDN subscription by default rather
  than only when a specific client asks for it.
- Absorbed domain costs indefinitely across many clients instead of
  passing them through.
- Started building future-product infrastructure (a database, a backend)
  speculatively, before any client has actually paid for a feature that
  needs it.

None of the above has happened — this document is a check against it
happening by default, not a report that it already has.

---

## Handoff update

Created `COST_MODEL.md`. Core finding: real cash infrastructure cost for
delivering this product today is effectively zero, because the static,
no-backend architecture (a Stage 1 decision made for unrelated SEO/
simplicity reasons) happens to also mean no hosting, database, storage,
image-CDN, or email costs are structurally necessary. The real cost is
developer time, which belongs in `PRICING_FRAMEWORK.md`'s formula, not
here. Nothing was purchased or activated, per this stage's instructions.

## Unresolved questions

- Domain pass-through policy (at cost vs. with markup) — same open item
  flagged in `PRICING_FRAMEWORK.md`, not resolved here either.
- If/when a client's traffic genuinely exceeds a free hosting tier's
  limits (unlikely, but not impossible for a well-marketed multi-campus
  client), who decides when to upgrade to a paid tier, and who pays for
  it?
- No actual hosting account has been created yet for any real client, so
  "the free tier will comfortably cover a school site's traffic" is a
  reasoned expectation based on how these platforms are commonly
  described, not something measured against a real deployment.

No Codex prompt generated — this stage was cost analysis only, nothing
was built, purchased, or activated.
