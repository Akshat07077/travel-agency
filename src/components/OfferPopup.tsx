import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';

interface OfferPopupProps {
  openEnquiryModal: (type?: string, defaultDest?: string) => void;
}

export const OfferPopup: React.FC<OfferPopupProps> = ({ openEnquiryModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    // Show popup once per session after 8 seconds
    const timer = setTimeout(() => {
      const shown = sessionStorage.getItem('offer_popup_shown');
      if (!shown) {
        setIsOpen(true);
        sessionStorage.setItem('offer_popup_shown', 'true');
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setClaimed(true);
      setTimeout(() => {
        setIsOpen(false);
        openEnquiryModal('General');
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 text-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-800 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-48 bg-slate-950">
          <img
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80"
            alt="Summer Special Offer"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 shadow-md">
              <Sparkles className="w-3.5 h-3.5" /> Limited Voucher
            </span>
            <h3 className="text-2xl font-bold font-serif text-white mt-1">Claim Your $150 Travel Credit</h3>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-slate-300 text-xs leading-relaxed">
            Planning a trip to Bali, Switzerland, Dubai, or Europe? Enter your email to unlock an instant <strong>$150 Discount Voucher</strong> applied directly to your booking quotation.
          </p>

          {claimed ? (
            <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 p-4 rounded-2xl text-center space-y-1">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-white text-sm">Voucher Activated: VIP150OFF</h4>
              <p className="text-xs text-emerald-200">Opening enquiry wizard...</p>
            </div>
          ) : (
            <form onSubmit={handleClaim} className="space-y-3">
              <input
                type="email"
                required
                placeholder="Enter your personal email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-xl text-xs focus:outline-none focus:border-teal-400 placeholder:text-slate-500"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-sky-500 to-teal-400 text-slate-950 font-bold rounded-xl text-xs hover:opacity-95 transition shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Claim $150 Voucher Now</span>
              </button>
            </form>
          )}

          <div className="text-[10px] text-slate-500 text-center">
            Valid for all new package bookings over $999. Terms apply.
          </div>
        </div>
      </div>
    </div>
  );
};
