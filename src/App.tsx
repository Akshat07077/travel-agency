import React, { useState, useEffect } from 'react';
import { TourPackage, Destination, VisaService, Testimonial, BlogArticle, Offer, Currency } from './types';
import { INITIAL_PACKAGES, INITIAL_DESTINATIONS, INITIAL_VISA_SERVICES, INITIAL_TESTIMONIALS, INITIAL_BLOGS, INITIAL_OFFERS } from './data/mockData';

// Layout Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Page Views
import { HomePage } from './pages/HomePage';
import { PackagesPage } from './pages/PackagesPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { VisaServicesPage } from './pages/VisaServicesPage';
import { FlightsPage } from './pages/FlightsPage';
import { HotelsPage } from './pages/HotelsPage';
import { GroupToursPage } from './pages/GroupToursPage';
import { CustomPlannerPage } from './pages/CustomPlannerPage';
import { AboutPage } from './pages/AboutPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

// Modals & Drawers
import { PackageDetailsModal } from './components/PackageDetailsModal';
import { EnquiryModal } from './components/EnquiryModal';
import { CompareModal } from './components/CompareModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { AITravelConciergeModal } from './components/AITravelConciergeModal';
import { FloatingCTA } from './components/FloatingCTA';
import { OfferPopup } from './components/OfferPopup';

