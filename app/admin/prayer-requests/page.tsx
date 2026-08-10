'use client';

import { useEffect, useState, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  LogOut, Search, Trash2, CheckCircle, Clock, RefreshCw,
  ChevronDown, User, Phone, Mail, Calendar, FileText,
} from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface PrayerRequest {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  request: string;
  is_read: boolean;
  created_at: string;
}

type FilterType = 'all' | 'unread' | 'read';

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
  });
}

export default function AdminPrayerRequestsPage() {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');

  const [requests, setRequests] = useState<PrayerRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [togglingId, setTogglingId] = useState<string | null>(null);

  // Auth guard
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace('/admin/login');
      } else {
        setAuthed(true);
        setAdminEmail(session.user.email ?? '');
      }
      setAuthChecked(true);
    });
  }, [router]);

  const fetchRequests = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('prayer_requests')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) setRequests(data as PrayerRequest[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authed) fetchRequests();
  }, [authed, fetchRequests]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace('/admin/login');
  };

  const toggleRead = async (req: PrayerRequest) => {
    setTogglingId(req.id);
    const { error } = await supabase
      .from('prayer_requests')
      .update({ is_read: !req.is_read })
      .eq('id', req.id);
    if (!error) {
      setRequests((prev) =>
        prev.map((r) => (r.id === req.id ? { ...r, is_read: !r.is_read } : r))
      );
    }
    setTogglingId(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this prayer request? This cannot be undone.')) return;
    setDeletingId(id);
    const { error } = await supabase.from('prayer_requests').delete().eq('id', id);
    if (!error) setRequests((prev) => prev.filter((r) => r.id !== id));
    setDeletingId(null);
  };

  const filtered = requests.filter((r) => {
    const matchesSearch =
      search.trim() === '' ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.request.toLowerCase().includes(search.toLowerCase()) ||
      (r.email ?? '').toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === 'all' || (filter === 'read' ? r.is_read : !r.is_read);
    return matchesSearch && matchesFilter;
  });

  const unreadCount = requests.filter((r) => !r.is_read).length;

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-royal-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (!authed) return null;

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Top bar */}
      <header className="bg-royal-950 text-white sticky top-0 z-30 shadow-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/20">
              <Image src="/Logo_Jcwmm.jpeg" alt="JCWMM" width={36} height={36} className="object-cover w-full h-full" />
            </div>
            <div>
              <div className="font-poppins font-bold text-sm leading-tight">JCWMM Admin</div>
              <div className="text-royal-400 text-xs leading-tight hidden sm:block">Prayer Requests</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {unreadCount > 0 && (
              <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-gold-500 text-royal-950 text-xs font-poppins font-bold">
                {unreadCount} unread
              </span>
            )}
            <span className="hidden md:block text-royal-400 text-xs truncate max-w-[160px]">{adminEmail}</span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm transition text-white"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Page title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-poppins font-bold text-2xl text-royal-900">Prayer Requests</h1>
            <p className="text-gray-500 text-sm mt-0.5">
              {requests.length} total &bull; {unreadCount} unread
            </p>
          </div>
          <button
            onClick={fetchRequests}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm hover:bg-gray-50 transition shadow-sm self-start sm:self-auto"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {/* Search + filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, request, or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-royal-300 focus:border-transparent shadow-sm transition"
            />
          </div>

          <div className="flex rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden text-sm font-medium">
            {(['all', 'unread', 'read'] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2.5 capitalize transition ${
                  filter === f
                    ? 'bg-royal-900 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-8 h-8 border-2 border-royal-200 border-t-royal-600 rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <FileText className="w-10 h-10 mx-auto mb-3 opacity-40" />
            <p className="font-medium text-gray-500">No prayer requests found.</p>
            {search && <p className="text-sm mt-1">Try a different search term.</p>}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((req) => {
              const isExpanded = expandedId === req.id;
              return (
                <div
                  key={req.id}
                  className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all ${
                    req.is_read ? 'border-gray-200' : 'border-royal-300 ring-1 ring-royal-100'
                  }`}
                >
                  {/* Header row */}
                  <div className="flex items-start gap-4 p-5">
                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-poppins font-bold text-sm ${
                      req.is_read ? 'bg-gray-100 text-gray-500' : 'bg-royal-100 text-royal-700'
                    }`}>
                      {req.name.charAt(0).toUpperCase()}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-poppins font-semibold text-royal-900 text-sm">{req.name}</span>
                        {!req.is_read && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-medium border border-amber-200">
                            Unread
                          </span>
                        )}
                        {req.is_read && (
                          <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-200">
                            Read
                          </span>
                        )}
                      </div>

                      {/* Contact details */}
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mb-2">
                        {req.email && (
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3" /> {req.email}
                          </span>
                        )}
                        {req.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3" /> {req.phone}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {formatDate(req.created_at)}
                        </span>
                      </div>

                      {/* Request preview */}
                      <p className={`text-sm text-gray-700 leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
                        {req.request}
                      </p>

                      {req.request.length > 120 && (
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : req.id)}
                          className="mt-1 flex items-center gap-1 text-xs text-royal-500 hover:text-royal-700 transition font-medium"
                        >
                          {isExpanded ? 'Show less' : 'Read more'}
                          <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => toggleRead(req)}
                        disabled={togglingId === req.id}
                        title={req.is_read ? 'Mark as Unread' : 'Mark as Read'}
                        className={`p-2 rounded-lg transition ${
                          req.is_read
                            ? 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                            : 'text-green-600 hover:text-green-700 hover:bg-green-50'
                        } disabled:opacity-50`}
                      >
                        {togglingId === req.id ? (
                          <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                        ) : (
                          <CheckCircle className="w-5 h-5" />
                        )}
                      </button>

                      <button
                        onClick={() => handleDelete(req.id)}
                        disabled={deletingId === req.id}
                        title="Delete"
                        className="p-2 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition disabled:opacity-50"
                      >
                        {deletingId === req.id ? (
                          <div className="w-4 h-4 border-2 border-red-200 border-t-red-500 rounded-full animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
