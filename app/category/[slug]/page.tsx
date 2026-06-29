import { categoryMeta } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import CategoryPageClient from './CategoryPageClient';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = categoryMeta[slug];
  if (!meta) notFound();
  return <CategoryPageClient slug={slug} meta={meta} />;
}
