'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const aspects = ['Komunikasi', 'Ketepatan Waktu', 'Kualitas Foto', 'Profesionalisme'];

export default function ReviewPage() {
  const [mainRating, setMainRating] = useState(4);
  const [aspectRatings, setAspectRatings] = useState([5, 4, 5, 5]);
  const [review, setReview] = useState('Sangat puas dengan hasil foto dari Rizki! Angle-nya kreatif dan hasilnya melebihi ekspektasi. Pasti akan booking lagi!');
  const [consent, setConsent] = useState(true);
  const router = useRouter();

  const ratingLabels = ['', 'Sangat Buruk', 'Buruk', 'Cukup', 'Sangat Baik', 'Luar Biasa'];

  return (
    <div className="flex min-h-svh flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
        <Link href="/bookings" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <span className="text-base font-bold text-gray-900">Beri Ulasan</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-24">
        {/* Photographer info */}
        <div className="mb-5 flex items-center gap-3 rounded-2xl bg-gray-50 px-4 py-3">
          <div className="h-12 w-12 rounded-full" style={{ backgroundImage: 'url(https://i.pravatar.cc/80?img=11)', backgroundSize: 'cover' }} />
          <div className="flex-1">
            <div className="text-sm font-bold text-gray-900">Rizki Pratama</div>
            <div className="text-xs text-gray-500">Wedding Photography · ⭐ 4.9</div>
          </div>
          <div className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">Selesai</div>
        </div>

        {/* Session badge */}
        <div className="mb-5 flex items-center gap-2 rounded-xl bg-violet-50 px-4 py-2.5">
          <span className="text-violet-500">📅</span>
          <span className="text-xs font-semibold text-violet-700">Wedding Photography · Sabtu, 15 April 2026</span>
        </div>

        {/* Main rating */}
        <div className="mb-5 text-center">
          <div className="mb-2 text-sm font-semibold text-gray-700">Bagaimana pengalaman sesimu?</div>
          <div className="flex justify-center gap-2 mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setMainRating(star)} className="text-3xl leading-none">
                {star <= mainRating ? '⭐' : '☆'}
              </button>
            ))}
          </div>
          <div className="text-sm font-semibold" style={{ color: '#F59E0B' }}>{ratingLabels[mainRating]}</div>
        </div>

        {/* Aspect ratings */}
        <div className="mb-5">
          <div className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-400">Rating Per Aspek</div>
          {aspects.map((aspect, i) => (
            <div key={aspect} className="mb-3 flex items-center justify-between">
              <span className="text-sm text-gray-700">{aspect}</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => {
                      const next = [...aspectRatings];
                      next[i] = star;
                      setAspectRatings(next);
                    }}
                    className="text-base"
                  >
                    {star <= aspectRatings[i] ? '⭐' : '☆'}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Text review */}
        <div className="mb-5">
          <div className="mb-2 text-sm font-semibold text-gray-900">Tulis ulasanmu</div>
          <div className="relative">
            <textarea
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-800 outline-none focus:border-violet-400 focus:bg-white resize-none"
              rows={4}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              maxLength={500}
            />
            <div className="mt-1 flex justify-between text-[10px] text-gray-400">
              <span>Bantu fotografer lain dan calon pelanggan</span>
              <span>{review.length}/500</span>
            </div>
          </div>
        </div>

        {/* Consent toggle */}
        <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4">
          <div className="flex-1 pr-3">
            <div className="text-sm font-semibold text-gray-900 mb-0.5">Izinkan foto digunakan di portofolio?</div>
            <div className="text-xs text-gray-400">Fotografer perlu persetujuanmu sebelum mempublikasikan foto</div>
          </div>
          <button
            onClick={() => setConsent(!consent)}
            className="relative h-7 w-12 flex-shrink-0 rounded-full transition-colors"
            style={{ backgroundColor: consent ? '#7C3AED' : '#E5E7EB' }}
          >
            <div
              className="absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform"
              style={{ transform: consent ? 'translateX(20px)' : 'translateX(2px)' }}
            />
          </button>
        </div>
      </div>

      {/* Submit */}
      <div className="fixed bottom-0 left-1/2 w-full max-w-[390px] -translate-x-1/2 bg-white px-4 pb-8 pt-3 border-t border-gray-100">
        <button
          onClick={() => router.push('/bookings')}
          className="w-full rounded-xl py-4 text-base font-semibold text-white"
          style={{ backgroundColor: '#7C3AED' }}
        >
          Kirim Ulasan
        </button>
      </div>
    </div>
  );
}
