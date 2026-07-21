import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { Camera, MapPin, X } from 'lucide-react';

interface GalleryPageProps {
  galleryItems: GalleryItem[];
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ galleryItems }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Bali', 'Switzerland', 'Dubai', 'Japan', 'Greece'];

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'All') return true;
    return item.destination === activeCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200">
          Traveler Moments
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif">
          Guest Photo Gallery & Memories
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm">
          Snapshots shared by our guests during their tailor-made vacations around the world.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition cursor-pointer ${
              activeCategory === cat
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImg(item)}
            className="group relative rounded-3xl overflow-hidden aspect-4/3 cursor-pointer shadow-sm hover:shadow-xl transition duration-500 border border-slate-200"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-[11px] font-semibold text-teal-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {item.destination}
              </span>
              <h3 className="font-bold text-base font-serif">{item.title}</h3>
              {item.caption && <p className="text-xs text-slate-300 line-clamp-1">{item.caption}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden text-white shadow-2xl border border-slate-800">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-16/9 overflow-hidden bg-slate-950">
              <img src={selectedImg.imageUrl} alt={selectedImg.title} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6 space-y-1">
              <span className="text-xs text-teal-400 font-bold uppercase">{selectedImg.destination}</span>
              <h3 className="text-xl font-bold font-serif">{selectedImg.title}</h3>
              {selectedImg.caption && <p className="text-xs text-slate-300">{selectedImg.caption}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
