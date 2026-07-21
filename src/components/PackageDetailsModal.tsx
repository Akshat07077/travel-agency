import React, { useState } from 'react';
import { TourPackage, Currency } from '../types';
import { formatPrice, calculateDiscountPercentage } from '../utils/formatters';
import { X, MapPin, Clock, Star, Check, AlertCircle, Building2, Calendar, Users, ChevronDown, ChevronUp, Send, CheckCircle2, ShieldCheck, Heart, Sparkles, PhoneCall } from 'lucide-react';

interface PackageDetailsModalProps {
  pkg: TourPackage | null;
  onClose: () => void;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (pkg: TourPackage) => void;
}

export const PackageDetailsModal: React.FC<PackageDetailsModalProps> = ({
  pkg,
  onClose,
  currency,
  isWishlisted,
  onToggleWishlist
}) => {
  if (!pkg) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions' | 'hotels' | 'reviews'>('overview');
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [activeGalleryImg, setActiveGalleryImg] = useState<string>(pkg.heroImage);

  // Booking Calculator & Form State
  const [travelersAdults, setTravelersAdults] = useState<number>(2);
  const [travelersChildren, setTravelersChildren] = useState<number>(0);
  const [selectedDepartureDate, setSelectedDepartureDate] = useState<string>(pkg.availableDates[0] || '2026-09-01');

  // Booking Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const basePricePerPerson = pkg.price[currency] || pkg.price.USD;
  const originalPricePerPerson = pkg.originalPrice ? (pkg.originalPrice[currency] || pkg.originalPrice.USD) : undefined;
  const discountPct = calculateDiscountPercentage(basePricePerPerson, originalPricePerPerson);

  const totalCalculatedCost = (travelersAdults * basePricePerPerson) + (travelersChildren * basePricePerPerson * 0.7);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Package',
          packageId: pkg.id,
          packageTitle: pkg.title,
          destination: pkg.destination,
          fullName,
          email,
          phone,
          travelDate: selectedDepartureDate,
          guestsAdults: travelersAdults,
          guestsChildren: travelersChildren,
          message: notes
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to submit enquiry:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col">
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-600">
              <MapPin className="w-3.5 h-3.5" /> {pkg.destination}, {pkg.country}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">{pkg.title}</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWishlist(pkg)}
              className={`p-2 rounded-full border transition cursor-pointer ${
                isWishlisted
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-600' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Main Grid */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Main Content Column (8 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Gallery Section */}
            <div className="space-y-3">
              <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-900 shadow-lg">
                <img
                  src={activeGalleryImg}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                {discountPct && (
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
                    Save {discountPct}% Today
                  </span>
                )}
              </div>

              {/* Gallery Thumbnails */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {pkg.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGalleryImg(img)}
                    className={`w-20 h-14 rounded-xl overflow-hidden border-2 shrink-0 cursor-pointer transition ${
                      activeGalleryImg === img ? 'border-sky-600 ring-2 ring-sky-300' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Duration</span>
                <span className="text-sm font-bold text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                  <Clock className="w-4 h-4 text-sky-600" /> {pkg.durationDays}D / {pkg.durationNights}N
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Rating</span>
                <span className="text-sm font-bold text-amber-600 flex items-center justify-center gap-1 mt-0.5">
                  <Star className="w-4 h-4 fill-amber-500" /> {pkg.rating} ({pkg.reviewCount})
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Tour Type</span>
                <span className="text-sm font-bold text-teal-700 mt-0.5 block">
                  {pkg.region}
                </span>
              </div>
            </div>

            {/* Tabs Bar */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
              {(['overview', 'itinerary', 'inclusions', 'hotels', 'reviews'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition cursor-pointer ${
                    activeTab === tab
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-slate-700 text-sm leading-relaxed">{pkg.overview}</p>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2 font-serif">Key Tour Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pkg.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-sky-50/50 p-2.5 rounded-xl border border-sky-100 text-xs text-slate-800">
                        <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Day-Wise Itinerary */}
            {activeTab === 'itinerary' && (
              <div className="space-y-3 animate-fadeIn">
                <h4 className="font-bold text-slate-900 text-sm font-serif mb-1">Day-By-Day Detailed Plan</h4>
                {pkg.itinerary.map((dayItem) => {
                  const isExpanded = expandedDay === dayItem.day;
                  return (
                    <div key={dayItem.day} className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                      <button
                        onClick={() => setExpandedDay(isExpanded ? null : dayItem.day)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 bg-slate-50 hover:bg-slate-100 transition cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                            D{dayItem.day}
                          </span>
                          <span className="font-bold text-slate-900 text-sm">{dayItem.title}</span>
                        </div>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                      </button>

                      {isExpanded && (
                        <div className="p-4 space-y-3 border-t border-slate-200 text-xs text-slate-700">
                          <p className="leading-relaxed">{dayItem.description}</p>

                          {dayItem.activities && dayItem.activities.length > 0 && (
                            <div>
                              <span className="font-bold text-slate-900 block mb-1">Activities & Stops:</span>
                              <div className="flex flex-wrap gap-1.5">
                                {dayItem.activities.map((act, i) => (
                                  <span key={i} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200">
                                    • {act}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {dayItem.mealsIncluded && dayItem.mealsIncluded.length > 0 && (
                            <div className="flex items-center gap-2 pt-1">
                              <span className="font-bold text-slate-900">Meals:</span>
                              <span className="text-teal-700 bg-teal-50 px-2 py-0.5 rounded font-semibold border border-teal-200">
                                {dayItem.mealsIncluded.join(', ')}
                              </span>
                            </div>
                          )}

                          {dayItem.hotelName && (
                            <div className="flex items-center gap-2 pt-1">
                              <Building2 className="w-3.5 h-3.5 text-sky-600" />
                              <span>Overnight stay at: <strong>{dayItem.hotelName}</strong></span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab 3: Inclusions & Exclusions */}
            {activeTab === 'inclusions' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-200 space-y-2">
                  <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> What Is Included
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-200 space-y-2">
                  <h4 className="font-bold text-rose-900 text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-rose-600" /> What Is Excluded
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <X className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 4: Hotels */}
            {activeTab === 'hotels' && (
              <div className="space-y-3 animate-fadeIn">
                <h4 className="font-bold text-slate-900 text-sm font-serif">Handpicked Luxury Accommodations</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.hotels.map((hotel, i) => (
                    <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-white p-3 flex gap-3 items-center">
                      <img src={hotel.image} alt={hotel.name} className="w-20 h-20 rounded-xl object-cover shrink-0" referrerPolicy="no-referrer" />
                      <div>
                        <h5 className="font-bold text-slate-900 text-xs">{hotel.name}</h5>
                        <p className="text-[11px] text-slate-500">{hotel.location}</p>
                        <div className="flex items-center gap-1 mt-1 text-amber-500 text-xs">
                          {Array.from({ length: hotel.stars }).map((_, s) => (
                            <Star key={s} className="w-3 h-3 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 5: Reviews */}
            {activeTab === 'reviews' && (
              <div className="space-y-3 animate-fadeIn">
                <h4 className="font-bold text-slate-900 text-sm font-serif">Customer Reviews & Experiences</h4>
                {pkg.reviews.map((rev) => (
                  <div key={rev.id} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-xs">{rev.userName}</span>
                      <span className="text-[10px] text-slate-400">{rev.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: rev.rating }).map((_, s) => (
                        <Star key={s} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{rev.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Sticky Booking & Calculator Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-20 bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 space-y-5">
              {/* Pricing Box */}
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Calculated Price</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-white">
                    {formatPrice(Math.round(totalCalculatedCost), currency)}
                  </span>
                  {originalPricePerPerson && (
                    <span className="text-sm text-slate-500 line-through">
                      {formatPrice(Math.round(originalPricePerPerson * (travelersAdults + travelersChildren)), currency)}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-teal-400 mt-1">
                  Includes taxes, transfers & breakfast for {travelersAdults} Adult(s), {travelersChildren} Child(ren)
                </p>
              </div>

              {/* Guest & Date Selectors */}
              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-300 font-bold block mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-teal-400" /> Select Departure Date
                  </label>
                  <select
                    value={selectedDepartureDate}
                    onChange={(e) => setSelectedDepartureDate(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-white p-2.5 rounded-xl font-medium focus:outline-none focus:border-sky-500"
                  >
                    {pkg.availableDates.map((dateStr) => (
                      <option key={dateStr} value={dateStr}>
                        {dateStr} (Guaranteed Departure)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">Adults (12+ yrs)</label>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={travelersAdults}
                      onChange={(e) => setTravelersAdults(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full bg-slate-800 border border-slate-700 text-white p-2.5 rounded-xl font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-bold block mb-1">Children (2-11 yrs)</label>
                    <input
                      type="number"
                      min={0}
                      max={8}
                      value={travelersChildren}
                      onChange={(e) => setTravelersChildren(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full bg-slate-800 border border-slate-700 text-white p-2.5 rounded-xl font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Instant Enquiry Form */}
              {submitted ? (
                <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 p-4 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Booking Enquiry Received!</h4>
                  <p className="text-xs text-emerald-200">
                    Our travel designer will contact you within 15 minutes to confirm availability & send your customized voucher.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-3 pt-2">
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider">Submit Instant Booking Inquiry</h4>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2.5 rounded-xl text-xs focus:outline-none focus:border-sky-500 placeholder:text-slate-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2.5 rounded-xl text-xs focus:outline-none focus:border-sky-500 placeholder:text-slate-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2.5 rounded-xl text-xs focus:outline-none focus:border-sky-500 placeholder:text-slate-500"
                  />
                  <textarea
                    rows={2}
                    placeholder="Special requests, flight options, or dietary needs..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2 rounded-xl text-xs focus:outline-none focus:border-sky-500 placeholder:text-slate-500"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 text-slate-950 font-extrabold py-3.5 rounded-xl text-sm hover:opacity-95 transition shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting...' : 'Request Booking Voucher'}</span>
                  </button>
                </form>
              )}

              {/* Guarantees */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> Best Price Guarantee</span>
                <span className="flex items-center gap-1"><PhoneCall className="w-3.5 h-3.5 text-sky-400" /> 24/7 Hotline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
