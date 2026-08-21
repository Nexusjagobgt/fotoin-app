'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const events: Record<string, { name: string; date: string; location: string; recommendedPrice: number }> = {
  'marathon-2026': { name: 'Surabaya City Marathon 2026', date: '15 Mar', location: 'Surabaya', recommendedPrice: 25000 },
  'cycling-2026': { name: 'Gran Fondo Surabaya', date: '22 Feb', location: 'Surabaya', recommendedPrice: 25000 },
  'campus-fun-run': { name: 'Campus Fun Run Petra', date: '2 Mar', location: 'Surabaya', recommendedPrice: 20000 },
  'night-run': { name: 'Surabaya Night Run', date: '8 Feb', location: 'Surabaya', recommendedPrice: 20000 },
};

type Phase = 'idle' | 'review' | 'publishing' | 'done';
const PREVIEW_LIMIT = 6;
const PUBLISH_TICKS = 40;
const formatPrice = (price: number) => `Rp${new Intl.NumberFormat('id-ID').format(price)}`;

function getSavedPrice(storageKey: string) {
  if (typeof window === 'undefined') return null;
  try {
    const value = JSON.parse(window.localStorage.getItem(storageKey) ?? '{}') as { price?: number };
    return value.price ?? null;
  } catch {
    return null;
  }
}

