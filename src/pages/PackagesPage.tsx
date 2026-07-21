import React, { useState, useMemo, useEffect } from 'react';
import { TourPackage, Currency, Category } from '../types';
import { PackageCard } from '../components/PackageCard';
import { formatPrice } from '../utils/formatters';
import { Search, Filter, SlidersHorizontal, Grid, List, RefreshCw } from 'lucide-react';

interface PackagesPageProps {
  packages: TourPackage[];
  currency: Currency;
  onSelectPackage: (pkg: TourPackage) => void;
  wishlistIds: string[];
  onToggleWishlist: (pkg: TourPackage) => void;
  comparedIds: string[];
  onToggleCompare: (pkg: TourPackage) => void;
  openEnquiryModal: (type?: string, defaultDest?: string, pkgId?: string, pkgTitle?: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  packages,
  currency,
  onSelectPackage,
  wishlistIds,
  onToggleWishlist,
  comparedIds,
  onToggleCompare,
  openEnquiryModal
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const defaultMaxPrice = useMemo(() => {
    if (currency === 'INR') return 200000;
    if (currency === 'EUR') return 5500;
    if (currency === 'GBP') return 5000;
    if (currency === 'AED') return 25000;
    return 6000;
  }, [currency]);

  const [maxPrice, setMaxPrice] = useState<number>(defaultMaxPrice);

  useEffect(() => {
    setMaxPrice(defaultMaxPrice);
  }, [defaultMaxPrice]);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'duration'>('featured');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');

  const uniqueDestinations = useMemo(() => {
    const dests = packages.map(p => p.destination);
    return ['All', ...Array.from(new Set(dests))];
  }, [packages]);

  const categoriesList: (Category | 'All')[] = ['All', 'Honeymoon', 'Family', 'Luxury', 'Adventure', 'Cultural', 'Budget', 'Group Tours'];

  const filteredPackages = useMemo(() => {
    return packages.filter(pkg => {
      const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            pkg.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            pkg.country.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDest = selectedDestination === 'All' || pkg.destination === selectedDestination;
      const matchesCategory = selectedCategory === 'All' || pkg.category.includes(selectedCategory as Category);
      const matchesRegion = selectedRegion === 'All' || pkg.region === selectedRegion;
      const price = pkg.price[currency] || pkg.price.USD;
      const matchesPrice = price <= maxPrice;

      return matchesSearch && matchesDest && matchesCategory && matchesRegion && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return (a.price[currency] || a.price.USD) - (b.price[currency] || b.price.USD);
      if (sortBy === 'price-desc') return (b.price[currency] || b.price.USD) - (a.price[currency] || a.price.USD);
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'duration') return b.durationDays - a.durationDays;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [packages, searchTerm, selectedDestination, selectedCategory, selectedRegion, maxPrice, sortBy, currency]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDestination('All');
    setSelectedCategory('All');
    setSelectedRegion('All');
    setMaxPrice(defaultMaxPrice);
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-2">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800">
            Global Tour Collection
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif">Handcrafted Tour Packages</h1>
          <p className="text-slate-300 text-xs sm:text-sm">
            Filter through our top curated domestic and international luxury packages with private pool villas, 5-star hotels, guided tours, and transfers.
          </p>
        </div>
      </div>

      {/* Main Grid Layout: Sidebar Filters + Packages List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Filters (3 cols) */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-bold text-slate-900 text-sm font-serif flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-sky-600" /> Filter Packages
              </h3>
              <button onClick={resetFilters} className="text-[11px] text-sky-600 hover:underline flex items-center gap-1 font-semibold">
                <RefreshCw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Search Input */}
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Search Keywords</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Bali, Switzerland, Safari..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-sky-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Region Filter */}
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Region</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none"
              >
                <option value="All">All Regions (Domestic & International)</option>
                <option value="International">International Tours</option>
                <option value="Domestic">Domestic Tours</option>
              </select>
            </div>

            {/* Destination Dropdown */}
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Destination</label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none"
              >
                {uniqueDestinations.map((dest) => (
                  <option key={dest} value={dest}>{dest === 'All' ? 'All Destinations' : dest}</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Travel Style</label>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {categoriesList.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:text-sky-600">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="accent-sky-600"
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter Slider */}
            <div>
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                <span>Max Budget</span>
                <span className="text-sky-700 font-extrabold">{formatPrice(maxPrice, currency)}</span>
              </div>
              <input
                type="range"
                min={currency === 'INR' ? 10000 : 300}
                max={currency === 'INR' ? 200000 : 6000}
                step={currency === 'INR' ? 5000 : 100}
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                className="w-full accent-sky-600 cursor-pointer"
              />
            </div>
          </div>
        </aside>

        {/* Packages List Area (9 cols) */}
        <main className="lg:col-span-9 space-y-6">
          {/* Controls Bar: Count & Sorting */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-semibold text-slate-600">
              Showing <strong className="text-slate-900 font-bold">{filteredPackages.length}</strong> Packages
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs">
                <span className="text-slate-500">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-medium text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Customer Rating</option>
                  <option value="duration">Longest Duration</option>
                </select>
              </div>

              {/* Grid / List Layout Switcher */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setLayoutMode('grid')}
                  className={`p-1.5 rounded transition ${layoutMode === 'grid' ? 'bg-white shadow-xs text-sky-600' : 'text-slate-500'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setLayoutMode('list')}
                  className={`p-1.5 rounded transition ${layoutMode === 'list' ? 'bg-white shadow-xs text-sky-600' : 'text-slate-500'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          {filteredPackages.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3">
              <Filter className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-bold text-slate-800 text-base">No Packages Match Your Filters</h3>
              <p className="text-slate-500 text-xs">Try increasing your budget slider or clearing specific category filters.</p>
              <button onClick={resetFilters} className="px-5 py-2.5 bg-sky-600 text-white font-bold text-xs rounded-xl">
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className={`grid ${layoutMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {filteredPackages.map((pkg) => (
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
          )}
        </main>
      </div>
    </div>
  );
};
