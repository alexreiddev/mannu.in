import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    buyer: z.string(),
    priceUsd: z.number().positive(),
    stripePaymentLinkUrl: z.string().url(),
    samplePath: z.string().optional(),
    ogImage: z.string().default('/og/default.png'),
    preorderGoal: z.number().int().positive(),
    preordersSoFar: z.number().int().nonnegative().default(0),
    launchedAt: z.coerce.date(),
    deadline: z.coerce.date(),
    status: z.enum(['smoke-test', 'building', 'shipped', 'retired']),
    bullets: z.array(z.string()).min(3),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(1),
    organicChannels: z.array(z.string()).min(1),
    keyword: z.string(),
    order: z.number().int().default(0),
  }),
});

export const collections = { products };
