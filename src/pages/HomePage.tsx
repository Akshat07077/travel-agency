import React, { useState } from 'react';
import { TourPackage, Destination, Testimonial, BlogArticle, Offer, Currency } from '../types';
import { HeroSearch } from '../components/HeroSearch';
import { PackageCard } from '../components/PackageCard';
import { MapPin, ShieldCheck, Clock, Award, Sparkles, ArrowRight, Star, Heart, Check, Users, MessageSquare } from 'lucide-react';

interface HomePageProps {
  packages: TourPackage[];
  destinations: Destination[];
  testimonials: Testimonial[];
  blogs: BlogArticle[];
  offers: Offer[];
  currency: Currency;
  setCurrentTab: (tab: string) => void;
  onSelectPackage: (pkg: TourPackage) => void;
  wishlistIds: string[];
  onToggleWishlist: (pkg: TourPackage) => void;
  comparedIds: string[];
  onToggleCompare: (pkg: TourPackage) => void;
  openEnquiryModal: (type?: string, defaultDest?: string, pkgId?: string, pkgTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  packages,
  destinations,
  testimonials,
  blogs,
  offers,
  currency,
  setCurrentTab,
  onSelectPackage,
  wishlistIds,
  onToggleWishlist,
  comparedIds,
  onToggleCompare,
  openEnquiryModal
}) => {
  const [regionFilter, setRegionFilter] = useState<'All' | 'International' | 'Domestic'>('All');

  const filteredPackages = packages.filter(p => {
    if (regionFilter === 'International') return p.region === 'International';
    if (regionFilter === 'Domestic') return p.region === 'Domestic';
    return true;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero Search Section */}
      <HeroSearch
        onSearchPackages={() => setCurrentTab('packages')}
        openEnquiryModal={openEnquiryModal}
        setCurrentTab={setCurrentTab}
        currency={currency}
      />

      {/* 2. Main Two-Column Layout (Featured Grid + Conversion Sidebar) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Column (2/3 width) */}
          <div className="w-full lg:w-2/3 space-y-12">
            {/* Popular Destinations */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                    CURATED DESTINATIONS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif mt-1">
                    Explore Top Global Travel Hubs
                  </h2>
                </div>
                <button
                  onClick={() => setCurrentTab('destinations')}
                  className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destinations.slice(0, 4).map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => setCurrentTab('destinations')}
                    className="group relative rounded-2xl overflow-hidden aspect-4/3 cursor-pointer shadow-sm hover:shadow-xl transition duration-300 border border-slate-200"
                  >
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-900 font-bold text-[10px] px-2.5 py-0.5 rounded-full shadow-sm">
                      {dest.availablePackagesCount} Packages
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider block">{dest.country}</span>
                      <h3 className="text-xl font-bold font-serif">{dest.name}</h3>
                      <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">{dest.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Packages */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                    FEATURED PACKAGES
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif mt-1">
                    Trending Vacation Experiences
                  </h2>
                </div>

                {/* Region Tabs */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                  {(['All', 'International', 'Domestic'] as const).map((reg) => (
                    <button
                      key={reg}
                      onClick={() => setRegionFilter(reg)}
                      className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                        regionFilter === reg
                          ? 'bg-blue-900 text-white font-bold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredPackages.slice(0, 4).map((pkg) => (
                  <PackageCard
                    key={pkg.id}
                    pkg={pkg}
                    currency={currency}
                    onSelect={onSelectPackage}
                    isWishlisted={wishlistIds.includes(pkg.id)}
                    onToggleWishlist={onToggleWishlist}
                    isCompared={comparedIds.includes(pkg.id)}
                    onToggleCompare={onToggleCompare}
                    openEnquiryModal={openEnquiryModal}
                  />
                ))}
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={() => setCurrentTab('packages')}
                  className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl shadow-md transition cursor-pointer inline-flex items-center gap-2 text-xs"
                >
                  <span>Explore All 50+ Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Conversion & Trust Sidebar (1/3 width) */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Expert Consultation Callout Box */}
            <div className="bg-blue-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden border border-blue-800">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                <span className="text-[10px] uppercase font-bold text-teal-300 bg-teal-900/60 px-2.5 py-1 rounded border border-teal-500/30">
                  NEED EXPERT ADVICE?
                </span>

                <h3 className="text-xl font-bold font-serif leading-snug">
                  Speak directly with our luxury travel specialists
                </h3>

                <p className="text-blue-100 text-xs leading-relaxed">
                  Get a personalized itinerary created in under 30 minutes with guaranteed best rates.
                </p>

                <div className="pt-2 space-y-2.5">
                  <a
                    href="tel:+18005558692"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-3 rounded-xl border border-white/10 text-xs font-semibold transition"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-950 flex items-center justify-center font-bold">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-blue-200">24/7 Hotline</div>
                      <div className="font-bold text-white text-sm">+1 (800) 555-VOYAGE</div>
                    </div>
                  </a>

                  <button
                    onClick={() => openEnquiryModal('Callback')}
                    className="w-full bg-teal-500 text-slate-950 font-bold py-3 rounded-xl shadow-lg shadow-teal-500/20 hover:bg-teal-400 transition cursor-pointer text-xs"
                  >
                    Request Instant Callback
                  </button>
                </div>
              </div>
            </div>

            {/* Trust & Credentials Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 text-sm font-serif border-b border-slate-100 pb-2">
                Why Book With WanderLuxe
              </h4>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-xs">100% Quality Guarantee</div>
                    <div className="text-[11px] text-slate-500">Verified 5-star hotel & resort partners</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-xs">Dedicated Concierge</div>
                    <div className="text-[11px] text-slate-500">24/7 WhatsApp assistance during travel</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-xs">99.4% Visa Success</div>
                    <div className="text-[11px] text-slate-500">In-house documentation specialists</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Teaser */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-xs italic leading-relaxed">
                "{testimonials[0]?.comment || 'Flawless arrangements from flights to luxury villa check-in. Highly recommended!'}"
              </p>
              <div className="text-[11px] font-bold text-slate-900">
                — {testimonials[0]?.name || 'Elena R.'}, {testimonials[0]?.location || 'New York'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Limited-Time Offer Banner */}
      {offers.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-3">
                <span className="bg-amber-500 text-slate-950 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" /> Promo Voucher Code: {offers[0].code}
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-serif text-white">
                  {offers[0].title} – {offers[0].discount}
                </h3>
                <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
                  {offers[0].description}
                </p>
                <p className="text-xs text-teal-300 font-semibold">Valid until {offers[0].validUntil}</p>
              </div>

              <div className="lg:col-span-4 text-center lg:text-right">
                <button
                  onClick={() => openEnquiryModal('Package', 'Bali')}
                  className="px-8 py-4 bg-gradient-to-r from-teal-400 to-sky-400 text-slate-950 font-extrabold rounded-2xl hover:opacity-95 shadow-xl transition cursor-pointer text-sm"
                >
                  Claim Offer & Book
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Why Choose Us Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-100/60 px-3 py-1 rounded-full border border-teal-200">
              The WanderLuxe Difference
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-2">
              Why 15,000+ Guests Travel With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg font-serif">100% Price & Quality Guarantee</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                No hidden costs. Transparent luxury pricing with premium 5-star hotel partners and private chauffeur vehicles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg font-serif">24/7 Dedicated Concierge</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Personal WhatsApp travel manager assigned to your trip from airport pick-up until return flight departure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg font-serif">99.4% Visa Approval Rate</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                In-house visa specialists audit your documentation line-by-line for Schengen, USA, UK, UAE & Asian visas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg font-serif">Custom Tailored Itineraries</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Customize every activity, hotel class, meal preference, or pace according to your group size and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Verified Feedback
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-2">
              Stories From Our Travelers
            </h2>
          </div>
          <button
            onClick={() => setCurrentTab('testimonials')}
            className="flex items-center gap-2 text-sky-700 font-bold text-sm hover:text-sky-800 transition cursor-pointer"
          >
            <span>Read All Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div key={test.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-xs leading-relaxed italic">"{test.comment}"</p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <img src={test.avatar} alt={test.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">{test.name}</h4>
                  <p className="text-[10px] text-slate-400">{test.tripTitle} • {test.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Blog Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Travel Journal
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-2">
              Latest Travel Guides & Visa Insights
            </h2>
          </div>
          <button
            onClick={() => setCurrentTab('blog')}
            className="flex items-center gap-2 text-sky-700 font-bold text-sm hover:text-sky-800 transition cursor-pointer"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((article) => (
            <div
              key={article.id}
              onClick={() => setCurrentTab('blog')}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-16/9 overflow-hidden bg-slate-100">
                <img src={article.heroImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-5 space-y-2">
                <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                  {article.category}
                </span>
                <h3 className="font-bold font-serif text-slate-900 text-base line-clamp-2 group-hover:text-sky-600 transition">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">{article.summary}</p>
                <div className="text-[11px] text-slate-400 pt-2 flex items-center justify-between">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif">Ready To Begin Your Next Adventure?</h2>
          <p className="text-sky-100 text-sm max-w-xl mx-auto">
            Speak with our destination experts today to craft your personalized holiday itinerary.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openEnquiryModal('General')}
              className="px-8 py-4 bg-white text-slate-900 font-extrabold rounded-2xl hover:bg-slate-100 shadow-lg transition cursor-pointer text-sm"
            >
              Plan Custom Trip
            </button>
            <button
              onClick={() => setCurrentTab('packages')}
              className="px-8 py-4 bg-slate-950/40 text-white border border-white/30 font-extrabold rounded-2xl hover:bg-slate-950/60 shadow-lg transition cursor-pointer text-sm"
            >
              Browse Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
