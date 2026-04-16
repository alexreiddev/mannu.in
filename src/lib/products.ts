import { getCollection, type CollectionEntry } from 'astro:content';

export type Product = CollectionEntry<'products'>;

export async function getAllProducts(): Promise<Product[]> {
  const products = await getCollection('products');
  return products
    .filter((p) => p.data.status !== 'retired')
    .sort((a, b) => a.data.order - b.data.order);
}

export function daysUntil(date: Date): number {
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}

export function progressPct(soFar: number, goal: number): number {
  if (goal <= 0) return 0;
  return Math.min(100, Math.round((soFar / goal) * 100));
}

export function isFunded(soFar: number, goal: number): boolean {
  return soFar >= goal;
}
