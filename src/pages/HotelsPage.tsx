import React, { useState } from 'react';
import { Currency } from '../types';
import { Building2, Star, MapPin, Wifi, Coffee, Sparkles, ArrowRight } from 'lucide-react';

interface HotelsPageProps {
  currency: Currency;
  openEnquiryModal: (type?: string, defaultDest?: string) => void;
}

export const HotelsPage: React.FC<HotelsPageProps> = ({ currency, openEnquiryModal }) => {
  const [cityFilter, setCityFilter] = useState('All');

  const hotelsList = [
    {
      id: 'h1',
      name: 'The Mulia Bali Private Pool Villa',
      city: 'Bali',
      stars: 5,
      rating: 4.95,
      price: '$450 / night',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      amenities: ['Private Infinity Pool', 'Free Breakfast', 'Ocean View', '24/7 Butler']
    },
    {
      id: 'h2',
      name: 'Atlantis The Royal Resort & Suites',
      city: 'Dubai',
      stars: 5,
      rating: 4.98,
      price: '$650 / night',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      amenities: ['Private Beach', 'Michelin Dining', 'Aquaventure Access', 'Sky Pool']
    },
    {
      id: 'h3',
      name: 'Badrutt’s Palace Hotel St. Moritz',
      city: 'Switzerland',
      stars: 5,
      rating: 4.92,
      price: '$890 / night',
      image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
      amenities: ['Glacier View Spa', 'Ski-in Ski-out', 'Private Shuttle', 'Gourmet Dining']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-teal-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-4 text-center max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-900/60 px-3.5 py-1 rounded-full border border-teal-700">
          Handpicked Luxury Accommodations
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Luxury Hotels, Resorts & Private Villas</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Book hand-verified 5-star hotels with exclusive WanderLuxe perks including complimentary room upgrades, early check-in, and daily breakfast credits.
        </p>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hotelsList.map((hotel) => (
          <div key={hotel.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="relative aspect-16/10 overflow-hidden">
              <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" /> {hotel.rating}
              </div>
            </div>

            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-sky-600 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {hotel.city}
                </span>
                <h3 className="text-lg font-bold font-serif text-slate-900 mt-1">{hotel.name}</h3>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {hotel.amenities.map((am, i) => (
                    <span key={i} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                      ✓ {am}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Starting From</span>
                  <span className="text-lg font-extrabold text-slate-900">{hotel.price}</span>
                </div>

                <button
                  onClick={() => openEnquiryModal('Hotel', hotel.city)}
                  className="px-4 py-2.5 bg-sky-600 text-white font-bold text-xs rounded-xl hover:bg-sky-500 transition cursor-pointer flex items-center gap-1"
                >
                  <span>Inquire Hotel</span>
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
