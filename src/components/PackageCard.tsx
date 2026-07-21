import React from 'react';
import { TourPackage, Currency } from '../types';
import { formatPrice, calculateDiscountPercentage } from '../utils/formatters';
import { MapPin, Clock, Star, Heart, Scale, Sparkles, Check, ArrowRight } from 'lucide-react';

interface PackageCardProps {
  pkg: TourPackage;
  currency: Currency;
  onSelect: (pkg: TourPackage) => void;
  isWishlisted: boolean;
  onToggleWishlist: (pkg: TourPackage) => void;
  isCompared: boolean;
  onToggleCompare: (pkg: TourPackage) => void;
  openEnquiryModal: (type?: string, defaultDest?: string, pkgId?: string, pkgTitle?: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  currency,
  onSelect,
  isWishlisted,
  onToggleWishlist,
  isCompared,
  onToggleCompare,
  openEnquiryModal
}) => {
  const currentPrice = pkg.price[currency] || pkg.price.USD;
  const originalPrice = pkg.originalPrice ? (pkg.originalPrice[currency] || pkg.originalPrice.USD) : undefined;
  const discountPct = calculateDiscountPercentage(currentPrice, originalPrice);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Card Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
        <img
          src={pkg.heroImage}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <div className="flex flex-wrap items-center gap-1.5">
            {pkg.limitedOffer && (
              <span className="bg-rose-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 animate-pulse">
                <Sparkles className="w-3 h-3" /> Special Deal
              </span>
            )}
            <span className="bg-slate-900/80 backdrop-blur-md text-slate-100 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-slate-700/50">
              {pkg.category[0] || 'Tour'}
            </span>
          </div>

          {/* Action Buttons: Wishlist & Compare */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => { e.stopPropagation(); onToggleCompare(pkg); }}
              className={`p-2 rounded-full backdrop-blur-md transition cursor-pointer ${
                isCompared
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-900/60 text-slate-200 hover:bg-slate-900'
              }`}
              title={isCompared ? 'Remove from Compare' : 'Add to Compare'}
            >
              <Scale className="w-4 h-4" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); onToggleWishlist(pkg); }}
              className={`p-2 rounded-full backdrop-blur-md transition cursor-pointer ${
                isWishlisted
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-slate-900/60 text-slate-200 hover:bg-slate-900 hover:text-rose-400'
              }`}
              title={isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Bottom Image Overlay Details */}
        <div className="absolute bottom-3 left-3 right-3 text-white z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-semibold bg-slate-950/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <Clock className="w-3.5 h-3.5 text-teal-300" />
            <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold bg-amber-500/90 text-slate-950 px-2.5 py-1 rounded-full shadow-md">
            <Star className="w-3.5 h-3.5 fill-slate-950" />
            <span>{pkg.rating} ({pkg.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-1 text-xs font-medium text-sky-700 mb-1">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>{pkg.destination}, {pkg.country}</span>
          </div>

          <h3
            onClick={() => onSelect(pkg)}
            className="text-lg font-bold text-slate-900 font-serif line-clamp-1 hover:text-sky-600 cursor-pointer transition"
          >
            {pkg.title}
          </h3>

          <p className="text-slate-500 text-xs mt-1 line-clamp-2 leading-relaxed">
            {pkg.subtitle || pkg.overview}
          </p>

          {/* Highlights Checklist */}
          <div className="mt-3 space-y-1">
            {pkg.highlights.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & Booking Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Starting From</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-extrabold text-slate-900">
                {formatPrice(currentPrice, currency)}
              </span>
              {originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {formatPrice(originalPrice, currency)}
                </span>
              )}
              {discountPct && (
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  {discountPct}% OFF
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onSelect(pkg)}
              className="px-3.5 py-2 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white font-semibold text-xs transition cursor-pointer"
            >
              Details
            </button>
            <button
              onClick={() => openEnquiryModal('Package', pkg.destination, pkg.id, pkg.title)}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold text-xs transition shadow-md cursor-pointer flex items-center gap-1"
            >
              <span>Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
