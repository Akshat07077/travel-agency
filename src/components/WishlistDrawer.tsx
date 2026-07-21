import React from 'react';
import { TourPackage, Currency } from '../types';
import { formatPrice } from '../utils/formatters';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistPackages: TourPackage[];
  onRemoveWishlist: (pkg: TourPackage) => void;
  onSelectPackage: (pkg: TourPackage) => void;
  currency: Currency;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistPackages,
  onRemoveWishlist,
  onSelectPackage,
  currency
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="font-bold font-serif text-slate-900 text-lg">Saved Wishlist ({wishlistPackages.length})</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {wishlistPackages.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <Heart className="w-12 h-12 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-medium">Your Wishlist is empty</p>
              <p className="text-xs text-slate-400 mt-1">Tap the heart icon on any package card to save it for later.</p>
            </div>
          ) : (
            wishlistPackages.map((pkg) => {
              const price = pkg.price[currency] || pkg.price.USD;
              return (
                <div key={pkg.id} className="border border-slate-200 rounded-2xl p-3 flex gap-3 items-center bg-slate-50/50 hover:bg-white transition">
                  <img src={pkg.heroImage} alt={pkg.title} className="w-20 h-20 rounded-xl object-cover shrink-0" referrerPolicy="no-referrer" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 text-xs line-clamp-1 font-serif">{pkg.title}</h4>
                    <p className="text-[11px] text-slate-500">{pkg.destination}, {pkg.country}</p>
                    <div className="font-extrabold text-slate-900 text-sm mt-1">{formatPrice(price, currency)}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => { onClose(); onSelectPackage(pkg); }}
                      className="p-2 rounded-lg bg-sky-600 text-white hover:bg-sky-500 transition"
                      title="View Details"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemoveWishlist(pkg)}
                      className="p-2 rounded-lg bg-slate-200 text-slate-600 hover:bg-rose-100 hover:text-rose-600 transition"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-200 bg-slate-50">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};
