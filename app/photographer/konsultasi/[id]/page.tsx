'use client';

import { FormEvent, use, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ConversationMessage, getConsultationById } from '../conversations';

const sentMessagesStorageKey = (conversationId: string) => `fotoin_consultation_messages_${conversationId}`;
const emptyMessages: ConversationMessage[] = [];
const messageCache = new Map<string, ConversationMessage[]>();
const messageListeners = new Map<string, Set<() => void>>();

function getSavedMessages(conversationId: string): ConversationMessage[] {
  const cached = messageCache.get(conversationId);
  if (cached) return cached;
  if (typeof window === 'undefined') return emptyMessages;

  try {
    const stored = sessionStorage.getItem(sentMessagesStorageKey(conversationId));
    const parsed: unknown = stored ? JSON.parse(stored) : emptyMessages;
    const messages = Array.isArray(parsed) ? parsed as ConversationMessage[] : emptyMessages;
    messageCache.set(conversationId, messages);
    return messages;
  } catch {
    messageCache.set(conversationId, emptyMessages);
    return emptyMessages;
  }
}

function subscribeToMessages(conversationId: string, listener: () => void) {
  const listeners = messageListeners.get(conversationId) ?? new Set<() => void>();
  listeners.add(listener);
  messageListeners.set(conversationId, listeners);
  return () => listeners.delete(listener);
}

function saveMessages(conversationId: string, messages: ConversationMessage[]) {
  messageCache.set(conversationId, messages);
  try {
    sessionStorage.setItem(sentMessagesStorageKey(conversationId), JSON.stringify(messages));
  } catch {
    // The in-memory cache still keeps messages scoped to this conversation.
  }
  messageListeners.get(conversationId)?.forEach((listener) => listener());
}

export default function ChatRoomPage({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<{ from?: string }> }) {
  const { id } = use(params);
  const searchParamsResolved = use(searchParams);
  const from = searchParamsResolved.from;
  const selectedConversation = getConsultationById(id);
  const [draft, setDraft] = useState('');
  const conversationId = selectedConversation?.id ?? id;
  const savedMessages = useSyncExternalStore(
    (listener) => subscribeToMessages(conversationId, listener),
    () => getSavedMessages(conversationId),
    () => emptyMessages,
  );

  let safeReturnTo = '/photographer/konsultasi';
  if (from === 'pesanan' || from === 'pesanan-aktif') {
    safeReturnTo = '/photographer/pesanan' + (from === 'pesanan-aktif' ? '?tab=Aktif' : '');
  } else if (from === 'dashboard') {
    safeReturnTo = '/photographer/dashboard';
  } else if (from === 'konsultasi') {
    safeReturnTo = '/photographer/konsultasi';
  }

  if (!selectedConversation) {
    return (
      <div className="flex h-svh flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <h1 className="text-lg font-bold text-gray-900">Percakapan tidak ditemukan</h1>
        <p className="mt-2 text-sm text-gray-500">Percakapan yang kamu pilih tidak tersedia.</p>
        <Link href={safeReturnTo} className="mt-5 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-bold text-white">
          Kembali
        </Link>
      </div>
    );
  }

  const messages = [...selectedConversation.messages, ...savedMessages];

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    const newMessage: ConversationMessage = {
      id: `${selectedConversation.id}-${Date.now()}`,
      sender: 'photographer',
      text,
      time: new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()),
    };
    const nextSavedMessages = [...savedMessages, newMessage];
    saveMessages(selectedConversation.id, nextSavedMessages);
    setDraft('');
  };

  return (
    <div className="flex flex-col h-svh bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center gap-3 shrink-0 shadow-sm z-10">
        <Link href={safeReturnTo} className="p-2 -ml-2 rounded-full hover:bg-gray-50 active:bg-gray-100 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </Link>
        <div className="h-10 w-10 rounded-full bg-gray-100 relative shrink-0">
          <Image src={selectedConversation.avatar} alt={selectedConversation.name} fill className="object-cover rounded-full" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="font-bold text-[15px] text-gray-900 truncate">{selectedConversation.name}</h1>
          <p className="text-[11px] font-bold text-violet-600">{selectedConversation.service}</p>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 active:bg-gray-50 rounded-full transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
        </button>
      </div>

      {/* Context Card */}
      <div className="px-4 py-3 shrink-0">
        <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">Detail Acara</span>
            <p className="text-[13px] font-bold text-gray-900">{selectedConversation.eventDetail}</p>
          </div>
          <button className="px-3 py-1.5 bg-violet-600 text-white text-[11px] font-bold rounded-lg shadow-sm active:scale-95 transition-transform">
            Buat Booking
          </button>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 flex flex-col gap-4">
        <div className="flex justify-center my-2">
          <span className="bg-gray-200/60 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full">Hari Ini</span>
        </div>

        {messages.map((message) => message.sender === 'customer' ? (
          <div key={message.id} className="flex gap-2 items-end max-w-[85%]">
            <div className="h-7 w-7 rounded-full bg-gray-100 relative shrink-0 overflow-hidden mb-1">
              <Image src={selectedConversation.avatar} alt={selectedConversation.name} fill className="object-cover" />
            </div>
            <div>
              <div className="bg-white text-gray-800 text-[14px] px-4 py-2.5 rounded-2xl rounded-bl-sm border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                {message.text}
              </div>
              <span className="text-[10px] font-medium text-gray-400 mt-1 block ml-1">{message.time}</span>
            </div>
          </div>
        ) : (
          <div key={message.id} className="flex flex-col items-end max-w-[85%] self-end">
            <div className="bg-violet-600 text-white text-[14px] px-4 py-2.5 rounded-2xl rounded-br-sm shadow-[0_2px_5px_rgba(124,58,237,0.2)]">
              {message.text}
            </div>
            <span className="text-[10px] font-medium text-gray-400 mt-1 block mr-1 flex items-center gap-1">
              {message.time} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={message.read ? '#7C3AED' : '#9CA3AF'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
          </div>
        ))}
      </div>

      {/* Message Input Area */}
      <form onSubmit={sendMessage} className="bg-white px-4 py-3 border-t border-gray-100 shrink-0 pb-safe">
        <div className="flex items-end gap-2">
          <button type="button" className="p-2 text-gray-400 hover:text-violet-600 active:bg-violet-50 rounded-full transition-colors shrink-0 mb-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
          </button>

          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-3 py-2 min-h-[44px] flex items-center">
            <textarea
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Tulis pesan..."
              className="bg-transparent border-none outline-none w-full text-[14px] text-gray-900 placeholder-gray-400 resize-none max-h-24 py-0.5"
              rows={1}
            />
          </div>

          <button type="submit" className="h-11 w-11 rounded-full bg-violet-600 flex items-center justify-center text-white shrink-0 shadow-sm active:scale-95 transition-transform mb-0.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </div>
      </form>
    </div>
  );
}
