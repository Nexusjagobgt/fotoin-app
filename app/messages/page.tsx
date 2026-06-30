import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

const conversations = [
  { id: 'rizki', name: 'Rizki Pratama', avatar: 'https://i.pravatar.cc/80?img=11', lastMsg: 'Siap! Saya konfirmasi untuk tanggal 15 April ya', time: '09:45', tag: 'Diskusi sesi 15 April', tagColor: '#EDE9FE', tagText: '#7C3AED', unread: 2, online: true },
  { id: 'sari', name: 'Sari Dewi', avatar: 'https://i.pravatar.cc/80?img=5', lastMsg: 'Terima kasih sudah booking, hasil edit selesai!', time: 'Kemarin', tag: 'Sesi selesai ✓', tagColor: '#DCFCE7', tagText: '#16A34A', unread: 0, online: false },
  { id: 'budi', name: 'Budi Santoso', avatar: 'https://i.pravatar.cc/80?img=14', lastMsg: 'Oke, sudah saya cek lokasinya 🔥', time: 'Sen', tag: 'Sports event 20 April', tagColor: '#FEF3C7', tagText: '#92400E', unread: 0, online: true },
  { id: 'maya', name: 'Maya Kusuma', avatar: null, initials: 'M', color: '#F59E0B', lastMsg: 'Saya minat untuk paket wedding, bisa diskusi?', time: 'Minggu', tag: '', unread: 0, online: false },
  { id: 'fajar', name: 'Fajar Nugraha', avatar: null, initials: 'F', color: '#8B5CF6', lastMsg: 'Foto produk sudah dikirim via Drive ya kak!', time: '4 hari', tag: '', unread: 0, online: false },
];

export default function MessagesPage() {
  return (
    <div className="flex h-svh flex-col bg-white">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-900">9:41</span>
        <div className="flex items-center gap-1">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect x="0" y="4" width="3" height="8" rx="0.5" fill="#111827" />
            <rect x="4.5" y="2.5" width="3" height="9.5" rx="0.5" fill="#111827" />
            <rect x="9" y="1" width="3" height="11" rx="0.5" fill="#111827" />
            <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" fill="#111827" />
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
            <path d="M7.5 2.5C9.5 2.5 11.3 3.3 12.6 4.6L13.8 3.4C12.2 1.8 9.96 0.8 7.5 0.8C5.04 0.8 2.8 1.8 1.2 3.4L2.4 4.6C3.7 3.3 5.5 2.5 7.5 2.5Z" fill="#111827" />
            <path d="M7.5 5.5C8.7 5.5 9.8 6 10.6 6.8L11.8 5.6C10.7 4.5 9.18 3.8 7.5 3.8C5.82 3.8 4.3 4.5 3.2 5.6L4.4 6.8C5.2 6 6.3 5.5 7.5 5.5Z" fill="#111827" />
            <circle cx="7.5" cy="9.5" r="1.5" fill="#111827" />
          </svg>
          <div className="flex items-center rounded-sm border border-gray-300 px-0.5">
            <div className="h-2.5 w-5 rounded-sm bg-gray-900" />
            <div className="h-1.5 w-0.5 rounded-r-sm bg-gray-400" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 pb-3 pt-1">
        <h1 className="text-[22px] font-bold text-gray-900">Pesan</h1>
        <div className="mt-2 flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#9CA3AF" strokeWidth="2" />
            <path d="M20 20l-3-3" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-sm text-gray-400">Cari percakapan...</span>
        </div>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conv) => (
          <Link key={conv.id} href={`/messages/${conv.id}`} className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-50">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              {conv.avatar ? (
                <div className="h-12 w-12 rounded-full" style={{ backgroundImage: `url(${conv.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white" style={{ backgroundColor: conv.color }}>
                  {conv.initials}
                </div>
              )}
              {conv.online && (
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-sm font-semibold text-gray-900">{conv.name}</span>
                <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{conv.time}</span>
              </div>
              <p className="text-xs text-gray-500 truncate">{conv.lastMsg}</p>
              {conv.tag && (
                <div className="mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ backgroundColor: conv.tagColor, color: conv.tagText }}>
                  {conv.tag}
                </div>
              )}
            </div>

            {/* Unread badge */}
            {conv.unread > 0 && (
              <div className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white mt-0.5">
                {conv.unread}
              </div>
            )}
          </Link>
        ))}
      </div>

      <BottomNav mode="client" />
    </div>
  );
}
