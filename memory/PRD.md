# Zukvo — PRD

## Original problem statement
Zukvo is a work platform for freelancers (solo & group) and companies. Key
modules: Zithport Chrome extension (capture job posts → Leads), BidIQ AI
(decide whether to bid), Zai AI (proposal + ticket generation), one-click
Lead → Client → Project conversion, sprint/ticket/bucket/bug-list workspace,
Document Hub with public/private share & ticket linking, invoices, accounts,
time tracking, daily updates, RBAC, client + project management.

User asked for a **premium SaaS marketing landing page** referencing product
screenshots (dark dashboard, sprint completion modal, Create-with-Zai modal).

## User personas
- Solo freelancers — replace 7 disconnected tools with one work OS.
- Freelance studios / teams — shared pipeline + sprint workspace + RBAC.
- Services companies — standardized work flow, audit trail, finance suite.

## User choices captured
- Scope: Marketing landing page only (no auth, no waitlist).
- Theme: Light hero + dark product showcase sections (Linear/Vercel hybrid).
- Pricing tiers: Solo Freelancer / Team / Company (placeholder amounts).
- Brand: Custom Zukvo wordmark + geometric Z mark with purple #6366F1 accent.
- CTAs: Static (Start free / Watch demo / Talk to sales).

## Architecture
- Frontend only (React + Tailwind). No backend changes.
- Routes: `/` → Landing. Single page with anchor-scrollable sections.
- Fonts: Outfit (headings), Manrope (body), JetBrains Mono (code).
- Sections: Nav → Hero (light) → Social Proof → Features Bento → Workflow
  rows → Audiences → Pricing → FAQ → Final CTA → Footer (all dark).

## What's been implemented (2026-12-06)
- Tailwind config with custom `zukvo` color palette + heading/body fonts.
- Global styles (`index.css`): scroll reveal, dot grid, marquee, tracing
  border, pulse, mesh gradient, custom scrollbar, selection color.
- Components:
  - `ZukvoLogo` (with `ZMark`) — geometric Z with diagonal cut + wordmark.
  - `Nav` — glass pill that hardens on scroll, mobile menu.
  - `Hero` — eyebrow, large headline w/ underline accent, dual CTA, browser
    chrome product mockup with floating BidIQ + Zai chips, dark bridge.
  - `SocialProof` — looping marquee of customer wordmarks.
  - `FeaturesBento` — Zithport, BidIQ, Zai, Convert pipeline, Sprint mock,
    plus 4 mini-cards (Docs, Time, Invoices, RBAC).
  - `Workflow` — 3 alternating rows (Document Hub, Finance Suite, PM/RBAC)
    with handcrafted product mocks.
  - `Audiences` — 3 personas (Solo / Team / Company), team featured.
  - `Pricing` — 3 tiers, Monthly/Yearly toggle, animated tracing border on
    Team plan.
  - `FAQ` — accordion (6 items).
  - `FinalCTA` — center hero with mark, dual CTAs.
  - `Footer` — 4 link columns + giant ZUKVO outline mark.

## Backlog (P1)
- Real auth + signup flow (JWT or Emergent Google).
- Waitlist form → MongoDB (deferred per user choice).
- /demo video page or modal.
- Replace placeholder Unsplash imagery with branded screenshots.
- Customer logo SVGs (currently styled wordmarks).

## Backlog (P2)
- Localized pricing.
- Animated product walkthroughs (Lottie / scroll-driven).
- Light/dark theme toggle.
- Blog + changelog routes.

## Next action items
- Hook up "Start free" / "Talk to sales" CTAs to a real auth or contact flow.
- Swap placeholder customer names for actual logos when available.
