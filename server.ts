import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { INITIAL_PACKAGES, INITIAL_DESTINATIONS, INITIAL_VISA_SERVICES, INITIAL_BLOGS, INITIAL_TESTIMONIALS, INITIAL_GALLERY, INITIAL_OFFERS } from './src/data/mockData.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory runtime database initialized with mock data
let packages = [...INITIAL_PACKAGES];
let destinations = [...INITIAL_DESTINATIONS];
let visaServices = [...INITIAL_VISA_SERVICES];
let blogs = [...INITIAL_BLOGS];
let testimonials = [...INITIAL_TESTIMONIALS];
let gallery = [...INITIAL_GALLERY];
let offers = [...INITIAL_OFFERS];
let enquiries: any[] = [
  {
    id: 'enq-101',
    createdAt: new Date().toISOString(),
    status: 'New',
    type: 'Package',
    fullName: 'David Miller',
    email: 'david.m@example.com',
    phone: '+1 415 555 0192',
    whatsappSame: true,
    destination: 'Bali',
    packageTitle: 'Magical Bali & Nusa Penida Escape',
    travelDate: '2026-09-10',
    guestsAdults: 2,
    guestsChildren: 0,
    budgetRange: '$1,000 - $2,000',
    message: 'Looking for romantic pool villa and private airport transfers.'
  },
  {
    id: 'enq-102',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    status: 'Contacted',
    type: 'Visa',
    fullName: 'Sophia Martinez',
    email: 'sophia.mart@example.com',
    phone: '+44 20 7946 0912',
    whatsappSame: true,
    visaCountry: 'Schengen / Europe',
    visaType: 'Short-Stay Tourist',
    message: 'Need urgent appointment booking support for Switzerland Schengen visa.'
  }
];

// Helper to instantiate Gemini AI
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

// REST API Endpoints

// Packages
app.get('/api/packages', (req, res) => {
  res.json({ success: true, data: packages });
});

app.get('/api/packages/:id', (req, res) => {
  const pkg = packages.find(p => p.id === req.params.id || p.slug === req.params.id);
  if (!pkg) {
    return res.status(404).json({ success: false, message: 'Package not found' });
  }
  res.json({ success: true, data: pkg });
});

app.post('/api/packages', (req, res) => {
  const newPkg = { ...req.body, id: `pkg-${Date.now()}` };
  packages.unshift(newPkg);
  res.json({ success: true, data: newPkg });
});

app.put('/api/packages/:id', (req, res) => {
  const index = packages.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Package not found' });
  }
  packages[index] = { ...packages[index], ...req.body };
  res.json({ success: true, data: packages[index] });
});

app.delete('/api/packages/:id', (req, res) => {
  packages = packages.filter(p => p.id !== req.params.id);
  res.json({ success: true, message: 'Package deleted' });
});

// Destinations
app.get('/api/destinations', (req, res) => {
  res.json({ success: true, data: destinations });
});

// Visa Services
app.get('/api/visa-services', (req, res) => {
  res.json({ success: true, data: visaServices });
});

// Blogs
app.get('/api/blogs', (req, res) => {
  res.json({ success: true, data: blogs });
});

// Testimonials
app.get('/api/testimonials', (req, res) => {
  res.json({ success: true, data: testimonials });
});

// Offers
app.get('/api/offers', (req, res) => {
  res.json({ success: true, data: offers });
});

// Gallery
app.get('/api/gallery', (req, res) => {
  res.json({ success: true, data: gallery });
});

