'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function ProfileBackButton({ source, category }: { source?: string, category?: string }) {
  const router = useRouter();

  const goBack = () => {
    if (source === 'home') {
      router.push('/home');
    } else if (source === 'connect') {
      if (category) {
        router.push(`/connect/${category}`);
      } else {
        router.push('/connect');
      }
    } else if (source === 'messages') {
      router.push('/messages');
    } else {
      router.push('/home');
    }
  };

  return (
    <button type="button" onClick={goBack} aria-label="Kembali" className="flex items-center justify-center rounded-full bg-black/40 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/50 active:scale-95">
      <ArrowLeft className="h-5 w-5" />
    </button>
  );
}
