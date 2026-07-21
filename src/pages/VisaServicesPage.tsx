import React, { useState } from 'react';
import { VisaService, Currency } from '../types';
import { formatPrice } from '../utils/formatters';
import { FileText, ShieldCheck, Clock, Check, ArrowRight, Upload, AlertCircle, PhoneCall } from 'lucide-react';

interface VisaServicesPageProps {
  visaServices: VisaService[];
  currency: Currency;
  openEnquiryModal: (type?: string, defaultDest?: string) => void;
}

export const VisaServicesPage: React.FC<VisaServicesPageProps> = ({
  visaServices,
  currency,
  openEnquiryModal
}) => {
  const [selectedVisa, setSelectedVisa] = useState<VisaService>(visaServices[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-teal-950 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden text-center max-w-4xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-900/60 px-3.5 py-1 rounded-full border border-teal-700">
          99.4% Approval Rate
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Hassle-Free Global Visa Assistance</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          From Dubai 30-day tourist visas to complex Schengen and UK applications, our visa experts handle document verification, appointment booking, and embassy submissions.
        </p>
      </div>

      {/* Grid: Visa Country Selector (4 cols) & Selected Country Details (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Visa List Sidebar */}
        <aside className="lg:col-span-4 space-y-3">
          <h3 className="font-bold text-slate-900 text-sm font-serif mb-2">Select Country Visa</h3>
          {visaServices.map((visa) => (
            <div
              key={visa.id}
              onClick={() => setSelectedVisa(visa)}
              className={`p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                selectedVisa.id === visa.id
                  ? 'bg-sky-600 text-white border-sky-600 shadow-md'
                  : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
              }`}
            >
              <div>
                <h4 className="font-bold text-sm">{visa.country}</h4>
                <p className={`text-xs ${selectedVisa.id === visa.id ? 'text-sky-100' : 'text-slate-500'}`}>
                  {visa.visaType} • {visa.processingTime}
                </p>
              </div>
              <span className={`font-extrabold text-sm ${selectedVisa.id === visa.id ? 'text-white' : 'text-teal-700'}`}>
                {formatPrice(visa.feeUSD, currency)}
              </span>
            </div>
          ))}
        </aside>

        {/* Selected Visa Content Area */}
        <main className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">{selectedVisa.visaType}</span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 mt-1">{selectedVisa.country} Visa Assistance</h2>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Government & Service Fee</span>
              <span className="text-3xl font-extrabold text-slate-900">{formatPrice(selectedVisa.feeUSD, currency)}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700">
            <div>
              <span className="text-slate-400 font-bold block text-[10px] uppercase">Processing Time</span>
              <strong className="text-slate-900 flex items-center gap-1 mt-0.5"><Clock className="w-3.5 h-3.5 text-sky-600" /> {selectedVisa.processingTime}</strong>
            </div>
            <div>
              <span className="text-slate-400 font-bold block text-[10px] uppercase">Validity</span>
              <strong className="text-slate-900 mt-0.5 block">{selectedVisa.validity}</strong>
            </div>
            <div>
              <span className="text-slate-400 font-bold block text-[10px] uppercase">Entry Type</span>
              <strong className="text-slate-900 mt-0.5 block">{selectedVisa.entryType}</strong>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm font-serif mb-2">Mandatory Required Documents Checklist</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedVisa.requiredDocuments.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-sky-50/50 p-2.5 rounded-xl border border-sky-100 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold">Document Verification Guarantee:</strong>
              Our experts pre-check your passport validity, bank statements, photo specs, and travel cover before final embassy filing to ensure zero rejection errors.
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => openEnquiryModal('Visa', selectedVisa.country)}
              className="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-500 hover:to-sky-500 text-white font-bold text-xs rounded-xl transition shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Apply For {selectedVisa.country} Visa Now</span>
            </button>

            <a
              href="tel:+18005558692"
              className="text-xs font-bold text-slate-700 hover:text-sky-600 flex items-center gap-1"
            >
              <PhoneCall className="w-4 h-4 text-sky-600" />
              <span>Visa Hotline: +1 (800) 555-8692</span>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};