export default function App() {
  // Global Data State
  const [packages, setPackages] = useState<TourPackage[]>(INITIAL_PACKAGES);
  const [destinations, setDestinations] = useState<Destination[]>(INITIAL_DESTINATIONS);
  const [visaServices, setVisaServices] = useState<VisaService[]>(INITIAL_VISA_SERVICES);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [blogs, setBlogs] = useState<BlogArticle[]>(INITIAL_BLOGS);
  const [offers, setOffers] = useState<Offer[]>(INITIAL_OFFERS);

  // App Configuration State
  const [currency, setCurrency] = useState<Currency>('INR');
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);

  // Wishlist & Comparison State
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [comparedIds, setComparedIds] = useState<string[]>([]);

  // Modal Controls
  const [selectedPackageForDetails, setSelectedPackageForDetails] = useState<TourPackage | null>(null);

  const [enquiryModalState, setEnquiryModalState] = useState<{
    isOpen: boolean;
    type?: string;
    defaultDestination?: string;
    packageId?: string;
    packageTitle?: string;
  }>({ isOpen: false });

  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState<boolean>(false);
  const [compareModalOpen, setCompareModalOpen] = useState<boolean>(false);
  const [aiConciergeOpen, setAiConciergeOpen] = useState<boolean>(false);

  // Fetch live API data on mount
  const loadApiData = async () => {
    try {
      const [pkgRes, destRes, visaRes, testRes, blogRes, offerRes] = await Promise.all([
        fetch('/api/packages').then(r => r.json()).catch(() => null),
        fetch('/api/destinations').then(r => r.json()).catch(() => null),
        fetch('/api/visa-services').then(r => r.json()).catch(() => null),
        fetch('/api/testimonials').then(r => r.json()).catch(() => null),
        fetch('/api/blogs').then(r => r.json()).catch(() => null),
        fetch('/api/offers').then(r => r.json()).catch(() => null)
      ]);

      const pkgList = pkgRes?.data || pkgRes;
      const destList = destRes?.data || destRes;
      const visaList = visaRes?.data || visaRes;
      const testList = testRes?.data || testRes;
      const blogList = blogRes?.data || blogRes;
      const offerList = offerRes?.data || offerRes;

      if (Array.isArray(pkgList) && pkgList.length > 0) setPackages(pkgList);
      if (Array.isArray(destList) && destList.length > 0) setDestinations(destList);
      if (Array.isArray(visaList) && visaList.length > 0) setVisaServices(visaList);
      if (Array.isArray(testList) && testList.length > 0) setTestimonials(testList);
      if (Array.isArray(blogList) && blogList.length > 0) setBlogs(blogList);
      if (Array.isArray(offerList) && offerList.length > 0) setOffers(offerList);
    } catch (err) {
      console.warn('Using fallback local mock data:', err);
    }
  };

  useEffect(() => {
    loadApiData();
    // Auto scroll top on tab switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  // Handlers for Wishlist & Compare
  const handleToggleWishlist = (pkg: TourPackage) => {
    setWishlistIds(prev =>
      prev.includes(pkg.id) ? prev.filter(id => id !== pkg.id) : [...prev, pkg.id]
    );
  };

  const handleToggleCompare = (pkg: TourPackage) => {
    setComparedIds(prev => {
      if (prev.includes(pkg.id)) {
        return prev.filter(id => id !== pkg.id);
      } else {
        if (prev.length >= 3) {
          alert('You can compare a maximum of 3 packages side-by-side.');
          return prev;
        }
        return [...prev, pkg.id];
      }
    });
  };

  const openEnquiryModal = (type = 'General', defaultDest = '', pkgId = '', pkgTitle = '') => {
    setEnquiryModalState({
      isOpen: true,
      type,
      defaultDestination: defaultDest,
      packageId: pkgId,
      packageTitle: pkgTitle
    });
  };

  const wishlistPackages = packages.filter(p => wishlistIds.includes(p.id));
  const comparedPackages = packages.filter(p => comparedIds.includes(p.id));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Navigation Bar */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        currency={currency}
        setCurrency={setCurrency}
        wishlistCount={wishlistIds.length}
        compareCount={comparedIds.length}
        openWishlistDrawer={() => setWishlistDrawerOpen(true)}
        openCompareModal={() => setCompareModalOpen(true)}
        openEnquiryModal={openEnquiryModal}
        openAiConcierge={() => setAiConciergeOpen(true)}
        isAdminMode={isAdminMode}
        setIsAdminMode={setIsAdminMode}
      />

      {/* Main Active Page Route Content */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            packages={packages}
            destinations={destinations}
            testimonials={testimonials}
            blogs={blogs}
            offers={offers}
            currency={currency}
            setCurrentTab={setCurrentTab}
            onSelectPackage={(pkg) => setSelectedPackageForDetails(pkg)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            comparedIds={comparedIds}
            onToggleCompare={handleToggleCompare}
            openEnquiryModal={openEnquiryModal}
          />
        )}

        {currentTab === 'packages' && (
          <PackagesPage
            packages={packages}
            currency={currency}
            onSelectPackage={(pkg) => setSelectedPackageForDetails(pkg)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            comparedIds={comparedIds}
            onToggleCompare={handleToggleCompare}
            openEnquiryModal={openEnquiryModal}
          />
        )}

        {currentTab === 'destinations' && (
          <DestinationsPage
            destinations={destinations}
            setCurrentTab={setCurrentTab}
            openEnquiryModal={openEnquiryModal}
          />
        )}

        {currentTab === 'visa' && (
          <VisaServicesPage
            visaServices={visaServices}
            currency={currency}
            openEnquiryModal={openEnquiryModal}
          />
        )}

        {currentTab === 'flights' && (
          <FlightsPage
            currency={currency}
            openEnquiryModal={openEnquiryModal}
          />
        )}

        {currentTab === 'hotels' && (
          <HotelsPage
            currency={currency}
            openEnquiryModal={openEnquiryModal}
          />
        )}

        {currentTab === 'group-tours' && (
          <GroupToursPage
            packages={packages}
            currency={currency}
            onSelectPackage={(pkg) => setSelectedPackageForDetails(pkg)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            comparedIds={comparedIds}
            onToggleCompare={handleToggleCompare}
            openEnquiryModal={openEnquiryModal}
          />
        )}

        {currentTab === 'planner' && (
          <CustomPlannerPage
            currency={currency}
            openEnquiryModal={openEnquiryModal}
          />
        )}

        {currentTab === 'about' && <AboutPage />}

        {currentTab === 'testimonials' && <TestimonialsPage testimonials={testimonials} />}

        {currentTab === 'gallery' && (
          <GalleryPage
            galleryItems={[
              { id: 'g1', title: 'Romantic Sunset in Seminyak', destination: 'Bali', imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', caption: 'Bespoke honeymoon dinner on Bali beach' },
              { id: 'g2', title: 'Jungfraujoch Glacier Express', destination: 'Switzerland', imageUrl: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80', caption: 'Panoramas from Top of Europe glacier train' },
              { id: 'g3', title: 'Luxury Desert Safari Dune Dinner', destination: 'Dubai', imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80', caption: 'Private falconry & dune dinner in Dubai' },
              { id: 'g4', title: 'Cherry Blossom Stroll Kyoto', destination: 'Japan', imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80', caption: 'Cherry blossoms at Arashiyama bamboo grove' }
            ]}
          />
        )}

        {currentTab === 'blog' && <BlogPage blogs={blogs} />}

        {currentTab === 'contact' && <ContactPage />}

        {currentTab === 'admin' && (
          <AdminPage
            packages={packages}
            offers={offers}
            onRefreshData={loadApiData}
          />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Package Details Modal */}
      <PackageDetailsModal
        pkg={selectedPackageForDetails}
        onClose={() => setSelectedPackageForDetails(null)}
        currency={currency}
        isWishlisted={selectedPackageForDetails ? wishlistIds.includes(selectedPackageForDetails.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Global Booking & Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalState.isOpen}
        onClose={() => setEnquiryModalState({ isOpen: false })}
        enquiryType={enquiryModalState.type}
        defaultDestination={enquiryModalState.defaultDestination}
        packageId={enquiryModalState.packageId}
        packageTitle={enquiryModalState.packageTitle}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        wishlistPackages={wishlistPackages}
        onRemoveWishlist={handleToggleWishlist}
        onSelectPackage={(pkg) => setSelectedPackageForDetails(pkg)}
        currency={currency}
      />

      {/* Comparison Modal */}
      <CompareModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
        comparedPackages={comparedPackages}
        onRemoveFromCompare={(pkgId) => setComparedIds(prev => prev.filter(id => id !== pkgId))}
        currency={currency}
        openEnquiryModal={openEnquiryModal}
      />

      {/* Gemini AI Concierge Modal */}
      <AITravelConciergeModal
        isOpen={aiConciergeOpen}
        onClose={() => setAiConciergeOpen(false)}
        openEnquiryModal={openEnquiryModal}
      />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingCTA openEnquiryModal={openEnquiryModal} />

      {/* Limited-time Lead Offer Popup Banner */}
      <OfferPopup openEnquiryModal={openEnquiryModal} />
    </div>
  );
}
