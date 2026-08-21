import { redirect } from 'next/navigation';

export default async function LegacyPhotographerProfilePage({ params }: PageProps<'/p/[id]'>) {
  const { id } = await params;
  redirect(`/photographer/${id}`);
}
