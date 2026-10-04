# Product Overview

This document defines what the product actually is, for anyone deciding
whether to sell it, buy it, or build on it. It's written from the current,
verified state of the codebase (Stages 1–5) — nothing here describes a
capability that hasn't actually been built and checked.

## 1. What the product is

A premium, pre-built website system for schools and other educational
institutions, delivered as a rebrandable static site (plain HTML/CSS/JS —
no framework, no backend, no database). A developer takes the existing
design, colors, and page structure and turns it into a specific school's
site through a documented content and branding process, rather than
building a website from a blank page for every new client.

It ships as one working demonstration site — "Aurelia Heights Academy," a
fictional school — plus the underlying system (design tokens, reusable
page components, a rebranding script, and three sample brand
configurations) that makes producing the *next* school's site
substantially faster than the first one was.

## 2. What problem it solves

Most small and mid-sized schools either have no real website, an outdated
one, or a generic template site that looks interchangeable with thousands
of others and does little to build confidence with parents. Building a
genuinely good school website from scratch — one with real information
architecture (not just a homepage), a coherent visual identity, and
working admissions/contact mechanics — is expensive and slow to do
per-client from zero.

This product exists to make that unnecessary: the expensive part (design
system, page architecture, component library, accessibility and
responsive-behavior work) is already done once. What's left per client is
genuinely lighter: brand configuration, real content, and real
photography.

## 3. Who it is designed for

- **Primary**: independent/private schools, academies, and institutes —
  the kind of institution that competes partly on perceived quality and
  professionalism, and for whom a credible web presence is a real trust
  signal to parents (this is the market the current demo content is
  written for — Kampala/Uganda, contact formats, WhatsApp-first
  communication).
- **Secondary**: a small web-design studio or freelance developer selling
  school websites as a repeatable service, using this as the base product
  for each new client engagement rather than starting over.

The architecture doesn't assume anything Uganda-specific at the code
level (currency, address format, and phone format are all in the
per-school configuration, not hardcoded into layout), so the same system
can serve other markets. But the demo content, tone, and the "WhatsApp is
a first-class contact channel" design decision were made with the local
institutional market specifically in mind, and that's an honest
description of where it's proven, not a claim about where it's been sold.

## 4. What makes it different from a generic school website template

- **A real information architecture, not just a homepage.** Seven
  distinct inner pages (About, Academics, Admissions, Campus Life, News,
  Gallery, Contact) plus a working article-page pattern for News — each
  with its own purpose and layout variation, not the same "hero → cards →
  footer" block repeated seven times.
- **A documented design system**, not just a stylesheet — token
  rationale, component guidelines, and a written QA checklist
  (`DESIGN_SYSTEM.md`) exist specifically so the visual language stays
  coherent as more pages and more school variants get added.
- **An actual rebranding mechanism, verified to work.** `scripts/rebrand.py`
  was run end-to-end against three different brand configurations this
  session and each output was checked (not just visually eyeballed) for
  leftover references to the wrong school, correct color tokens, and
  structurally valid HTML. That's a materially different claim than "the
  colors are in variables at the top of the file," which is true of many
  templates and doesn't by itself mean rebranding actually works cleanly.
- **Honest architecture documentation.** `REBRANDING_GUIDE.md` explicitly
  separates what's mechanically automatable (identity, colors, contact
  info) from what's always bespoke content (leadership bios, testimonials,
  news, program descriptions) — a distinction most template products
  don't make explicit, which is usually where "5-minute rebrand" claims
  quietly fall apart in practice.
- **Accessibility and mobile treated as first-class, not an afterthought**
  — semantic structure, keyboard-accessible components (a native
  `<details>` FAQ accordion, a focus-trapped lightbox and mobile menu),
  and WCAG contrast checked and fixed multiple times during development
  (documented in the handoff notes, including two color-token contrast
  failures that were found and corrected before shipping).

## 5. Current capabilities (verified, not aspirational)

- Nine complete pages with zero dead links (verified by an automated
  link-resolution check across the whole site, every session).
- A filterable gallery with a working, keyboard-accessible, filter-aware
  lightbox.
- A filterable, categorized news system with one complete demo article
  demonstrating the reusable article-page layout.
- A functional contact form: real client-side validation, and an honest
  `mailto:` handoff that never falsely claims a message was sent (there is
  no backend — this is disclosed to the site visitor, not hidden).
- A working admissions section: process timeline, requirements,
  key dates, and an FAQ accordion — with a fees section that deliberately
  shows no invented tuition figures, only the table structure a school
  would fill in with real numbers.
- Three working brand presets (colors, name, contact info, logo initials)
  and a script that applies any of them to produce a distinct, working
  copy of the site.
- Full responsive behavior from 320px to 1920px, reasoned through and
  fixed against real bugs found during development (a long-name overflow
  bug in the nav, an invisible hover state, sub-44px touch targets) —
  though see Limitations below for what "reasoned through" does and
  doesn't mean here.

