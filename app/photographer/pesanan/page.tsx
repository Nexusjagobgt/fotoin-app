'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BottomNav from '@/components/BottomNav';

const mockBookings = [
  // BARU
  { id: '1', tab: 'Baru', name: 'Christian', service: 'Wedding Photography', date: '15 April 2026', time: '09:00', location: 'Universitas Petra', duration: '5 jam', price: 'Rp2.000.000', status: 'Menunggu Konfirmasi', avatar: 'https://i.pravatar.cc/150?img=33' },
  { id: '2', tab: 'Baru', name: 'Maya Kusuma', service: 'Graduation Photography', date: '18 April 2026', time: '10:00', location: 'Universitas Ciputra', duration: '2 jam', price: 'Rp700.000', status: 'Menunggu Konfirmasi', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: '3', tab: 'Baru', name: 'Dito P.', service: 'Product Photography', date: '22 April 2026', time: '13:00', location: 'Studio TBD', duration: '3 jam', price: 'Rp1.050.000', status: 'Menunggu Konfirmasi', avatar: 'https://i.pravatar.cc/150?img=15' },
  // AKTIF
  { id: '4', tab: 'Aktif', name: 'Siska', service: 'Pre-Wedding', date: '10 April 2026', time: '08:00', location: 'Kebun Raya', duration: '4 jam', price: 'Rp1.500.000', status: 'Terkonfirmasi', avatar: 'https://i.pravatar.cc/150?img=20' },
  { id: '5', tab: 'Aktif', name: 'Rendra', service: 'Corporate Event', date: '12 April 2026', time: '09:00', location: 'Hotel Majapahit', duration: '8 jam', price: 'Rp3.200.000', status: 'Terkonfirmasi', avatar: 'https://i.pravatar.cc/150?img=11' },
  // SELESAI
  { id: '6', tab: 'Selesai', name: 'Sari Dewi', service: 'Sweet Seventeen', date: '5 April 2026', time: '18:00', location: 'Tunjungan Plaza', duration: '3 jam', price: 'Rp1.200.000', status: 'Selesai', rating: 5.0, avatar: 'https://i.pravatar.cc/150?img=25' },
  { id: '7', tab: 'Selesai', name: 'Andi', service: 'Family Portrait', date: '2 April 2026', time: '10:00', location: 'Studio', duration: '1 jam', price: 'Rp400.000', status: 'Selesai', rating: 4.8, avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: '8', tab: 'Selesai', name: 'Bunga', service: 'Graduation', date: '28 Mar 2026', time: '11:00', location: 'ITS', duration: '2 jam', price: 'Rp600.000', status: 'Selesai', rating: 5.0, avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: '9', tab: 'Selesai', name: 'Reza', service: 'Product', date: '25 Mar 2026', time: '13:00', location: 'Studio', duration: '4 jam', price: 'Rp1.000.000', status: 'Selesai', avatar: 'https://i.pravatar.cc/150?img=8' },
  // DIBATALKAN
  { id: '10', tab: 'Dibatalkan', name: 'Budi Santoso', service: 'Sports Photography', date: '20 April 2026', time: '07:00', location: 'Stadion Gelora', duration: '3 jam', price: 'Rp900.000', status: 'Dibatalkan', reason: 'Customer membatalkan booking', avatar: 'https://i.pravatar.cc/150?img=59' },
];

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

function PesananContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'Baru';
  const [activeTab, setActiveTab] = useState(initialTab);
  
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const [bookings, setBookings] = useState<any[]>(mockBookings);
  const [modalType, setModalType] = useState<null | 'terima' | 'tolak'>(null);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  const getCount = (tab: string) => bookings.filter(b => b.tab === tab).length;
  const filteredBookings = bookings.filter(b => b.tab === activeTab);

  const tabs = [
    { id: 'Baru', label: `Baru (${getCount('Baru')})` },
    { id: 'Aktif', label: `Aktif (${getCount('Aktif')})` },
    { id: 'Selesai', label: `Selesai` }, // Only show counts for actionable tabs if desired, but let's just do text
    { id: 'Dibatalkan', label: `Dibatalkan` },
  ];

  const handleAction = (type: 'terima' | 'tolak', booking: any) => {
    setSelectedBooking(booking);
    setModalType(type);
  };

  const confirmAction = () => {
    if (modalType === 'terima') {
      setBookings(prev => prev.map(b => b.id === selectedBooking.id ? { ...b, tab: 'Aktif', status: 'Terkonfirmasi' } : b));
    } else if (modalType === 'tolak') {
      setBookings(prev => prev.map(b => b.id === selectedBooking.id ? { ...b, tab: 'Dibatalkan', status: 'Dibatalkan', reason: 'Ditolak fotografer' } : b));
    }
    setModalType(null);
    setSelectedBooking(null);
  };

  return (
    <div className="flex h-svh flex-col bg-gray-50 relative">
      {/* Header */}
      <div className="bg-white px-5 pt-4 pb-0 shrink-0 z-10 relative shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        {/* Compact Top Row */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-900">Pesanan</h1>
          <div className="flex items-center gap-3">
            <button className="relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <div className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white" />
            </button>
            <Link href="/photographer/profil" className="inline-flex items-center rounded-full bg-violet-50 px-2.5 py-1">
              <span className="text-[10px] font-bold text-violet-700">Fotografer</span>
            </Link>
            <Link href="/photographer/profil" className="h-8 w-8 rounded-full overflow-hidden shrink-0 bg-gray-100 relative ml-0.5">
              <Image src="https://i.pravatar.cc/150?img=11" alt="Avatar" fill className="object-cover" />
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div>

          <div className="flex">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-1 pb-3 pt-1 text-[13px] font-bold transition-colors text-center whitespace-nowrap"
                style={{
                  color: activeTab === tab.id ? '#7C3AED' : '#9CA3AF',
                  borderBottom: activeTab === tab.id ? '2px solid #7C3AED' : '2px solid transparent',
                }}
              >
                {tab.id === 'Baru' || tab.id === 'Aktif' ? `${tab.id} (${getCount(tab.id)})` : tab.id}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* List Area */}
      <div className="flex-1 overflow-y-auto px-5 py-4 pb-20">
        
        {filteredBookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full pt-10">
            <span className="text-4xl mb-3">📭</span>
            <h3 className="text-[15px] font-bold text-gray-900 mb-1">
              {activeTab === 'Baru' && 'Belum ada pesanan baru'}
              {activeTab === 'Aktif' && 'Belum ada pesanan aktif'}
              {activeTab === 'Selesai' && 'Belum ada pesanan selesai'}
              {activeTab === 'Dibatalkan' && 'Tidak ada pesanan dibatalkan'}
            </h3>
            <p className="text-[12px] text-gray-500 text-center max-w-[250px]">
              {activeTab === 'Baru' && 'Permintaan booking baru akan muncul di sini.'}
              {activeTab === 'Aktif' && 'Pesanan yang sedang berjalan akan muncul di sini.'}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredBookings.map(b => (
              <div key={b.id} className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] overflow-hidden">
                <Link href={`/photographer/pesanan/${b.id}`} className="block p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gray-100 relative shrink-0">
                        <Image src={b.avatar} alt={b.name} fill className="object-cover rounded-full" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[15px] text-gray-900 leading-tight">{b.name}</h3>
                        <p className="text-[11px] font-medium text-gray-500 mt-0.5">{b.service}</p>
                      </div>
                    </div>
                    {/* Status Badge */}
                    <div className={`px-2 py-1 rounded text-[9px] font-bold shrink-0 ${
                      b.status === 'Menunggu Konfirmasi' ? 'bg-amber-50 text-amber-700 border border-amber-100/50' :
                      b.status === 'Terkonfirmasi' ? 'bg-green-50 text-green-700 border border-green-100' :
                      b.status === 'Dibatalkan' ? 'bg-red-50 text-red-600 border border-red-100' :
                      'bg-gray-100 text-gray-600 border border-gray-200'
                    }`}>
                      {b.status}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-2 text-[12px] font-medium text-gray-600 mb-3">
                    <div className="flex items-center gap-1.5"><span className="text-gray-400">📅</span> {b.date} · {b.time}</div>
                    <div className="flex items-center gap-1.5"><span className="text-gray-400">⏱</span> {b.duration}</div>
                    <div className="flex items-center gap-1.5 col-span-2 truncate"><span className="text-gray-400">📍</span> {b.location}</div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    <div className="text-[11px] text-gray-500 font-medium">Total Harga</div>
                    <div className="text-[15px] font-extrabold text-gray-900">{b.price}</div>
                  </div>
                  
                  {b.status === 'Selesai' && b.rating && (
                    <div className="mt-2 text-[11px] text-gray-500 font-bold flex items-center gap-1">
                      ⭐ Customer memberi {b.rating.toFixed(1)}
                    </div>
                  )}
                  {b.status === 'Dibatalkan' && b.reason && (
                    <div className="mt-2 text-[11px] text-red-500 font-medium">
                      Alasan: <span className="font-bold">{b.reason}</span>
                    </div>
                  )}
                </Link>

                {/* Actions */}
                {b.tab === 'Baru' && (
                  <div className="px-4 pb-4 flex gap-2">
                    <button onClick={() => handleAction('tolak', b)} className="flex-1 py-2.5 rounded-xl text-[12px] font-bold text-gray-600 bg-gray-50 hover:bg-red-50 hover:text-red-600 transition-colors">
                      Tolak
                    </button>
                    <Link href={`/photographer/pesanan/${b.id}`} className="flex-1 flex items-center justify-center py-2.5 rounded-xl text-[12px] font-bold text-violet-700 bg-white border border-violet-200 active:bg-violet-50 transition-colors">
                      Detail
                    </Link>
                    <button onClick={() => handleAction('terima', b)} className="flex-1 py-2.5 rounded-xl text-[12px] font-bold text-white bg-violet-600 active:bg-violet-700 transition-colors shadow-sm">
                      Terima
                    </button>
                  </div>
                )}
                {b.tab === 'Aktif' && (
                  <div className="px-4 pb-4 flex gap-2">
                    <Link href={`/photographer/konsultasi/${b.id}?from=pesanan-aktif`} className="flex-1 flex items-center justify-center py-2.5 rounded-xl text-[12px] font-bold text-violet-700 bg-violet-50 active:bg-violet-100 transition-colors">
                      Chat Customer
                    </Link>
                    <Link href={`/photographer/pesanan/${b.id}`} className="flex-1 flex items-center justify-center py-2.5 rounded-xl text-[12px] font-bold text-gray-700 bg-white border border-gray-200 active:bg-gray-50 transition-colors">
                      Lihat Detail
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Confirmation Modals */}
      {modalType && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-5">
          <div className="bg-white rounded-2xl w-full max-w-sm p-5 shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {modalType === 'terima' ? 'Terima pesanan ini?' : 'Tolak pesanan?'}
            </h3>
            
            <div className="bg-gray-50 rounded-xl p-3 mb-5 border border-gray-100">
              <p className="font-bold text-[13px] text-gray-900">{selectedBooking?.name} · <span className="font-medium text-gray-500">{selectedBooking?.service}</span></p>
              <p className="text-[12px] text-gray-500 mt-1">{selectedBooking?.date} · {selectedBooking?.time}</p>
              <p className="text-[14px] font-extrabold text-gray-900 mt-2">{selectedBooking?.price}</p>
            </div>

            {modalType === 'tolak' && (
              <div className="mb-5">
                <label className="text-[11px] font-bold text-gray-500 block mb-2">Pilih alasan penolakan</label>
                <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-[13px] font-medium text-gray-700 outline-none">
                  <option>Jadwal tidak tersedia</option>
                  <option>Lokasi di luar area layanan</option>
                  <option>Tidak sesuai layanan</option>
                  <option>Lainnya</option>
                </select>
              </div>
            )}

            <div className="flex gap-2">
              <button onClick={() => setModalType(null)} className="flex-1 py-3 rounded-xl text-[13px] font-bold text-gray-600 bg-gray-100 active:bg-gray-200 transition-colors">
                Batal
              </button>
              <button 
                onClick={confirmAction} 
                className={`flex-1 py-3 rounded-xl text-[13px] font-bold text-white shadow-sm transition-colors ${
                  modalType === 'terima' ? 'bg-violet-600 active:bg-violet-700' : 'bg-red-500 active:bg-red-600'
                }`}
              >
                {modalType === 'terima' ? 'Terima Pesanan' : 'Tolak Pesanan'}
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav mode="photographer" />
    </div>
  );
}

export default function PesananPage() {
  return (
    <Suspense fallback={<div className="flex h-svh items-center justify-center bg-gray-50"><div className="h-8 w-8 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600"></div></div>}>
      <PesananContent />
    </Suspense>
  );
}
