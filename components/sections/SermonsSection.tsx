'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Calendar, BookOpen, Clock, Search, ExternalLink, X, Youtube } from 'lucide-react';
import SectionReveal from '@/components/shared/SectionReveal';
import { SERMONS, SERMON_CATEGORIES } from '@/lib/church-data';

export default function SermonsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [playingSermon, setPlayingSermon] = useState<(typeof SERMONS)[number] | null>(null);

  const filtered = SERMONS.filter((s) => {
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.scripture.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getYouTubeId = (url: string) => {
  try {
    const parsed = new URL(url);

    // https://www.youtube.com/watch?v=...
    const v = parsed.searchParams.get("v");
    if (v) return v;

    // https://youtu.be/...
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.substring(1);
    }

    // https://www.youtube.com/live/...
    if (parsed.pathname.startsWith("/live/")) {
      return parsed.pathname.replace("/live/", "").split("/")[0];
    }

    // https://www.youtube.com/embed/...
    if (parsed.pathname.startsWith("/embed/")) {
      return parsed.pathname.replace("/embed/", "").split("/")[0];
    }

    return "";
  } catch {
    return "";
  }
};

  return (
    <section id="sermons" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 text-xs font-semibold font-inter uppercase tracking-wider mb-4">
            Messages
          </span>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-royal-900 mb-4">
            Sermon <span className="text-gradient-blue">Archive</span>
          </h2>
          <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
            Be fed by the Word of God. Watch, listen, and be transformed by anointed messages.
          </p>
        </SectionReveal>

        {/* Search & Filter */}
        <SectionReveal delay={100} className="mb-10">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search sermons or scriptures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-royal-300 focus:border-transparent bg-gray-50"
                aria-label="Search sermons"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {SERMON_CATEGORIES.slice(0, 6).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-inter font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-royal-700 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-royal-100 hover:text-royal-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Sermon Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400 font-inter">
            No sermons found. Try a different search or category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((sermon, index) => (
              <SectionReveal key={sermon.id} delay={index * 80}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-royal-100/50 border border-gray-100 card-hover group">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={sermon.thumbnail}
                      alt={sermon.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setPlayingSermon(sermon)}
                        aria-label={`Play ${sermon.title} inline`}
                        className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center shadow-xl transition-all hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                      >
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </button>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-royal-700 text-white text-xs font-inter font-medium">
                        {sermon.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 rounded-lg px-2 py-1">
                      <Clock className="w-3 h-3 text-white" />
                      <span className="text-white text-xs font-inter">{sermon.duration}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-poppins font-semibold text-royal-900 text-base leading-snug mb-3 group-hover:text-royal-700 transition-colors">
                      {sermon.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 font-inter mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {sermon.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        {sermon.scripture}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setPlayingSermon(sermon)}
                        className="flex items-center gap-2 text-royal-600 font-inter font-medium text-sm hover:text-royal-700 transition-colors"
                      >
                        <Play className="w-4 h-4 fill-royal-600" />
                        Play
                      </button>
                      <a
                        href={sermon.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-red-600 font-inter font-medium text-sm hover:text-red-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        )}

        {/* View all */}
        <SectionReveal className="text-center mt-12" delay={200}>
          <a
            href="https://www.youtube.com/@JCWMMOFFICIAL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-poppins font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <Youtube className="w-5 h-5" />
            View All Sermons on YouTube
          </a>
        </SectionReveal>
      </div>

      {/* Inline Play Modal */}
      {playingSermon && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setPlayingSermon(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Playing: ${playingSermon.title}`}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPlayingSermon(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${getYouTubeId(playingSermon.youtubeUrl)}?autoplay=1&rel=0&modestbranding=1`}
                title={playingSermon.title}
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <div className="p-5 bg-royal-950">
              <h3 className="font-poppins font-bold text-white text-lg mb-1">{playingSermon.title}</h3>
              <div className="flex items-center gap-4 text-sm text-royal-300 font-inter">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{playingSermon.date}</span>
                <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" />{playingSermon.scripture}</span>
              </div>
              <a
                href={playingSermon.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-inter transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open on YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
