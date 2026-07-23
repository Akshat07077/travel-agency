import React, { useEffect, useRef, useState } from 'react';
import { Phone, Heart, Scale, Bot, Menu, X, Globe, Sparkles, ChevronDown } from 'lucide-react';
import { Currency } from '../types';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  wishlistCount: number;
  compareCount: number;
  openWishlistDrawer: () => void;
  openCompareModal: () => void;
  openAiConcierge: () => void;
  openEnquiryModal: (type?: string, defaultDest?: string) => void;
  isAdminMode: boolean;
  setIsAdminMode: (val: boolean) => void;
}

const PRIMARY_NAV = [
  { id: 'home', label: 'Home' },
  { id: 'packages', label: 'Packages' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'visa', label: 'Visa' },
  { id: 'planner', label: 'Planner' },
  { id: 'contact', label: 'Contact' },
];

const MORE_NAV = [
  { id: 'flights', label: 'Flights' },
  { id: 'hotels', label: 'Hotels' },
  { id: 'group-tours', label: 'Group Tours' },
  { id: 'blog', label: 'Blog' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'about', label: 'About Us' },
  { id: 'testimonials', label: 'Reviews' },
];

const MOBILE_SECTIONS = [
  {
    title: 'Explore',
    items: [
      { id: 'home', label: 'Home' },
      { id: 'packages', label: 'Tour Packages' },
      { id: 'destinations', label: 'Destinations' },
      { id: 'group-tours', label: 'Group Tours' },
      { id: 'planner', label: 'Custom Planner' },
    ],
  },
  {
    title: 'Book',
    items: [
      { id: 'visa', label: 'Visa Services' },
      { id: 'flights', label: 'Flights' },
      { id: 'hotels', label: 'Hotels' },
    ],
  },
  {
    title: 'Company',
    items: [
      { id: 'about', label: 'About Us' },
      { id: 'testimonials', label: 'Reviews' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'blog', label: 'Blog' },
      { id: 'contact', label: 'Contact' },
    ],
  },
];

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  currency,
  setCurrency,
  wishlistCount,
  compareCount,
  openWishlistDrawer,
  openCompareModal,
  openAiConcierge,
  openEnquiryModal,
  isAdminMode,
  setIsAdminMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  const moreActive = MORE_NAV.some((item) => item.id === currentTab);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setMoreOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const goTo = (tab: string) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    setMoreOpen(false);
  };

  const toggleAdmin = () => {
    const next = !isAdminMode;
    setIsAdminMode(next);
    setCurrentTab(next ? 'admin' : 'home');
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex items-center justify-between gap-2 min-h-9">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span className="text-teal-300 font-medium truncate">
              <span className="sm:hidden">15% OFF summer tours</span>
              <span className="hidden sm:inline">Special Offer: Get 15% OFF on Summer International Tours!</span>
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <a
              href="tel:+18005558692"
              className="hidden lg:inline-flex items-center gap-1.5 hover:text-white transition shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              +1 (800) 555-VOYAGE
            </a>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="flex items-center gap-1 bg-slate-800/80 px-1.5 sm:px-2 py-0.5 rounded border border-slate-700">
              <Globe className="w-3 h-3 text-teal-400 shrink-0" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="bg-transparent text-slate-200 outline-none cursor-pointer font-medium max-w-[4.5rem] sm:max-w-none"
                aria-label="Currency"
              >
                <option value="USD" className="bg-slate-800 text-white">USD</option>
                <option value="EUR" className="bg-slate-800 text-white">EUR</option>
                <option value="GBP" className="bg-slate-800 text-white">GBP</option>
                <option value="INR" className="bg-slate-800 text-white">INR</option>
                <option value="AED" className="bg-slate-800 text-white">AED</option>
              </select>
            </div>

            <button
              type="button"
              onClick={toggleAdmin}
              className={`hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium transition ${
                isAdminMode
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              {isAdminMode ? 'Admin On' : 'Admin'}
            </button>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-3">
          {/* Brand */}
          <button
            type="button"
            onClick={() => goTo('home')}
            className="flex items-center gap-2 text-left group cursor-pointer min-w-0 shrink"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md shadow-teal-600/20 group-hover:scale-105 transition-transform shrink-0">
              W
            </div>
            <div className="min-w-0">
              <div className="text-base sm:text-xl font-bold text-slate-800 tracking-tight leading-none">
                WANDER<span className="text-teal-600">LUXE</span>
              </div>
              <p className="hidden xs:block text-[9px] sm:text-[10px] font-semibold text-slate-400 tracking-wider uppercase mt-0.5 truncate">
                Bespoke Travel & Tours
              </p>
            </div>
          </button>

          {/* Desktop primary nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center min-w-0">
            {PRIMARY_NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-[13px] xl:text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                  currentTab === item.id
                    ? 'text-teal-700 bg-teal-50'
                    : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg text-[13px] xl:text-sm font-semibold transition cursor-pointer ${
                  moreActive || moreOpen
                    ? 'text-teal-700 bg-teal-50'
                    : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                }`}
                aria-expanded={moreOpen}
              >
                More
                <ChevronDown className={`w-3.5 h-3.5 transition ${moreOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreOpen && (
                <div className="absolute top-full right-0 mt-1.5 w-48 bg-white rounded-xl border border-slate-200 shadow-xl py-1.5 z-50">
                  {MORE_NAV.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => goTo(item.id)}
                      className={`w-full text-left px-3.5 py-2 text-sm font-medium transition cursor-pointer ${
                        currentTab === item.id
                          ? 'text-teal-700 bg-teal-50'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-teal-600'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-0.5 sm:gap-1.5 shrink-0">
            <button
              type="button"
              onClick={openCompareModal}
              className="relative p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              title="Compare packages"
              aria-label="Compare packages"
            >
              <Scale className="w-5 h-5" />
              {compareCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-0.5 rounded-full bg-blue-900 text-white text-[10px] font-bold flex items-center justify-center">
                  {compareCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={openWishlistDrawer}
              className="relative p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 text-rose-500" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-0.5 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={openAiConcierge}
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer transition"
            >
              <Bot className="w-4 h-4 text-teal-400" />
              <span className="hidden xl:inline">AI Concierge</span>
              <span className="xl:hidden">AI</span>
            </button>

            <button
              type="button"
              onClick={() => openEnquiryModal('General')}
              className="hidden md:inline-flex items-center bg-blue-900 text-white px-3 xl:px-4 py-1.5 rounded-lg hover:bg-blue-800 transition font-bold text-xs xl:text-sm cursor-pointer"
            >
              Plan Trip
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay + drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          />

          <aside className="absolute inset-y-0 right-0 w-[min(100%,22rem)] bg-white shadow-2xl flex flex-col animate-slide-in-right">
            <div className="flex items-center justify-between gap-3 px-4 h-14 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold shrink-0">
                  W
                </div>
                <span className="font-bold text-slate-800 truncate">
                  WANDER<span className="text-teal-600">LUXE</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-4 space-y-5">
              {MOBILE_SECTIONS.map((section) => (
                <div key={section.title}>
                  <p className="px-2 mb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {section.title}
                  </p>
                  <div className="space-y-0.5">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => goTo(item.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer ${
                          currentTab === item.id
                            ? 'bg-teal-600 text-white'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="px-2 pt-1">
                <button
                  type="button"
                  onClick={toggleAdmin}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer ${
                    isAdminMode
                      ? 'bg-amber-500 text-slate-950'
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  {isAdminMode ? 'Exit Admin Panel' : 'Admin Login'}
                </button>
              </div>
            </div>

            <div className="shrink-0 border-t border-slate-100 p-3 space-y-2 bg-slate-50 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
              <button
                type="button"
                onClick={() => {
                  openAiConcierge();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-white rounded-xl font-semibold text-sm cursor-pointer"
              >
                <Bot className="w-4 h-4 text-teal-400" /> Ask AI Concierge
              </button>
              <button
                type="button"
                onClick={() => {
                  openEnquiryModal('General');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 bg-teal-600 text-white rounded-xl font-semibold text-sm cursor-pointer"
              >
                Plan My Trip
              </button>
              <a
                href="tel:+18005558692"
                className="w-full flex items-center justify-center gap-2 py-2 text-slate-600 text-xs font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                +1 (800) 555-VOYAGE
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};
