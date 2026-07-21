import { TourPackage, Destination, VisaService, BlogArticle, Testimonial, GalleryItem, Offer } from '../types';

export const INITIAL_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-1',
    title: 'Magical Bali & Nusa Penida Escape',
    subtitle: 'Luxury Private Pool Villa & Island Hopping',
    slug: 'magical-bali-nusa-penida',
    destination: 'Bali',
    country: 'Indonesia',
    region: 'International',
    category: ['Honeymoon', 'Luxury', 'Beach', 'Adventure'],
    durationDays: 7,
    durationNights: 6,
    price: { USD: 1299, EUR: 1199, GBP: 1049, INR: 99999, AED: 4750 },
    originalPrice: { USD: 1599, EUR: 1470, GBP: 1290, INR: 124999, AED: 5870 },
    rating: 4.9,
    reviewCount: 142,
    featured: true,
    limitedOffer: true,
    offerEnds: '2026-08-31',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Experience the magic of Bali with private pool villas in Ubud, romantic dinners, speed boat transfers to Nusa Penida, Kelingking T-Rex cliff views, and sunset beach clubs in Seminyak.',
    highlights: [
      '3 Nights Private Pool Villa in Ubud + 3 Nights 5-Star Beachfront Resort in Seminyak',
      'Full Day Private Nusa Penida Island Tour with Speedboat',
      'Tegallalang Rice Terrace Swing & Sacred Monkey Forest',
      'Uluwatu Temple Sunset Kecak Fire Dance Show',
      'Daily Floating Breakfast & 90-min Balinese Couples Spa'
    ],
    inclusions: [
      '6 Nights 5-Star Accommodation',
      'Daily Buffet Breakfast & 2 Romantic Dinners',
      'All Private Transfers in AC SUV',
      'Speedboat Tickets to Nusa Penida & Entry Permits',
      'English Speaking Private Tour Guide',
      'Sim Card with Unlimited Data'
    ],
    exclusions: [
      'International Flight Tickets (Available on Request)',
      'Indonesia Visa on Arrival ($35 USD)',
      'Personal Expenses & Tipping',
      'Travel Insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bali & Ubud Villa Check-in',
        description: 'Warm traditional Balinese welcome at Denpasar Airport. Private transfer to your luxury jungle villa in Ubud. Relax by your private infinity pool.',
        activities: ['Airport Meet & Greet', 'Check-in at Ubud Pool Villa', 'Candlelight Welcome Dinner'],
        mealsIncluded: ['Dinner'],
        hotelName: 'The Kayon Jungle Resort Ubud'
      },
      {
        day: 2,
        title: 'Ubud Cultural Wonders & Bali Swing',
        description: 'Explore the heart of Bali. Visit the Tegallalang Rice Terraces, take iconic swing photos, explore Sacred Monkey Forest, and visit Tirta Empul Holy Water Temple.',
        activities: ['Tegallalang Rice Terrace', 'Bali Jungle Swing', 'Sacred Monkey Forest Sanctuary'],
        mealsIncluded: ['Breakfast', 'Lunch'],
        hotelName: 'The Kayon Jungle Resort Ubud'
      },
      {
        day: 3,
        title: 'Volcano Sunrise & Waterfall Trail',
        description: 'Visit Mt. Batur viewpoint for breathtaking panorama, explore Tegenungan Waterfall, and indulge in a 90-minute traditional Balinese Massage.',
        activities: ['Mt. Batur Viewpoint', 'Tegenungan Waterfall', 'Aromatherapy Spa Session'],
        mealsIncluded: ['Breakfast'],
        hotelName: 'The Kayon Jungle Resort Ubud'
      },
      {
        day: 4,
        title: 'Nusa Penida Day Trip & Seminyak Transfer',
        description: 'Early morning speedboat to Nusa Penida. Visit Kelingking Beach (T-Rex Cliff), Broken Beach, and Angel’s Billabong. Transfer to Seminyak luxury beach resort in evening.',
        activities: ['Speedboat to Nusa Penida', 'Kelingking T-Rex Beach', 'Broken Beach & Angel’s Billabong'],
        mealsIncluded: ['Breakfast', 'Lunch'],
        hotelName: 'W Bali - Seminyak'
      },
      {
        day: 5,
        title: 'Uluwatu Sunset & Kecak Fire Dance',
        description: 'Leisure morning at Seminyak Beach. In the afternoon, head to Uluwatu Temple perched on a 70m cliff over the ocean. Watch the mesmerizing sunset Kecak dance followed by Jimbaran Seafood Dinner.',
        activities: ['Water Sports at Tanjung Benoa', 'Uluwatu Cliff Temple', 'Kecak Fire Dance', 'Jimbaran Candlelight Seafood Dinner'],
        mealsIncluded: ['Breakfast', 'Dinner'],
        hotelName: 'W Bali - Seminyak'
      },
      {
        day: 6,
        title: 'Seminyak Beach Clubs & Shopping',
        description: 'Day at leisure to explore Seminyak cafes, shopping boutiques, or relax at Potato Head / Finns Beach Club with VIP sunbed reservations included.',
        activities: ['Potato Head Beach Club VIP Access', 'Seminyak Boutique Shopping'],
        mealsIncluded: ['Breakfast'],
        hotelName: 'W Bali - Seminyak'
      },
      {
        day: 7,
        title: 'Souvenir Shopping & Departure',
        description: 'Enjoy a leisurely breakfast, souvenir shopping at Krisna Oleh Oleh, and private airport transfer for your return flight.',
        activities: ['Handicraft Shopping', 'Airport Transfer'],
        mealsIncluded: ['Breakfast']
      }
    ],
    hotels: [
      { name: 'The Kayon Jungle Resort', stars: 5, location: 'Ubud, Bali', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80' },
      { name: 'W Bali - Seminyak', stars: 5, location: 'Seminyak Beach', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80' }
    ],
    availableDates: ['2026-08-10', '2026-08-20', '2026-09-05', '2026-09-18', '2026-10-02'],
    faq: [
      { question: 'Is Visa required for Bali?', answer: 'Most nationalities can get a 30-day Visa on Arrival (e-VOA) online or at Denpasar airport for $35 USD.' },
      { question: 'Are vegetarian/halal meal options available?', answer: 'Yes! Bali offers abundant vegetarian, vegan, and halal dining options everywhere.' }
    ],
    reviews: [
      { id: 'r1', userName: 'Sarah & David Jenkins', rating: 5, date: '2026-06-15', comment: 'Hands down the best trip of our lives! The Nusa Penida tour was seamless and W Bali was sheer perfection.', tripType: 'Honeymoon' },
      { id: 'r2', userName: 'Rahul Sharma', rating: 5, date: '2026-05-22', comment: 'WanderLuxe handled everything from airport pick-up to private drivers. Highly recommended!', tripType: 'Family Vacation' }
    ]
  },
  {
    id: 'pkg-2',
    title: 'Swiss Alps & European Elegance',
    subtitle: 'Zurich, Lucerne, Interlaken & Jungfraujoch Top of Europe',
    slug: 'swiss-alps-european-elegance',
    destination: 'Switzerland',
    country: 'Switzerland',
    region: 'International',
    category: ['Luxury', 'Family', 'Cultural'],
    durationDays: 8,
    durationNights: 7,
    price: { USD: 2899, EUR: 2680, GBP: 2350, INR: 225000, AED: 10650 },
    originalPrice: { USD: 3200, EUR: 2950, GBP: 2600, INR: 250000, AED: 11750 },
    rating: 4.95,
    reviewCount: 98,
    featured: true,
    limitedOffer: false,
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Journey through fairytale Switzerland! Ride panoramic Swiss Travel Pass trains, ascend Jungfraujoch - Top of Europe, cruise Lake Lucerne, and stroll romantic Zurich.',
    highlights: [
      '8-Day 1st Class Swiss Travel Pass with Unlimited Scenic Trains & Lakes',
      'Excursion to Jungfraujoch Top of Europe (3,454m glacier view)',
      'Mt. Titlis Cable Car with Rotair 360 & Ice Flyer Glacier Chairlift',
      'Scenic Lake Lucerne & Lake Thun Cruises',
      '4-Star Alpine View Hotels in Lucerne & Interlaken'
    ],
    inclusions: [
      '7 Nights 4-Star Central Alpine Hotels',
      'Daily Swiss Buffet Breakfast',
      '1st Class Swiss Travel Pass',
      'Jungfraujoch & Mt. Titlis Mountain Peak Passes',
      '24/7 Concierge Support'
    ],
    exclusions: [
      'Schengen Visa Fee',
      'International Airfare',
      'City Tourist Taxes (~CHF 4/night per person)',
      'Lunch & Dinners unless specified'
    ],
    itinerary: [
      { day: 1, title: 'Arrive in Zurich & Scenic Train to Lucerne', description: 'Arrive Zurich airport, board 1st class train to picturesque Lucerne. Evening walk along Chapel Bridge and Old Town.', activities: ['Chapel Bridge Walk', 'Old Town Lucerne'], mealsIncluded: [], hotelName: 'Hotel AMERON Lucerne Flora' },
      { day: 2, title: 'Mt. Titlis Glacier Excursion', description: 'Take train to Engelberg and ascend Mt. Titlis in world’s first revolving cable car Rotair. Experience Ice Palace & Cliff Walk suspension bridge.', activities: ['Rotair Cable Car', 'Cliff Walk', 'Glacier Cave'], mealsIncluded: ['Breakfast'], hotelName: 'Hotel AMERON Lucerne Flora' },
      { day: 3, title: 'GoldenPass Line to Interlaken', description: 'Board the iconic GoldenPass Express panoramic train wind through emerald lakes and mountain passes to Interlaken.', activities: ['GoldenPass Scenic Express', 'Lake Brienz Stroll'], mealsIncluded: ['Breakfast'], hotelName: 'Victoria-Jungfrau Grand Hotel' },
      { day: 4, title: 'Jungfraujoch - Top of Europe', description: 'Ascend Jungfrau Railway through Eiger mountain to Europe highest railway station. Walk on snow glacier and visit Ice Palace.', activities: ['Eiger Express Tricable', 'Sphinx Observatory', 'Ice Palace'], mealsIncluded: ['Breakfast'], hotelName: 'Victoria-Jungfrau Grand Hotel' },
      { day: 5, title: 'Grindelwald First & Cliff Walk', description: 'Visit Grindelwald First for adventure options: First Cliff Walk Tissot, zipline, or scenic walk to Lake Bachalpsee.', activities: ['First Cliff Walk', 'Lake Bachalpsee Hike'], mealsIncluded: ['Breakfast'], hotelName: 'Victoria-Jungfrau Grand Hotel' },
      { day: 6, title: 'Bern Capital City Day Trip', description: 'Take short train ride to UNESCO World Heritage capital city of Bern. See Zytglogge Clock Tower, Bear Park, and Parliament Palace.', activities: ['Bern Old Town Walking Tour', 'Zytglogge Clock'], mealsIncluded: ['Breakfast'], hotelName: 'Victoria-Jungfrau Grand Hotel' },
      { day: 7, title: 'Zurich Lake Cruise & Luxury Shopping', description: 'Return train to Zurich. Enjoy Lake Zurich boat cruise and luxury shopping along Bahnhofstrasse.', activities: ['Lake Zurich Boat Tour', 'Bahnhofstrasse Shopping'], mealsIncluded: ['Breakfast'], hotelName: 'Hotel Schweizerhof Zurich' },
      { day: 8, title: 'Departure from Zurich', description: 'Check out and take short train to Zurich Airport for your home flight.', activities: ['Airport Transfer'], mealsIncluded: ['Breakfast'] }
    ],
    hotels: [
      { name: 'AMERON Lucerne Flora', stars: 4, location: 'Lucerne', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' },
      { name: 'Victoria-Jungfrau Grand Hotel', stars: 5, location: 'Interlaken', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80' }
    ],
    availableDates: ['2026-08-15', '2026-09-01', '2026-09-20', '2026-10-10'],
    faq: [
      { question: 'Do I need a Schengen visa?', answer: 'Yes, Switzerland is part of the Schengen area.' }
    ],
    reviews: [
      { id: 'r3', userName: 'Mark & Elena Miller', rating: 5, date: '2026-06-10', comment: 'The Swiss Travel Pass made moving between cities so easy and stress-free!', tripType: 'Luxury Leisure' }
    ]
  },
  {
    id: 'pkg-3',
    title: 'Dubai Glamour & Desert Safari Experience',
    subtitle: 'Burj Khalifa, Atlantis Aquaventure & Royal Dunes',
    slug: 'dubai-glamour-desert-safari',
    destination: 'Dubai',
    country: 'United Arab Emirates',
    region: 'International',
    category: ['Family', 'Luxury', 'Budget', 'Adventure'],
    durationDays: 5,
    durationNights: 4,
    price: { USD: 799, EUR: 740, GBP: 649, INR: 59999, AED: 2930 },
    originalPrice: { USD: 999, EUR: 920, GBP: 810, INR: 74999, AED: 3670 },
    rating: 4.88,
    reviewCount: 215,
    featured: true,
    limitedOffer: true,
    offerEnds: '2026-08-25',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Experience ultra-modern luxury, golden desert dunes, world-record landmarks, and Arabian hospitality in vibrant Dubai!',
    highlights: [
      '124th & 125th Floor Observation Deck Ticket at Burj Khalifa',
      '4x4 Premium Desert Safari with Dune Bashing, Camel Ride & BBQ Dinner',
      'Marina Dhow Cruise with Live Tanoura Show & Buffet Dinner',
      'Day Ticket to Atlantis Aquaventure Waterpark & Lost Chambers',
      'Dubai Miracle Garden & Global Village Tour (Seasonal)'
    ],
    inclusions: [
      '4 Nights 4-Star / 5-Star Hotel Stay in Downtown / Marina',
      'Daily Breakfast & 2 Dinner Cruises/Camp Dinners',
      'Airport Pick & Drop in Private Vehicle',
      'Sightseeing Transfers on Shared / Private basis',
      'UAE Express Visa Processing'
    ],
    exclusions: ['Tourism Dirham Fee', 'Flight Tickets', 'Personal Expenses'],
    itinerary: [
      { day: 1, title: 'Arrival & Dubai Marina Dhow Cruise', description: 'Arrival at DXB Airport. Check in at hotel. Evening romantic Dhow Cruise along glowing Dubai Marina with buffet dinner.', activities: ['Airport Pick-up', 'Marina Dhow Cruise Dinner'], mealsIncluded: ['Dinner'], hotelName: 'Mövenpick Hotel Jumeirah Beach' },
      { day: 2, title: 'Modern Dubai City Tour & Burj Khalifa At The Top', description: 'Visit Dubai Frame, Jumeirah Beach, Burj Al Arab photo stop, Dubai Mall, and ascend Burj Khalifa 124th floor at sunset.', activities: ['Dubai City Tour', 'Burj Khalifa At The Top', 'Dubai Fountain Show'], mealsIncluded: ['Breakfast'], hotelName: 'Mövenpick Hotel Jumeirah Beach' },
      { day: 3, title: 'Desert Safari with Dune Bashing & BBQ Night', description: 'Morning leisure. Afternoon pick-up in 4x4 Land Cruiser for thrilling sand dune bashing, quad biking, camel ride, henna painting, Tanoura dance & belly dance BBQ feast.', activities: ['4x4 Dune Bashing', 'Camel Trekking', 'Bedouin Camp BBQ'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'Mövenpick Hotel Jumeirah Beach' },
      { day: 4, title: 'Atlantis Aquaventure & Palm Jumeirah', description: 'Full day of adrenaline at the world’s largest waterpark Atlantis Aquaventure & Lost Chambers Aquarium.', activities: ['Aquaventure Waterpark', 'Lost Chambers Aquarium'], mealsIncluded: ['Breakfast'], hotelName: 'Mövenpick Hotel Jumeirah Beach' },
      { day: 5, title: 'Gold Souk Shopping & Departure', description: 'Visit traditional Gold & Spice Souks for shopping before airport transfer.', activities: ['Gold Souk Shopping', 'Airport Transfer'], mealsIncluded: ['Breakfast'] }
    ],
    hotels: [
      { name: 'Mövenpick Hotel Jumeirah Beach', stars: 5, location: 'JBR, Dubai', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' }
    ],
    availableDates: ['2026-08-12', '2026-08-22', '2026-09-08', '2026-09-25'],
    faq: [{ question: 'How long does Dubai Visa take?', answer: 'Express UAE visa is processed within 24-48 hours.' }],
    reviews: [
      { id: 'r4', userName: 'Amitabh & Family', rating: 5, date: '2026-06-28', comment: 'My kids loved Atlantis and the Desert Safari. 10/10 service!', tripType: 'Family Trip' }
    ]
  },
  {
    id: 'pkg-4',
    title: 'Santorini & Athens Romantic Odyssey',
    subtitle: 'Sunset Cruises, Caldera Views & Aegean Paradise',
    slug: 'santorini-athens-romantic-odyssey',
    destination: 'Santorini',
    country: 'Greece',
    region: 'International',
    category: ['Honeymoon', 'Luxury', 'Beach'],
    durationDays: 7,
    durationNights: 6,
    price: { USD: 2199, EUR: 2020, GBP: 1780, INR: 169999, AED: 8070 },
    originalPrice: { USD: 2499, EUR: 2300, GBP: 2020, INR: 195000, AED: 9170 },
    rating: 4.92,
    reviewCount: 76,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Whisk away to the whitewashed cliffside towns of Oia, blue-domed churches, volcanic black sand beaches, and the iconic Acropolis of Athens.',
    highlights: [
      '3 Nights Cliffside Caldera View Suite in Oia, Santorini',
      'Catamaran Sunset Cruise with BBQ & Unlimited Greek Wine',
      'Athens Acropolis Private Guided Walking Tour',
      'Wine Tasting at Santo Wines Winery overlooking Volcano',
      'High-Speed Ferry Tickets Athens to Santorini Roundtrip'
    ],
    inclusions: ['6 Nights 4-Star/5-Star Boutique Hotels', 'Daily Breakfast', 'Catamaran Cruise', 'High-Speed Ferries', 'Private Airport Transfers'],
    exclusions: ['Schengen Visa', 'International Flights', 'Stay Tax'],
    itinerary: [
      { day: 1, title: 'Arrival in Athens', description: 'Arrive in ancient Athens. Check in at boutique hotel with Acropolis view rooftop.', activities: ['Acropolis Rooftop Welcome Cocktail'], mealsIncluded: ['Dinner'], hotelName: 'Electra Metropolis Athens' },
      { day: 2, title: 'Acropolis Tour & High-Speed Ferry to Santorini', description: 'Guided tour of Parthenon and Acropolis Museum. Board afternoon ferry to cliffside Santorini.', activities: ['Parthenon Tour', 'Aegean Sea Ferry Ride'], mealsIncluded: ['Breakfast'], hotelName: 'Andronis Luxury Suites Oia' },
      { day: 3, title: 'Oia Village Stroll & Wine Tasting', description: 'Stroll Oia’s marble paths and iconic blue domes. Enjoy wine tasting with cheese platters at Santo Winery.', activities: ['Oia Blue Domes Walk', 'Winery Tasting'], mealsIncluded: ['Breakfast'], hotelName: 'Andronis Luxury Suites Oia' },
      { day: 4, title: 'Luxury Catamaran Sunset Cruise', description: 'Sail past Red Beach, White Beach, and Hot Springs. Snorkel crystal waters and watch famous Oia sunset from the catamaran deck.', activities: ['Catamaran Sailing', 'Hot Springs Swimming', 'Greek BBQ Dinner'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'Andronis Luxury Suites Oia' },
      { day: 5, title: 'Volcanic Black Sand Beaches & Pyrgos', description: 'Explore Perissa Black Sand Beach, Akrotiri ancient ruins, and medieval Pyrgos village.', activities: ['Perissa Beach Relaxation', 'Pyrgos Village'], mealsIncluded: ['Breakfast'], hotelName: 'Andronis Luxury Suites Oia' },
      { day: 6, title: 'Ferry Back to Athens & Plaka Night Walk', description: 'Morning ferry to Athens. Evening leisure in bustling Plaka neighborhood.', activities: ['Plaka Night Market'], mealsIncluded: ['Breakfast'], hotelName: 'Electra Metropolis Athens' },
      { day: 7, title: 'Departure Athens', description: 'Transfer to Athens International Airport for departure.', activities: ['Airport Transfer'], mealsIncluded: ['Breakfast'] }
    ],
    hotels: [
      { name: 'Andronis Luxury Suites', stars: 5, location: 'Oia, Santorini', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80' }
    ],
    availableDates: ['2026-08-18', '2026-09-02', '2026-09-22'],
    faq: [{ question: 'Is Santorini suitable for couples?', answer: 'Santorini is widely considered one of the world top honeymoon destinations.' }],
    reviews: [
      { id: 'r5', userName: 'Chloe & James', rating: 5, date: '2026-06-04', comment: 'Watching the Oia sunset from our private balcony was unforgettable.', tripType: 'Honeymoon' }
    ]
  },
  {
    id: 'pkg-5',
    title: 'Kerala Backwaters & Tea Gardens Bliss',
    subtitle: 'Luxury Houseboat Cruise in Alleppey & Munnar Hills',
    slug: 'kerala-backwaters-tea-gardens',
    destination: 'Kerala',
    country: 'India',
    region: 'Domestic',
    category: ['Family', 'Honeymoon', 'Cultural', 'Budget'],
    durationDays: 6,
    durationNights: 5,
    price: { USD: 499, EUR: 460, GBP: 400, INR: 34999, AED: 1830 },
    originalPrice: { USD: 650, EUR: 600, GBP: 520, INR: 44999, AED: 2380 },
    rating: 4.87,
    reviewCount: 164,
    featured: true,
    limitedOffer: true,
    offerEnds: '2026-08-30',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Rejuvenate in God’s Own Country! Misty tea plantations in Munnar, spice gardens in Thekkady, Periyar wildlife boating, and overnight private Kettuvallam luxury houseboat in Alleppey.',
    highlights: [
      'Overnight Private AC Houseboat Stay in Alleppey with Traditional Karimeen Meals',
      'Munnar Tea Gardens, Mattupetty Dam & Eravikulam National Park (Nilgiri Tahr)',
      'Spice Plantation Tour & Kathakali Martial Arts Show in Thekkady',
      'Kochi Heritage Walk - Chinese Fishing Nets, Fort Kochi & Mattancherry Palace'
    ],
    inclusions: [
      '5 Nights Stay (2N Munnar, 1N Thekkady, 1N Alleppey Houseboat, 1N Kochi)',
      'All Meals on Houseboat + Daily Breakfast at Resorts',
      'Dedicated AC Sedan/SUV for entire tour'
    ],
    exclusions: ['Airfare/Train tickets', 'Entry tickets to monuments', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrival Kochi to Munnar Drive', description: 'Pick up from Kochi Airport. Scenic drive to Munnar passing Cheeyappara Waterfalls.', activities: ['Waterfall Photo Stops', 'Tea Valley Check-in'], mealsIncluded: ['Dinner'], hotelName: 'Fragrant Nature Munnar' },
      { day: 2, title: 'Munnar Tea Estate Exploration', description: 'Visit Eravikulam Park, Tea Museum, Mattupetty Dam, and Echo Point.', activities: ['Tea Factory Tour', 'Boating at Mattupetty'], mealsIncluded: ['Breakfast'], hotelName: 'Fragrant Nature Munnar' },
      { day: 3, title: 'Munnar to Thekkady Spice Trail', description: 'Drive to Thekkady. Spice garden walking tour and Kathakali cultural show in evening.', activities: ['Spice Plantation Walk', 'Cultural Show'], mealsIncluded: ['Breakfast'], hotelName: 'Spice Village Thekkady' },
      { day: 4, title: 'Thekkady to Alleppey Houseboat', description: 'Board traditional luxury wooden houseboat at 12 PM. Cruise serene coconut palm backwaters with freshly cooked Keralite meals onboard.', activities: ['Backwater Cruising', 'Sunset Fishing'], mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'], hotelName: 'Luxury Private Houseboat Alleppey' },
      { day: 5, title: 'Alleppey to Fort Kochi', description: 'Disembark houseboat. Drive to Kochi. Visit Chinese Fishing Nets, St. Francis Church, and Jew Town.', activities: ['Fort Kochi Heritage Walk'], mealsIncluded: ['Breakfast'], hotelName: 'Brunton Boatyard Kochi' },
      { day: 6, title: 'Kochi Departure', description: 'Shopping at Lulu Mall and transfer to Kochi International Airport.', activities: ['Airport Transfer'], mealsIncluded: ['Breakfast'] }
    ],
    hotels: [
      { name: 'Fragrant Nature Resort', stars: 5, location: 'Munnar', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' }
    ],
    availableDates: ['2026-08-08', '2026-08-20', '2026-09-05'],
    faq: [{ question: 'Is Kerala safe for monsoon travel?', answer: 'Yes, monsoon in Kerala (June-Sept) is lush green and famous for Ayurvedic rejuvenation!' }],
    reviews: [
      { id: 'r6', userName: 'Sunil & Priya V.', rating: 5, date: '2026-07-02', comment: 'The houseboat chef prepared delicious local fish curry. Unmatched serenity!', tripType: 'Family Trip' }
    ]
  },
  {
    id: 'pkg-6',
    title: 'Japan Cherry Blossom & High-Speed Bullet Train',
    subtitle: 'Tokyo, Mt. Fuji, Kyoto Temples & Osaka Street Food',
    slug: 'japan-cherry-blossom-bullet-train',
    destination: 'Japan',
    country: 'Japan',
    region: 'International',
    category: ['Cultural', 'Luxury', 'Family'],
    durationDays: 9,
    durationNights: 8,
    price: { USD: 3499, EUR: 3230, GBP: 2840, INR: 275000, AED: 12850 },
    originalPrice: { USD: 3899, EUR: 3600, GBP: 3150, INR: 310000, AED: 14300 },
    rating: 4.98,
    reviewCount: 112,
    featured: true,
    limitedOffer: false,
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Discover ultra-modern Tokyo robotics, majestic Mt. Fuji views from Lake Kawaguchiko, ancient Kyoto shrines, Geisha districts, and Shinkansen bullet train rides.',
    highlights: [
      '7-Day JR Whole Japan Rail Pass for Shinkansen Express Trains',
      'Mt. Fuji 5th Station & Hakone Ropeway Cable Car + Lake Ashi Pirate Ship Cruise',
      'Kyoto Fushimi Inari 10,000 Red Torii Gates & Arashiyama Bamboo Grove',
      'teamLab Planets Tokyo Immersive Digital Art Museum Entry Ticket',
      'Osaka Dotonbori Street Food Guided Tasting Tour'
    ],
    inclusions: ['8 Nights 4-Star Central Hotels', 'Daily Breakfast', 'JR Rail Pass', 'teamLab Entry', 'English Tour Guides'],
    exclusions: ['Japan Visa Fee', 'International Flights', 'Personal Dinners'],
    itinerary: [
      { day: 1, title: 'Arrival Tokyo', description: 'Arrive Tokyo Narita/Haneda. Airport welcome and transfer to hotel in Shinjuku.', activities: ['Welcome Izakaya Dinner'], mealsIncluded: ['Dinner'], hotelName: 'Keio Plaza Hotel Tokyo' },
      { day: 2, title: 'Tokyo Modern & Tradition', description: 'Visit Senso-ji Temple Asakusa, Shibuya Crossing, Harajuku Takeshita Street, and teamLab Planets museum.', activities: ['Shibuya Crossing Walk', 'teamLab Planets'], mealsIncluded: ['Breakfast'], hotelName: 'Keio Plaza Hotel Tokyo' },
      { day: 3, title: 'Mt. Fuji & Hakone Excursion', description: 'Full day tour to Mt. Fuji 5th Station, Hakone Ropeway, and Lake Ashi Cruise.', activities: ['Mt. Fuji Viewpoint', 'Hakone Ropeway'], mealsIncluded: ['Breakfast', 'Lunch'], hotelName: 'Hakone Onsen Ryokan' },
      { day: 4, title: 'Shinkansen Bullet Train to Kyoto', description: 'Ride Shinkansen bullet train at 300 km/h to Kyoto. Afternoon visit Gion Geisha district.', activities: ['Shinkansen Bullet Train', 'Gion Historic Quarter'], mealsIncluded: ['Breakfast'], hotelName: 'Kyoto Tokyu Hotel' },
      { day: 5, title: 'Kyoto Bamboo Forest & Golden Pavilion', description: 'Visit Arashiyama Bamboo Grove, Kinkaku-ji (Golden Pavilion), and Fushimi Inari Shrine.', activities: ['Arashiyama Bamboo Grove', 'Fushimi Inari Torii Shrine'], mealsIncluded: ['Breakfast'], hotelName: 'Kyoto Tokyu Hotel' },
      { day: 6, title: 'Nara Deer Park & Osaka Transfer', description: 'Train to Nara Park to feed friendly free-roaming deer. Proceed to vibrant Osaka.', activities: ['Nara Deer Feeding', 'Todai-ji Giant Buddha'], mealsIncluded: ['Breakfast'], hotelName: 'Swissotel Nankai Osaka' },
      { day: 7, title: 'Osaka Castle & Dotonbori Street Food', description: 'Visit Osaka Castle Park. Evening Dotonbori food walk tasting Takoyaki & Okonomiyaki.', activities: ['Osaka Castle', 'Dotonbori Food Walk'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'Swissotel Nankai Osaka' },
      { day: 8, title: 'Universal Studios Japan or Leisure', description: 'Day pass to USJ Super Nintendo World or shopping in Shinsaibashi.', activities: ['USJ Theme Park (Optional)'], mealsIncluded: ['Breakfast'], hotelName: 'Swissotel Nankai Osaka' },
      { day: 9, title: 'Departure Osaka', description: 'Kansai Airport Express train for your departure flight.', activities: ['Airport Transfer'], mealsIncluded: ['Breakfast'] }
    ],
    hotels: [{ name: 'Keio Plaza Hotel Tokyo', stars: 4, location: 'Tokyo Shinjuku', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80' }],
    availableDates: ['2026-09-10', '2026-09-28', '2026-10-15'],
    faq: [{ question: 'How do I apply for Japan e-Visa?', answer: 'Many passport holders qualify for online e-Visa or visa exemption.' }],
    reviews: [{ id: 'r7', userName: 'Dr. Kevin Tan', rating: 5, date: '2026-05-18', comment: 'The bullet trains were punctual to the second. Impeccable itinerary!', tripType: 'Cultural Explorer' }]
  },
  {
    id: 'pkg-7',
    title: 'Kashmir Paradise: Srinagar, Gulmarg & Pahalgam',
    subtitle: 'Shikara Rides, Gulmarg Gondola & Betaab Valley',
    slug: 'kashmir-paradise-srinagar-gulmarg-pahalgam',
    destination: 'Kashmir',
    country: 'India',
    region: 'Domestic',
    category: ['Honeymoon', 'Family', 'Budget', 'Cultural'],
    durationDays: 6,
    durationNights: 5,
    price: { USD: 360, EUR: 330, GBP: 290, INR: 28999, AED: 1320 },
    originalPrice: { USD: 450, EUR: 410, GBP: 360, INR: 36500, AED: 1650 },
    rating: 4.93,
    reviewCount: 188,
    featured: true,
    limitedOffer: true,
    offerEnds: '2026-08-31',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Experience Heaven on Earth! Stay in a luxury carved wooden houseboat on Dal Lake, ride the world’s highest Gulmarg Gondola Cable Car, wander pine forests in Pahalgam, and drive past Sonmarg glaciers.',
    highlights: [
      'Overnight Stay in 5-Star Heritage Carved Wooden Houseboat on Dal Lake',
      'Sunset Shikara Ride on Dal Lake & Floating Vegetable Market Tour',
      'Gulmarg Gondola Phase 1 & Phase 2 Ticket (14,000 ft Peak Views)',
      'Pahalgam Betaab Valley, Aru Valley & Chandanwari Tour in Private Vehicle',
      'Sonmarg Thajiwas Glacier Horse Ride Excursion'
    ],
    inclusions: [
      '5 Nights Stay (2N Srinagar, 1N Luxury Houseboat, 1N Gulmarg, 1N Pahalgam)',
      'Daily Buffet Breakfast & Dinners',
      'Dedicated Private AC SUV with Experienced Driver',
      'Complementary 1-Hour Shikara Ride'
    ],
    exclusions: ['Gondola tickets Phase 2 (optional)', 'Union Taxi charges in Pahalgam/Sonmarg', 'Flight/Train tickets'],
    itinerary: [
      { day: 1, title: 'Arrival Srinagar & Luxury Houseboat Check-in', description: 'Meet & greet at Srinagar Airport. Transfer to luxury houseboat on Dal Lake. Enjoy romantic sunset Shikara ride.', activities: ['Airport Pick-up', 'Shikara Ride on Dal Lake'], mealsIncluded: ['Dinner'], hotelName: 'The Royal Heritage Houseboat' },
      { day: 2, title: 'Mughal Gardens & Srinagar City Sightseeing', description: 'Visit Shalimar Bagh, Nishat Bagh, Chashme Shahi Mughal gardens, and Shankaracharya Temple hilltop view.', activities: ['Mughal Gardens Tour', 'Shankaracharya Temple'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'The Lalit Grand Palace Srinagar' },
      { day: 3, title: 'Srinagar to Gulmarg Meadow of Flowers', description: 'Scenic drive to Gulmarg. Ride the famous Gulmarg Gondola Cable Car up to Apharwat Peak.', activities: ['Gondola Ride Phase 1 & 2', 'Golf Course Walk'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'Khyber Himalayan Resort Gulmarg' },
      { day: 4, title: 'Gulmarg to Pahalgam Valley of Shepherds', description: 'Drive past saffron fields of Pampore and Avantipur ruins to Pahalgam along Lidder River.', activities: ['Saffron Fields Stop', 'Lidder Riverwalk'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'Pine N Peak Pahalgam' },
      { day: 5, title: 'Pahalgam Betaab & Aru Valley Tour', description: 'Explore Betaab Valley, scenic Aru Valley, and Chandanwari base camp.', activities: ['Betaab Valley Walk', 'Pony Ride'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'Pine N Peak Pahalgam' },
      { day: 6, title: 'Srinagar Airport Departure', description: 'Return drive to Srinagar Airport with sweet memories of Kashmir.', activities: ['Airport Transfer'], mealsIncluded: ['Breakfast'] }
    ],
    hotels: [
      { name: 'The Lalit Grand Palace', stars: 5, location: 'Srinagar', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' },
      { name: 'The Khyber Himalayan Resort', stars: 5, location: 'Gulmarg', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80' }
    ],
    availableDates: ['2026-08-10', '2026-08-25', '2026-09-12', '2026-10-01'],
    faq: [{ question: 'When is the best time for snow in Gulmarg?', answer: 'December to March offers heavy snow for skiing, while April to October offers lush greenery.' }],
    reviews: [{ id: 'r8', userName: 'Rajesh & Meenakshi', rating: 5, date: '2026-06-20', comment: 'The houseboat hospitality and Gulmarg snow mountain views were unbelievable!', tripType: 'Honeymoon' }]
  },
  {
    id: 'pkg-8',
    title: 'Ladakh High-Pass Mountain & Lake Expedition',
    subtitle: 'Khardung La Pass, Nubra Sand Dunes & Pangong Tso Lake',
    slug: 'ladakh-mountain-lake-expedition',
    destination: 'Ladakh',
    country: 'India',
    region: 'Domestic',
    category: ['Adventure', 'Group Tours', 'Cultural', 'Budget'],
    durationDays: 7,
    durationNights: 6,
    price: { USD: 399, EUR: 365, GBP: 320, INR: 32500, AED: 1460 },
    originalPrice: { USD: 520, EUR: 475, GBP: 415, INR: 42000, AED: 1900 },
    rating: 4.96,
    reviewCount: 140,
    featured: true,
    limitedOffer: false,
    heroImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Conquer the Land of High Passes! Cross Khardung La (17,982 ft), ride double-humped Bactrian camels in Nubra Valley desert, and camp overnight under starry skies at mesmerizing blue Pangong Tso Lake.',
    highlights: [
      'Drive across Khardung La Pass (17,982 ft - World’s Highest Motorable Pass)',
      'Overnight Deluxe Swiss Tent Camping at Pangong Tso Blue Lake Shore',
      'Hunder Sand Dunes Double-Humped Bactrian Camel Ride in Nubra Valley',
      'Diskit Monastery 106ft Maitreya Buddha Statue & Magnetic Hill Miracle Tour',
      'Leh Palace & Thiksey Monastery Morning Prayer Session'
    ],
    inclusions: [
      '6 Nights Stay (3N Leh, 2N Nubra Valley, 1N Pangong Lake Tents)',
      'Daily Buffet Breakfast & Dinner',
      'Inner Line Permits (ILP) & Environmental Fees Included',
      'Oxygen Cylinder Equipped Private SUV (Innova / Scorpio / RE Bullet Bikes available)'
    ],
    exclusions: ['Airfare to Leh (IXL)', 'Personal expenses', 'Camel ride fee (~₹500)'],
    itinerary: [
      { day: 1, title: 'Arrival Leh & Acclimatization Rest', description: 'Arrive at Leh Kushok Bakula Rimpoche Airport (11,500 ft). Full day rest for high-altitude acclimatization.', activities: ['Airport Pickup', 'Acclimatization Rest'], mealsIncluded: ['Dinner'], hotelName: 'The Grand Dragon Ladakh' },
      { day: 2, title: 'Leh Local Monasteries & Magnetic Hill', description: 'Visit Magnetic Hill, Hall of Fame War Memorial, Sangam Confluence of Indus & Zanskar rivers, and Shanti Stupa.', activities: ['Sangam Viewpoint', 'Shanti Stupa Sunset'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'The Grand Dragon Ladakh' },
      { day: 3, title: 'Leh to Nubra Valley via Khardung La', description: 'Drive across Khardung La Pass (17,982 ft). Arrive Nubra Valley and visit Diskit Monastery.', activities: ['Khardung La Pass Photo', 'Diskit Monastery Buddha'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'Nubra Summer House Resort' },
      { day: 4, title: 'Hunder Sand Dunes & Turtuk Village', description: 'Camel safari at Hunder Sand Dunes. Excursion to Turtuk, India’s northernmost village near LOC.', activities: ['Bactrian Camel Safari', 'Turtuk Village Tour'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'Nubra Summer House Resort' },
      { day: 5, title: 'Nubra to Pangong Tso Lake via Shyok Route', description: 'Drive along Shyok River to color-changing Pangong Tso Lake (13,940 ft). Night camping under Stargazing Sky.', activities: ['Pangong Lake Sunset Walk', 'Stargazing Campfire'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'Pangong Sarai Deluxe Camps' },
      { day: 6, title: 'Pangong Lake Sunrise to Leh via Chang La', description: 'Capture sunrise reflections on Pangong Lake. Return drive to Leh crossing Chang La Pass (17,590 ft).', activities: ['Pangong Sunrise Photography', 'Leh Market Shopping'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'The Grand Dragon Ladakh' },
      { day: 7, title: 'Leh Departure', description: 'Transfer to Leh Airport for return flight.', activities: ['Airport Transfer'], mealsIncluded: ['Breakfast'] }
    ],
    hotels: [
      { name: 'The Grand Dragon Ladakh', stars: 5, location: 'Leh', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' }
    ],
    availableDates: ['2026-08-12', '2026-09-01', '2026-09-15'],
    faq: [{ question: 'Is oxygen cylinder provided?', answer: 'Yes! All vehicle transfers carry emergency medical oxygen cylinders.' }],
    reviews: [{ id: 'r9', userName: 'Karan & College Friends', rating: 5, date: '2026-06-12', comment: 'Pangong lake night camping was surreal! Seamless arrangements.', tripType: 'Group Adventure' }]
  },
  {
    id: 'pkg-9',
    title: 'Goa Sundowner Beach & Private Yacht Getaway',
    subtitle: 'North & South Goa Beaches, Dudhsagar Waterfalls & Sunset Cruise',
    slug: 'goa-sundowner-beach-yacht-getaway',
    destination: 'Goa',
    country: 'India',
    region: 'Domestic',
    category: ['Beach', 'Luxury', 'Budget', 'Group Tours'],
    durationDays: 5,
    durationNights: 4,
    price: { USD: 230, EUR: 210, GBP: 185, INR: 18999, AED: 850 },
    originalPrice: { USD: 300, EUR: 275, GBP: 240, INR: 24999, AED: 1100 },
    rating: 4.85,
    reviewCount: 230,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Unwind in India’s party & beach capital! Stay at 5-star beachfront resorts, enjoy a private catamaran yacht sunset cruise on Mandovi river, ride 4x4 jeeps to Dudhsagar Waterfalls, and party at Thalassa & Titlie.',
    highlights: [
      '4 Nights Beachfront Resort Stay near Baga / Calangute',
      'Private 1-Hour Luxury Catamaran Yacht Cruise with Drinks & Music',
      '4x4 Off-Road Jeep Safari to Majestic Dudhsagar Waterfalls & Spice Plantation',
      'Water Sports Package: Parasailing, Jet Ski, Banana Ride & Bumper Ride at Anjuna',
      'Heritage Fontainhas Latin Quarter Walking Tour in Panjim'
    ],
    inclusions: ['4 Nights 4-Star/5-Star Beach Resort', 'Daily Buffet Breakfast', 'All Transfers', 'Dudhsagar Jeep Safari', 'Sunset Yacht Cruise'],
    exclusions: ['Airfare/Train tickets', 'Nightclub entry tickets', 'Personal drinks'],
    itinerary: [
      { day: 1, title: 'Arrival Goa & Resort Welcome', description: 'Arrive Goa Airport/Railway Station. Transfer to luxury beach resort. Evening relaxation at Baga beach.', activities: ['Airport Pickup', 'Resort Pool Relaxation'], mealsIncluded: ['Dinner'], hotelName: 'Taj Fort Aguada Resort Goa' },
      { day: 2, title: 'North Goa Beaches & Water Sports', description: 'Explore Fort Aguada, Calangute, Baga, and Anjuna Beach with water sports activities.', activities: ['Parasailing & Jet Ski', 'Anjuna Beach Sunset'], mealsIncluded: ['Breakfast'], hotelName: 'Taj Fort Aguada Resort Goa' },
      { day: 3, title: 'Dudhsagar Waterfalls & Spice Plantation', description: 'Early morning 4x4 Jeep safari through Bhagwan Mahavir Wildlife Sanctuary to Dudhsagar Waterfalls.', activities: ['Dudhsagar Waterfall Dip', 'Traditional Goan Spice Lunch'], mealsIncluded: ['Breakfast', 'Lunch'], hotelName: 'Taj Fort Aguada Resort Goa' },
      { day: 4, title: 'South Goa Churches & Private Yacht Cruise', description: 'Visit Basilica of Bom Jesus, Se Cathedral, Fontainhas Latin Quarter, followed by 1-hour private sunset yacht cruise.', activities: ['Fontainhas Walk', 'Mandovi Sunset Yacht Cruise'], mealsIncluded: ['Breakfast'], hotelName: 'Taj Fort Aguada Resort Goa' },
      { day: 5, title: 'Shopping & Departure', description: 'Souvenir cashew & Goan feni shopping before transfer to airport.', activities: ['Airport Transfer'], mealsIncluded: ['Breakfast'] }
    ],
    hotels: [{ name: 'Taj Fort Aguada Resort & Spa', stars: 5, location: 'Sinquerim, Goa', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' }],
    availableDates: ['2026-08-05', '2026-08-18', '2026-09-02'],
    faq: [{ question: 'When is Goa best for water sports?', answer: 'October to May offers calm blue seas ideal for parasailing and scuba diving.' }],
    reviews: [{ id: 'r10', userName: 'Aakash & Squad', rating: 5, date: '2026-07-01', comment: 'The private yacht cruise was top notch! Best Goa trip ever.', tripType: 'Friends Getaway' }]
  },
  {
    id: 'pkg-10',
    title: 'Golden Triangle Heritage & Taj Mahal Luxury',
    subtitle: 'Delhi, Agra Taj Mahal Sunrise & Jaipur Royal Palaces',
    slug: 'golden-triangle-taj-mahal-luxury',
    destination: 'Golden Triangle',
    country: 'India',
    region: 'Domestic',
    category: ['Cultural', 'Luxury', 'Family'],
    durationDays: 6,
    durationNights: 5,
    price: { USD: 300, EUR: 275, GBP: 240, INR: 24999, AED: 1100 },
    originalPrice: { USD: 390, EUR: 350, GBP: 310, INR: 31999, AED: 1430 },
    rating: 4.91,
    reviewCount: 310,
    featured: true,
    limitedOffer: false,
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80'],
    overview: 'Discover India’s most iconic cultural trail! Walk through Mughal heritage in Delhi, witness sunrise magic at the Taj Mahal in Agra, and explore the Pink City of Jaipur with royal haveli dining.',
    highlights: [
      'VIP Sunrise Guided Tour of Taj Mahal (UNESCO World Heritage)',
      'Delhi Qutub Minar, Humayun Tomb & Chandni Chowk Rickshaw Ride',
      'Amer Fort Jaipur Elephant/Jeep Ride & Hawa Mahal Photo Stop',
      'Agra Fort & Fatehpur Sikri Heritage Excursion',
      'Royal Rajasthani Cultural Dinner with Live Folk Music & Kalbelia Dance'
    ],
    inclusions: ['5 Nights 5-Star Heritage Hotels', 'Daily Breakfast & Royal Dinner', 'Private Chauffeur Sedan', 'Monument Monument Passes'],
    exclusions: ['Airfare/Train tickets', 'Personal shopping'],
    itinerary: [
      { day: 1, title: 'Arrival Delhi & Capital Sightseeing', description: 'Arrival Delhi airport. Visit Qutub Minar, India Gate, Rashtrapati Bhavan, and Lotus Temple.', activities: ['Qutub Minar Tour', 'India Gate Walk'], mealsIncluded: ['Dinner'], hotelName: 'The Leela Palace New Delhi' },
      { day: 2, title: 'Old Delhi Street Food & Expressway Drive to Agra', description: 'Rickshaw ride in Chandni Chowk Old Delhi. Drive via Yamuna Expressway to Agra.', activities: ['Old Delhi Rickshaw Ride', 'Agra Check-in'], mealsIncluded: ['Breakfast'], hotelName: 'ITC Mughal Agra' },
      { day: 3, title: 'Taj Mahal Sunrise & Drive to Jaipur via Fatehpur Sikri', description: 'Early morning sunrise tour of Taj Mahal. Drive to Jaipur stopping at deserted Mughal city Fatehpur Sikri.', activities: ['Taj Mahal Sunrise Tour', 'Fatehpur Sikri Visit'], mealsIncluded: ['Breakfast'], hotelName: 'The Leela Palace Jaipur' },
      { day: 4, title: 'Jaipur Amer Fort & Pink City Marvels', description: 'Ascend Amer Fort by Jeep, visit Jal Mahal, City Palace Museum, Jantar Mantar, and Hawa Mahal.', activities: ['Amer Fort Jeep Ride', 'City Palace Museum'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'The Leela Palace Jaipur' },
      { day: 5, title: 'Jaipur Markets & Royal Haveli Dinner', description: 'Shop Johari Bazaar for silver jewelry and Jaipuri block prints. Evening royal dinner show.', activities: ['Johari Bazaar Shopping', 'Royal Folk Dinner'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'The Leela Palace Jaipur' },
      { day: 6, title: 'Return Drive to Delhi & Airport Transfer', description: 'Scenic drive back to New Delhi airport for your flight.', activities: ['Airport Transfer'], mealsIncluded: ['Breakfast'] }
    ],
    hotels: [{ name: 'ITC Mughal Resort', stars: 5, location: 'Agra', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' }],
    availableDates: ['2026-08-10', '2026-08-28', '2026-09-14'],
    faq: [{ question: 'Is Taj Mahal open on Fridays?', answer: 'No, Taj Mahal is closed on Fridays for general visitors.' }],
    reviews: [{ id: 'r11', userName: 'Anil & Family', rating: 5, date: '2026-06-18', comment: 'Sunrise at Taj Mahal was breathtaking! Driver Ramesh was extremely professional.', tripType: 'Family Cultural' }]
  },
  {
    id: 'pkg-11',
    title: 'Andaman Tropical Island & Scuba Extravaganza',
    subtitle: 'Havelock Island Radhanagar Beach, Neil Island & Scuba Diving',
    slug: 'andaman-tropical-island-scuba-extravaganza',
    destination: 'Andaman',
    country: 'India',
    region: 'Domestic',
    category: ['Beach', 'Honeymoon', 'Adventure', 'Family'],
    durationDays: 6,
    durationNights: 5,
    price: { USD: 385, EUR: 355, GBP: 310, INR: 31999, AED: 1410 },
    originalPrice: { USD: 480, EUR: 440, GBP: 385, INR: 39999, AED: 1760 },
    rating: 4.94,
    reviewCount: 175,
    featured: true,
    limitedOffer: true,
    offerEnds: '2026-08-30',
    heroImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80'],
    overview: 'Dive into turquoise ocean waters! Explore Port Blair Cellular Jail, cruise on Makruzz high-speed luxury catamaran to Havelock Island, walk Radhanagar Beach (Asia’s Best Beach), and experience guided introductory scuba diving.',
    highlights: [
      'Makruzz Luxury AC High-Speed Catamaran Cruise (Port Blair - Havelock - Neil)',
      'Radhanagar Beach No. 7 Sunset Walk (Ranked Best Beach in Asia by Time Magazine)',
      'Elephant Beach Snorkeling & Introductory Scuba Diving Session with Underwater Photos',
      'Port Blair Cellular Jail Light & Sound Show + Corbyn’s Cove Beach',
      'Neil Island Natural Rock Bridge & Bharatpur Beach Glass-Bottom Boat Ride'
    ],
    inclusions: ['5 Nights Beachfront Luxury Resorts', 'Daily Buffet Breakfast', 'Makruzz Cruise Ferry Tickets', 'Scuba Diving & Snorkeling Kit'],
    exclusions: ['Airfare to Port Blair (IXZ)', 'Personal water sports upgrades'],
    itinerary: [
      { day: 1, title: 'Arrival Port Blair & Cellular Jail Light Show', description: 'Arrive Port Blair Airport. Visit Corbyn’s Cove Beach and historic Cellular Jail Light & Sound Show in evening.', activities: ['Cellular Jail Light & Sound Show'], mealsIncluded: ['Dinner'], hotelName: 'Symphony Samudra Port Blair' },
      { day: 2, title: 'Makruzz Cruise to Havelock Island & Radhanagar Sunset', description: 'Board Makruzz catamaran ferry to Havelock Island. Check in at beachfront resort and enjoy sunset at Radhanagar Beach.', activities: ['Makruzz Catamaran Cruise', 'Radhanagar Sunset'], mealsIncluded: ['Breakfast'], hotelName: 'Barefoot at Havelock' },
      { day: 3, title: 'Elephant Beach Boat & Scuba Diving', description: 'Speedboat ride to Elephant Beach. Indulge in introductory scuba diving with certified instructor and coral snorkeling.', activities: ['Scuba Diving Session', 'Elephant Beach Snorkeling'], mealsIncluded: ['Breakfast'], hotelName: 'Barefoot at Havelock' },
      { day: 4, title: 'Havelock to Neil Island Vegetable Bowl', description: 'Ferry to Neil Island. Visit Laxmanpur Beach sunset and Bharatpur Beach water activities.', activities: ['Natural Rock Bridge Tour', 'Laxmanpur Sunset'], mealsIncluded: ['Breakfast'], hotelName: 'Symphony Summer Sands Neil' },
      { day: 5, title: 'Neil Island to Port Blair Return', description: 'Return ferry to Port Blair. Visit Samudrika Naval Marine Museum and Handicraft Emporium.', activities: ['Shopping at Sagarika Emporium'], mealsIncluded: ['Breakfast'], hotelName: 'Symphony Samudra Port Blair' },
      { day: 6, title: 'Port Blair Departure', description: 'Transfer to Port Blair Airport for flight home.', activities: ['Airport Transfer'], mealsIncluded: ['Breakfast'] }
    ],
    hotels: [{ name: 'Barefoot at Havelock', stars: 5, location: 'Havelock Island', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' }],
    availableDates: ['2026-08-15', '2026-09-01', '2026-09-20'],
    faq: [{ question: 'Do I need swimming skills for scuba diving?', answer: 'No! Non-swimmers can easily perform introductory scuba diving accompanied 1-on-1 by certified PADI dive masters.' }],
    reviews: [{ id: 'r12', userName: 'Vikram & Swati', rating: 5, date: '2026-06-22', comment: 'Radhanagar beach is pure perfection and underwater scuba photos were amazing!', tripType: 'Honeymoon' }]
  },
  {
    id: 'pkg-12',
    title: 'Himachal Snow Valley: Shimla, Manali & Solang',
    subtitle: 'Atal Tunnel Sissu, Kufri Snow Point & Kullu River Rafting',
    slug: 'himachal-snow-valley-shimla-manali',
    destination: 'Himachal Pradesh',
    country: 'India',
    region: 'Domestic',
    category: ['Family', 'Adventure', 'Budget', 'Group Tours'],
    durationDays: 7,
    durationNights: 6,
    price: { USD: 265, EUR: 245, GBP: 215, INR: 19999, AED: 970 },
    originalPrice: { USD: 350, EUR: 320, GBP: 280, INR: 26999, AED: 1280 },
    rating: 4.86,
    reviewCount: 290,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80'],
    overview: 'Escape into snow-capped Himalayan peaks! Walk Mall Road in Shimla, ride ropeway cars in Solang Valley, drive through the engineering marvel Atal Tunnel to Sissu waterfall, and try white-water river rafting in Kullu.',
    highlights: [
      'Solang Valley Adventure Day: Paragliding, Zorbing & Cable Car Ride',
      'Atal Tunnel (9.02 km World’s Longest Highway Tunnel) Drive to Sissu Valley',
      'Kullu Beas River White-Water Rafting & Pashmina Shawl Factory Outlet',
      'Shimla Kufri Snow Fun Park & Mall Road Ridge Walk',
      'Manali Hadimba Temple, Vashisht Hot Springs & Old Manali Cafe Hopping'
    ],
    inclusions: ['6 Nights 4-Star Mountain View Hotel Stay', 'Daily Breakfast & Dinners', 'Dedicated AC Vehicle for all Sightseeing'],
    exclusions: ['Adventure activity fees (Paragliding/Rafting)', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrival Chandigarh & Drive to Shimla', description: 'Pick-up Chandigarh Airport/Railway Station. Drive up pine hills to Shimla.', activities: ['Scenic Hill Drive', 'Mall Road Evening Walk'], mealsIncluded: ['Dinner'], hotelName: 'Wildflower Hall Shimla' },
      { day: 2, title: 'Shimla & Kufri Excursion', description: 'Visit Kufri snow viewpoint, Jakhoo Temple giant Hanuman statue, and Christ Church on Ridge.', activities: ['Kufri Yak Ride', 'Jakhoo Hill Cable Car'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'Wildflower Hall Shimla' },
      { day: 3, title: 'Shimla to Manali via Kullu Valley', description: 'Drive along Beas River through Pandoh Dam and Kullu Valley. Stop for river rafting.', activities: ['Beas River Rafting', 'Kullu Shawl Shopping'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'The Machan Resort Manali' },
      { day: 4, title: 'Manali Local Sightseeing & Old Manali Cafes', description: 'Visit 450-year-old wooden Hadimba Temple, Vashisht Hot Springs, and Manu Temple.', activities: ['Hadimba Temple Tour', 'Old Manali Cafe Walk'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'The Machan Resort Manali' },
      { day: 5, title: 'Solang Valley & Atal Tunnel Sissu Day Trip', description: 'Excursion to Solang Valley for paragliding and cable car. Drive through Atal Tunnel to Lahaul Valley Sissu.', activities: ['Solang Valley Ropeway', 'Atal Tunnel Drive'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'The Machan Resort Manali' },
      { day: 6, title: 'Manali Leisure & Shopping', description: 'Free day for shopping at Manali Mall Road or visiting Jogini Waterfalls trek.', activities: ['Jogini Waterfall Hike'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'The Machan Resort Manali' },
      { day: 7, title: 'Return Drive to Chandigarh Departure', description: 'Drive back to Chandigarh for your return journey.', activities: ['Airport/Station Transfer'], mealsIncluded: ['Breakfast'] }
    ],
    hotels: [{ name: 'The Machan Resort', stars: 4, location: 'Manali', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' }],
    availableDates: ['2026-08-08', '2026-08-22', '2026-09-05'],
    faq: [{ question: 'Is snow available in Solang Valley year-round?', answer: 'Snow is present in winter & spring (Dec to April), while summer brings lush green valleys and paragliding.' }],
    reviews: [{ id: 'r13', userName: 'Gaurav & Family', rating: 5, date: '2026-06-25', comment: 'The drive through Atal Tunnel to Sissu was mind-blowing!', tripType: 'Family Vacation' }]
  },
  {
    id: 'pkg-13',
    title: 'Maldives Overwater Bungalow & All-Inclusive Resort',
    subtitle: 'Ocean Water Villa, Unlimited Dining, Speedboat & Dolphin Cruise',
    slug: 'maldives-overwater-bungalow-all-inclusive',
    destination: 'Maldives',
    country: 'Maldives',
    region: 'International',
    category: ['Honeymoon', 'Luxury', 'Beach'],
    durationDays: 5,
    durationNights: 4,
    price: { USD: 1099, EUR: 1010, GBP: 885, INR: 89999, AED: 4035 },
    originalPrice: { USD: 1450, EUR: 1330, GBP: 1160, INR: 119999, AED: 5320 },
    rating: 4.97,
    reviewCount: 160,
    featured: true,
    limitedOffer: true,
    offerEnds: '2026-08-28',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80'],
    overview: 'Live the tropical overwater fantasy! Stay in a glass-bottom Water Villa with direct staircase access to turquoise coral lagoon, enjoy all-inclusive gourmet meals and free-flow beverages, and embark on a sunset wild dolphin cruise.',
    highlights: [
      '2 Nights Ocean Beach Villa + 2 Nights Luxury Overwater Bungalow with Private Deck',
      'All-Inclusive Meal Plan: Breakfast, Lunch, Dinner & Unlimited Premium Cocktails/Drinks',
      'Roundtrip Speedboat Airport Transfers from Velana Male Airport (MLE)',
      'Sunset Wild Dolphin Cruise & Snorkeling with Sea Turtles Equipment Rental',
      'Complementary 45-min Couples Spa Massage & Romantic Bed Decoration'
    ],
    inclusions: ['4 Nights Luxury Villa Stay', 'All-Inclusive Dine-Around', 'Speedboat Airport Transfers', 'Dolphin Cruise', 'Snorkeling Gear'],
    exclusions: ['International Airfare (Available on request)', 'Green Tax ($6/night per person)', 'Personal scuba diving'],
    itinerary: [
      { day: 1, title: 'Arrival Male & Speedboat Transfer to Island Resort', description: 'Arrive Velana International Airport Male. Speedboat transfer across turquoise ocean to private luxury island resort. Check in at Beach Villa.', activities: ['Speedboat Transfer', 'Island Welcome Cocktail'], mealsIncluded: ['Dinner'], hotelName: 'Adaaran Select Hudhuranfushi Maldives' },
      { day: 2, title: 'Lagoon Snorkeling & Beach Relaxation', description: 'Enjoy snorkeling right off the white sandy beach. Unlimited dining and cocktails at sunset pool bar.', activities: ['Turtle Snorkeling', 'Sunset Pool Bar'], mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'], hotelName: 'Adaaran Select Hudhuranfushi Maldives' },
      { day: 3, title: 'Villa Upgrade to Luxury Overwater Bungalow', description: 'Check in to iconic Overwater Villa hovering above turquoise sea. Direct ocean ladder into coral reef.', activities: ['Water Villa Check-in', 'Couples Spa Massage'], mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'], hotelName: 'Adaaran Select Water Villas' },
      { day: 4, title: 'Sunset Wild Dolphin Cruise', description: 'Board traditional Maldivian Dhoni boat for sunset ocean cruise watching wild spinner dolphins jump.', activities: ['Sunset Dolphin Cruise'], mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'], hotelName: 'Adaaran Select Water Villas' },
      { day: 5, title: 'Departure Male', description: 'Leisure morning, check-out and speedboat transfer to Male Airport for flight home.', activities: ['Speedboat Airport Transfer'], mealsIncluded: ['Breakfast'] }
    ],
    hotels: [{ name: 'Adaaran Select Water Villas', stars: 5, location: 'North Male Atoll', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' }],
    availableDates: ['2026-08-10', '2026-08-22', '2026-09-08', '2026-09-24'],
    faq: [{ question: 'Is Maldives visa free for Indian citizens?', answer: 'Yes, Indian passport holders get a 30-day free Visa on Arrival at Male Airport.' }],
    reviews: [{ id: 'r14', userName: 'Kavya & Nitin', rating: 5, date: '2026-06-29', comment: 'Stepping off our overwater villa deck directly into crystal blue sea was heaven!', tripType: 'Honeymoon' }]
  },
  {
    id: 'pkg-14',
    title: 'Thailand Double Delight: Bangkok & Phuket',
    subtitle: 'Phi Phi Island Cruise, James Bond Island & Chao Phraya Dinner',
    slug: 'thailand-double-delight-bangkok-phuket',
    destination: 'Thailand',
    country: 'Thailand',
    region: 'International',
    category: ['Family', 'Beach', 'Budget', 'Group Tours'],
    durationDays: 6,
    durationNights: 5,
    price: { USD: 470, EUR: 430, GBP: 380, INR: 38999, AED: 1725 },
    originalPrice: { USD: 600, EUR: 550, GBP: 485, INR: 49999, AED: 2200 },
    rating: 4.88,
    reviewCount: 210,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'],
    overview: 'Explore the Best of Thailand! Tropical beaches in Phuket, Phi Phi Island speedboat cruise with Maya Bay snorkeling, Bangkok Grand Palace temples, and luxury Chao Phraya Princess Dinner Cruise.',
    highlights: [
      'Full Day Speedboat Cruise to Phi Phi Islands, Maya Bay & Pileh Lagoon',
      'Phuket Fantasea / Carnival Magic Show & Patong Bangla Road Nightlife',
      'Bangkok Temple Tour: Wat Pho (Reclining Buddha) & Wat Traimit (Golden Buddha)',
      'Luxury Chao Phraya Princess River Dinner Cruise with Live International Buffet',
      'Safari World & Marine Park Excursion in Bangkok with Lunch'
    ],
    inclusions: ['5 Nights 4-Star Central Hotels (3N Phuket, 2N Bangkok)', 'Daily Breakfast', 'Phi Phi Speedboat Tour', 'Chao Phraya Cruise'],
    exclusions: ['Airfare', 'National Park entry fees (~400 THB)', 'Thailand Visa (e-Visa / VoA)'],
    itinerary: [
      { day: 1, title: 'Arrival Phuket & Patong Check-in', description: 'Arrive Phuket Airport. Transfer to resort near Patong Beach. Evening walk Bangla Road.', activities: ['Airport Pickup', 'Patong Night Walk'], mealsIncluded: ['Dinner'], hotelName: 'Amari Phuket' },
      { day: 2, title: 'Phi Phi Islands Speedboat Excursion', description: 'Speedboat to Phi Phi Don, Phi Phi Leh, Maya Bay, Viking Cave, and Monkey Beach with buffet lunch.', activities: ['Phi Phi Speedboat Cruise', 'Maya Bay Snorkeling'], mealsIncluded: ['Breakfast', 'Lunch'], hotelName: 'Amari Phuket' },
      { day: 3, title: 'Phuket City Tour & Big Buddha', description: 'Visit Kata Viewpoint, Big Buddha, Chalong Temple, and Old Phuket Town Sino-Portuguese architecture.', activities: ['Big Buddha Visit', 'Old Phuket Town'], mealsIncluded: ['Breakfast'], hotelName: 'Amari Phuket' },
      { day: 4, title: 'Flight to Bangkok & Chao Phraya River Cruise', description: 'Fly to Bangkok. Check in at hotel. Evening Chao Phraya Princess Dinner Cruise.', activities: ['Chao Phraya Dinner Cruise'], mealsIncluded: ['Breakfast', 'Dinner'], hotelName: 'Amari Watergate Bangkok' },
      { day: 5, title: 'Bangkok Temples & Shopping at Platinum / Iconsiam', description: 'Visit Golden Buddha Temple Wat Traimit and Reclining Buddha Wat Pho. Shopping at Iconsiam & Platinum Mall.', activities: ['Grand Temples Tour', 'Iconsiam Shopping'], mealsIncluded: ['Breakfast'], hotelName: 'Amari Watergate Bangkok' },
      { day: 6, title: 'Bangkok Departure', description: 'Transfer to Suvarnabhumi Airport for departure flight.', activities: ['Airport Transfer'], mealsIncluded: ['Breakfast'] }
    ],
    hotels: [{ name: 'Amari Phuket', stars: 5, location: 'Patong Beach', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' }],
    availableDates: ['2026-08-10', '2026-08-25', '2026-09-12'],
    faq: [{ question: 'Is Thailand visa free for Indian passport holders?', answer: 'Thailand offers visa exemption / zero fee e-Visa for Indian tourists.' }],
    reviews: [{ id: 'r15', userName: 'Siddharth M.', rating: 5, date: '2026-06-14', comment: 'Phi Phi island speedboat water was emerald blue! Great value package.', tripType: 'Family Vacation' }]
  }
];

export const INITIAL_DESTINATIONS: Destination[] = [
  {
    id: 'dest-1',
    name: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    tagline: 'Island of the Gods & Pristine Beaches',
    description: 'A paradise of volcanic mountains, iconic rice paddies, vibrant coral reefs, and ancient Hindu temples.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'April to October (Dry Season)',
    weather: '27°C - 32°C Tropical',
    popularAttractions: ['Tegallalang Rice Terraces', 'Uluwatu Temple', 'Nusa Penida Kelingking', 'Seminyak Beach'],
    availablePackagesCount: 14,
    featured: true
  },
  {
    id: 'dest-2',
    name: 'Switzerland',
    country: 'Switzerland',
    continent: 'Europe',
    tagline: 'Alps, Glaciers & Emerald Lakes',
    description: 'Home to high mountain peaks, fairytale alpine villages, crystal lakes, and world-renowned railways.',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'June to September (Summer) & Dec to March (Ski)',
    weather: '18°C - 25°C Summer / -5°C Winter',
    popularAttractions: ['Jungfraujoch Top of Europe', 'Matterhorn Zermatt', 'Lake Lucerne', 'Interlaken'],
    availablePackagesCount: 8,
    featured: true
  },
  {
    id: 'dest-3',
    name: 'Dubai',
    country: 'United Arab Emirates',
    continent: 'Middle East',
    tagline: 'City of Gold, Skyscraper Wonders & Desert Dunes',
    description: 'Ultra-luxurious metropolis famous for record-breaking landmarks, opulent shopping malls, and desert safaris.',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'November to March',
    weather: '24°C - 30°C Pleasant Winter',
    popularAttractions: ['Burj Khalifa', 'Atlantis The Palm', 'Dubai Frame', 'Desert Conservation Reserve'],
    availablePackagesCount: 19,
    featured: true
  },
  {
    id: 'dest-4',
    name: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    tagline: 'Cliffside Calderas & Aegean Sunsets',
    description: 'Iconic Aegean island known for whitewashed houses, volcanic beaches, blue dome churches, and romantic sunsets.',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'May to October',
    weather: '24°C - 29°C Mediterranean',
    popularAttractions: ['Oia Village Sunset', 'Fira Caldera Walk', 'Red Beach', 'Santo Wines Winery'],
    availablePackagesCount: 6,
    featured: true
  },
  {
    id: 'dest-5',
    name: 'Kerala',
    country: 'India',
    continent: 'Asia',
    tagline: 'God’s Own Country & Serene Backwaters',
    description: 'Tropical paradise known for coconut palm backwaters, tea plantation hills, Ayurvedic resorts, and wildlife sanctuaries.',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'September to March',
    weather: '23°C - 30°C Tropical',
    popularAttractions: ['Alleppey Houseboats', 'Munnar Tea Gardens', 'Thekkady Spice Plantations', 'Fort Kochi'],
    availablePackagesCount: 11,
    featured: true
  },
  {
    id: 'dest-6',
    name: 'Kashmir',
    country: 'India',
    continent: 'Asia',
    tagline: 'Heaven on Earth & Alpine Meadows',
    description: 'Breathtaking valley surrounded by snow peaks, Dal Lake houseboats, Gulmarg Gondola, and pine forests.',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'March to October (Summer) & Dec to Feb (Snow)',
    weather: '10°C - 22°C Summer / -5°C Winter',
    popularAttractions: ['Dal Lake Houseboats', 'Gulmarg Gondola', 'Betaab Valley', 'Sonmarg Glacier'],
    availablePackagesCount: 12,
    featured: true
  },
  {
    id: 'dest-7',
    name: 'Ladakh',
    country: 'India',
    continent: 'Asia',
    tagline: 'Land of High Passes & Azure Lakes',
    description: 'High-altitude desert known for stark mountain passes, ancient Tibetan Buddhist monasteries, and Pangong Tso Lake.',
    heroImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'May to September',
    weather: '15°C - 25°C Summer / Dry',
    popularAttractions: ['Pangong Tso Lake', 'Khardung La Pass', 'Nubra Valley Hunder', 'Diskit Monastery'],
    availablePackagesCount: 8,
    featured: true
  },
  {
    id: 'dest-8',
    name: 'Goa',
    country: 'India',
    continent: 'Asia',
    tagline: 'Sun-Kissed Beaches & Portuguese Heritage',
    description: 'India’s ultimate beach haven with golden sand coastline, water sports, Latin quarter heritage, and vibrant nightlife.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'October to April',
    weather: '24°C - 31°C Pleasant Beach',
    popularAttractions: ['Baga & Calangute Beach', 'Dudhsagar Waterfalls', 'Fontainhas Panjim', 'Mandovi River Yacht Cruise'],
    availablePackagesCount: 16,
    featured: true
  },
  {
    id: 'dest-9',
    name: 'Andaman Islands',
    country: 'India',
    continent: 'Asia',
    tagline: 'Turquoise Oceans & Coral Scuba Reefs',
    description: 'Archipelago of tropical islands featuring crystal clear waters, white silica sand, and world-class scuba diving.',
    heroImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'October to May',
    weather: '23°C - 30°C Island Tropical',
    popularAttractions: ['Radhanagar Beach Havelock', 'Cellular Jail Port Blair', 'Elephant Beach Scuba', 'Neil Natural Bridge'],
    availablePackagesCount: 10,
    featured: true
  },
  {
    id: 'dest-10',
    name: 'Maldives',
    country: 'Maldives',
    continent: 'Asia',
    tagline: 'Overwater Bungalows & Turquoise Coral Lagoons',
    description: 'World-famous luxury coral atoll island resorts with crystal ocean lagoons and glass-bottom overwater villas.',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'November to April',
    weather: '26°C - 31°C Tropical Island',
    popularAttractions: ['Overwater Water Villas', 'Snorkeling with Sea Turtles', 'Sunset Dolphin Cruises', 'Submarine Tours'],
    availablePackagesCount: 15,
    featured: true
  },
  {
    id: 'dest-11',
    name: 'Japan',
    country: 'Japan',
    continent: 'Asia',
    tagline: 'Land of the Rising Sun & High Tech Serenity',
    description: 'A seamless blend of futuristic neon cities, ancient Shinto shrines, cherry blossoms, and bullet trains.',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'March to May (Sakura) & Oct to Nov (Autumn Leaves)',
    weather: '15°C - 22°C Mild Spring/Autumn',
    popularAttractions: ['Mt. Fuji', 'Tokyo Shibuya', 'Kyoto Fushimi Inari', 'Osaka Castle'],
    availablePackagesCount: 9,
    featured: true
  }
];

export const INITIAL_VISA_SERVICES: VisaService[] = [
  {
    id: 'visa-uae',
    country: 'United Arab Emirates (Dubai)',
    flagCode: 'AE',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    visaType: '30 Days Tourist E-Visa',
    processingTimeDays: '1 to 2 Working Days',
    validity: '60 Days from Issue Date',
    feeUSD: 99,
    requirements: ['Valid Passport (Min 6 months validity)', 'Passport Size Photograph with White Background', 'Confirmed Return Flight Ticket'],
    requiredDocuments: ['Passport Front & Back Color Copy', 'Digital Passport Photograph', 'PAN Card (If applicable)'],
    faqs: [
      { question: 'Can I extend my UAE Tourist Visa?', answer: 'Yes, 30-day UAE tourist visas can be extended inside the country.' }
    ]
  },
  {
    id: 'visa-schengen',
    country: 'Schengen / Europe (France, Swiss, Italy)',
    flagCode: 'EU',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    visaType: 'Short-Stay Type C Tourist Visa',
    processingTimeDays: '10 to 15 Working Days',
    validity: 'Up to 90 Days in a 180-day period',
    feeUSD: 149,
    requirements: ['Original Passport with 2 blank pages', 'Bank Statements of last 6 months', 'Income Tax Returns (ITR)', 'Travel Insurance min €30,000 coverage', 'Confirmed Hotel Bookings & Flight Itinerary'],
    requiredDocuments: ['Schengen Visa Form', 'Covering Letter', 'Bank Statements certified', 'Employment NOC or Business Proof', 'Day-wise Detailed Itinerary'],
    faqs: [
      { question: 'When should I apply for Schengen Visa?', answer: 'You can apply up to 6 months before your intended travel date.' }
    ]
  },
  {
    id: 'visa-singapore',
    country: 'Singapore',
    flagCode: 'SG',
    heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    visaType: 'Multiple Entry Tourist E-Visa',
    processingTimeDays: '3 to 5 Working Days',
    validity: 'Up to 2 Years Multiple Entry',
    feeUSD: 65,
    requirements: ['Passport with 6 months validity', 'Form 14A filled', '2 Matte finish photos', '6 months Bank Statement'],
    requiredDocuments: ['Passport Copy', 'Form 14A Signed', 'Flight & Hotel Reservation'],
    faqs: [
      { question: 'Is physical submission required for Singapore visa?', answer: 'No, Singapore visa is processed electronically through authorized agents.' }
    ]
  },
  {
    id: 'visa-thailand',
    country: 'Thailand',
    flagCode: 'TH',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    visaType: 'E-Visa / Visa Exemption / VoA',
    processingTimeDays: '1 to 3 Working Days',
    validity: '30 to 60 Days',
    feeUSD: 45,
    requirements: ['Passport with 6 months validity', 'Hotel voucher', 'Return Flight Ticket'],
    requiredDocuments: ['Passport Bio Page', 'Photo', 'Bank Proof ($500 balance minimum)'],
    faqs: [{ question: 'Do Indian passport holders get Visa on Arrival?', answer: 'Yes, Thailand offers both VoA and online e-Visa.' }]
  }
];

export const INITIAL_BLOGS: BlogArticle[] = [
  {
    id: 'blog-1',
    title: '10 Essential Tips for First-Time Travelers to Bali in 2026',
    slug: '10-essential-tips-first-time-bali',
    summary: 'Everything you need to know about currency, e-VOA, local customs, scooter safety, and best SIM cards in Bali.',
    content: `Planning your first trip to Bali? The Island of the Gods is legendary for a reason, but navigating local customs, transportation, and visas can make or break your vacation.

1. Get your e-VOA online before arrival to skip long immigration queues at Denpasar (DPS).
2. Carry small IDR cash for local warungs and entrance fees, though major credit cards are accepted at Seminyak cafes.
3. Dress respectfully when visiting sacred temples like Besakih or Tanah Lot (sarong and sash required).
4. Book private driver transfers through WanderLuxe instead of renting scooters if you aren’t experienced with traffic.`,
    author: { name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80', role: 'Chief Travel Editor' },
    date: 'July 15, 2026',
    readTime: '5 min read',
    category: 'Travel Guides',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    tags: ['Bali', 'Indonesia', 'Travel Advice', 'Tips']
  },
  {
    id: 'blog-2',
    title: 'How to Master the Schengen Visa Process Without Rejection',
    slug: 'schengen-visa-master-guide-2026',
    summary: 'A step-by-step checklist on cover letters, bank statement maintenance, travel insurance, and embassy appointment hacks.',
    content: `Getting a Schengen visa can feel intimidating, but following a disciplined document preparation workflow guarantees peace of mind.

Key Checklist Items:
- Ensure your bank balance reflects steady, legitimate funds over the last 6 months (avoid sudden huge cash deposits right before applying).
- Submit a detailed day-wise itinerary matching your hotel vouchers and flight reservations.
- Buy travel medical insurance with at least €30,000 coverage valid for all Schengen countries.`,
    author: { name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', role: 'Visa & Immigration Specialist' },
    date: 'July 02, 2026',
    readTime: '7 min read',
    category: 'Visa Tips',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    tags: ['Schengen', 'Visa', 'Europe', 'Guide']
  },
  {
    id: 'blog-3',
    title: 'The Ultimate Packing Checklist for Swiss Alps & High Altitude Trips',
    slug: 'ultimate-packing-checklist-swiss-alps',
    summary: 'Layering strategies, waterproof footwear, UV protection, and electronics setup for Jungfrau & Titlis excursions.',
    content: `Heading up to 3,454m at Jungfraujoch? Temperature can drop below freezing even in peak summer! Always pack thermal base layers, polarized sunglasses to block glacier glare, and comfortable waterproof trekking boots.`,
    author: { name: 'Sophia Chen', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80', role: 'Adventure Strategist' },
    date: 'June 28, 2026',
    readTime: '4 min read',
    category: 'Packing Tips',
    heroImage: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80',
    tags: ['Switzerland', 'Packing', 'Adventure', 'Alps']
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ananya & Rohan Verma',
    location: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    tripTitle: 'Magical Bali Honeymoon Package',
    date: 'June 2026',
    comment: 'WanderLuxe made our honeymoon an absolute dream! From our private pool villa in Ubud to the floating breakfast and Nusa Penida speedboat transfers, everything was executed with 5-star precision.',
    tripImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Robert & Clara Harrison',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    tripTitle: 'Swiss Alps & Jungfraujoch Tour',
    date: 'May 2026',
    comment: 'Flawless arrangements! Our 1st class Swiss Travel Pass vouchers were delivered digitally before departure, and the hotels in Interlaken had views straight out of a postcard.',
    tripImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Vikram Kapoor & Family',
    location: 'Delhi, India',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    tripTitle: 'Dubai Desert & Atlantis Escape',
    date: 'April 2026',
    comment: 'The 4x4 desert safari dune bashing was the highlight of our family trip! Express UAE visa was issued in just 24 hours. WanderLuxe is now our go-to travel partner.',
    tripImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
    verified: true
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Sunset at Kelingking T-Rex Beach', location: 'Nusa Penida, Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', category: 'Landscape' },
  { id: 'g2', title: 'Jungfraujoch Glacier Top of Europe', location: 'Switzerland', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80', category: 'Landscape' },
  { id: 'g3', title: 'Burj Khalifa Fountain Show at Night', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80', category: 'Resort' },
  { id: 'g4', title: 'Whitewashed Oia Caldera Cliffside', location: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80', category: 'Culture' },
  { id: 'g5', title: 'Kerala Houseboat cruising Backwaters', location: 'Alleppey, India', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80', category: 'Adventure' },
  { id: 'g6', title: 'Cherry Blossoms at Kyoto Temple', location: 'Kyoto, Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80', category: 'Culture' }
];

export const INITIAL_OFFERS: Offer[] = [
  {
    id: 'off-1',
    title: 'Early Bird Summer Special',
    code: 'SUMMER2026',
    discount: '15% OFF',
    validUntil: 'Aug 31, 2026',
    description: 'Get an extra 15% instant discount on all Bali, Dubai, and Switzerland international tour packages when booking 30 days in advance.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'off-2',
    title: 'Honeymoon Suite Upgrade',
    code: 'HONEYMOONVIP',
    discount: 'FREE Private Pool Villa Upgrade',
    validUntil: 'Sep 15, 2026',
    description: 'Complimentary private pool villa room upgrade + candlelit beach dinner on all honeymoon packages booked this month.',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80'
  }
];
