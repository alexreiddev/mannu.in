# Validation Rules

A product page on mannu.in is a smoke test until proven otherwise. This document defines what counts as validated and what we do in every outcome.

## Default smoke-test threshold

**25 paid pre-orders within 14 days** of the first public share.

- Full price is charged at pre-order (not a deposit). Real money is the validation signal; email waitlists are not.
- The clock starts on `launchedAt` in the product's markdown frontmatter.
- The deadline is `deadline` in frontmatter.

## Outcomes

### Green: goal hit by deadline

1. Set `status: building` in the product frontmatter.
2. Deliver the full asset to every pre-order by email within 21 days of the deadline.
3. On delivery day: set `status: shipped` and raise the price by 20–40% for the post-launch version.

### Amber: 10–24 pre-orders by deadline

1. Email every buyer within 48 hours of the deadline with two options:
   - **Refund in full**, no questions.
   - **Stripped-down version** (single PDF, no Notion workspace, no runbooks) delivered within 21 days.
2. Update the product page publicly with which option buyers took. Transparency itself earns share credit.

### Red: fewer than 10 pre-orders by deadline

1. Refund every pre-order via Stripe dashboard within 48 hours of the deadline.
2. Set `status: retired`. The page is removed from the storefront listing but the URL stays up with a short retrospective.
3. Write a 200-word post-mortem in `docs/POST-MORTEMS/<slug>.md`: what the page promised, what the market said, what we learned.

## Why these numbers

- 25 pre-orders × $79 = ~$2k revenue floor. That's enough signal that this isn't a one-off buyer, and enough budget that we can spend 40–60 hours building without regret.
- 14 days is long enough for one weekend launch + one mid-week follow-up post, short enough that we don't drift into endless validation.
- Refund within 48 hours is tight enough to be trustworthy and short enough to protect our sanity.

## What we do NOT count as validation

- Email signups to a waitlist. Free interest is not interest.
- Upvotes on ProductHunt / Indie Hackers.
- Twitter likes and follower DMs saying "I'd buy this."

Only paid pre-orders count.
