import React, { useState } from 'react';
import { Currency } from '../types';
import { Sparkles, Send, Calendar, MapPin, Users, DollarSign, Clock, Check, Loader2, ArrowRight } from 'lucide-react';

interface CustomPlannerPageProps {
  currency: Currency;
  openEnquiryModal: (type?: string, defaultDest?: string) => void;
}

export const CustomPlannerPage: React.FC<CustomPlannerPageProps> = ({ currency, openEnquiryModal }) => {
  const [destination, setDestination] = useState('Bali, Indonesia');
  const [durationDays, setDurationDays] = useState(7);
  const [travelers, setTravelers] = useState(2);
  const [travelType, setTravelType] = useState('Honeymoon & Romantic');
  const [budgetTier, setBudgetTier] = useState(
    currency === 'INR' ? 'Standard Premium (₹35,000 - ₹75,000 / person)' : 'Luxury 5-Star ($3,000 - $5,000)'
  );
  const [pace, setPace] = useState('Balanced (Sightseeing + Relaxation)');
  const [interests, setInterests] = useState(['Beach & Sunset Clubs', 'Private Pool Villa', 'Cultural Temples']);

  const budgetOptions = currency === 'INR' ? [
    'Budget Friendly (₹15,000 - ₹30,000 / person)',
    'Standard Premium (₹35,000 - ₹75,000 / person)',
    'Luxury 5-Star (₹80,000 - ₹1,50,000 / person)',
    'Ultra Luxury Villa (₹1,50,000+ / person)'
  ] : [
    'Standard Comfort ($1,000 - $2,000)',
    'Luxury 5-Star ($3,000 - $5,000)',
    'Ultra-Luxury Villa ($6,000+)'
  ];

  const [loading, setLoading] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState<any | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/ai/planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination,
          durationDays,
          travelers,
          travelType,
          budgetTier,
          pace,
          interests
        })
      });

      const data = await res.json();
      if (data.itinerary) {
        setGeneratedItinerary(data.itinerary);
      }
    } catch (err) {
      console.error('Planner error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-3 text-center max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-700 inline-flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Powered by Gemini AI Engine
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">AI Custom Trip Planner</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Specify your travel preferences, dates, and group size. Our AI & luxury designers will craft a personalized day-by-day itinerary with exact cost breakdown in seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Wizard Form (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-lg font-serif border-b border-slate-200 pb-3">
            Build Your Customized Tour
          </h3>

          <form onSubmit={handleGenerate} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Destination</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Bali, Switzerland, Tokyo..."
                className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl font-medium focus:outline-none focus:border-purple-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Duration (Days)</label>
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={durationDays}
                  onChange={(e) => setDurationDays(parseInt(e.target.value) || 1)}
                  className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Travelers Count</label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                  className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl font-medium"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Travel Style</label>
              <select
                value={travelType}
                onChange={(e) => setTravelType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl font-medium focus:outline-none"
              >
                <option value="Honeymoon & Romantic">Honeymoon & Romantic</option>
                <option value="Family Vacation">Family Vacation</option>
                <option value="Group / Friends Trip">Group / Friends Trip</option>
                <option value="Solo Traveler">Solo Exploration</option>
                <option value="Luxury Retreat">Luxury Retreat</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Budget Tier</label>
              <select
                value={budgetTier}
                onChange={(e) => setBudgetTier(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl font-medium focus:outline-none cursor-pointer"
              >
                {budgetOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:from-purple-500 hover:to-sky-500 text-white font-bold rounded-xl text-xs transition shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Aria AI is compiling itinerary...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Generate AI Customized Itinerary</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Generated Output Area (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm min-h-[400px]">
          {!generatedItinerary && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-3 text-slate-400">
              <Sparkles className="w-12 h-12 text-purple-300 animate-pulse" />
              <h4 className="font-bold text-slate-700 text-base">Your Custom AI Itinerary Will Appear Here</h4>
              <p className="text-xs text-slate-500 max-w-sm">
                Fill out the wizard form on the left and click "Generate AI Customized Itinerary" to receive a tailored day-by-day plan.
              </p>
            </div>
          )}

          {loading && (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 space-y-4">
              <Loader2 className="w-10 h-10 animate-spin text-purple-600" />
              <p className="font-bold text-slate-900 text-sm">Matching 5-star hotels, private transfers & top sights for {destination}...</p>
            </div>
          )}

          {generatedItinerary && !loading && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-200 pb-4 flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-purple-600 uppercase">AI Custom Plan</span>
                  <h3 className="text-2xl font-bold font-serif text-slate-900">{generatedItinerary.title}</h3>
                  <p className="text-xs text-slate-500">{generatedItinerary.destination} • {durationDays} Days • {travelers} Travelers</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Estimated Total Cost</span>
                  <span className="text-xl font-extrabold text-slate-900">{generatedItinerary.estimatedCost}</span>
                </div>
              </div>

              {/* Day-by-day list */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm font-serif">Day-By-Day Activity Breakdown</h4>
                {generatedItinerary.days?.map((d: any, idx: number) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sky-700 text-xs">Day {d.day}: {d.title}</span>
                      <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        Stay: {d.hotel}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">{d.activities}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <p className="text-xs text-slate-600">Satisfied with this plan?</p>
                <button
                  onClick={() => openEnquiryModal('Package', destination)}
                  className="px-6 py-3 bg-gradient-to-r from-sky-600 to-teal-600 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition flex items-center gap-1"
                >
                  <span>Book This Custom Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
