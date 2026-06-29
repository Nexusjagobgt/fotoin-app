'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const photos = [
  { id: 1, url: 'https://images.unsplash.com/photo-1565120130276-05b94d46be21?w=300&h=300&fit=crop', price: 'Rp 25.000' },
  { id: 2, url: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=300&h=300&fit=crop', price: 'Rp 25.000' },
  { id: 3, url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300&h=300&fit=crop', price: 'Rp 25.000' },
  { id: 4, url: 'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=300&h=300&fit=crop', price: 'Rp 25.000' },
  { id: 5, url: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=300&h=300&fit=crop', price: 'Rp 25.000' },
  { id: 6, url: 'https://images.unsplash.com/photo-1530143584546-02191bc84eb5?w=300&h=300&fit=crop', price: 'Rp 25.000' },
];

export default function PhotoResultsPage() {
  const [selected, setSelected] = useState<Set<number>>(new Set([1, 2, 4]));
  const [showQris, setShowQris] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const router = useRouter();

  const toggle = (id: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const totalPrice = selected.size * 25000;

  return (
    <div className="flex min-h-svh flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
        <Link href="/sports" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div>
          <div className="text-sm font-bold text-gray-900">23 foto ditemukan 🎉</div>
          <div className="text-xs text-gray-400">Surabaya Marathon 2026</div>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-300 bg-violet-50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1" stroke="#7C3AED" strokeWidth="2" /><rect x="13" y="3" width="8" height="8" rx="1" stroke="#7C3AED" strokeWidth="2" /><rect x="3" y="13" width="8" height="8" rx="1" stroke="#7C3AED" strokeWidth="2" /><rect x="13" y="13" width="8" height="8" rx="1" stroke="#7C3AED" strokeWidth="2" /></svg>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#374151" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
      </div>

      {/* Purchase success banner */}
      {purchased && (
        <div className="mx-3 mt-2 flex items-center gap-3 rounded-2xl px-4 py-3" style={{ backgroundColor: '#DCFCE7', border: '1px solid #86EFAC' }}>
          <span className="text-lg">✅</span>
          <div className="flex-1">
            <div className="text-xs font-semibold text-green-800">Foto tersimpan di Foto Saya!</div>
          </div>
          <Link href="/my-photos" className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white" style={{ backgroundColor: '#16A34A' }}>
            Lihat →
          </Link>
        </div>
      )}

      {/* Photo grid */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="grid grid-cols-2 gap-1 p-1">
          {photos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => toggle(photo.id)}
              className="relative overflow-hidden rounded-xl"
              style={{ aspectRatio: '1' }}
            >
              <div
                className="h-full w-full"
                style={{ backgroundImage: `url(${photo.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/30 text-xs font-bold rotate-[-30deg] text-center leading-tight" style={{ fontSize: '11px', letterSpacing: '2px' }}>FOTOIN PREV</span>
              </div>
              {/* Price */}
              <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                <span className="text-xs font-bold text-white">{photo.price}</span>
              </div>
              {/* Selection */}
              {selected.has(photo.id) && (
                <>
                  <div className="absolute inset-0 border-2 border-violet-500 rounded-xl pointer-events-none" />
                  <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-violet-600 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </>
              )}
              {!selected.has(photo.id) && (
                <div className="absolute top-2 right-2 h-6 w-6 rounded-full border-2 border-white/70 bg-white/10" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Purchase bar */}
      {selected.size > 0 && (
        <div className="fixed bottom-0 left-1/2 w-full max-w-[390px] -translate-x-1/2 flex items-center justify-between bg-white border-t border-gray-100 px-4 py-4 shadow-lg">
          <div>
            <span className="text-sm font-semibold text-gray-900">{selected.size} foto dipilih</span>
            <span className="text-sm font-bold ml-2" style={{ color: '#7C3AED' }}>Rp {totalPrice.toLocaleString('id-ID')}</span>
          </div>
          <button
            onClick={() => setShowQris(true)}
            className="rounded-xl px-5 py-3 text-sm font-bold text-white"
            style={{ backgroundColor: '#7C3AED' }}
          >
            Beli Sekarang →
          </button>
        </div>
      )}

      {/* QRIS Modal Overlay */}
      {showQris && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowQris(false); }}
        >
          <div className="w-full max-w-[390px] rounded-t-[24px] bg-white px-5 pt-5 pb-8">
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-gray-200" />
            <h2 className="text-[17px] font-bold text-center text-gray-900 mb-1">Scan untuk Bayar</h2>
            <p className="text-xs text-center text-gray-400 mb-4">Scan dengan aplikasi pembayaran kamu</p>

            {/* QR Code */}
            <div className="mx-auto mb-4 w-44 h-44 rounded-2xl border border-gray-100 bg-white flex items-center justify-center p-3">
              <svg width="148" height="148" viewBox="0 0 160 160" fill="none">
                <rect x="0" y="0" width="60" height="60" rx="6" fill="#111827" />
                <rect x="8" y="8" width="44" height="44" rx="4" fill="white" />
                <rect x="16" y="16" width="28" height="28" rx="2" fill="#111827" />
                <rect x="100" y="0" width="60" height="60" rx="6" fill="#111827" />
                <rect x="108" y="8" width="44" height="44" rx="4" fill="white" />
                <rect x="116" y="16" width="28" height="28" rx="2" fill="#111827" />
                <rect x="0" y="100" width="60" height="60" rx="6" fill="#111827" />
                <rect x="8" y="108" width="44" height="44" rx="4" fill="white" />
                <rect x="16" y="116" width="28" height="28" rx="2" fill="#111827" />
                <rect x="68" y="68" width="24" height="24" rx="4" fill="#7C3AED" />
                <text x="68" y="86" fontSize="16" fontWeight="bold" fill="white" fontFamily="sans-serif">F</text>
                <rect x="80" y="0" width="8" height="56" rx="2" fill="#111827" opacity="0.4" />
                <rect x="0" y="80" width="56" height="8" rx="2" fill="#111827" opacity="0.4" />
                <rect x="100" y="80" width="60" height="8" rx="2" fill="#111827" opacity="0.4" />
                <rect x="80" y="100" width="8" height="60" rx="2" fill="#111827" opacity="0.4" />
              </svg>
            </div>

            {/* Timer */}
            <div className="flex justify-center mb-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5">
                <span className="text-xs">⏰</span>
                <span className="text-xs font-semibold text-amber-700">QR berlaku: 14:32</span>
              </div>
            </div>

            {/* Amount */}
            <div className="text-center mb-4">
              <div className="text-2xl font-extrabold" style={{ color: '#7C3AED' }}>
                Rp {totalPrice.toLocaleString('id-ID')}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">{selected.size} foto dipilih</div>
            </div>

            {/* E-wallet logos */}
            <div className="flex justify-center gap-4 mb-5">
              {[
                { name: 'GoPay', color: '#00AED6', abbr: 'GP' },
                { name: 'OVO', color: '#4C3494', abbr: 'OVO' },
                { name: 'Dana', color: '#118EEA', abbr: 'DN' },
                { name: 'ShopeePay', color: '#EE4D2D', abbr: 'SP' },
              ].map((w) => (
                <div key={w.name} className="flex flex-col items-center gap-1">
                  <div className="h-9 w-9 rounded-full flex items-center justify-center" style={{ backgroundColor: w.color }}>
                    <span className="text-[9px] font-bold text-white">{w.abbr}</span>
                  </div>
                  <span className="text-[9px] text-gray-400">{w.name}</span>
                </div>
              ))}
            </div>

            {/* Sudah Bayar */}
            <button
              onClick={() => { setPurchased(true); setShowQris(false); }}
              className="w-full rounded-xl py-3.5 text-base font-semibold text-white mb-3"
              style={{ backgroundColor: '#16A34A' }}
            >
              ✅ Sudah Bayar
            </button>

            {/* Batal */}
            <button
              onClick={() => setShowQris(false)}
              className="w-full text-sm text-gray-400 underline"
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
