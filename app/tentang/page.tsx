'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Tentang() {
  return (
    <div className="flex h-svh flex-col bg-gray-50">
      <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 flex items-center gap-3">
        <button onClick={() => window.history.back()} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 active:scale-95 transition-transform">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h1 className="text-xl font-bold text-gray-900">Tentang FOTOIN</h1>
      </div>
      <div className="flex-1 p-5 overflow-y-auto flex flex-col items-center justify-center pb-20">
        <div className="w-24 h-24 bg-violet-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-violet-200">
          <span className="text-white font-extrabold text-3xl">F</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">FOTOIN</h2>
        <p className="text-gray-500 font-medium mb-6">Versi 1.0.0</p>
        <p className="text-center text-sm text-gray-600 max-w-[280px] leading-relaxed">
          Platform terbaik untuk menemukan dan menyewa fotografer profesional di sekitarmu dengan mudah dan aman.
        </p>
      </div>
    </div>
  );
}