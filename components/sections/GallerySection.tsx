'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import SectionReveal from '@/components/shared/SectionReveal';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '@/lib/church-data';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  const filtered = GALLERY_IMAGES.filter(
    (img) => activeCategory === 'All' || img.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 text-xs font-semibold font-inter uppercase tracking-wider mb-4">
            Our Moments
          </span>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-royal-900 mb-4">
            Church <span className="text-gradient-blue">Gallery</span>
          </h2>
          <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
            Precious moments captured from our worship, fellowship, and community life.
          </p>
        </SectionReveal>

        {/* Category Filter */}
        <SectionReveal delay={100} className="mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {GALLERY_CATEGORIES.map((cat) => (
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
        </SectionReveal>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {filtered.map((image, index) => (
            <div
              key={image.id}
              className="masonry-item group cursor-pointer relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              onClick={() => setLightboxImage({ src: image.src, caption: image.caption })}
              role="button"
              aria-label={`View ${image.caption}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ')
                  setLightboxImage({ src: image.src, caption: image.caption });
              }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.caption}
                  width={400}
                  height={300}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ display: 'block' }}
                />
                <div className="absolute inset-0 bg-royal-900/0 group-hover:bg-royal-900/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-inter font-medium">{image.caption}</p>
                  <span className="text-white/70 text-[10px] font-inter">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.caption}
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl object-contain max-h-[80vh]"
            />
            <p className="text-white text-center mt-4 font-inter text-sm">{lightboxImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
