import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Tour Package Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Contact',
          fullName,
          email,
          phone,
          message: `[Subject: ${subject}] ${message}`
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Contact error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200">
          Global Offices
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif">
          Get In Touch With Our Travel Concierge
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm">
          Whether you need a custom holiday quotation, visa consultation, or urgent flight assistance, our advisors are here for you 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Information (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6 border border-slate-800">
            <h3 className="font-bold text-xl font-serif border-b border-slate-800 pb-3">Headquarters & Desk</h3>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">WanderLuxe Travel Towers</strong>
                  <p>Suite 1200, 5th Avenue Luxury Precinct, New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Phone & WhatsApp Hotline</strong>
                  <p>Toll-Free: +1 (800) 555-8692</p>
                  <p>WhatsApp Concierge: +1 (800) 555-8693</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Email Inquiries</strong>
                  <p>concierge@wanderluxetravel.com</p>
                  <p>visas@wanderluxetravel.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Office Hours</strong>
                  <p>Mon - Sat: 9:00 AM – 8:00 PM EST</p>
                  <p>Sunday: Emergency Concierge On-Call</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 p-6 rounded-3xl border border-teal-200 text-teal-900 space-y-2 text-xs">
            <strong className="block font-bold text-sm">Instant WhatsApp Support Available:</strong>
            <p>Connect directly with an active agent for quick queries or customized itinerary quotes.</p>
            <a
              href="https://wa.me/18005558692"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold mt-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Us Now
            </a>
          </div>
        </div>

        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-xl font-serif border-b border-slate-200 pb-3">
            Send Us A Message
          </h3>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-xl font-serif">Message Received!</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you {fullName}. Our senior travel consultant will reach out via email or phone within 15 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-sky-500"
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
                  className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl focus:outline-none"
                >
                  <option value="Tour Package Enquiry">Tour Package Enquiry</option>
                  <option value="Visa Service Assistance">Visa Service Assistance</option>
                  <option value="Flight & Hotel Booking">Flight & Hotel Booking</option>
                  <option value="Custom Group Tour Request">Custom Group Tour Request</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Your Message or Travel Details *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us your destination ideas, travel dates, passenger counts, or budget preferences..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Message...' : 'Submit Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
