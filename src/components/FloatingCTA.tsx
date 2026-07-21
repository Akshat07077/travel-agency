import React, { useState } from 'react';
import { Phone, MessageSquare, Send, Sparkles, X } from 'lucide-react';

interface FloatingCTAProps {
  openEnquiryModal: (type?: string, defaultDest?: string) => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ openEnquiryModal }) => {
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Callback',
          fullName,
          phone,
          message: 'Requested 60-second instant callback'
        })
      });
      setSubmitted(true);
      setTimeout(() => {
        setCallbackOpen(false);
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Callback error:', err);
    }
  };

  return (
    <>
      {/* Fixed Floating Action Buttons (Right Bottom) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 z-40 flex flex-col gap-3 animate-fadeIn">
        {/* Instant Callback Button */}
        <button
          onClick={() => setCallbackOpen(true)}
          className="group flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-full shadow-2xl border border-slate-700 hover:bg-slate-800 cursor-pointer transition transform hover:scale-105"
        >
          <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center animate-bounce">
            <Phone className="w-4 h-4" />
          </div>
          <span className="hidden md:inline font-bold text-xs tracking-wide">Call Me Back</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/18005558692?text=Hello%20WanderLuxe%20Travel!%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-600 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:bg-emerald-500 cursor-pointer transition transform hover:scale-105"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="hidden md:inline font-bold text-xs tracking-wide">WhatsApp Us</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900 text-white border-t border-slate-800 p-3 flex items-center justify-between gap-2 shadow-2xl">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-teal-400" />
          <div className="text-left">
            <div className="font-bold text-xs text-white">Need Customized Quotes?</div>
            <div className="text-[10px] text-teal-300">Speak to an Expert in 60s</div>
          </div>
        </div>

        <button
          onClick={() => openEnquiryModal('General')}
          className="px-4 py-2 bg-gradient-to-r from-sky-500 to-teal-500 text-slate-950 font-extrabold rounded-xl text-xs"
        >
          Inquire Now
        </button>
      </div>

      {/* Callback Modal */}
      {callbackOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 text-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-800 relative">
            <button
              onClick={() => setCallbackOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2 mb-4">
              <div className="w-12 h-12 bg-sky-500/20 text-sky-400 rounded-2xl flex items-center justify-center mx-auto border border-sky-500/30">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif text-white">Request Instant Callback</h3>
              <p className="text-xs text-slate-400">Our luxury travel advisor will call you within 60 seconds.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-4 rounded-2xl text-center text-xs">
                <p className="font-bold">Callback Scheduled!</p>
                <p className="text-[11px] mt-1 text-emerald-200">Calling your number now...</p>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2.5 rounded-xl text-xs focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number with Country Code"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2.5 rounded-xl text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-sky-500 to-teal-500 text-slate-950 font-bold rounded-xl text-xs hover:opacity-95 transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Call Me Now</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
