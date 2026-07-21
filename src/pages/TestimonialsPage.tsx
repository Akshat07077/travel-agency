import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote, ThumbsUp } from 'lucide-react';

interface TestimonialsPageProps {
  testimonials: Testimonial[];
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ testimonials }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
          Verified Reviews
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif">
          What Our Travelers Say
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm">
          Real feedback from couples, families, and solo explorers who booked their vacations with WanderLuxe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((test) => (
          <div key={test.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-200" />
              </div>
              <p className="text-slate-700 text-xs leading-relaxed italic">"{test.comment}"</p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
              <img src={test.avatar} alt={test.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <h4 className="font-bold text-slate-900 text-xs">{test.name}</h4>
                <p className="text-[10px] text-slate-400">{test.tripTitle} • {test.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
