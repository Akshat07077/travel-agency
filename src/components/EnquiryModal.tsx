import React, { useState } from 'react';
import { X, Send, CheckCircle2, Plane, Building2, FileText, Compass, Phone } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  enquiryType?: string;
  defaultDestination?: string;
  packageId?: string;
  packageTitle?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  enquiryType = 'General',
  defaultDestination = '',
  packageTitle = ''
}) => {
  if (!isOpen) return null;

  const [type, setType] = useState<string>(enquiryType);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState(defaultDestination);
  const [travelDate, setTravelDate] = useState('');
  const [guestsAdults, setGuestsAdults] = useState(2);
  const [guestsChildren, setGuestsChildren] = useState(0);
  const [budgetRange, setBudgetRange] = useState('$1,000 - $3,000');
  const [message, setMessage] = useState('');

  // Flight Fields
  const [flightOrigin, setFlightOrigin] = useState('');
  const [flightType, setFlightType] = useState('Round-Trip');

  // Hotel Fields
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          fullName,
          email,
          phone,
          destination,
          packageTitle,
          travelDate,
          guestsAdults,
          guestsChildren,
          budgetRange,
          message,
          flightOrigin,
          flightType,
          checkIn,
          checkOut
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 relative">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
              {type === 'Flight' ? <Plane className="w-5 h-5" /> : type === 'Hotel' ? <Building2 className="w-5 h-5" /> : type === 'Visa' ? <FileText className="w-5 h-5" /> : <Compass className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 font-serif text-lg">
                {type === 'Flight' ? 'Flight Enquiry' : type === 'Hotel' ? 'Hotel Booking Enquiry' : type === 'Visa' ? 'Visa Application Enquiry' : 'Plan Your Vacation'}
              </h3>
              <p className="text-xs text-slate-500">Fast 15-Minute Expert Callback</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl mb-5 text-xs font-semibold">
          {['General', 'Package', 'Flight', 'Hotel', 'Visa'].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`flex-1 py-1.5 rounded-lg transition cursor-pointer ${
                type === t ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-lg font-serif">Enquiry Submitted Successfully!</h4>
            <p className="text-xs text-slate-600">
              Thank you {fullName}. Our senior travel designer has received your request and will contact you via WhatsApp or call at <strong>{phone}</strong> shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-xl focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-xl focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Email Address *</label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-xl focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Destination / Country</label>
                <input
                  type="text"
                  placeholder="e.g. Bali, Switzerland, Dubai..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-xl focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Tentative Travel Date</label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-xl focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            {/* Flight Specific Fields */}
            {type === 'Flight' && (
              <div className="grid grid-cols-2 gap-3 bg-sky-50 p-3 rounded-2xl border border-sky-100">
                <div>
                  <label className="font-bold text-sky-900 block mb-1">Origin Airport/City</label>
                  <input
                    type="text"
                    placeholder="New York, London, Delhi..."
                    value={flightOrigin}
                    onChange={(e) => setFlightOrigin(e.target.value)}
                    className="w-full bg-white border border-sky-200 px-3 py-2 rounded-xl focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-sky-900 block mb-1">Flight Type</label>
                  <select
                    value={flightType}
                    onChange={(e) => setFlightType(e.target.value)}
                    className="w-full bg-white border border-sky-200 px-3 py-2 rounded-xl focus:outline-none"
                  >
                    <option value="Round-Trip">Round-Trip</option>
                    <option value="One-Way">One-Way</option>
                    <option value="Multi-City">Multi-City</option>
                  </select>
                </div>
              </div>
            )}

            {/* Hotel Specific Fields */}
            {type === 'Hotel' && (
              <div className="grid grid-cols-2 gap-3 bg-teal-50 p-3 rounded-2xl border border-teal-100">
                <div>
                  <label className="font-bold text-teal-900 block mb-1">Check-in Date</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-white border border-teal-200 px-3 py-2 rounded-xl focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-teal-900 block mb-1">Check-out Date</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-white border border-teal-200 px-3 py-2 rounded-xl focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Adults / Children</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={1}
                    value={guestsAdults}
                    onChange={(e) => setGuestsAdults(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-50 border border-slate-200 px-2 py-2 rounded-xl text-center"
                    placeholder="Adults"
                  />
                  <input
                    type="number"
                    min={0}
                    value={guestsChildren}
                    onChange={(e) => setGuestsChildren(parseInt(e.target.value) || 0)}
                    className="w-full bg-slate-50 border border-slate-200 px-2 py-2 rounded-xl text-center"
                    placeholder="Kids"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Approximate Budget</label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-xl focus:outline-none"
                >
                  <option value="Under $1,000">Under $1,000 per person</option>
                  <option value="$1,000 - $2,500">$1,000 - $2,500 per person</option>
                  <option value="$2,500 - $5,000">$2,500 - $5,000 per person</option>
                  <option value="$5,000+ Luxury">$5,000+ Luxury Unlimited</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Additional Requirements / Message</label>
              <textarea
                rows={2}
                placeholder="Preferred airline, room category, special dietary needs, or itinerary ideas..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold rounded-xl text-sm transition shadow-lg cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Sending Request...' : 'Submit Trip Enquiry'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
