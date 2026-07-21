import React from 'react';
import { TourPackage, Currency } from '../types';
import { formatPrice } from '../utils/formatters';
import { X, Check, Star, Clock, MapPin, Scale } from 'lucide-react';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  comparedPackages: TourPackage[];
  onRemoveFromCompare: (pkgId: string) => void;
  currency: Currency;
  openEnquiryModal: (type?: string, defaultDest?: string, pkgId?: string, pkgTitle?: string) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  isOpen,
  onClose,
  comparedPackages,
  onRemoveFromCompare,
  currency,
  openEnquiryModal
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-sky-600" />
            <h2 className="text-xl font-bold font-serif text-slate-900">Compare Tour Packages</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {comparedPackages.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <Scale className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-medium">No packages selected for comparison yet.</p>
            <p className="text-xs text-slate-400 mt-1">Click the comparison icon on any package card to compare features side-by-side.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto">
            {comparedPackages.map((pkg) => {
              const price = pkg.price[currency] || pkg.price.USD;
              return (
                <div key={pkg.id} className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 flex flex-col justify-between space-y-4">
                  <div className="relative aspect-16/9 rounded-xl overflow-hidden">
                    <img src={pkg.heroImage} alt={pkg.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <button
                      onClick={() => onRemoveFromCompare(pkg.id)}
                      className="absolute top-2 right-2 bg-slate-900/80 text-white p-1.5 rounded-full hover:bg-rose-600 transition"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-sky-600 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {pkg.destination}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm font-serif line-clamp-1">{pkg.title}</h3>
                    <div className="text-lg font-extrabold text-slate-900 mt-1">{formatPrice(price, currency)}</div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-700 border-t border-slate-200 pt-3">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Duration:</span>
                      <span className="font-bold">{pkg.durationDays}D / {pkg.durationNights}N</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500">Rating:</span>
                      <span className="font-bold text-amber-600 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-500" /> {pkg.rating}
                      </span>
                    </div>

                    <div className="pt-2">
                      <span className="text-slate-500 font-bold block mb-1">Highlights:</span>
                      <ul className="space-y-1 text-[11px]">
                        {pkg.highlights.slice(0, 3).map((h, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => { onClose(); openEnquiryModal('Package', pkg.destination, pkg.id, pkg.title); }}
                    className="w-full py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs hover:bg-sky-500 transition"
                  >
                    Select & Book
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
