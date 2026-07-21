import React, { useState } from 'react';
import { Compass, Phone, Heart, Scale, Bot, Menu, X, Globe, Sparkles, UserCheck } from 'lucide-react';
import { Currency } from '../types';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  wishlistCount: number;
  openWishlist: () => void;
  compareCount: number;
  openCompare: () => void;
  openConcierge: () => void;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  openEnquiryModal: (type?: string, defaultDest?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  currency,
  setCurrency,
  wishlistCount,
  openWishlist,
  compareCount,
  openCompare,
  openConcierge,
  isAdmin,
  setIsAdmin,
  openEnquiryModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'packages', label: 'Tour Packages' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'visa', label: 'Visa Services' },
    { id: 'flights', label: 'Flights' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'group-tours', label: 'Group Tours' },
    { id: 'planner', label: 'Custom Planner' },
    { id: 'blog', label: 'Blog' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      {/* Top Banner Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1 text-teal-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Special Offer: Get 15% OFF on Summer International Tours!
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:flex items-center gap-1.5 hover:text-white transition">
            <Phone className="w-3.5 h-3.5 text-teal-400" /> 24/7 Hotline: +1 (800) 555-VOYAGE
          </span>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          {/* Currency Switcher */}
          <div className="flex items-center gap-1 text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700 text-xs">
            <Globe className="w-3 h-3 text-teal-400" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="bg-transparent text-slate-200 outline-none cursor-pointer font-medium"
            >
              <option value="USD" className="bg-slate-800 text-white">USD ($)</option>
              <option value="EUR" className="bg-slate-800 text-white">EUR (€)</option>
              <option value="GBP" className="bg-slate-800 text-white">GBP (£)</option>
              <option value="INR" className="bg-slate-800 text-white">INR (₹)</option>
              <option value="AED" className="bg-slate-800 text-white">AED</option>
            </select>
          </div>

          {/* Admin Toggle Button */}
          <button
            onClick={() => setIsAdmin(!isAdmin)}
            className={`flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium transition ${
              isAdmin
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
            }`}
            title="Toggle Admin Control Panel"
          >
            <UserCheck className="w-3 h-3" />
            {isAdmin ? 'Admin View Active' : 'Admin Login'}
          </button>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md shadow-teal-600/20 group-hover:scale-105 transition-transform">
            W
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-slate-800 tracking-tight font-sans">
                WANDER<span className="text-teal-600">LUXE</span>
              </span>
              <span className="bg-teal-50 text-teal-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-teal-200 uppercase tracking-widest hidden sm:inline-block">
                LUXURY
              </span>
            </div>
            <p className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">Bespoke Travel & Tours</p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 lg:gap-2 text-sm font-semibold text-slate-600">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                currentTab === item.id
                  ? 'text-teal-600 bg-teal-50/80 font-bold border-b-2 border-teal-600'
                  : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls & Badges */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Compare Button */}
          <button
            onClick={openCompare}
            className="relative p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            title="Compare Packages"
          >
            <Scale className="w-5 h-5" />
            {compareCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-900 text-white text-[10px] font-bold flex items-center justify-center animate-bounce">
                {compareCount}
              </span>
            )}
          </button>

          {/* Wishlist Button */}
          <button
            onClick={openWishlist}
            className="relative p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            title="Saved Wishlist"
          >
            <Heart className="w-5 h-5 text-rose-500" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* AI Travel Concierge Assistant Trigger */}
          <button
            onClick={openConcierge}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 shadow-sm cursor-pointer transition"
          >
            <Bot className="w-4 h-4 text-teal-400" />
            <span>AI Concierge</span>
          </button>

          {/* Quick Book / Plan Trip CTA */}
          <button
            onClick={() => openEnquiryModal('General')}
            className="hidden sm:flex items-center gap-2 bg-blue-900 text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 font-bold text-sm cursor-pointer active:scale-95"
          >
            <span>Plan My Trip</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2.5 rounded-lg text-left text-sm font-medium ${
                  currentTab === item.id
                    ? 'bg-sky-600 text-white font-semibold'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => { openConcierge(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-purple-600 text-white rounded-lg font-medium text-sm"
            >
              <Bot className="w-4 h-4" /> Ask Aria AI Concierge
            </button>
            <button
              onClick={() => { openEnquiryModal('General'); setMobileMenuOpen(false); }}
              className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-semibold text-sm"
            >
              Instant Trip Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
