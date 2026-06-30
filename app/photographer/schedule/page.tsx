'use client';
import { useState } from 'react';
import Link from 'next/link';

const calDays = [
  [null, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, null, null, null, null],
];

const bookedDays = new Set([8, 15, 18, 22]);
const availableDays = new Set([5, 6, 12, 13, 19, 20, 25, 26, 27]);

export default function SchedulePage() {
  const [view, setView] = useState<'Bulan' | 'Minggu'>('Bulan');

  return (
    <div className="flex min-h-svh flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/photographer/home" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <span className="text-base font-bold text-gray-900">Jadwal Saya</span>
        </div>
        <div className="flex rounded-xl border border-gray-200 overflow-hidden">
          {(['Bulan', 'Minggu'] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="px-3 py-1.5 text-xs font-medium transition-colors"
              style={{ backgroundColor: view === v ? '#7C3AED' : 'white', color: view === v ? 'white' : '#374151' }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <button className="text-gray-400">‹</button>
          <span className="text-sm font-bold text-gray-900">April 2026</span>
          <button className="text-gray-400">›</button>
        </div>
        <div className="grid grid-cols-7 gap-0 text-center">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
            <div key={i} className="py-1 text-[11px] font-medium text-gray-400">{d}</div>
          ))}
          {calDays.flat().map((day, idx) => (
            <div key={idx} className="flex h-10 w-full items-center justify-center">
              {day && (
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: bookedDays.has(day) ? '#7C3AED' : day === 24 ? 'transparent' : 'transparent',
                    color: bookedDays.has(day) ? 'white' : day === 24 ? '#111827' : '#374151',
                    border: day === 24 ? '2px solid #7C3AED' : 'none',
                    fontWeight: bookedDays.has(day) ? 700 : 400,
                  }}
                >
                  <div className="relative">
                    {day}
                    {availableDays.has(day) && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-green-400" />
                    )}
                    {bookedDays.has(day) && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-violet-200" />
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-2 flex gap-4 text-[11px] text-gray-500">
          <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-green-400" />Tersedia</div>
          <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-violet-600" />Booked</div>
          <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-gray-300" />Libur</div>
        </div>
      </div>

      {/* New booking request modal */}
      <div className="fixed bottom-0 left-1/2 w-full max-w-[390px] -translate-x-1/2 rounded-t-[24px] bg-white shadow-2xl p-5">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-gray-200" />
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-900">Permintaan Booking Baru!</span>
            <div className="inline-flex items-center rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-white">BARU</div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
            <span className="text-2xl">👤</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-gray-900">Maya Kusuma</div>
            <div className="text-xs text-gray-400">Customer baru · Rating belum ada</div>
          </div>
          <div className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">Terverifikasi</div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          {[
            { icon: '📋', label: 'Layanan', val: 'Wedding Photography — Paket Standard' },
            { icon: '📅', label: 'Tanggal & Waktu', val: 'Sabtu, 2 Mei 2026 · 08:00–12:00 WIB' },
            { icon: '📍', label: 'Lokasi', val: 'The Trans Luxury Hotel, Bandung' },
          ].map(({ icon, label, val }) => (
            <div key={label} className="flex items-start gap-2 text-sm">
              <span>{icon}</span>
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">{label}</div>
                <div className="text-sm text-gray-800">{val}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4 flex items-center justify-between rounded-xl bg-green-50 px-4 py-3">
          <span className="text-xs text-green-700">Kamu akan menerima</span>
          <span className="text-base font-extrabold text-green-700">Rp 1.215.000</span>
        </div>
        <div className="text-center text-[10px] text-gray-400 mb-4">Setelah platform fee 10% (–Rp 135.000) dari Rp 1.350.000</div>

        <div className="flex gap-3">
          <button className="flex-1 rounded-xl border border-red-300 py-3 text-sm font-semibold text-red-600 hover:bg-red-50">
            ✗ Tolak Booking
          </button>
          <button className="flex-1 rounded-xl py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600">
            ✓ Terima Booking
          </button>
        </div>
      </div>
    </div>
  );
}
