export interface ShareTarget {
  name: string;
  href: string;
}

interface BuildShareLinksInput {
  productUrl: string;
  title: string;
  tagline: string;
  refCode?: string;
  subreddit?: string;
}

export function withUtm(url: string, source: string, refCode?: string): string {
  const u = new URL(url);
  u.searchParams.set('utm_source', source);
  u.searchParams.set('utm_medium', 'share');
  u.searchParams.set('utm_campaign', 'preorder');
  if (refCode) u.searchParams.set('ref', refCode);
  return u.toString();
}

export function buildShareLinks({
  productUrl,
  title,
  tagline,
  refCode,
  subreddit,
}: BuildShareLinksInput): ShareTarget[] {
  const twitterUrl = withUtm(productUrl, 'twitter', refCode);
  const linkedInUrl = withUtm(productUrl, 'linkedin', refCode);
  const hnUrl = withUtm(productUrl, 'hn', refCode);
  const redditUrl = withUtm(productUrl, 'reddit', refCode);
  const copyText = `${title} - ${tagline}`;

  const targets: ShareTarget[] = [
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(copyText)}&url=${encodeURIComponent(twitterUrl)}`,
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(linkedInUrl)}`,
    },
    {
      name: 'Hacker News',
      href: `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(hnUrl)}&t=${encodeURIComponent(title)}`,
    },
  ];

  if (subreddit) {
    targets.push({
      name: `r/${subreddit}`,
      href: `https://www.reddit.com/r/${subreddit}/submit?url=${encodeURIComponent(redditUrl)}&title=${encodeURIComponent(title)}`,
    });
  }

  return targets;
}
