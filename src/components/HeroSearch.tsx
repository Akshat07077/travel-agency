import React, { useState } from 'react';
import { Search, MapPin, Calendar, Compass, Plane, Building2, Sparkles, FileText, ArrowRight, ShieldCheck, Users, Star } from 'lucide-react';
import { Currency } from '../types';

interface HeroSearchProps {
  onSearchPackages: (searchQuery: string, destination: string, category: string, maxBudget: number) => void;
  openEnquiryModal: (type?: string, defaultDest?: string) => void;
  setCurrentTab: (tab: string) => void;
  currency: Currency;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  onSearchPackages,
  openEnquiryModal,
  setCurrentTab,
  currency
}) => {
  const [activeSearchTab, setActiveSearchTab] = useState<'packages' | 'flights' | 'hotels' | 'planner' | 'visa'>('packages');

  // Package Search Inputs
  const [destinationInput, setDestinationInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const [durationInput, setDurationInput] = useState('');

  // Flight Enquiry Inputs
  const [flightOrigin, setFlightOrigin] = useState('');
  const [flightDest, setFlightDest] = useState('');
  const [flightType, setFlightType] = useState('Round-Trip');

  // Hotel Enquiry Inputs
  const [hotelCity, setHotelCity] = useState('');
  const [hotelGuests, setHotelGuests] = useState('2 Guests, 1 Room');

  // Visa Search Input
  const [visaCountry, setVisaCountry] = useState('Dubai / UAE');

  const handlePackageSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchPackages(destinationInput, destinationInput, categoryInput, 10000);
    setCurrentTab('packages');
  };

  const handleFlightSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openEnquiryModal('Flight', flightDest);
  };

  const handleHotelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openEnquiryModal('Hotel', hotelCity);
  };

  return (
    <section className="relative bg-slate-950 text-white pt-8 sm:pt-10 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      {/* Background Image with Blue & Teal Ambient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506929197414-436473f08b21?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Tropical Beach Background"
          className="w-full h-full object-cover opacity-40 filter brightness-90 scale-105 transform transition duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-slate-900/75 to-teal-900/60 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Top Hero Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-950/80 border border-teal-500/30 text-teal-300 text-[11px] sm:text-sm font-semibold shadow-lg backdrop-blur-md max-w-full">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400 shrink-0" />
            <span className="truncate">Curated Luxury Experiences</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight px-1">
            Escape to the <span className="text-teal-300 italic font-serif">Extraordinary</span>
          </h1>

          <p className="text-blue-50 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed px-1">
            Handcrafted luxury vacations, private villa retreats, and seamless international journeys.
          </p>
        </div>

        {/* Multi-Tab Search Widget */}
        <div className="bg-white p-2.5 sm:p-3 rounded-2xl shadow-2xl border border-slate-100 text-slate-800 max-w-4xl mx-auto">
          {/* Search Tabs Header */}
          <div className="flex items-center gap-1 sm:gap-2 border-b border-slate-100 pb-2 overflow-x-auto scrollbar-none mb-3 -mx-0.5 px-0.5">
            <button
              type="button"
              onClick={() => setActiveSearchTab('packages')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer shrink-0 ${
                activeSearchTab === 'packages'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Packages</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSearchTab('flights')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer shrink-0 ${
                activeSearchTab === 'flights'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>Flights</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSearchTab('hotels')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer shrink-0 ${
                activeSearchTab === 'hotels'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Hotels</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSearchTab('planner')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer shrink-0 ${
                activeSearchTab === 'planner'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Planner</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSearchTab('visa')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer shrink-0 ${
                activeSearchTab === 'visa'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Visa</span>
            </button>
          </div>

          {/* Tab 1: Packages Search */}
          {activeSearchTab === 'packages' && (
            <form onSubmit={handlePackageSearchSubmit} className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 w-full px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col items-start">
                <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" /> Destination
                </label>
                <input
                  type="text"
                  placeholder="Where to? (e.g. Bali, Swiss)"
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  className="text-slate-800 font-semibold focus:outline-none w-full text-sm"
                />
              </div>

              <div className="flex-1 w-full px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col items-start">
                <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-teal-600" /> Travel Category
                </label>
                <select
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                  className="text-slate-800 font-semibold focus:outline-none w-full text-sm bg-transparent cursor-pointer"
                >
                  <option value="">All Experiences</option>
                  <option value="Honeymoon">Honeymoon & Romantic</option>
                  <option value="Family">Family Vacation</option>
                  <option value="Luxury">Luxury Retreats</option>
                  <option value="Adventure">Adventure & Wildlife</option>
                </select>
              </div>

              <div className="flex-1 w-full px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col items-start">
                <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-teal-600" /> Duration
                </label>
                <select
                  value={durationInput}
                  onChange={(e) => setDurationInput(e.target.value)}
                  className="text-slate-800 font-semibold focus:outline-none w-full text-sm bg-transparent cursor-pointer"
                >
                  <option value="">Any Duration</option>
                  <option value="1-5">3 to 5 Days</option>
                  <option value="6-8">6 to 8 Days</option>
                  <option value="9-12">9 to 12 Days</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-teal-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-teal-700 transition shadow-lg shadow-teal-600/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </form>
          )}

          {/* Tab 2: Flights Enquiry */}
          {activeSearchTab === 'flights' && (
            <form onSubmit={handleFlightSubmit} className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 w-full px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col items-start">
                <label className="text-[10px] uppercase font-bold text-slate-400 mb-1">Departure</label>
                <input
                  type="text"
                  placeholder="New York (JFK), London (LHR)"
                  value={flightOrigin}
                  onChange={(e) => setFlightOrigin(e.target.value)}
                  className="text-slate-800 font-semibold focus:outline-none w-full text-sm"
                />
              </div>

              <div className="flex-1 w-full px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col items-start">
                <label className="text-[10px] uppercase font-bold text-slate-400 mb-1">Destination</label>
                <input
                  type="text"
                  placeholder="Denpasar (DPS), Zurich (ZRH)"
                  value={flightDest}
                  onChange={(e) => setFlightDest(e.target.value)}
                  className="text-slate-800 font-semibold focus:outline-none w-full text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-blue-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-900/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <Plane className="w-4 h-4" />
                <span>Get Quote</span>
              </button>
            </form>
          )}

          {/* Tab 3: Hotels Enquiry */}
          {activeSearchTab === 'hotels' && (
            <form onSubmit={handleHotelSubmit} className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 w-full px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col items-start">
                <label className="text-[10px] uppercase font-bold text-slate-400 mb-1">Destination or Resort</label>
                <input
                  type="text"
                  placeholder="e.g. Seminyak Beach Bali, Downtown Dubai"
                  value={hotelCity}
                  onChange={(e) => setHotelCity(e.target.value)}
                  className="text-slate-800 font-semibold focus:outline-none w-full text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-blue-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-900/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <Building2 className="w-4 h-4" />
                <span>Find Hotels</span>
              </button>
            </form>
          )}

          {/* Tab 4: AI Planner */}
          {activeSearchTab === 'planner' && (
            <div className="flex flex-col sm:flex-row items-center justify-between p-3 bg-slate-50 rounded-xl gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Build Your Dream Itinerary in 60 Seconds</h4>
                  <p className="text-slate-500 text-xs">Tailored dates, luxury hotel preferences, and budgets.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setCurrentTab('planner')}
                className="bg-teal-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-teal-700 transition cursor-pointer"
              >
                Launch Planner
              </button>
            </div>
          )}

          {/* Tab 5: Visa Services */}
          {activeSearchTab === 'visa' && (
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 w-full px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col items-start">
                <label className="text-[10px] uppercase font-bold text-slate-400 mb-1">Select Country</label>
                <select
                  value={visaCountry}
                  onChange={(e) => setVisaCountry(e.target.value)}
                  className="text-slate-800 font-semibold focus:outline-none w-full text-sm bg-transparent cursor-pointer"
                >
                  <option value="Dubai / UAE">United Arab Emirates (Dubai E-Visa)</option>
                  <option value="Schengen / Europe">Schengen Europe</option>
                  <option value="Singapore">Singapore E-Visa</option>
                  <option value="Japan">Japan Tourist E-Visa</option>
                </select>
              </div>
              <button
                type="button"
                onClick={() => setCurrentTab('visa')}
                className="w-full md:w-auto bg-teal-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-teal-700 transition shadow-lg shadow-teal-600/20 cursor-pointer"
              >
                Check Visa Docs
              </button>
            </div>
          )}
        </div>

        {/* Quick Categories Banner Floating Below Hero */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8 z-30 relative">
          <div
            onClick={() => setCurrentTab('packages')}
            className="bg-white p-3 sm:p-4 rounded-xl shadow-md flex items-center gap-2.5 sm:gap-4 border border-slate-100 cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0 font-bold">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-slate-800 text-xs sm:text-sm truncate">Honeymoon</div>
              <div className="text-[10px] sm:text-xs text-slate-400 truncate">120+ Packages</div>
            </div>
          </div>

          <div
            onClick={() => setCurrentTab('visa')}
            className="bg-white p-3 sm:p-4 rounded-xl shadow-md flex items-center gap-2.5 sm:gap-4 border border-slate-100 cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0 font-bold">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-slate-800 text-xs sm:text-sm truncate">Visa Services</div>
              <div className="text-[10px] sm:text-xs text-slate-400 truncate">45+ Countries</div>
            </div>
          </div>

          <div
            onClick={() => setCurrentTab('group-tours')}
            className="bg-white p-3 sm:p-4 rounded-xl shadow-md flex items-center gap-2.5 sm:gap-4 border border-slate-100 cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shrink-0 font-bold">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-slate-800 text-xs sm:text-sm truncate">Groups</div>
              <div className="text-[10px] sm:text-xs text-slate-400 truncate">Corporate & Retreats</div>
            </div>
          </div>

          <div
            onClick={() => setCurrentTab('packages')}
            className="bg-white p-3 sm:p-4 rounded-xl shadow-md flex items-center gap-2.5 sm:gap-4 border border-slate-100 cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-600 shrink-0 font-bold">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-slate-800 text-xs sm:text-sm truncate">Adventure</div>
              <div className="text-[10px] sm:text-xs text-slate-400 truncate">80+ Expeditions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