export default function UploadPage() {
  const params = useParams<{ eventId: string }>();
  const eventId = params?.eventId ?? '';
  const event = events[eventId] ?? { name: 'Event Olahraga', date: '—', location: '—', recommendedPrice: 25000 };
  const storageKey = `fotoin-sports-upload-${eventId}`;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewsRef = useRef<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [phase, setPhase] = useState<Phase>('idle');
  const [priceMode, setPriceMode] = useState<'recommended' | 'custom'>(() => getSavedPrice(storageKey) ? 'custom' : 'recommended');
  const [customPrice, setCustomPrice] = useState(() => String(getSavedPrice(storageKey) ?? event.recommendedPrice));
  const [savedPrice, setSavedPrice] = useState<number | null>(() => getSavedPrice(storageKey));
  const [progress, setProgress] = useState(0);

  const currentPrice = priceMode === 'recommended' ? event.recommendedPrice : Number(customPrice.replace(/\D/g, '')) || 0;
  const hasFiles = files.length > 0;
  const visiblePreviews = previews.slice(0, PREVIEW_LIMIT);
  const hiddenPreviewCount = Math.max(0, previews.length - PREVIEW_LIMIT);
  const publishedCount = Math.min(files.length, Math.round((progress / PUBLISH_TICKS) * files.length));

  useEffect(() => {
    previewsRef.current = previews;
  }, [previews]);
  useEffect(() => () => previewsRef.current.forEach((url) => URL.revokeObjectURL(url)), []);

  useEffect(() => {
    if (phase !== 'publishing') return;
    const interval = window.setInterval(() => {
      setProgress((current) => {
        const next = current + 1;
        if (next >= PUBLISH_TICKS) {
          window.clearInterval(interval);
          window.localStorage.setItem(storageKey, JSON.stringify({ price: currentPrice, lastBatchCount: files.length }));
          setSavedPrice(currentPrice);
          setPhase('done');
          return PUBLISH_TICKS;
        }
        return next;
      });
    }, 80);
    return () => window.clearInterval(interval);
  }, [phase, files.length, storageKey, currentPrice]);

  const handleFileChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(input.target.files ?? []);
    if (!selected.length) return;
    setFiles((current) => [...current, ...selected]);
    setPreviews((current) => [...current, ...selected.map((file) => URL.createObjectURL(file))]);
    input.target.value = '';
  };

  const removeFile = (index: number) => {
    URL.revokeObjectURL(previews[index]);
    setFiles((current) => current.filter((_, itemIndex) => itemIndex !== index));
    setPreviews((current) => current.filter((_, itemIndex) => itemIndex !== index));
  };

  const uploadAgain = () => {
    previews.forEach((url) => URL.revokeObjectURL(url));
    setFiles([]);
    setPreviews([]);
    setProgress(0);
    setPhase('idle');
  };

  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="flex shrink-0 items-center gap-3 border-b border-gray-100 bg-white px-4 py-3">
        <Link href="/photographer/sports" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform" aria-label="Kembali ke event olahraga">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m15 18-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
        <div><div className="text-[15px] font-bold text-gray-900">Upload Foto Event</div><div className="text-[11px] text-gray-400">Foto event tidak masuk ke portofolio publik</div></div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {phase === 'done' ? (
          <div className="flex h-full w-full flex-col items-center justify-center pb-12">
            <div className="flex w-full max-w-[420px] flex-col items-center text-center mx-auto">
              <div className="mb-6 flex h-[96px] w-[96px] shrink-0 items-center justify-center rounded-full bg-green-500 shadow-[0_8px_24px_rgba(34,197,94,0.3)] mx-auto">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="m5 12 5 5L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h1 className="w-full text-xl font-bold text-gray-900">Foto berhasil dipublikasikan</h1>
              <p className="mx-auto mt-2 w-full max-w-[320px] text-sm leading-relaxed text-gray-500">
                {files.length} foto telah ditambahkan ke {event.name}.
              </p>
              <div className="mx-auto mt-4 w-max rounded-full bg-violet-50 px-4 py-1.5 text-xs font-bold text-violet-700">
                Harga: {formatPrice(currentPrice)}/foto
              </div>
              <div className="mt-8 flex w-full justify-center gap-3">
                <button onClick={uploadAgain} className="flex-1 rounded-xl border border-gray-200 py-3.5 text-sm font-semibold text-gray-700 active:bg-gray-50">Upload Lagi</button>
                <Link href="/photographer/sports" className="flex-1 flex items-center justify-center rounded-xl bg-violet-600 py-3.5 text-sm font-semibold text-white active:scale-95 transition-transform">Kembali ke Event</Link>
              </div>
            </div>
          </div>
        ) : phase === 'publishing' ? (
          <div className="pt-12">
            <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border-[3px] border-violet-100 border-r-green-400 border-t-violet-600" />
            <h1 className="text-center text-lg font-bold text-gray-900">Mengunggah foto...</h1><p className="mt-1 text-center text-sm text-gray-500">{publishedCount} dari {files.length} foto</p>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-violet-100"><div className="h-full rounded-full bg-violet-600 transition-[width] duration-100" style={{ width: `${(progress / PUBLISH_TICKS) * 100}%` }} /></div>
            <div className="mt-5 flex items-center gap-2 rounded-xl border border-violet-100 bg-violet-50 px-3 py-3 text-xs leading-relaxed text-violet-700"><div className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />Memproses foto untuk pencarian AI (simulasi prototype).</div>
          </div>
        ) : phase === 'review' ? (
          <div><EventContext event={event} /><h1 className="mt-5 text-lg font-bold text-gray-900">Review Upload</h1><div className="mt-3 rounded-2xl border border-gray-100 bg-white p-4"><SummaryRow label="Event" value={event.name} /><SummaryRow label="Foto" value={`${files.length} foto`} /><SummaryRow label="Harga" value={`${formatPrice(currentPrice)}/foto`} /><div className="mt-3 flex items-center gap-2 border-t border-gray-100 pt-3 text-xs font-semibold text-green-700"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">✓</span>Siap dipublikasikan</div></div><p className="mt-3 text-xs leading-relaxed text-gray-500">Pendapatan bergantung pada jumlah foto yang berhasil terjual.</p><PreviewGrid previews={visiblePreviews} hiddenCount={hiddenPreviewCount} onRemove={removeFile} readOnly /></div>
        ) : (
          <div>
            <EventContext event={event} />
            <section className="mt-5"><h1 className="text-[16px] font-bold text-gray-900">Upload Foto</h1><p className="mt-1 text-xs text-gray-500">Pilih beberapa foto sekaligus untuk event ini.</p>
              {!hasFiles ? <button onClick={() => fileInputRef.current?.click()} className="mt-3 flex w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 bg-white py-9 active:scale-95 transition-transform"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="#6B21F5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div><div className="text-sm font-bold text-gray-800">Pilih Foto dari Galeri</div><div className="mt-0.5 text-xs text-gray-400">Bisa memilih banyak foto sekaligus</div></div><span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">0 foto dipilih</span></button> : <div className="mt-3"><div className="mb-3 flex items-center justify-between"><span className="text-sm font-bold text-gray-800">{files.length} foto dipilih</span><button onClick={() => fileInputRef.current?.click()} className="text-xs font-bold text-violet-600">+ Tambah foto</button></div><PreviewGrid previews={visiblePreviews} hiddenCount={hiddenPreviewCount} onRemove={removeFile} /></div>}
              <input ref={fileInputRef} type="file" multiple accept="image/*" onChange={handleFileChange} className="hidden" />
            </section>
            <section className="mt-5 rounded-2xl border border-gray-100 bg-white p-4"><h2 className="text-[15px] font-bold text-gray-900">Harga per Foto</h2><p className="mt-1 text-xs leading-relaxed text-gray-500">Harga ini berlaku untuk semua foto yang kamu unggah pada event ini.</p>{savedPrice && <div className="mt-3 rounded-xl bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700">Harga saat ini: {formatPrice(savedPrice)}/foto</div>}<button onClick={() => setPriceMode('recommended')} className={`mt-3 flex w-full items-center justify-between rounded-xl border px-3 py-3 text-left ${priceMode === 'recommended' ? 'border-violet-300 bg-violet-50' : 'border-gray-200'}`}><span><span className="block text-xs font-bold text-gray-900">Gunakan harga rekomendasi</span><span className="mt-0.5 block text-[11px] text-gray-500">Harga rekomendasi event</span></span><span className="text-xs font-bold text-violet-700">{formatPrice(event.recommendedPrice)}/foto</span></button><button onClick={() => setPriceMode('custom')} className={`mt-2 flex w-full items-center justify-between rounded-xl border px-3 py-3 text-left ${priceMode === 'custom' ? 'border-violet-300 bg-violet-50' : 'border-gray-200'}`}><span className="text-xs font-bold text-gray-900">Atur harga sendiri</span><span className="text-[11px] text-gray-500">Rp20.000–Rp35.000/foto</span></button>{priceMode === 'custom' && <input value={customPrice} onChange={(input) => setCustomPrice(input.target.value.replace(/\D/g, ''))} inputMode="numeric" placeholder="25000" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm font-bold text-gray-900 outline-none focus:border-violet-400" />}</section>
          </div>
        )}
      </div>

      {phase === 'idle' && <div className="shrink-0 border-t border-gray-100 bg-white px-4 py-3"><button onClick={() => setPhase('review')} disabled={!hasFiles || currentPrice <= 0} className="w-full rounded-xl bg-violet-600 py-3.5 text-sm font-bold text-white transition-transform active:scale-[0.98] disabled:opacity-40">Review Upload</button></div>}
      {phase === 'review' && <div className="shrink-0 border-t border-gray-100 bg-white px-4 py-3"><div className="flex gap-2"><button onClick={() => setPhase('idle')} className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-700">Kembali Edit</button><button onClick={() => { setProgress(0); setPhase('publishing'); }} className="flex-1 rounded-xl bg-violet-600 py-3 text-sm font-bold text-white active:scale-[0.98]">Publikasikan Foto</button></div></div>}
    </div>
  );
}