## 6. Current limitations (stated plainly, not softened)

- **No real photography anywhere.** Every image on every page is a
  generated placeholder (a gradient block with a monogram watermark). This
  is the single biggest gap between the current state and something
  ready to show a paying client as finished — it reads as a well-designed
  placeholder system, not as a finished site.
- **No rendered visual QA has ever been performed.** Every responsive and
  accessibility check made during development was static analysis — code
  logic, computed contrast math, automated link-checking — because no
  development session has had access to an actual browser, device, or
  tool like Lighthouse or axe. The architecture has been reasoned through
  carefully; it has not been looked at.
- **SEO metadata is inconsistent across pages.** Structured data
  (JSON-LD) and Open Graph images exist on the homepage only, not the
  other eight pages.
- **The rebranding script covers identity/branding/contact only.**
  Leadership, testimonials, news, achievements, and program content are
  and will remain manual authoring work for every new client — this is a
  permanent characteristic of the product, not a temporary gap (see
  `REBRANDING_GUIDE.md`).
- **Only one full article page exists**, demonstrating the pattern rather
  than providing a populated news archive.
- No CMS, no admin dashboard, no student/parent portal, no payments — by
  design (see §8), not by oversight.

## 7. What's included in the core product

- The complete nine-page static site architecture and all its components.
- The design token system and `DESIGN_SYSTEM.md`.
- The rebranding script and preset system, and `REBRANDING_GUIDE.md`.
- Three demonstration brand configurations.
- A documented process for adding real photography, real content, and a
  new preset for a new client.

## 8. What belongs to future upgrades (explicitly out of scope now)

Per the product brief that's governed every stage of this build: a CMS or
admin dashboard, student/parent/teacher portals, authentication, online
payments, and any backend beyond the current static architecture. These
are deliberately excluded from the core product — not because they're
undesirable, but because the core product is specifically "a premium
public-facing marketing and information website," and each of those is a
different, larger product with its own scope. If pursued, they should be
positioned as separate paid add-ons built on top of a finished core
product, not folded into it.

## 9. Why the reusable architecture matters commercially

The economics of this product only work if the marginal cost of client #2
is much lower than client #1. Client #1 (this build) paid for the design
system, the page architecture, the accessibility work, and the
rebranding mechanism. Every client after that should mostly be paying for:
real content authoring, real photography, and a preset configuration —
not a redesign and not a rebuild. That's the entire commercial argument
for the time spent on `REBRANDING_GUIDE.md`, the token system, and the
rebrand script rather than just hand-editing a copy of Aurelia Heights's
site for the next school: it converts "a website project" into "a
content and configuration task" the way §30 of the Stage 5 brief framed
it — and that conversion is the product's actual value as a business,
not just as a codebase.

## 10. What value the product provides to a school

- A public-facing site that communicates academic seriousness, character,
  and modernity through actual information architecture (dedicated
  admissions, academics, and campus-life pages), not just a single
  homepage.
- A genuinely functional admissions and contact pathway — including a
  WhatsApp-first contact pattern suited to how many parents in this
  market actually prefer to reach a school.
- A site that works properly on a parent's phone, not just on a desktop
  monitor in a sales demo.
- A foundation that can grow — new preset, new content, same underlying
  quality bar — rather than a one-off project that starts depreciating
  the day it launches.

No specific outcome (enrollment numbers, inquiry volume, search ranking)
is claimed here, because none has been measured. Any such claim would be
invented, and this document is trying specifically not to do that.

---

## Summary of what was completed this session

Created `PRODUCT_OVERVIEW.md`, covering all ten required points, based on
an inspection of the actual Stage 1–5 codebase and prior session handoff
notes rather than assumption. No website code was touched (none was
needed for this task).

## Unresolved questions (for the person running this business, not for a
developer to answer)

- Who is the actual first paying client, and does their identity/branding
  fit inside the color-robustness range this system has actually been
  contrast-checked against (see `REBRANDING_GUIDE.md`)?
- Is real photography being commissioned, licensed, or supplied by the
  client? This determines whether "swap the placeholders" is a days-long
  or weeks-long task before a client site is truly launch-ready.
- Is a CMS/admin dashboard a real near-term ask from prospective clients,
  or a hypothetical? That answer should drive whether Stage 6+ work
  continues toward pure commercialization (pricing, sales positioning,
  onboarding process) or toward backend scope — the current brief
  explicitly defers backend work, but someone should confirm that's still
  the right call before more stages pass.
- What domain/hosting arrangement is intended for real client deployments
  (relevant to the `domain` field in each preset and to canonical URLs)?

## Codex-ready prompt

None generated. This stage was documentation only, and no technical work
is required as a result of it — consistent with the instruction not to
generate a Codex prompt unless genuinely warranted.
