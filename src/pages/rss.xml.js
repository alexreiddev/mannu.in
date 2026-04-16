import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const products = await getCollection('products');
  return rss({
    title: 'mannu.in — validated digital assets',
    description:
      'Pre-order digital playbooks, prompt packs and automation bundles. Full refund if the goal misses.',
    site: context.site,
    items: products
      .filter((p) => p.data.status !== 'retired')
      .sort((a, b) => a.data.order - b.data.order)
      .map((p) => ({
        title: p.data.title,
        description: p.data.tagline,
        pubDate: p.data.launchedAt,
        link: `/p/${p.id}`,
      })),
  });
}
