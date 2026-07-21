import React, { useState } from 'react';
import { Compass, Mail, Phone, MapPin, ShieldCheck, Award, CheckCircle, Send, Heart } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  openEnquiryModal: (type?: string, defaultDest?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, openEnquiryModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Subscription Banner */}
        <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-teal-900 rounded-3xl p-8 md:p-10 mb-16 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="inline-block bg-teal-500/20 text-teal-300 text-xs font-bold px-3 py-1 rounded-full border border-teal-500/30 mb-3">
                Exclusive Travel Deals
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                Unlock Up To $200 OFF Your Next Dream Vacation
              </h3>
              <p className="text-slate-300 text-sm mt-2 max-w-xl">
                Subscribe to our weekly VIP newsletter for secret flight deals, unlisted luxury villa packages, and seasonal discount vouchers.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-teal-500/20 border border-teal-500/40 text-teal-200 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-400 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Welcome to WanderLuxe VIP Club!</h4>
                    <p className="text-xs text-teal-200">Check your inbox for your $150 welcome discount code.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your personal email..."
                    className="bg-slate-950/80 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 flex-1 placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-sky-500 to-teal-500 text-slate-950 font-bold px-6 py-3 rounded-xl hover:from-sky-400 hover:to-teal-400 transition cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white font-serif tracking-tight">WanderLuxe</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              WanderLuxe is a world-class luxury travel agency specializing in tailored international tour packages, private villa retreats, express visa processing, and 24/7 concierge excellence.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Suite 1200, Grand Plaza Tower, Fifth Avenue, NY 10001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+1 (800) 555-VOYAGE / +1 (212) 555-0199</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>concierge@wanderluxetravel.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><button onClick={() => setCurrentTab('packages')} className="hover:text-teal-300 transition">Tour Packages</button></li>
              <li><button onClick={() => setCurrentTab('destinations')} className="hover:text-teal-300 transition">Destinations</button></li>
              <li><button onClick={() => setCurrentTab('visa')} className="hover:text-teal-300 transition">Visa Services</button></li>
              <li><button onClick={() => setCurrentTab('flights')} className="hover:text-teal-300 transition">Flight Enquiry</button></li>
              <li><button onClick={() => setCurrentTab('hotels')} className="hover:text-teal-300 transition">Hotel Booking</button></li>
              <li><button onClick={() => setCurrentTab('group-tours')} className="hover:text-teal-300 transition">Group & Corporate Tours</button></li>
              <li><button onClick={() => setCurrentTab('planner')} className="hover:text-teal-300 transition">Custom Trip Planner</button></li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><button onClick={() => { setCurrentTab('packages'); }} className="hover:text-teal-300 transition">Bali Private Pool Villas</button></li>
              <li><button onClick={() => { setCurrentTab('packages'); }} className="hover:text-teal-300 transition">Swiss Alps Jungfraujoch</button></li>
              <li><button onClick={() => { setCurrentTab('packages'); }} className="hover:text-teal-300 transition">Dubai Desert Safari & Burj</button></li>
              <li><button onClick={() => { setCurrentTab('packages'); }} className="hover:text-teal-300 transition">Santorini Caldera Cruises</button></li>
              <li><button onClick={() => { setCurrentTab('packages'); }} className="hover:text-teal-300 transition">Kerala Backwater Houseboats</button></li>
              <li><button onClick={() => { setCurrentTab('packages'); }} className="hover:text-teal-300 transition">Japan Shinkansen & Sakura</button></li>
            </ul>
          </div>

          {/* Trust & Accreditations */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Certifications
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white">IATA Accredited</div>
                  <div className="text-[10px] text-slate-400">Code: 96-7 1234 5</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                <Award className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white">ASTA & TAFI Member</div>
                  <div className="text-[10px] text-slate-400">Verified Travel Society</div>
                </div>
              </div>

              <button
                onClick={() => openEnquiryModal('Callback')}
                className="w-full mt-2 py-2.5 px-3 bg-gradient-to-r from-teal-500 to-sky-500 text-slate-950 font-bold rounded-xl text-xs hover:opacity-90 transition cursor-pointer"
              >
                Request Instant Callback
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 WanderLuxe Travel Agency Inc. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-slate-400 cursor-pointer">Cancellation Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Sitemap</span>
          </div>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for global travelers
          </p>
        </div>
      </div>
    </footer>
  );
};
