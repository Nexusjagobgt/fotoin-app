'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

const events = [
  { id: 'marathon-2026', name: 'Surabaya City Marathon 2026', date: '15 Mar', location: 'Surabaya', photos: '3.847', price: 'Rp25.000', img: 'https://picsum.photos/seed/marathon/800/400', uploaded: 48, joined: true },
  { id: 'cycling-2026', name: 'Gran Fondo Surabaya', date: '22 Feb', location: 'Surabaya', photos: '1.203', price: 'Rp25.000', img: 'https://picsum.photos/seed/cycling/800/400', uploaded: 23, joined: true },
  { id: 'campus-fun-run', name: 'Campus Fun Run Petra', date: '2 Mar', location: 'Surabaya', photos: '934', price: 'Rp20.000', img: 'https://picsum.photos/seed/running/800/400', uploaded: 12, joined: false },
  { id: 'night-run', name: 'Surabaya Night Run', date: '8 Feb', location: 'Surabaya', photos: '2.156', price: 'Rp20.000', img: 'https://picsum.photos/seed/nightrun/800/400', uploaded: 35, joined: false },
];

export default function PhotographerSportsPage() {
  const [eventList, setEventList] = useState(() => {
    if (typeof window === 'undefined') return events;
    try {
      const value = JSON.parse(window.localStorage.getItem('fotoin-sports-upload-marathon-2026') ?? '{}') as { lastBatchCount?: number; price?: number };
      return events.map((event) => event.id === 'marathon-2026' ? {
        ...event,
        uploaded: event.uploaded + (value.lastBatchCount ?? 0),
        price: value.price ? `Rp${new Intl.NumberFormat('id-ID').format(value.price)}` : event.price,
      } : event);
    } catch {
      return events;
    }
  });

  const totalUploaded = eventList.reduce((total, event) => total + event.uploaded, 0);
  const joinEvent = (eventId: string) => setEventList((current) => current.map((event) => event.id === eventId ? { ...event, joined: true } : event));

  return (
    <div className="flex h-svh flex-col bg-[#FAFAFC]">
      <header className="shrink-0 border-b border-gray-100 bg-white px-4 pt-2.5 pb-3">
        <div className="flex items-center justify-between">
          <Link href="/photographer/dashboard"><Image src="/images/FOTOIN LOGO.png" alt="FOTOIN" width={100} height={26} priority className="object-contain" /></Link>
          <div className="flex items-center gap-3">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-50" aria-label="Notifikasi">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" stroke="#4B5563" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
            <Link href="/photographer/profil" className="relative h-9 w-9 overflow-hidden rounded-full bg-violet-50 ring-1 ring-violet-100"><Image src="https://i.pravatar.cc/150?img=11" alt="Profil Rizki" fill className="object-cover" /></Link>
          </div>
        </div>
        <div className="mt-3"><h1 className="text-[20px] font-bold tracking-tight text-gray-900">Upload Event Sports</h1><p className="mt-0.5 text-[12px] text-gray-500">Kelola dan ungggah foto ke event olahraga</p></div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto px-4 py-3 pb-5">
        <section className="rounded-2xl border border-violet-100 bg-violet-50/80 px-3.5 py-2.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-violet-700">Upload Sports Bulan Ini</div>
          <div className="mt-2 flex items-end gap-4">
            <div><div className="text-lg font-extrabold leading-none text-gray-900">{totalUploaded}</div><div className="mt-1 text-[10px] font-medium text-gray-500">foto diunggah</div></div>
            <div className="h-7 w-px bg-violet-200" />
            <div><div className="text-lg font-extrabold leading-none text-gray-900">4</div><div className="mt-1 text-[10px] font-medium text-gray-500">event aktif</div></div>
            <div className="ml-auto rounded-full bg-white/80 px-2 py-0.5 text-[9px] font-bold text-violet-700">+24 minggu ini</div>
          </div>
        </section>

        <div className="mt-4 mb-2 flex items-center justify-between"><h2 className="text-[15px] font-bold text-gray-900">Event Aktif</h2><span className="text-[10px] font-medium text-gray-400">Pilih event untuk unggah foto</span></div>
        <div className="flex flex-col gap-4 pb-6">
          {eventList.map((event) => (
            <article key={event.id} className="h-auto min-h-0 rounded-2xl border border-gray-100 bg-white p-3.5 shadow-[0_4px_14px_rgba(31,41,55,0.04)]">
              <div className="flex min-w-0 items-start gap-3">
                <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                  <Image src={event.img} alt={event.name} fill className="object-cover" sizes="112px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  <span className="absolute left-2 top-2 rounded-full bg-green-500 px-1.5 py-0.5 text-[8px] font-extrabold tracking-wide text-white">AKTIF</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-bold leading-snug text-gray-900">{event.name}</h3>
                  <div className="mt-1 flex items-center gap-1 text-[11px] font-medium text-gray-500"><span>{event.date}</span><span className="text-gray-300">·</span><span>{event.location}</span></div>
                  <div className="mt-2 text-[11px]"><span className="font-bold text-violet-700">{event.uploaded} foto kamu</span><span className="mx-1 text-gray-300">·</span><span className="font-medium text-gray-400">{event.photos} foto event</span></div>
                  <div className="mt-2 flex items-baseline gap-1"><span className="text-[11px] font-medium text-gray-500">Harga:</span><span className="text-[13px] font-bold text-gray-900">{event.price}</span><span className="text-[11px] font-medium text-gray-500">/foto</span></div>
                </div>
              </div>
              <div className="mt-3">
                {event.joined ? (
                  <div className="flex gap-2"><Link href={`/photographer/sports/${event.id}/upload`} className="flex-[0.8] rounded-xl border border-gray-200 py-2.5 text-center text-[11px] font-bold text-gray-700 active:bg-gray-50">Kelola Foto</Link><Link href={`/photographer/sports/${event.id}/upload`} className="flex-[1.4] rounded-xl bg-violet-600 py-2.5 text-center text-[12px] font-bold text-white shadow-sm transition-transform active:scale-[0.98]">{event.uploaded ? 'Upload Foto Lagi' : 'Upload Foto'}</Link></div>
                ) : (
                  <button onClick={() => joinEvent(event.id)} className="w-full rounded-xl border border-violet-200 bg-violet-50 py-2.5 text-[12px] font-bold text-violet-700 active:scale-[0.98]">Gabung Event</button>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>

      <BottomNav mode="photographer" />
    </div>
  );
}
