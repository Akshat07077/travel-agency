export type Currency = 'USD' | 'EUR' | 'GBP' | 'INR' | 'AED';

export type Category = 
  | 'Honeymoon'
  | 'Family'
  | 'Adventure'
  | 'Luxury'
  | 'Budget'
  | 'Beach'
  | 'Cultural'
  | 'Group Tours'
  | 'Corporate';

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
  mealsIncluded: ('Breakfast' | 'Lunch' | 'Dinner')[];
  hotelName?: string;
  image?: string;
}

export interface PackageHotel {
  name: string;
  stars: number;
  location: string;
  image: string;
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  destination: string;
  country: string;
  region: 'Domestic' | 'International';
  category: Category[];
  durationDays: number;
  durationNights: number;
  price: {
    USD: number;
    EUR: number;
    GBP: number;
    INR: number;
    AED: number;
  };
  originalPrice?: {
    USD: number;
    EUR: number;
    GBP: number;
    INR: number;
    AED: number;
  };
  rating: number;
  reviewCount: number;
  featured: boolean;
  limitedOffer?: boolean;
  offerEnds?: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: DayItinerary[];
  hotels: PackageHotel[];
  availableDates: string[];
  faq: { question: string; answer: string }[];
  reviews: {
    id: string;
    userName: string;
    avatar?: string;
    rating: number;
    date: string;
    comment: string;
    tripType: string;
  }[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  tagline: string;
  description: string;
  heroImage: string;
  bestTimeToVisit: string;
  weather: string;
  popularAttractions: string[];
  availablePackagesCount: number;
  featured: boolean;
}

export interface VisaService {
  id: string;
  country: string;
  flagCode: string;
  heroImage: string;
  visaType: string; // e.g. Tourist 30-Day, E-Visa, Business
  processingTimeDays: string;
  validity: string;
  feeUSD: number;
  requirements: string[];
  requiredDocuments: string[];
  faqs: { question: string; answer: string }[];
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  tripTitle: string;
  date: string;
  comment: string;
  tripImage?: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  image: string;
  category: 'Landscape' | 'Culture' | 'Wildlife' | 'Adventure' | 'Resort';
  videoUrl?: string;
}

export interface EnquiryForm {
  id?: string;
  createdAt?: string;
  status?: 'New' | 'Contacted' | 'Confirmed' | 'Cancelled';
  type: 'Package' | 'Visa' | 'Flight' | 'Hotel' | 'Custom' | 'General' | 'Callback';
  fullName: string;
  email: string;
  phone: string;
  whatsappSame: boolean;
  destination?: string;
  packageId?: string;
  packageTitle?: string;
  travelDate?: string;
  guestsAdults?: number;
  guestsChildren?: number;
  budgetRange?: string;
  message?: string;
  // Flight Specific
  flightOrigin?: string;
  flightDestination?: string;
  flightType?: 'One-Way' | 'Round-Trip' | 'Multi-City';
  departureDate?: string;
  returnDate?: string;
  cabinClass?: string;
  // Hotel Specific
  hotelDestination?: string;
  checkIn?: string;
  checkOut?: string;
  rooms?: number;
  hotelRatingPref?: string;
  // Visa Specific
  visaCountry?: string;
  visaType?: string;
}

export interface CustomTripRequest {
  destination: string;
  durationDays: number;
  startDate: string;
  budgetPerPerson: number;
  travelersCount: number;
  travelStyle: 'Luxury' | 'Balanced' | 'Backpacker / Budget' | 'Ultra Luxury';
  hotelClass: '3-Star' | '4-Star' | '5-Star Luxury' | 'Private Villa';
  interests: string[];
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface Offer {
  id: string;
  title: string;
  code: string;
  discount: string;
  validUntil: string;
  description: string;
  heroImage: string;
}
