'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const terms = [
  'Saya memahami bahwa pembatalan kurang dari 24 jam hanya mendapatkan pengembalian dana sebesar 50%',
  'Saya setuju untuk tidak meminta layanan di luar lingkup yang telah disepakati dalam konsultasi',
  'Saya memahami bahwa biaya overtime dapat dikenakan apabila sesi melebihi durasi yang disepakati',
  'Saya setuju untuk memberikan informasi event yang akurat kepada fotografer',
  'Saya memahami bahwa pembayaran akan ditahan oleh platform dan diteruskan ke fotografer setelah sesi selesai dikonfirmasi oleh customer',
  'Saya menyetujui Syarat & Ketentuan dan Kebijakan Privasi FOTOIN',
];

export default function TermsPage() {
  const [checked, setChecked] = useState<boolean[]>(new Array(terms.length).fill(false));
  const router = useRouter();
  const allChecked = checked.every(Boolean);

  const toggle = (i: number) => {
    setChecked((prev) => prev.map((v, idx) => idx === i ? !v : v));
  };

  return (
    <div className="flex min-h-svh flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
        <Link href="/booking/confirm" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <span className="text-base font-bold text-gray-900">Syarat & Ketentuan</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Booking summary card */}
        <div className="mb-4 flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-violet-100">
            <span className="text-lg">👤</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-gray-900">Rizki Pratama</span>
              <span className="text-xs text-green-500">✅</span>
            </div>
            <div className="text-xs text-gray-500">Wedding Photography — Paket Standard</div>
            <div className="text-xs text-gray-500">Sabtu, 15 April 2026</div>
          </div>
          <div>
            <div className="text-sm font-bold text-violet-600">Rp 1.485.000</div>
            <div className="text-[10px] text-gray-400 text-right">total</div>
          </div>
        </div>

        <p className="mb-4 text-xs text-gray-500">Centang semua persetujuan sebelum melanjutkan:</p>

        <div className="flex flex-col gap-3">
          {terms.map((term, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 text-left transition-colors"
              style={{ borderColor: checked[i] ? '#7C3AED' : '#F3F4F6', backgroundColor: checked[i] ? '#F5F3FF' : '#F9FAFB' }}
            >
              <div
                className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-md border-2 flex items-center justify-center transition-colors"
                style={{ borderColor: checked[i] ? '#7C3AED' : '#D1D5DB', backgroundColor: checked[i] ? '#7C3AED' : 'transparent' }}
              >
                {checked[i] && (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-sm leading-snug text-gray-700">{term}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Progress + CTA */}
      <div className="border-t border-gray-100 bg-white px-4 pb-8 pt-3">
        <div className="mb-3 flex items-center justify-between text-xs">
          <span className="text-gray-500">Kemajuan persetujuan</span>
          <span className="font-semibold" style={{ color: '#7C3AED' }}>{checked.filter(Boolean).length} dari {terms.length} disetujui</span>
        </div>
        <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div className="h-full rounded-full bg-violet-600 transition-all" style={{ width: `${(checked.filter(Boolean).length / terms.length) * 100}%` }} />
        </div>
        <button
          onClick={() => allChecked && router.push('/booking/confirm')}
          className="w-full rounded-xl py-4 text-base font-semibold text-white transition-opacity"
          style={{ backgroundColor: allChecked ? '#7C3AED' : '#D1D5DB' }}
          disabled={!allChecked}
        >
          Lanjut ke Pembayaran
        </button>
        {!allChecked && <p className="mt-2 text-center text-xs text-gray-400">Centang semua persetujuan untuk melanjutkan</p>}
      </div>
    </div>
  );
}
