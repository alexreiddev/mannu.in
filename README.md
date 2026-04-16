# mannu.in

Validated digital-asset pre-order storefront. Every product on the site is sold by pre-order with a public goal and deadline. If the goal hits, we build and ship. If it misses, every buyer is refunded within 48 hours.

## The short version

- No guessing. Real money is the only signal that counts.
- No paid marketing. Organic channels only (IH, relevant subreddits, X, LinkedIn, HN).
- No backend. Stripe Payment Links handle checkout. The counter is bumped manually per pre-order.

## Stack

- Astro 5 static site + Tailwind v4.
- Content collections (one markdown file per product in `src/content/products`).
- Stripe Payment Links for checkout.
- Cloudflare Pages for hosting (`mannu.in`).

## Local dev

```bash
pnpm install
pnpm dev            # http://localhost:4321
pnpm build          # static output in dist/
pnpm preview
pnpm check          # type-check
```

## Add a product

See `docs/OPERATIONS.md`. The whole flow is:

1. Copy an existing file in `src/content/products/` to a new slug.
2. Fill in frontmatter (title, price, Stripe URL, goal, deadline, bullets, FAQ, channels).
3. Drop OG image at `public/og/<slug>.png` and sample PDF at `public/samples/<slug>-preview.pdf`.
4. Commit, push. Cloudflare Pages deploys automatically.

## Playbooks

- `docs/NICHES.md` — why the three starter products were picked and what evidence backs them.
- `docs/VALIDATION.md` — go/no-go rules, refund promise, outcomes.
- `docs/DISTRIBUTION.md` — organic launch checklist, no paid ads.
- `docs/OPERATIONS.md` — day-to-day: add product, bump counter, issue refunds.

## Non-goals

- No user accounts, no DB, no webhooks in v1.
- No email platform integration. Stripe sends the receipt. Delivery email is manual on ship day.
- No paid marketing, no influencer outreach, no cross-promo.
