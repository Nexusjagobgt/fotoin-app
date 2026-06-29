'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function BookingConfirmPage() {
  const [showQris, setShowQris] = useState(false);
  const router = useRouter();

  return (
    <div className="flex min-h-svh flex-col bg-gray-100">
      {/* Header */}
      <div className="flex items-center gap-3 bg-white border-b border-gray-100 px-4 py-3">
        <Link href="/booking/terms" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <span className="text-base font-bold text-gray-900">Konfirmasi & Pembayaran</span>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-32">
        {/* Booking summary */}
        <div className="rounded-2xl bg-white p-4 mb-3">
          <div className="text-sm font-bold text-gray-900 mb-3">Ringkasan Booking</div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full" style={{ backgroundImage: 'url(https://i.pravatar.cc/80?img=11)', backgroundSize: 'cover' }} />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-gray-900">Rizki Pratama</span>
                <span className="text-xs">✅</span>
              </div>
              <div className="text-xs text-gray-500">Wedding Photography — Paket Standard</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {[
              { icon: '📅', text: 'Sabtu, 15 April 2026' },
              { icon: '⏰', text: '09:00 – 13:00 WIB (4 jam)' },
              { icon: '📍', text: 'Universitas Petra, Surabaya' },
              { icon: '📁', text: 'Google Drive (H+3 setelah sesi)' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-gray-600">
                <span>{icon}</span>
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price breakdown */}
        <div className="rounded-2xl bg-white p-4 mb-3">
          <div className="text-sm font-bold text-gray-900 mb-3">Rincian Harga</div>
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-gray-600">Paket Standard (4 jam)</span>
            <span className="font-medium text-gray-900">Rp 1.350.000</span>
          </div>
          <div className="flex justify-between text-sm text-gray-400 mb-3">
            <span>Platform fee (10%)</span>
            <span>Rp 135.000</span>
          </div>
          <div className="border-t border-gray-100 pt-3 flex justify-between">
            <span className="text-sm font-bold text-gray-900">Total</span>
            <span className="text-sm font-bold" style={{ color: '#7C3AED' }}>Rp 1.485.000</span>
          </div>
        </div>

        {/* Info card */}
        <div className="rounded-2xl bg-violet-50 border border-violet-100 px-4 py-3 flex items-start gap-3">
          <span className="text-violet-500 mt-0.5">🔒</span>
          <p className="text-xs text-violet-700 leading-relaxed">
            Pembayaran ditahan platform dan diteruskan ke fotografer setelah sesi selesai dikonfirmasi.
          </p>
        </div>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-1/2 w-full max-w-[390px] -translate-x-1/2 bg-white border-t border-gray-100 px-4 py-4">
        <button
          onClick={() => setShowQris(true)}
          className="w-full rounded-xl py-4 text-base font-semibold text-white"
          style={{ backgroundColor: '#7C3AED' }}
        >
          Bayar dengan QRIS
        </button>
      </div>

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
            <div className="mx-auto mb-4 w-48 h-48 rounded-2xl border border-gray-100 bg-white flex items-center justify-center p-3">
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
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
              <div className="text-2xl font-extrabold" style={{ color: '#7C3AED' }}>Rp 1.485.000</div>
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
              onClick={() => router.push('/booking/success')}
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
