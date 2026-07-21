import React, { useState } from 'react';
import { BlogArticle } from '../types';
import { BookOpen, Calendar, Clock, User, ArrowRight, X } from 'lucide-react';

interface BlogPageProps {
  blogs: BlogArticle[];
}

export const BlogPage: React.FC<BlogPageProps> = ({ blogs }) => {
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200">
          Destination Insights
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif">
          WanderLuxe Travel Journal & Guides
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm">
          Expert advice on Schengen visa applications, best seasonal travel months, luxury packing tips, and hidden local gems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((article) => (
          <div
            key={article.id}
            onClick={() => setActiveArticle(article)}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition cursor-pointer flex flex-col justify-between"
          >
            <div className="aspect-16/9 overflow-hidden bg-slate-100">
              <img src={article.heroImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" referrerPolicy="no-referrer" />
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                  {article.category}
                </span>
                <h3 className="font-bold font-serif text-slate-900 text-lg line-clamp-2 group-hover:text-sky-600 transition">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">{article.summary}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-sky-600" /> {article.author}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {article.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative space-y-6">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-purple-600 uppercase">{activeArticle.category}</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">{activeArticle.title}</h2>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
              </div>
            </div>

            <div className="aspect-16/9 rounded-2xl overflow-hidden">
              <img src={activeArticle.heroImage} alt={activeArticle.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 whitespace-pre-line">
              {activeArticle.content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
