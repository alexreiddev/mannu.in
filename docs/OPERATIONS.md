# Operations — Running a Product Smoke Test

Day-to-day commands for running the storefront. Keep this next to the Stripe dashboard.

## Launch a new product

1. Copy `src/content/products/agency-onboarding-os.md` to a new slug file.
2. Fill in frontmatter:
   - `title`, `tagline`, `buyer`, `priceUsd`, `bullets`, `faq`, `organicChannels`, `keyword`.
   - `launchedAt`: today. `deadline`: today + 14 days.
   - `preorderGoal`: 25 unless you have a reason to deviate.
   - `preordersSoFar`: 0.
   - `status`: `smoke-test`.
3. Create a Stripe Payment Link:
   - Price = `priceUsd`, currency USD.
   - Success URL = `https://mannu.in/thanks`.
   - Cancel URL = `https://mannu.in/cancel`.
   - Disable quantity selector; limit 1 per customer.
   - Collect customer email + Stripe receipt.
4. Paste the live Payment Link URL into `stripePaymentLinkUrl`.
5. Drop the OG image at `public/og/<slug>.png` and the sample at `public/samples/<slug>-preview.pdf`.
6. Commit, push, deploy to Cloudflare Pages. Verify the product URL is live before any public share.
7. Follow `docs/DISTRIBUTION.md` launch checklist.

## Update the pre-order counter

This is the only recurring manual task. Do it once per pre-order; it takes 30 seconds.

1. Stripe emails you a payment notification.
2. Open the product's markdown file in `src/content/products/`.
3. Increment `preordersSoFar` by 1.
4. Commit with message like `bump: n8n-founder-pack 3 of 25`.
5. Cloudflare Pages rebuilds automatically; the public counter updates in ~60 seconds.

Optional v2: add a Cloudflare Pages Function that pulls the paid-count from Stripe API on every request and replaces `preordersSoFar` at runtime. Not needed for the first three products.

## Honour a referral ($10 off)

1. Buyer replies to their Stripe receipt with a share link / screenshot showing someone pre-ordered from their link.
2. Open the original pre-order in Stripe dashboard.
3. Issue a $10 partial refund with note `referral credit`.
4. Reply to the buyer confirming.

## End of smoke-test window

On the `deadline` date:

- **Goal hit** → set `status: building`. Start work. Email every buyer once, confirming delivery date.
- **Partial (10–24)** → email every buyer within 48h offering refund or stripped-down version. Per `VALIDATION.md`.
- **Miss (<10)** → refund every buyer via Stripe dashboard within 48h. Set `status: retired`. Write post-mortem.

## Refund a single pre-order (any reason)

1. Stripe dashboard → payment → `Refund`.
2. No questions asked inside 30 days. This is part of the promise.

## Bump deadline (only if genuinely necessary)

Never bump the deadline to "give more time for the goal." That corrupts the validation signal. Only bump if something outside the launch (illness, outage) cost us days. Update `deadline` in frontmatter and post publicly about it.

## Monthly housekeeping

- Archive retired products: keep the URL but remove from the storefront listing (`status: retired` handles this).
- Update `docs/NICHES.md` with learnings from the last cycle.
- Delete Stripe Payment Links for retired products so nobody stumbles into buying a dead product.
