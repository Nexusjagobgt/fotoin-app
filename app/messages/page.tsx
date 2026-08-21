import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

const conversations = [
  { id: 'rizki-pratama', name: 'Rizki Pratama', avatar: 'https://i.pravatar.cc/80?img=11', lastMsg: 'Siap! Saya konfirmasi untuk tanggal 15 April ya', time: '09:45', tag: 'Diskusi sesi 15 April', tagColor: '#EDE9FE', tagText: '#7C3AED', unread: 2, online: true },
  { id: 'sari-dewi', name: 'Sari Dewi', avatar: 'https://i.pravatar.cc/80?img=5', lastMsg: 'Terima kasih sudah booking, hasil edit selesai!', time: 'Kemarin', tag: 'Sesi selesai ✓', tagColor: '#DCFCE7', tagText: '#16A34A', unread: 0, online: false },
  { id: 'budi-santoso', name: 'Budi Santoso', avatar: 'https://i.pravatar.cc/80?img=14', lastMsg: 'Oke, sudah saya cek lokasinya 🔥', time: 'Sen', tag: 'Sports event 20 April', tagColor: '#FEF3C7', tagText: '#92400E', unread: 0, online: true },
  { id: 'maya-kusuma', name: 'Maya Kusuma', avatar: 'https://i.pravatar.cc/80?img=9', initials: 'M', color: '#F59E0B', lastMsg: 'Saya minat untuk paket wedding, bisa diskusi?', time: 'Minggu', tag: '', unread: 0, online: false },
  { id: 'fajar-nugraha', name: 'Fajar Nugraha', avatar: 'https://i.pravatar.cc/80?img=59', initials: 'F', color: '#8B5CF6', lastMsg: 'Foto produk sudah dikirim via Drive ya kak!', time: '4 hari', tag: '', unread: 0, online: false },
];

export default function MessagesPage() {
  return (
    <div className="flex h-svh flex-col bg-white">
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
