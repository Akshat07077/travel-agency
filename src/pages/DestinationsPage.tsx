import React, { useState } from 'react';
import { Destination } from '../types';
import { MapPin, Sun, Calendar, ArrowRight, Check } from 'lucide-react';

interface DestinationsPageProps {
  destinations: Destination[];
  setCurrentTab: (tab: string) => void;
  openEnquiryModal: (type?: string, defaultDest?: string) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  destinations,
  setCurrentTab,
  openEnquiryModal
}) => {
  const [selectedContinent, setSelectedContinent] = useState('All');

  const filteredDestinations = destinations.filter(d => {
    if (selectedContinent === 'All') return true;
    return d.continent === selectedContinent;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
          Global Destination Guide
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif">
          Discover Extraordinary Destinations
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          Explore top countries and regions with local insights, optimal travel weather windows, iconic landmarks, and handpicked tour packages.
        </p>
      </div>

      {/* Continent Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {['All', 'Asia', 'Europe', 'Middle East'].map((cont) => (
          <button
            key={cont}
            onClick={() => setSelectedContinent(cont)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition cursor-pointer ${
              selectedContinent === cont
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {cont}
          </button>
        ))}
      </div>

      {/* Destinations Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((dest) => (
          <div key={dest.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
              <img src={dest.heroImage} alt={dest.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/10">
                {dest.availablePackagesCount} Packages Available
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[11px] uppercase font-semibold text-teal-300">{dest.country}</span>
                <h3 className="text-2xl font-bold font-serif">{dest.name}</h3>
              </div>
            </div>

            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">{dest.description}</p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Calendar className="w-4 h-4 text-sky-600 shrink-0" />
                    <span><strong>Best Time:</strong> {dest.bestTimeToVisit}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Sun className="w-4 h-4 text-amber-500 shrink-0" />
                    <span><strong>Weather:</strong> {dest.weather}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Key Attractions:</span>
                  <div className="flex flex-wrap gap-1">
                    {dest.popularAttractions.map((att, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 text-[10px] px-2 py-0.5 rounded border border-slate-200">
                        {att}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setCurrentTab('packages')}
                  className="px-4 py-2 bg-sky-50 text-sky-700 font-bold text-xs rounded-xl hover:bg-sky-600 hover:text-white transition cursor-pointer"
                >
                  View Packages
                </button>
                <button
                  onClick={() => openEnquiryModal('General', dest.name)}
                  className="px-4 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition cursor-pointer flex items-center gap-1"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
