import { redirect } from 'next/navigation';
import { connectConfig } from '@/lib/mockData';
import ConnectCategoryClient from './ConnectCategoryClient';

export default async function ConnectCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const config = connectConfig[category];
  if (!config) redirect('/connect');
  return <ConnectCategoryClient category={category} config={config} />;
}
