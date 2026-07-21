import React from 'react';
import { Award, ShieldCheck, Users, Globe, Heart, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200">
          Since 2011
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif">
          Crafting Unforgettable Memories Across 65+ Countries
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          WanderLuxe Travel Agency was founded with a singular vision: to elevate holiday travel from routine booking into personalized, seamless, luxury lifestyle experiences.
        </p>
      </div>

      {/* Stats Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-900 text-white p-8 rounded-3xl text-center shadow-xl">
        <div>
          <span className="text-3xl sm:text-4xl font-extrabold text-teal-400 font-serif">15,000+</span>
          <p className="text-slate-400 text-xs mt-1">Delighted Guests</p>
        </div>
        <div>
          <span className="text-3xl sm:text-4xl font-extrabold text-sky-400 font-serif">65+</span>
          <p className="text-slate-400 text-xs mt-1">Global Destinations</p>
        </div>
        <div>
          <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">99.4%</span>
          <p className="text-slate-400 text-xs mt-1">Visa Success Rate</p>
        </div>
        <div>
          <span className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-serif">4.95 / 5</span>
          <p className="text-slate-400 text-xs mt-1">Google & TripAdvisor</p>
        </div>
      </div>

      {/* Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg font-serif">Direct Local Partnerships</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            We work directly with certified luxury resort directors, private boat captains, and local historians in every country.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg font-serif">IATA & ASTA Accredited</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Fully licensed and insured travel operator adhering to strict global consumer protection guidelines and transparent refund policies.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg font-serif">Personal Concierge Care</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            A dedicated travel manager remains on standby 24/7 during your trip via WhatsApp to handle flight updates, dinner reservations, or special surprises.
          </p>
        </div>
      </div>
    </div>
  );
};
