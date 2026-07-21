import React from 'react';
import { TourPackage, Currency } from '../types';
import { PackageCard } from '../components/PackageCard';
import { Users, Calendar, Award, ShieldCheck, ArrowRight } from 'lucide-react';

interface GroupToursPageProps {
  packages: TourPackage[];
  currency: Currency;
  onSelectPackage: (pkg: TourPackage) => void;
  wishlistIds: string[];
  onToggleWishlist: (pkg: TourPackage) => void;
  comparedIds: string[];
  onToggleCompare: (pkg: TourPackage) => void;
  openEnquiryModal: (type?: string, defaultDest?: string, pkgId?: string, pkgTitle?: string) => void;
}

export const GroupToursPage: React.FC<GroupToursPageProps> = ({
  packages,
  currency,
  onSelectPackage,
  wishlistIds,
  onToggleWishlist,
  comparedIds,
  onToggleCompare,
  openEnquiryModal
}) => {
  const groupPackages = packages.filter(p => p.category.includes('Group Tours') || p.category.includes('Cultural'));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-3 text-center max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-900/60 px-3.5 py-1 rounded-full border border-sky-700">
          Guaranteed Departures
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Fixed Departure Small Group Tours</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Join vibrant groups of like-minded travelers with English-speaking expert tour directors, luxury coach transfers, and pre-booked sight entry tickets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groupPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            currency={currency}
            onSelect={onSelectPackage}
            isWishlisted={wishlistIds.includes(pkg.id)}
            onToggleWishlist={onToggleWishlist}
            isCompared={comparedIds.includes(pkg.id)}
            onToggleCompare={onToggleCompare}
            openEnquiryModal={openEnquiryModal}
          />
        ))}
      </div>
    </div>
  );
};