function EventContext({ event }: { event: { name: string; date: string; location: string } }) {
  return <div className="rounded-2xl border border-violet-100 bg-violet-50/70 px-4 py-3"><div className="text-[10px] font-extrabold uppercase tracking-widest text-violet-600">Event Pilihan</div><div className="mt-1 text-sm font-bold text-gray-900">{event.name}</div><div className="mt-0.5 text-xs text-gray-500">{event.date} · {event.location}</div></div>;
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return <div className="flex items-start justify-between gap-4 py-2 text-xs"><span className="text-gray-500">{label}</span><span className="text-right font-bold text-gray-900">{value}</span></div>;
}

function PreviewGrid({ previews, hiddenCount, onRemove, readOnly = false }: { previews: string[]; hiddenCount: number; onRemove: (index: number) => void; readOnly?: boolean }) {
  return <div className="mt-3 grid grid-cols-3 gap-2">{previews.map((src, index) => <div key={src} className="relative aspect-square overflow-hidden rounded-xl bg-gray-100"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />{!readOnly && <button onClick={() => onRemove(index)} className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-xs text-white" aria-label="Hapus foto">×</button>}</div>)}{hiddenCount > 0 && <div className="flex aspect-square items-center justify-center rounded-xl bg-gray-900 text-center text-xs font-bold text-white">+{hiddenCount}<br />lainnya</div>}</div>;
}
