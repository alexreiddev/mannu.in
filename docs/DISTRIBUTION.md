# Organic Distribution — No Paid Ads

The mannu.in model only works if every launch is organic. This is the complete playbook. Do every step in order for each new product.

## Per-product launch checklist (one pass, one day)

### 1. Prep (30 minutes before posting)

- [ ] Create the Stripe Payment Link in test mode first. Verify `/thanks` redirect works.
- [ ] Switch to live mode, paste live Payment Link URL into the product's frontmatter, push, redeploy.
- [ ] Generate the OG image (1200×630) at `public/og/<slug>.png`. Must include: title, price, "Pre-order", and the goal bar.
- [ ] Generate the free sample PDF and drop it at `public/samples/<slug>-preview.pdf`. Must include "Made by mannu.in" footer with a link back.
- [ ] Dry-run `pnpm build && pnpm preview`. Click every CTA, download the sample, verify the Stripe link opens.

### 2. Primary launch posts (post over 24 hours, not all at once)

- [ ] **Indie Hackers** — one `Launching` post. Template: problem → evidence this is a real pain → what we're building → pre-order goal + refund promise → link. Reply to every comment within 2 hours for the first 12 hours.
- [ ] **Product Hunt Ship** — register as a pre-launch. Attach the free sample PDF as a resource.
- [ ] **Primary subreddit** — post from the product's `organicChannels` list in frontmatter. Lead with the problem, not the product. Include the free sample link in the body, put the pre-order link in the first comment so the post doesn't read as an ad.
- [ ] **X thread** — 5–7 tweet thread. Hook tweet = the exact pain quote from a Reddit / HN thread. Final tweet = "If this is worth $X to you, pre-order and I'll build it." Pin for 7 days.
- [ ] **LinkedIn post** (recruiter and agency products only) — one carousel summarising the sample PDF.
- [ ] **Hacker News Show HN** — only if we can attach a running demo (use the free sample). Do not resubmit if it flops; try once.

### 3. Engagement loop (daily, 14 days)

- [ ] Reply in the original IH / subreddit / X thread any time the pre-order counter moves.
- [ ] Every 48 hours, post a progress update ("18 of 25 pre-orders, 9 days left") in the original threads.
- [ ] DM (not cold; only people who already replied positively) the free sample PDF. Never attach the Stripe link unprompted.

## Mechanically organic features of the site

- **Free sample PDF** per product is a linkable, shareable asset that earns backlinks on its own.
- **Public pre-order counter** ticks upward visibly. Screenshots of the bar are shareable on X / LinkedIn.
- **Referral hook** — buyer gets $10 off per friend who pre-orders through their UTM'd share link (`ShareStrip` handles the URL, Stripe metadata tracks the refund).
- **Transparent refund promise** on every page — trust earns shares on its own.
- **Retrospective posts** after retired products do better than launch posts. The "I tried, it flopped, here's the data" format is exceptional on IH and X.

## Never do

- Pay for ads (Meta, LinkedIn, Google, X, Reddit, newsletter sponsorships). The point is to prove organic demand.
- Buy followers, buy email lists, buy "growth" services.
- Hire an agency to "help with launch."
- Cross-promote between products on the same day. Each product gets its own clean launch window.

## Success criteria for the distribution strategy itself

After the first three product launches, we should see:

- At least one product funded (25 pre-orders) entirely organically.
- At least one retired product with a retrospective post that itself earns more traffic than the launch.
- An audience on X / IH / LinkedIn that recognises the "pre-order or refund" pattern and follows for the next launch. This is the compounding asset; the products are just the vehicle.
