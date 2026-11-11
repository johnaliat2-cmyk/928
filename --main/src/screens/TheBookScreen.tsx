import React, { useState } from 'react';
import { BOOK_IMAGES } from '../data/bookData';
import { PageId, QuoteItem } from '../types';

interface TheBookScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBuyModal: () => void;
  onOpenSampleModal: () => void;
  onOpenAudioModal?: () => void;
  onToggleSaveQuote: (quote: QuoteItem) => void;
  isQuoteSaved: (id: string) => boolean;
}

export const TheBookScreen: React.FC<TheBookScreenProps> = ({
  onNavigate,
  onOpenBuyModal,
  onOpenSampleModal,
  onOpenAudioModal,
  onToggleSaveQuote,
  isQuoteSaved,
}) => {
  const [synopsisExpanded, setSynopsisExpanded] = useState(false);
  const [copiedQuoteId, setCopiedQuoteId] = useState<string | null>(null);

  const bookQuotes: QuoteItem[] = [
    {
      id: 'quote-card-1',
      text: '“Tell me what I can’t do, and I’ll show you what I can do, by the grace of God.”',
      attribution: 'Saad Hamed',
      chapter: 'Chapter 1: The Impact Point',
      category: 'The Cardinal Maxim',
    },
    {
      id: 'quote-card-2',
      text: '“The coma was not an empty blackness; it was a sanctuary where God rebuilt my heart before giving back my hands.”',
      attribution: 'Saad Hamed',
      chapter: 'Chapter 4: The ICU Sanctuary',
      category: 'On the Medically Induced Coma',
    },
    {
      id: 'quote-card-3',
      text: '“When doctors gave me 5%, God smiled and said that 5% is all I need to show you the fullness of My power.”',
      attribution: 'Saad Hamed',
      chapter: 'Chapter 8: Defying the Prognosis',
      category: 'On The Five Percent Odds',
    },
  ];

  const handleCopyQuote = (q: QuoteItem) => {
    navigator.clipboard.writeText(`${q.text} — ${q.attribution} (${q.chapter})`);
    setCopiedQuoteId(q.id);
    setTimeout(() => setCopiedQuoteId(null), 2000);
  };

  return (
    <div className="flex flex-col w-full selection:bg-[#dc2626] selection:text-white bg-white text-[#18181b]">
      {/* SECTION 1: HERO & BOOK PRESENTATION (Clean White & Crimson Red) */}
      <section className="relative w-full overflow-hidden bg-white pt-[calc(var(--nav-height,72px)_+_2.5rem)] md:pt-[calc(var(--nav-height,80px)_+_4rem)] pb-12 lg:pb-20 border-b border-red-100">
        {/* Atmospheric Ambient Glows */}
        <div className="pointer-events-none absolute -left-40 top-12 h-96 w-96 rounded-full bg-red-500/10 blur-[130px]"></div>
        <div className="pointer-events-none absolute right-10 top-1/2 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-[160px]"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Hero Grid: Left Narrative + Right 3D Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Typography & Story Anchor */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              {/* Main Hero Headings */}
              <div className="space-y-3">
                <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[72px] text-[#18181b] uppercase tracking-tight leading-[1.05] font-bold">
                  928{' '}
                  <span className="font-['Playfair_Display'] italic font-normal text-[#dc2626] lowercase text-3xl sm:text-5xl lg:text-[54px]">
                    this day
                  </span>
                  <br />
                  <span>Changed My Life</span>
                </h1>

                <div className="relative pl-5 border-l-2 border-[#dc2626] py-1 max-w-xl">
                  <p className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#27272a] italic leading-relaxed">
                    “The true measure of a man is not how hard he falls, but how fiercely he rises in the presence of grace.”
                  </p>
                </div>
              </div>

              {/* Core Synopsis Hook with Expander */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#faf9f8] border border-red-100 shadow-sm space-y-4">
                <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#27272a] leading-relaxed">
                  On September 28, 2014, a devastating motorcycle collision left{' '}
                  <span className="text-[#18181b] font-bold bg-red-100 text-[#b91c1c] px-1.5 py-0.5 rounded">
                    Saad Hamed
                  </span>{' '}
                  with a mere 5% chance of survival. Against all medical odds, guided by unwavering faith and international prayers echoing across three Abrahamic faiths, he emerged from the edge of oblivion to forge a definitive blueprint for human resilience.
                </p>

                {synopsisExpanded && (
                  <div className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#52525b] space-y-3 pt-2 animate-fadeIn leading-relaxed border-t border-red-100">
                    <p>
                      From months in a medically induced coma through the agonizing labyrinth of traumatic brain injury rehabilitation, Saad refused to let clinical verdicts define his horizon. <em>928</em> takes readers straight into the trauma intensive care room, through raw hospital corridors, and deep into the sacred interior wrestling of a spirit that refused to surrender.
                    </p>
                    <p>
                      It is simultaneously a harrowing survival memoir, a tender tribute to family sacrifice, and an actionable spiritual compass for anyone standing before their own insurmountable storm.
                    </p>
                  </div>
                )}

                <div className="pt-1">
                  <button
                    onClick={() => setSynopsisExpanded(!synopsisExpanded)}
                    className="inline-flex items-center gap-1 font-['Space_Grotesk'] text-[13px] uppercase tracking-wider text-[#dc2626] hover:text-[#b91c1c] font-bold transition-colors group cursor-pointer"
                  >
                    <span>
                      {synopsisExpanded ? 'Collapse Synopsis' : 'Read Complete Synopsis'}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${
                        synopsisExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                </div>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="p-4 rounded-xl bg-[#faf9f8] border border-red-100 shadow-sm text-center sm:text-left">
                  <span className="block font-['Space_Grotesk'] text-2xl sm:text-3xl text-[#dc2626] font-bold">
                    5%
                  </span>
                  <span className="block font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#71717a] mt-1 font-semibold">
                    Survival Odds
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#faf9f8] border border-red-100 shadow-sm text-center sm:text-left">
                  <span className="block font-['Space_Grotesk'] text-2xl sm:text-3xl text-[#18181b] font-bold">
                    7
                  </span>
                  <span className="block font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#71717a] mt-1 font-semibold">
                    Nations Praying
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#faf9f8] border border-red-100 shadow-sm text-center sm:text-left">
                  <span className="block font-['Space_Grotesk'] text-2xl sm:text-3xl text-[#18181b] font-bold">
                    365+
                  </span>
                  <span className="block font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#71717a] mt-1 font-semibold">
                    Days In Rehab
                  </span>
                </div>
              </div>
            </div>

            {/* Right: 3D Hardcover Mockup Presentation */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center mt-10 lg:mt-0">
              {/* Background Geometric Backdrop */}
              <div className="absolute inset-0 max-w-[420px] mx-auto rounded-2xl bg-gradient-to-b from-red-50 to-[#faf9f8] border border-red-100 -rotate-3 scale-95 pointer-events-none"></div>

              {/* 3D Hardcover Book Canvas Object */}
              <div
                onClick={onOpenBuyModal}
                className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] group transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Dynamic Red Underglow Cast Shadow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-[#dc2626]/20 rounded-full blur-2xl pointer-events-none"></div>

                {/* Book Outer Frame / Jacket Mockup */}
                <div className="relative rounded-xl overflow-hidden bg-white shadow-[0_24px_50px_-12px_rgba(220,38,38,0.25),0_12px_24px_-6px_rgba(0,0,0,0.08)] flex flex-col aspect-[1/1.45] border-2 border-red-100 group-hover:border-[#dc2626] transition-all">
                  {/* Real Book Cover Image */}
                  <img
                    src={BOOK_IMAGES.bookCoverPhoto}
                    alt="928: This Day Changed My Life by Saad Hamed - Official Cover"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />

                  {/* Book Spine Illusion Edge Left */}
                  <div className="absolute top-0 bottom-0 left-0 w-5 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none z-20"></div>

                  {/* Ambient Sheen & Highlight Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-60 pointer-events-none z-20"></div>

                  {/* Interactive Hover Buy / View Overlay */}
                  <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-30">
                    <span className="w-12 h-12 rounded-full bg-[#dc2626] text-white flex items-center justify-center shadow-lg mb-3">
                      <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                    </span>
                    <p className="font-['Space_Grotesk'] text-sm uppercase tracking-wider font-bold text-white">
                      Order Official Memoir
                    </p>
                    <p className="font-['Space_Grotesk'] text-xs text-red-200 mt-1">
                      Kindle • Paperback • Hardcover • Audio
                    </p>
                  </div>
                </div>

                {/* Hardcover Spec Badge Below Render */}
                <div className="mt-4 flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#faf9f8] border border-red-100 shadow-sm text-[#71717a]">
                  <div className="flex items-center gap-1.5 font-['Space_Grotesk'] text-[11px] uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[16px] text-[#dc2626]">
                      menu_book
                    </span>
                    <span className="font-semibold text-[#18181b]">284 Pages</span>
                  </div>
                  <div className="text-red-200 font-['Space_Grotesk'] text-[11px]">•</div>
                  <div className="flex items-center gap-1.5 font-['Space_Grotesk'] text-[11px] uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[16px] text-[#dc2626]">
                      headphones
                    </span>
                    <span className="font-semibold text-[#18181b]">Audible Unabridged</span>
                  </div>
                  <div className="text-red-200 font-['Space_Grotesk'] text-[11px]">•</div>
                  <span className="text-[#dc2626] font-bold font-['Space_Grotesk'] text-[11px]">
                    Available Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PURCHASE RETAILERS ROW */}
      <section className="w-full bg-[#faf9f8] py-12 border-b border-red-100" id="retailers">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="p-6 lg:p-10 rounded-2xl bg-white shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 border border-red-100">
            <div className="space-y-1 text-center lg:text-left">
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#18181b]">
                Available Across Major Booksellers
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] max-w-lg">
                Immediate dispatch worldwide in premium Hardcover, Collector's Paperback, Amazon Kindle, and Immersive Audio.
              </p>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 w-full lg:w-auto">
              <button
                onClick={onOpenBuyModal}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-3 rounded-full font-['Space_Grotesk'] text-[13px] uppercase tracking-wider transition-all shadow-md hover:shadow-lg group cursor-pointer font-bold"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                <span>Amazon (Kindle &amp; Paperback)</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  arrow_outward
                </span>
              </button>

              <button
                onClick={onOpenBuyModal}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-white hover:bg-red-50 text-[#18181b] border border-red-200 hover:border-[#dc2626] px-5 py-3 rounded-full font-['Space_Grotesk'] text-[13px] uppercase tracking-wider transition-all shadow-sm cursor-pointer font-semibold"
              >
                <span>Barnes &amp; Noble</span>
              </button>

              <button
                onClick={onOpenBuyModal}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-white hover:bg-red-50 text-[#18181b] border border-red-200 hover:border-[#dc2626] px-5 py-3 rounded-full font-['Space_Grotesk'] text-[13px] uppercase tracking-wider transition-all shadow-sm cursor-pointer font-semibold"
              >
                <span>Apple Books</span>
              </button>

              <button
                onClick={() => {
                  if (onOpenAudioModal) {
                    onOpenAudioModal();
                  } else {
                    onOpenBuyModal();
                  }
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-[#dc2626] border border-red-200 px-5 py-3 rounded-full font-['Space_Grotesk'] text-[13px] uppercase tracking-wider transition-all shadow-sm cursor-pointer font-bold"
              >
                <span className="material-symbols-outlined text-[18px]">hearing</span>
                <span>Audible Edition</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY THEMES (White & Red Bento Cards) */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#18181b]">
                Core Pillars &amp; Themes
              </h2>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#52525b] max-w-md">
              Explore the fundamental spiritual and psychological revelations forged in the crucible of catastrophic injury and divine recovery.
            </p>
          </div>

          {/* Bento Grid with 5 Thematic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            {/* 1. FAITH (Span 7 on lg) */}
            <div className="md:col-span-6 lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#faf9f8] shadow-sm flex flex-col justify-between group hover:border-[#dc2626] border border-red-100 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] font-bold px-3 py-1 rounded bg-red-100">
                    01 / Universal Faith
                  </span>
                  <span className="material-symbols-outlined text-[#dc2626] text-[28px]">
                    volunteer_activism
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b] mb-3">
                  Unified Prayer Across 3 Faiths
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#52525b] leading-relaxed mb-6">
                  When vital signs cratered, medical teams prepared Saad's family for the worst. Instead, an unprecedented wave of prayer transcended religious dogma. Strangers of Muslim, Christian, and Jewish faiths gathered in 7 nations—from Chicago to Jerusalem—praying in unison for the revival of a single soul.
                </p>
              </div>
              <div className="pt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white text-[#18181b] border border-red-100 font-['Space_Grotesk'] text-[11px] font-semibold">
                  7 Countries Interceding
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-[#18181b] border border-red-100 font-['Space_Grotesk'] text-[11px] font-semibold">
                  Abrahamic Solidarity
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-[#18181b] border border-red-100 font-['Space_Grotesk'] text-[11px] font-semibold">
                  Divine Intervention
                </span>
              </div>
            </div>

            {/* 2. RESILIENCE (Span 5 on lg) */}
            <div className="md:col-span-6 lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#faf9f8] shadow-sm flex flex-col justify-between group hover:border-[#dc2626] border border-red-100 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] font-bold px-3 py-1 rounded bg-red-100">
                    02 / Medical Defiance
                  </span>
                  <span className="material-symbols-outlined text-[#dc2626] text-[28px]">
                    vital_signs
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b] mb-3">
                  Rewriting Traumatic Brain Injury
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#52525b] leading-relaxed mb-6">
                  Facing irreversible cognitive and physical paralysis projections, Saad embarked on a relentless rehabilitation campaign. His recovery challenged neurology conventions and illuminated the unmapped sovereignty of the human spirit.
                </p>
              </div>
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden bg-neutral-100 border border-red-100">
                  <img
                    src={BOOK_IMAGES.pillar2Tbi}
                    alt="Surgical craniotomy scar documenting Saad's traumatic brain injury recovery"
                    className="w-full h-36 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 rounded-xl bg-white border border-red-100">
                  <div className="flex items-center justify-between font-['Space_Grotesk'] text-[11px] mb-1.5">
                    <span className="text-[#71717a] font-semibold">Expected Outcome</span>
                    <span className="text-[#dc2626] font-bold">95% Fatality/Paralysis</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-100 overflow-hidden">
                    <div className="h-full bg-[#dc2626] w-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. BROTHERLY HONOR (Span 4 on lg) */}
            <div className="md:col-span-3 lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#faf9f8] shadow-sm flex flex-col justify-between group hover:border-[#dc2626] border border-red-100 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] font-bold px-3 py-1 rounded bg-red-100">
                    03 / Brotherly Honor
                  </span>
                  <span className="material-symbols-outlined text-[#dc2626] text-[28px]">shield</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#18181b] mb-3">
                  Family, Loss &amp; Honor
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  Carrying the profound memory of his beloved brother lost to senseless violence, Saad turned profound grief into fuel. The narrative honors fraternal devotion as an undying fortress of courage.
                </p>
              </div>
              <span className="mt-6 font-['Space_Grotesk'] text-[11px] text-[#dc2626] font-bold uppercase tracking-wider">
                Unbroken Bond
              </span>
            </div>

            {/* 4. PURPOSE (Span 4 on lg) */}
            <div className="md:col-span-3 lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#faf9f8] shadow-sm flex flex-col justify-between group hover:border-[#dc2626] border border-red-100 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] font-bold px-3 py-1 rounded bg-red-100">
                    04 / Awakening
                  </span>
                  <span className="material-symbols-outlined text-[#dc2626] text-[28px]">
                    psychology_alt
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#18181b] mb-3">
                  Living vs. Mere Survival
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  Existing is biological; living is purposeful intentionality. Saad delineates the sharp philosophical distinction between escaping death and actively claiming your God-given assignment on Earth.
                </p>
              </div>
              <span className="mt-6 font-['Space_Grotesk'] text-[11px] text-[#dc2626] font-bold uppercase tracking-wider">
                Existential Clarity
              </span>
            </div>

            {/* 5. LEGACY: THE THREE P'S (Span 4 on lg) */}
            <div className="md:col-span-6 lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-50 to-white shadow-sm flex flex-col justify-between group hover:border-[#dc2626] border border-red-200 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] font-bold px-3 py-1 rounded bg-red-100">
                    05 / The Formula
                  </span>
                  <span className="material-symbols-outlined text-[#dc2626] text-[28px]">
                    military_tech
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#18181b] mb-3">
                  The Three P's Blueprint
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed mb-4">
                  Saad's universal architecture for conquering the impossible:
                </p>
                <div className="space-y-2 font-['Space_Grotesk'] text-xs uppercase tracking-wider">
                  <div className="flex items-center gap-2 text-[#18181b] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#dc2626]"></span>
                    <span>1. Prayer (Spiritual Alignment)</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#18181b] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#dc2626]"></span>
                    <span>2. Persistence (Physical Tenacity)</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#18181b] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#dc2626]"></span>
                    <span>3. Patience (Enduring Divine Timing)</span>
                  </div>
                </div>
              </div>
              <span className="mt-6 font-['Space_Grotesk'] text-[11px] text-[#dc2626] font-bold uppercase tracking-wider">
                A Practical Code
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE REVELATIONS & PULL-QUOTES GRID */}
      <section className="w-full bg-[#faf9f8] py-16 lg:py-24 border-y border-red-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#18181b]">
              Words Carved in Steel &amp; Faith
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#52525b]">
              Direct excerpts and transformative axioms straight from the pages of 928.
            </p>
          </div>

          {/* Quotes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookQuotes.map((q) => {
              const saved = isQuoteSaved(q.id);
              return (
                <div
                  key={q.id}
                  className="relative p-6 sm:p-8 rounded-2xl bg-white shadow-sm flex flex-col justify-between overflow-hidden border border-red-100 group hover:border-[#dc2626] transition-colors"
                >
                  <span className="font-['Space_Grotesk'] text-red-100 text-7xl leading-none absolute -top-1 right-4 select-none pointer-events-none">
                    “
                  </span>
                  <div className="space-y-4 z-10">
                    <p className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#18181b] leading-snug italic">
                      {q.text}
                    </p>
                  </div>

                  <div className="pt-8 z-10 flex items-center justify-between border-t border-red-100 mt-6">
                    <div>
                      <p className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#18181b] font-bold">
                        {q.category}
                      </p>
                      <p className="font-['Space_Grotesk'] text-[11px] text-[#71717a]">{q.chapter}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyQuote(q)}
                        title="Copy Quote"
                        className="p-2 rounded-full hover:bg-red-50 text-[#71717a] hover:text-[#dc2626] transition-colors cursor-pointer"
                        aria-label="Copy Quote Text"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {copiedQuoteId === q.id ? 'check' : 'content_copy'}
                        </span>
                      </button>

                      <button
                        onClick={() => onToggleSaveQuote(q)}
                        title={saved ? 'Remove Bookmark' : 'Save Bookmark'}
                        className={`p-2 rounded-full transition-colors cursor-pointer ${
                          saved
                            ? 'bg-[#dc2626] text-white'
                            : 'hover:bg-red-50 text-[#71717a] hover:text-[#dc2626]'
                        }`}
                        aria-label="Bookmark Quote"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {saved ? 'bookmark' : 'bookmark_border'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: READER PRAISE */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-10">
          <div className="space-y-1">
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#18181b]">
              Reader Testimonials &amp; Praise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#faf9f8] shadow-sm flex flex-col justify-between space-y-6 border border-red-100">
              <div className="space-y-4">
                <span className="px-2.5 py-1 rounded text-[10px] uppercase font-['Space_Grotesk'] tracking-wider bg-red-100 text-[#dc2626] font-bold">
                  Verified Reader
                </span>
                <h4 className="font-['Space_Grotesk'] text-xl font-bold text-[#18181b]">
                  “Impossible to Put Down”
                </h4>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  “I read this entire book in a single 6-hour sitting. Saad's transparency about his mental fights, the agonizing physical therapy, and how Christians, Jews, and Muslims gathered outside his hospital room restored my faith in humanity.”
                </p>
              </div>
              <div className="pt-4 flex items-center gap-3 border-t border-red-100">
                <div className="w-10 h-10 rounded-full bg-[#18181b] text-white flex items-center justify-center font-['Space_Grotesk'] font-bold">
                  M
                </div>
                <div>
                  <p className="font-['Space_Grotesk'] text-sm text-[#18181b] font-bold">
                    Dr. Marcus Vance
                  </p>
                  <p className="font-['Space_Grotesk'] text-[11px] text-[#71717a]">
                    Trauma Specialist &amp; Neurologist
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#faf9f8] shadow-sm flex flex-col justify-between space-y-6 border border-red-100">
              <div className="space-y-4">
                <span className="px-2.5 py-1 rounded text-[10px] uppercase font-['Space_Grotesk'] tracking-wider bg-red-100 text-[#dc2626] font-bold">
                  Verified Reader
                </span>
                <h4 className="font-['Space_Grotesk'] text-xl font-bold text-[#18181b]">
                  “A Spiritual Masterpiece”
                </h4>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  “The Three P’s—Prayer, Persistence, Patience—have become my daily morning mantra. If Saad could relearn how to breathe, move, and speak with a fractured skull, none of us have an excuse to surrender our dreams.”
                </p>
              </div>
              <div className="pt-4 flex items-center gap-3 border-t border-red-100">
                <div className="w-10 h-10 rounded-full bg-[#18181b] text-white flex items-center justify-center font-['Space_Grotesk'] font-bold">
                  S
                </div>
                <div>
                  <p className="font-['Space_Grotesk'] text-sm text-[#18181b] font-bold">
                    Sarah Jenkins, M.Ed.
                  </p>
                  <p className="font-['Space_Grotesk'] text-[11px] text-[#71717a]">
                    Author &amp; Leadership Coach
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#faf9f8] shadow-sm flex flex-col justify-between space-y-6 border border-red-100">
              <div className="space-y-4">
                <span className="px-2.5 py-1 rounded text-[10px] uppercase font-['Space_Grotesk'] tracking-wider bg-red-100 text-[#dc2626] font-bold">
                  Verified Reader
                </span>
                <h4 className="font-['Space_Grotesk'] text-xl font-bold text-[#18181b]">
                  “Raw, Honest &amp; Empowering”
                </h4>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  “He does not sugarcoat the agony. He takes you into the smell of the disinfectant, the despair of the wheelchair, and the lightning strike of his awakening. This book belongs on every nightstand in America.”
                </p>
              </div>
              <div className="pt-4 flex items-center gap-3 border-t border-red-100">
                <div className="w-10 h-10 rounded-full bg-[#18181b] text-white flex items-center justify-center font-['Space_Grotesk'] font-bold">
                  T
                </div>
                <div>
                  <p className="font-['Space_Grotesk'] text-sm text-[#18181b] font-bold">
                    Tariq Al-Mansoor
                  </p>
                  <p className="font-['Space_Grotesk'] text-[11px] text-[#71717a]">
                    Community Organizer &amp; Speaker
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SAMPLE PROLOGUE CALLOUT */}
      <section className="w-full bg-[#faf9f8] py-8 border-y border-red-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#dc2626]"></span>
              <span className="font-['Space_Grotesk'] text-lg font-bold text-[#18181b]">
                Curious About Chapter 1?
              </span>
              <span className="hidden sm:inline font-['Plus_Jakarta_Sans'] text-sm text-[#71717a]">
                Read the prologue excerpt free in your browser right now.
              </span>
            </div>
            <div>
              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-1.5 font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#dc2626] hover:text-[#b91c1c] font-bold group cursor-pointer"
              >
                <span>Read Sample Chapter</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CALL TO ACTION BANNER (White & Red Theme) */}
      <section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 text-center space-y-6 relative z-10">
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[72px] text-[#18181b] tracking-tight uppercase leading-[1.05] font-bold">
            Hold the Miracle in Your Hands
          </h2>

          <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#52525b] max-w-2xl mx-auto leading-relaxed">
            Join thousands of readers inspired by Saad Hamed’s journey from catastrophic collision to triumphant purpose.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBuyModal}
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 rounded-full font-['Space_Grotesk'] text-[13px] uppercase tracking-wider transition-all shadow-md hover:shadow-lg group cursor-pointer font-bold"
            >
              <span>Order "928" on Amazon</span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>

            <button
              onClick={onOpenBuyModal}
              className="inline-flex items-center gap-2 bg-white hover:bg-red-50 text-[#18181b] px-6 py-3.5 rounded-full font-['Space_Grotesk'] text-[13px] uppercase tracking-wider transition-all border border-red-200 hover:border-[#dc2626] cursor-pointer font-semibold shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px] text-[#dc2626]">group</span>
              <span>Bulk &amp; Educational Orders</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
