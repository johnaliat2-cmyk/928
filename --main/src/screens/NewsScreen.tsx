import React, { useState } from 'react';
import { NEWS_ARTICLES } from '../data/bookData';
import { PageId } from '../types';

interface NewsScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBuyModal: () => void;
}

export const NewsScreen: React.FC<NewsScreenProps> = ({
  onNavigate,
  onOpenBuyModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    { id: 'all', label: 'All Dispatches' },
    { id: 'Television', label: 'Television & Broadcast' },
    { id: 'Print', label: 'Investigative & Print' },
    { id: 'Podcast', label: 'Podcasts & Audio' },
    { id: 'Keynote', label: 'Keynotes & Speeches' },
  ];

  const filteredArticles =
    selectedCategory === 'all'
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((a) => a.type === selectedCategory);

  const handleCopyPressKit = () => {
    navigator.clipboard.writeText(
      window.location.origin + '/press-kit-saad-hamed-928.pdf'
    );
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="min-h-screen bg-white text-[#18181b] pt-24 pb-20 selection:bg-[#dc2626] selection:text-white">
      {/* Top Ledger Strip */}
      <div className="border-b border-red-100 bg-[#faf9f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between text-xs font-['Space_Grotesk'] uppercase tracking-widest text-[#71717a]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#dc2626] animate-pulse"></span>
            <span className="font-bold text-[#18181b]">Press Bureau &amp; Media Ledger</span>
            <span className="text-red-200">•</span>
            <span>Section 005</span>
          </div>
          <div className="flex items-center gap-4 text-[#71717a]">
            <span>Syndication: Global Verified</span>
            <span className="hidden sm:inline text-red-200">|</span>
            <span className="hidden sm:inline">Archival Records: 2021–Present</span>
          </div>
        </div>
      </div>

      {/* Hero Headline */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Space_Grotesk'] font-bold tracking-tight text-[#18181b] leading-[1.08] mb-6 uppercase">
            In The News &amp;{' '}
            <span className="font-['Playfair_Display'] italic font-normal text-[#dc2626] lowercase">
              Public Records
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed font-['Plus_Jakarta_Sans']">
            From the investigative reports of MetroHealth's level-one trauma survival to podcasts breaking down
            TBI neuroplasticity and combat veteran resiliency. Browse the official documentary record, audio
            broadcasts, and press releases.
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-red-100">
            <div className="p-4 bg-[#faf9f8] border border-red-100 rounded-xl shadow-sm">
              <div className="text-2xl font-['Space_Grotesk'] font-bold text-[#18181b]">24+</div>
              <div className="text-xs uppercase tracking-wider text-[#71717a] mt-1 font-semibold">Feature Stories</div>
            </div>
            <div className="p-4 bg-[#faf9f8] border border-red-100 rounded-xl shadow-sm">
              <div className="text-2xl font-['Space_Grotesk'] font-bold text-[#18181b]">120k+</div>
              <div className="text-xs uppercase tracking-wider text-[#71717a] mt-1 font-semibold">Podcast Listeners</div>
            </div>
            <div className="p-4 bg-[#faf9f8] border border-red-100 rounded-xl shadow-sm">
              <div className="text-2xl font-['Space_Grotesk'] font-bold text-[#18181b]">50+</div>
              <div className="text-xs uppercase tracking-wider text-[#71717a] mt-1 font-semibold">VA Keynotes</div>
            </div>
            <div className="p-4 bg-[#faf9f8] border border-red-100 rounded-xl shadow-sm">
              <div className="text-2xl font-['Space_Grotesk'] font-bold text-[#dc2626]">#1</div>
              <div className="text-xs uppercase tracking-wider text-[#71717a] mt-1 font-semibold">Trauma Memoir</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-6 border-y border-red-100 bg-[#faf9f8]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 min-h-[44px] inline-flex items-center text-xs font-['Space_Grotesk'] uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer font-bold ${
                  selectedCategory === cat.id
                    ? 'bg-[#dc2626] text-white shadow-md'
                    : 'bg-white text-[#52525b] hover:text-[#dc2626] hover:bg-red-50 border border-red-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleCopyPressKit}
            className="flex items-center gap-2 text-xs font-['Space_Grotesk'] uppercase tracking-widest text-[#dc2626] hover:text-[#b91c1c] px-4 py-2.5 min-h-[44px] rounded-full bg-white border border-red-200 shadow-sm transition-colors cursor-pointer font-bold"
          >
            <span className="material-symbols-outlined text-sm">
              {copiedLink ? 'check_circle' : 'download'}
            </span>
            <span>{copiedLink ? 'Press Kit Link Copied!' : 'Download Press Kit (.PDF)'}</span>
          </button>
        </div>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white border border-red-100 rounded-2xl overflow-hidden hover:border-[#dc2626] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] text-[#71717a] mb-3">
                  <span className="text-[#dc2626] uppercase font-bold tracking-wider">
                    {article.outlet}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-['Space_Grotesk'] font-bold text-[#18181b] group-hover:text-[#dc2626] transition-colors leading-snug mb-3">
                  {article.title}
                </h3>
                <p className="text-sm text-[#52525b] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                  {article.excerpt}
                </p>
              </div>

              <div className="p-6 pt-0 border-t border-red-100 flex items-center justify-between mt-auto">
                <span className="text-[10px] font-['Space_Grotesk'] uppercase tracking-widest px-2.5 py-1 rounded bg-red-50 text-[#dc2626] font-bold">
                  {article.type}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-['Space_Grotesk'] text-[#dc2626] group-hover:text-[#b91c1c] font-bold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                  <span>{article.linkText}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Media Inquiries Callout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-8">
        <div className="bg-[#faf9f8] border border-red-100 rounded-2xl p-8 lg:p-12 relative overflow-hidden shadow-sm">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl font-['Space_Grotesk'] font-bold text-[#18181b] mb-4">
              Schedule Saad Hamed for Keynotes, Broadcasts &amp; Medical Symposia
            </h2>
            <p className="text-sm sm:text-base text-[#52525b] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
              Saad speaks with raw honesty to veteran organizations, neuroscience departments, university trauma
              centers, and leadership summits across the country. Keynotes center around the Three P's (Prayer,
              Persistence, Patience) and transforming catastrophic trauma into living purpose.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-['Space_Grotesk'] uppercase tracking-widest font-bold rounded-full transition-colors flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Request Media Appearance</span>
                <span className="material-symbols-outlined text-sm">mail</span>
              </button>
              <button
                onClick={onOpenBuyModal}
                className="px-6 py-3 bg-white hover:bg-red-50 border border-red-200 text-[#18181b] text-xs font-['Space_Grotesk'] uppercase tracking-widest font-bold rounded-full transition-colors cursor-pointer shadow-sm"
              >
                Order Book for Review
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
