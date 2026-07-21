import React, { useState } from 'react';
import { Currency } from '../types';
import { Plane, ShieldCheck, Search, Clock, ArrowRight, CheckCircle2, Percent } from 'lucide-react';

interface FlightsPageProps {
  currency: Currency;
  openEnquiryModal: (type?: string, defaultDest?: string) => void;
}

export const FlightsPage: React.FC<FlightsPageProps> = ({ currency, openEnquiryModal }) => {
  const [origin, setOrigin] = useState('');
  const [dest, setDest] = useState('');
  const [cabinClass, setCabinClass] = useState('Economy');

  const popularRoutes = [
    { origin: 'New York (JFK)', dest: 'Bali (DPS)', price: '$780', airline: 'Singapore Airlines', duration: '20h 15m' },
    { origin: 'London (LHR)', dest: 'Dubai (DXB)', price: '$490', airline: 'Emirates', duration: '6h 45m' },
    { origin: 'San Francisco (SFO)', dest: 'Zurich (ZRH)', price: '$850', airline: 'SWISS Air', duration: '11h 20m' },
    { origin: 'Los Angeles (LAX)', dest: 'Tokyo (NRT)', price: '$720', airline: 'ANA Japan', duration: '11h 50m' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-4 text-center max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-900/60 px-3.5 py-1 rounded-full border border-sky-700">
          IATA Certified Flight Desk
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Exclusive Airline Fares & Upgrades</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Book international and domestic flight tickets with zero hidden portal fees, free seat selection advice, and 24/7 ticket reschedule support.
        </p>
      </div>

      {/* Flight Search Form Box */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md max-w-4xl mx-auto space-y-4">
        <h3 className="font-bold text-slate-900 text-base font-serif flex items-center gap-2">
          <Plane className="w-5 h-5 text-sky-600" /> Search International Flight Fares
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="text-[11px] font-bold text-slate-500 uppercase block mb-1">From (Origin)</label>
            <input
              type="text"
              placeholder="e.g. New York, London..."
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs focus:outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-500 uppercase block mb-1">To (Destination)</label>
            <input
              type="text"
              placeholder="e.g. Bali, Dubai, Zurich..."
              value={dest}
              onChange={(e) => setDest(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs focus:outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-500 uppercase block mb-1">Cabin Class</label>
            <select
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs focus:outline-none cursor-pointer"
            >
              <option value="Economy">Economy Class</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business">Business Class</option>
              <option value="First">First Class</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => openEnquiryModal('Flight', dest)}
          className="w-full py-4 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <Search className="w-4 h-4" />
          <span>Get Flight Quote & Seat Availability</span>
        </button>
      </div>

      {/* Popular Flight Deals */}
      <div className="space-y-4">
        <h3 className="font-bold text-slate-900 text-xl font-serif">Popular Flight Routes & Fares</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularRoutes.map((route, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
                <span>{route.airline}</span>
                <span className="text-teal-600 bg-teal-50 px-2 py-0.5 rounded">{route.duration}</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{route.origin} → {route.dest}</h4>
                <div className="text-xl font-extrabold text-sky-700 mt-1">{route.price} <span className="text-[10px] text-slate-400 font-normal">/ person</span></div>
              </div>
              <button
                onClick={() => openEnquiryModal('Flight', route.dest)}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
              >
                Inquire Flight
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
