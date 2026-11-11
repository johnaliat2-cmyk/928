import React, { useState } from 'react';
import { PageId } from '../types';
import { BOOK_IMAGES } from '../data/bookData';

interface HomeScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBuyModal: () => void;
  onOpenAudioModal: () => void;
  onOpenSampleModal: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenBuyModal,
  onOpenAudioModal,
  onOpenSampleModal,
}) => {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [heroAudioPlaying, setHeroAudioPlaying] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className="flex flex-col w-full selection:bg-[#dc2626] selection:text-white bg-white text-[#18181b]">
      {/* HERO MASTERPIECE SECTION (High Contrast White & Crimson Red) */}
      <section className="relative w-full overflow-hidden bg-white pb-14 pt-[calc(var(--nav-height,72px)_+_2.5rem)] md:pt-[calc(var(--nav-height,80px)_+_4rem)]">
        {/* Background atmospheric glows */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-red-500/10 blur-[130px]"></div>
        <div className="pointer-events-none absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-red-600/5 blur-[160px]"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Hero Grid: 12 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Bold Typographic Anchor (7 Columns Desktop) */}
            <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
              {/* Dynamic Mixed Display Typography */}
              <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-[#18181b] uppercase mb-6 leading-[1.05]">
                Discover the <br />
                <span className="font-['Playfair_Display'] text-[36px] sm:text-[48px] lg:text-[56px] lowercase text-[#dc2626] font-normal tracking-normal italic">
                  story
                </span>{' '}
                that changed <br className="hidden sm:inline" />
                <span className="text-[#18181b]">Everything.</span>
              </h1>

              {/* Resonant Creed Quote */}
              <div className="relative pl-6 border-l-2 border-[#dc2626] mb-8 max-w-xl bg-red-50/40 py-3 pr-4 rounded-r-lg">
                <p className="font-['Playfair_Display'] text-xl sm:text-2xl italic text-[#27272a] leading-snug">
                  “Tell me what I can’t do, and I’ll show you what I can do, by the grace of God.”
                </p>
                <span className="block font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] mt-2 font-semibold">
                  — Saad Hamed, Veteran &amp; Traumatic Brain Injury Survivor
                </span>
              </div>

              {/* Action Cluster */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full pt-2">
                <button
                  onClick={onOpenBuyModal}
                  className="inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 rounded-full font-['Space_Grotesk'] text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_12px_24px_-8px_rgba(220,38,38,0.4)] hover:scale-[1.02] active:scale-[0.98] group cursor-pointer font-bold"
                >
                  <span>Buy on Amazon</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    arrow_outward
                  </span>
                </button>

                <button
                  onClick={() => onNavigate('the-story')}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-red-50 text-[#18181b] px-8 py-3.5 rounded-full font-['Space_Grotesk'] text-sm uppercase tracking-wider border border-red-200 hover:border-[#dc2626] transition-all duration-300 group cursor-pointer font-semibold shadow-sm"
                >
                  <span>Read The Story</span>
                  <span className="material-symbols-outlined text-[16px] text-[#dc2626] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: 3D Hardcover Book Showcase & Gallery Peek */}
            <div className="lg:col-span-5 relative mt-10 lg:mt-0 flex justify-center items-center">
              {/* Secondary Peek Book (Background Accent, tilted) */}
              <div className="hidden sm:block absolute right-0 top-6 w-56 sm:w-64 h-[380px] bg-red-50 rounded-lg transform rotate-6 translate-x-10 translate-y-4 opacity-70 shadow-xl overflow-hidden border border-red-200 pointer-events-none">
                <div className="p-5 h-full flex flex-col justify-between bg-gradient-to-br from-red-50 to-white">
                  <span className="font-['Space_Grotesk'] text-[11px] text-[#dc2626] font-bold tracking-widest uppercase">
                    928 Audio Companion
                  </span>
                  <div className="space-y-1">
                    <p className="font-['Space_Grotesk'] text-xl font-bold text-[#18181b]">
                      Unbroken Will
                    </p>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#71717a]">
                      The complete audio recordings
                    </p>
                  </div>
                  <div className="h-1.5 w-1/2 bg-[#dc2626] rounded-full"></div>
                </div>
              </div>

              {/* Primary Hardcover Hero Book Presentation (Foreground) */}
              <div
                onClick={onOpenBuyModal}
                className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] aspect-[1/1.45] rounded-xl shadow-[0_24px_50px_-12px_rgba(220,38,38,0.25),0_12px_24px_-6px_rgba(0,0,0,0.08)] border-2 border-red-100 hover:border-[#dc2626] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 overflow-hidden flex flex-col justify-between cursor-pointer group bg-white"
              >
                {/* Real Book Cover Image */}
                <img
                  src={BOOK_IMAGES.bookCoverPhoto}
                  alt="928: This Day Changed My Life by Saad Hamed - Official Cover"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />

                {/* Spine shadow emulation */}
                <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none z-20"></div>

                {/* Ambient highlight sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-60 pointer-events-none z-20"></div>

                {/* Interactive Hover Buy / Explore Overlay */}
                <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-30">
                  <span className="w-12 h-12 rounded-full bg-[#dc2626] text-white flex items-center justify-center shadow-lg mb-3">
                    <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                  </span>
                  <p className="font-['Space_Grotesk'] text-sm uppercase tracking-wider font-bold text-white">
                    Order 928 Memoir
                  </p>
                  <p className="font-['Space_Grotesk'] text-xs text-[#fee2e2] mt-1">
                    Kindle • Paperback • Hardcover • Audio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOWER DECK (QR Card, Community, 01-03 Indicators) */}
      <section className="w-full bg-[#faf9f8] border-t border-red-100 py-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: QR App / Audio Listening Card */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 border border-red-100 flex flex-col items-center text-center shadow-md relative overflow-hidden group">
                <div className="w-full flex items-center justify-between mb-3 border-b border-red-100 pb-2">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] font-bold">
                    Scan &amp; Listen
                  </span>
                  <span className="material-symbols-outlined text-[#dc2626] text-[18px]">
                    podcasts
                  </span>
                </div>

                {/* Stylized Crisp High-Contrast SVG QR Representation */}
                <div
                  onClick={onOpenAudioModal}
                  className="p-3 bg-red-50/50 rounded-lg border border-red-100 shadow-inner mb-3 cursor-pointer hover:scale-105 transition-transform"
                  title="Click to stream free chapter"
                >
                  <svg className="w-28 h-28 text-[#18181b]" fill="currentColor" viewBox="0 0 120 120">
                    <rect fill="none" height="30" rx="3" stroke="currentColor" strokeWidth="6" width="30" x="10" y="10"></rect>
                    <rect fill="currentColor" height="10" width="10" x="20" y="20"></rect>
                    <rect fill="none" height="30" rx="3" stroke="currentColor" strokeWidth="6" width="30" x="80" y="10"></rect>
                    <rect fill="currentColor" height="10" width="10" x="90" y="20"></rect>
                    <rect fill="none" height="30" rx="3" stroke="currentColor" strokeWidth="6" width="30" x="10" y="80"></rect>
                    <rect fill="currentColor" height="10" width="10" x="20" y="90"></rect>
                    <rect height="8" width="8" x="48" y="12"></rect>
                    <rect height="8" width="8" x="62" y="18"></rect>
                    <rect height="8" width="8" x="48" y="30"></rect>
                    <rect height="8" width="8" x="12" y="50"></rect>
                    <rect height="8" width="8" x="28" y="60"></rect>
                    <rect height="14" width="14" x="48" y="52"></rect>
                    <rect height="8" width="8" x="70" y="50"></rect>
                    <rect height="8" width="10" x="88" y="60"></rect>
                    <rect height="8" width="8" x="102" y="50"></rect>
                    <rect height="8" width="8" x="52" y="76"></rect>
                    <rect height="12" width="12" x="72" y="80"></rect>
                    <rect height="8" width="8" x="94" y="88"></rect>
                    <rect height="8" width="12" x="64" y="98"></rect>
                    <rect height="8" width="8" x="90" y="104"></rect>
                  </svg>
                </div>

                <p className="font-['Space_Grotesk'] text-lg font-bold text-[#18181b] leading-tight">
                  Audio Companion
                </p>
                <p className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#71717a] mt-1 font-medium">
                  Free Chapter 1 Stream
                </p>
                <button
                  onClick={onOpenAudioModal}
                  className="mt-2.5 inline-flex items-center gap-1 font-['Space_Grotesk'] text-xs font-bold uppercase text-[#dc2626] hover:text-[#b91c1c] transition-colors cursor-pointer"
                >
                  <span>Direct Link</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Middle: Reader Community & Excerpt Callout */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3 pl-0 lg:pl-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center -space-x-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Reader"
                    className="w-10 h-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Survivor"
                    className="w-10 h-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                    alt="Reader"
                    className="w-10 h-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  />
                  <div className="w-10 h-10 rounded-full ring-2 ring-white bg-[#dc2626] text-white flex items-center justify-center font-['Space_Grotesk'] text-xs font-bold shrink-0 shadow-sm">
                    +8k
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Space_Grotesk'] text-xs tracking-wider uppercase text-[#18181b] font-bold">
                    8,000+ Global Readers &amp; Survivors
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#dc2626] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]"></span>
                    United in Faith &amp; Resilience
                  </span>
                </div>
              </div>

              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#18181b] leading-snug">
                Join the{' '}
                <span className="font-['Playfair_Display'] text-2xl sm:text-3xl italic font-normal text-[#dc2626]">
                  928
                </span>{' '}
                Community
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#52525b] leading-relaxed max-w-lg">
                A 5% survival chance. Strangers of three faiths praying across seven countries. A testament to faith, persistence, and God’s absolute timing.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenSampleModal}
                  className="inline-flex items-center gap-3 font-['Space_Grotesk'] text-sm uppercase tracking-wider text-[#18181b] hover:text-[#dc2626] transition-colors font-bold group cursor-pointer"
                >
                  <span>Read Excerpt</span>
                  <div className="w-8 h-8 rounded-full bg-[#dc2626] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right: Progress Indicator & Index Strip */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="p-6 rounded-xl bg-white border border-red-100 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-['Space_Grotesk'] text-2xl font-bold text-[#dc2626]">01</span>
                  <div className="flex-grow mx-4 h-1 bg-red-100 rounded-full relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[#dc2626] rounded-full"></div>
                  </div>
                  <span className="font-['Space_Grotesk'] text-sm font-semibold text-[#71717a]">03</span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-[#18181b] border-b border-red-50 pb-2">
                    <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#71717a] font-medium">
                      01 Medical Prognosis
                    </span>
                    <span className="font-['Space_Grotesk'] text-sm font-bold text-[#dc2626]">
                      5% Survival Chance
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#18181b] border-b border-red-50 pb-2">
                    <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#71717a] font-medium">
                      02 United Faith
                    </span>
                    <span className="font-['Space_Grotesk'] text-sm font-bold text-[#18181b]">
                      7 Countries Praying
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#18181b]">
                    <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#71717a] font-medium">
                      03 The Outcome
                    </span>
                    <span className="font-['Space_Grotesk'] text-sm font-bold text-[#dc2626]">
                      100% Grace of God
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE STORY: THE THREE P'S & CORE PHILOSOPHY SECTION */}
      <section className="w-full bg-white py-16 border-t border-red-100" id="the-story-pillars">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#dc2626] font-['Space_Grotesk'] text-xs uppercase tracking-widest mb-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]"></span>
                <span>The Pillar Philosophy</span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#18181b] uppercase">
                The Three{' '}
                <span className="font-['Playfair_Display'] italic font-normal text-[#dc2626]">P’s</span>{' '}
                of Saad
              </h2>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#52525b] max-w-md">
              How spiritual fortitude and unrelenting will transformed an impossible hospital diagnosis into a mission of universal healing.
            </p>
          </div>

          {/* Bento Cards Grid for 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Prayer */}
            <div className="bg-[#faf9f8] p-6 sm:p-8 rounded-xl border border-red-100 hover:border-[#dc2626] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-[#dc2626] mb-6 group-hover:bg-[#dc2626] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[24px]">front_hand</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#18181b] mb-3">Prayer</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  When doctors gave up, Saad’s family rallied people of all faiths—Christians, Muslims, and Jews across seven nations—to pray unceasingly. Faith transcends borders.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-red-100 flex items-center justify-between text-[#71717a] font-['Space_Grotesk'] text-[11px] uppercase tracking-wider font-semibold">
                <span>Spiritual Anchor</span>
                <span className="material-symbols-outlined text-[16px] text-[#dc2626]">church</span>
              </div>
            </div>

            {/* Pillar 2: Persistence */}
            <div className="bg-[#faf9f8] p-6 sm:p-8 rounded-xl border border-red-100 hover:border-[#dc2626] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-[#dc2626] mb-6 group-hover:bg-[#dc2626] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[24px]">fitness_center</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#18181b] mb-3">
                  Persistence
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  Relearning how to speak, stand, and think. Showing up to excruciating physical therapy every morning with one motto: what they say I cannot do, I will conquer.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-red-100 flex items-center justify-between text-[#71717a] font-['Space_Grotesk'] text-[11px] uppercase tracking-wider font-semibold">
                <span>Relentless Grit</span>
                <span className="material-symbols-outlined text-[16px] text-[#dc2626]">trending_up</span>
              </div>
            </div>

            {/* Pillar 3: Patience */}
            <div className="bg-[#faf9f8] p-6 sm:p-8 rounded-xl border border-red-100 hover:border-[#dc2626] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-[#dc2626] mb-6 group-hover:bg-[#dc2626] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[24px]">hourglass_top</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#18181b] mb-3">Patience</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  Understanding divine timing. Healing is not a straight line, but an endurance marathon of surrendering ego and allowing purpose to take root in the heart.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-red-100 flex items-center justify-between text-[#71717a] font-['Space_Grotesk'] text-[11px] uppercase tracking-wider font-semibold">
                <span>Divine Timing</span>
                <span className="material-symbols-outlined text-[16px] text-[#dc2626]">schedule</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE EXCERPT / CHAPTER PREVIEW */}
      <section className="w-full bg-[#faf9f8] py-16 border-t border-red-100" id="excerpt">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Excerpt Visual Module */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 sm:p-8 bg-white rounded-xl border border-red-100 shadow-md relative overflow-hidden">
                <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] block mb-3 font-bold">
                  Prologue Excerpt
                </span>
                <p className="font-['Playfair_Display'] text-xl sm:text-2xl italic text-[#18181b] leading-relaxed mb-6">
                  “The monitor line wavered. To science, my brain had ceased command. But in the quiet recesses of the spirit, a completely different battle was being waged.”
                </p>
                <div className="mb-6 rounded-xl overflow-hidden bg-neutral-100 border border-red-100">
                  <img
                    src={BOOK_IMAGES.prologueExcerpt}
                    alt="Saad intubated in the ICU with ventilator lines, the night the monitor line wavered"
                    className="w-full h-44 sm:h-48 object-cover object-top"
                  />
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-red-100">
                  <img
                    src={BOOK_IMAGES.bookCoverPhoto}
                    alt="928 Book Cover"
                    className="w-12 h-16 object-cover rounded shadow border border-red-100 shrink-0"
                  />
                  <div>
                    <p className="font-['Space_Grotesk'] text-xs font-bold uppercase text-[#18181b]">
                      Chapter 01: The Flatline
                    </p>
                    <p className="font-['Space_Grotesk'] text-[11px] text-[#71717a]">
                      Pages 14 — 19 • From "928: This Day Changed My Life"
                    </p>
                    <button
                      onClick={onOpenSampleModal}
                      className="mt-1 text-[11px] font-['Space_Grotesk'] text-[#dc2626] hover:text-[#b91c1c] uppercase tracking-wider font-bold inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Free Sample</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Excerpt Narrative Details & Audio Preview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-[#dc2626] font-['Space_Grotesk'] text-xs uppercase tracking-widest font-bold">
                <span className="material-symbols-outlined text-[16px]">headphones</span>
                <span>Listen &amp; Read Concurrently</span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#18181b] uppercase">
                Living Versus Just{' '}
                <span className="font-['Playfair_Display'] italic font-normal text-[#dc2626]">
                  Being Alive
                </span>
                .
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-base text-[#52525b] leading-relaxed">
                Most people spend their entire lives merely existing—clocking hours, dodging discomfort, and dreading failure. On September 28, Saad woke up to the undeniable truth: life isn’t guaranteed for the next sixty seconds.
              </p>

              {/* Audio Stream Player Micro-Component */}
              <div className="p-4 rounded-xl bg-white border border-red-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setHeroAudioPlaying(!heroAudioPlaying);
                      onOpenAudioModal();
                    }}
                    className="w-12 h-12 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white flex items-center justify-center shrink-0 shadow-md transition-all cursor-pointer"
                    aria-label="Play chapter audio sample"
                  >
                    <span className="material-symbols-outlined text-[24px]">
                      {heroAudioPlaying ? 'pause' : 'play_arrow'}
                    </span>
                  </button>
                  <div>
                    <p className="font-['Space_Grotesk'] text-base font-bold text-[#18181b]">
                      Audio Sample: Introduction
                    </p>
                    <p className="font-['Space_Grotesk'] text-xs text-[#71717a]">
                      Narrated by Saad Hamed • 04:12 mins
                    </p>
                  </div>
                </div>

                {/* Waveform inline visualization */}
                <div className="flex items-center gap-1 h-8 w-full sm:w-48 justify-end">
                  <span className="w-1 bg-[#dc2626] h-3 rounded-full animate-pulse"></span>
                  <span className="w-1 bg-[#dc2626] h-6 rounded-full animate-pulse [animation-delay:100ms]"></span>
                  <span className="w-1 bg-[#dc2626] h-8 rounded-full animate-pulse [animation-delay:200ms]"></span>
                  <span className="w-1 bg-red-300 h-4 rounded-full animate-pulse [animation-delay:300ms]"></span>
                  <span className="w-1 bg-red-300 h-7 rounded-full animate-pulse [animation-delay:150ms]"></span>
                  <span className="w-1 bg-[#dc2626] h-5 rounded-full animate-pulse [animation-delay:250ms]"></span>
                  <span className="w-1 bg-[#dc2626] h-2 rounded-full"></span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onOpenBuyModal}
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-2.5 rounded-full font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold transition-all cursor-pointer shadow-md"
                >
                  <span>Order Full Copy</span>
                  <span className="material-symbols-outlined text-[16px]">shopping_cart</span>
                </button>
                <button
                  onClick={() => onNavigate('the-book')}
                  className="inline-flex items-center gap-2 text-[#18181b] hover:text-[#dc2626] px-4 py-2.5 font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
                >
                  <span>View Table of Contents</span>
                  <span className="material-symbols-outlined text-[16px]">list_alt</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DUAL FEATURE BANNERS: COUNSELING & MEDIA SPOTLIGHT */}
      <section className="w-full bg-white py-16 border-t border-red-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Counseling Banner Card */}
            <div className="bg-[#faf9f8] rounded-xl p-6 sm:p-8 border border-red-100 hover:border-[#dc2626] transition-all flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md">
              <div className="space-y-3 relative z-10">
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b]">
                  Trauma &amp; Recovery Counseling
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  Saad provides individualized guidance for survivors of traumatic brain injury, veterans transitioning through adversity, and families navigating impossible medical circumstances.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-red-100 flex items-center justify-between relative z-10">
                <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#71717a] font-semibold">
                  Confidential Sessions
                </span>
                <button
                  onClick={() => onNavigate('counseling')}
                  className="inline-flex items-center gap-1 font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#dc2626] font-bold hover:text-[#b91c1c] transition-colors group-hover:translate-x-1 cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-red-500/5 rounded-full pointer-events-none group-hover:scale-150 transition-transform"></div>
            </div>

            {/* In the News Banner Card */}
            <div className="bg-[#faf9f8] rounded-xl p-6 sm:p-8 border border-red-100 hover:border-[#dc2626] transition-all flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md">
              <div className="space-y-3 relative z-10">
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b]">
                  In the News &amp; Keynote Speaking
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  Featured on broadcast segments, veteran symposiums, and medical conferences discussing neurological miracles, the mechanics of faith, and post-traumatic resilience.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-red-100 flex items-center justify-between relative z-10">
                <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#71717a] font-semibold">
                  Press Kit &amp; Inquiries
                </span>
                <button
                  onClick={() => onNavigate('in-the-news')}
                  className="inline-flex items-center gap-1 font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#dc2626] font-bold hover:text-[#b91c1c] transition-colors group-hover:translate-x-1 cursor-pointer"
                >
                  <span>View Media Appearances</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-red-500/5 rounded-full pointer-events-none group-hover:scale-150 transition-transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER / DIRECT TRANSMISSION SECTION */}
      <section className="w-full bg-[#faf9f8] py-16 border-t border-red-100">
        <div className="max-w-[800px] mx-auto px-6 text-center space-y-4">
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#18181b] uppercase">
            Receive Weekly Words of{' '}
            <span className="font-['Playfair_Display'] italic font-normal text-[#dc2626]">
              Fortitude
            </span>
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#52525b] leading-relaxed">
            Direct reflections from Saad Hamed on overcoming life’s steepest valleys, maintaining personal discipline, and living in daily gratitude.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-2 pt-2 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-white px-5 py-3.5 rounded-full text-[#18181b] placeholder:text-[#a1a1aa] border border-red-200 focus:border-[#dc2626] focus:outline-none font-['Plus_Jakarta_Sans'] text-sm shadow-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 min-h-[44px] inline-flex items-center justify-center bg-[#dc2626] hover:bg-[#b91c1c] text-white px-7 py-3.5 rounded-full font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold transition-all cursor-pointer shadow-md"
            >
              Subscribe
            </button>
          </form>

          {emailSubscribed && (
            <p className="text-[#dc2626] font-['Space_Grotesk'] text-xs uppercase tracking-wider mt-2 animate-fadeIn font-bold">
              ✓ Thank you. You are now connected to the 928 community.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