// Enquiries (Client submit)
app.post('/api/enquiries', (req, res) => {
  const newEnquiry = {
    id: `enq-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: 'New',
    ...req.body
  };
  enquiries.unshift(newEnquiry);
  console.log('Received new enquiry:', newEnquiry.fullName, newEnquiry.type);
  res.json({ success: true, data: newEnquiry, message: 'Enquiry submitted successfully! Our travel specialist will call you shortly.' });
});

// Admin Enquiries
app.get('/api/admin/enquiries', (req, res) => {
  res.json({ success: true, data: enquiries });
});

app.patch('/api/admin/enquiries/:id', (req, res) => {
  const { status } = req.body;
  const index = enquiries.findIndex(e => e.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Enquiry not found' });
  }
  enquiries[index].status = status;
  res.json({ success: true, data: enquiries[index] });
});

// AI Smart Custom Trip Planner Generator
app.post('/api/ai/planner', async (req, res) => {
  try {
    const ai = getGeminiClient();
    const { destination, durationDays, budgetPerPerson, travelersCount, travelStyle, interests } = req.body;

    if (!ai) {
      // Fallback realistic AI plan if GEMINI_API_KEY is not configured
      return res.json({
        success: true,
        itinerary: [
          { day: 1, title: `Arrival in ${destination || 'Paradise'} & Welcome Dinner`, description: `Transfer to luxury 5-star hotel in ${destination}. Relax and enjoy local culinary welcome feast.`, activities: ['Private Airport Transfer', 'Hotel Check-in', 'Gourmet Sunset Dinner'] },
          { day: 2, title: 'Cultural Heritage & Iconic Landmarks', description: `Guided private tour of ${destination}'s top famous landmarks and cultural highlights.`, activities: ['Historic City Center Tour', 'Local Handicrafts Market', 'Panoramic Viewpoint'] },
          { day: 3, title: 'Exclusive Adventure & Nature Excursion', description: `Immerse in breathtaking scenery tuned to your interest: ${interests?.join(', ') || 'Sightseeing & Photography'}.`, activities: ['Private Excursion', 'Scenic Outdoor Trail', 'Fine Dining Experience'] }
        ],
        insiderTips: ['Book skip-the-line tickets in advance.', 'Carry local currency for artisanal markets.', 'Use local private chauffeur service for maximum comfort.']
      });
    }

    const prompt = `You are a world-class luxury travel designer at WanderLuxe Travel Agency.
Create a personalized day-by-day travel itinerary for:
- Destination: ${destination}
- Duration: ${durationDays} Days
- Budget per person: $${budgetPerPerson}
- Group Size: ${travelersCount} Travelers
- Style: ${travelStyle}
- Key Interests: ${interests?.join(', ') || 'General Sightseeing, Local Food, Culture'}

Return ONLY valid JSON in the following schema:
{
  "summary": "Short inspiring summary of the trip concept",
  "itinerary": [
    {
      "day": 1,
      "title": "Day 1 Title",
      "description": "Short description of the day",
      "activities": ["Activity 1", "Activity 2", "Activity 3"]
    }
  ],
  "recommendedHotels": ["Hotel 1", "Hotel 2"],
  "estimatedTotalCost": "$XXXX",
  "insiderTips": ["Tip 1", "Tip 2", "Tip 3"]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const parsedData = JSON.parse(response.text || '{}');
    res.json({ success: true, ...parsedData });
  } catch (error: any) {
    console.error('AI Planner error:', error);
    res.status(500).json({ success: false, message: error.message || 'Failed to generate itinerary' });
  }
});

// AI Travel Concierge Assistant Chat
app.post('/api/ai/concierge', async (req, res) => {
  try {
    const ai = getGeminiClient();
    const { message, conversationHistory = [] } = req.body;

    if (!ai) {
      return res.json({
        success: true,
        reply: "Hello! Welcome to WanderLuxe. I am your personal AI Travel Concierge. I can help you choose the best tour package, explain visa requirements, or customize your dream vacation! How may I assist you today?"
      });
    }

    const systemInstruction = `You are "Aria", the AI Travel Assistant for WanderLuxe Travel Agency.
WanderLuxe is a premier luxury travel agency offering top packages to Bali, Switzerland, Dubai, Santorini, Kerala, Japan, and worldwide.
We provide:
1. Tour Packages (Domestic & International)
2. Custom Trip Planning
3. Visa Application Support
4. Flight & Hotel Bookings
5. Group & Corporate Tours

Be warm, hospitable, inspiring, polished, and concise. Always encourage the user to submit an enquiry or call our 24/7 hotline at +1 (800) 555-VOYAGE!`;

    const chatMessages = [
      { role: 'user', parts: [{ text: systemInstruction }] },
      ...conversationHistory.map((m: any) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      })),
      { role: 'user', parts: [{ text: message }] }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: chatMessages
    });

    res.json({
      success: true,
      reply: response.text || "I'm here to help you plan your dream trip!"
    });
  } catch (error: any) {
    console.error('AI Concierge error:', error);
    res.json({
      success: true,
      reply: "Thank you for reaching out! Our travel team is ready to assist you. Please fill out our instant enquiry form or call +1 (800) 555-VOYAGE!"
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`WanderLuxe Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
