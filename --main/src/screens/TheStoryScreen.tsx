import React, { useState } from 'react';
import { BOOK_IMAGES, DOCUMENTARY_RECORDS } from '../data/bookData';
import { PageId } from '../types';

interface TheStoryScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBuyModal: () => void;
  onOpenImageLightbox: (image: {
    url: string;
    title: string;
    subtitle: string;
    location?: string;
    timeTag?: string;
  }) => void;
}

export const TheStoryScreen: React.FC<TheStoryScreenProps> = ({
  onNavigate,
  onOpenBuyModal,
  onOpenImageLightbox,
}) => {
  const [globalBlurDisabled, setGlobalBlurDisabled] = useState(false);
  const [individuallyRevealed, setIndividuallyRevealed] = useState<Record<string, boolean>>({});

  const toggleIndividual = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setIndividuallyRevealed((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isRevealed = (id: string) => globalBlurDisabled || !!individuallyRevealed[id];

  const accidentRecords = DOCUMENTARY_RECORDS.filter((r) => r.category === 'accident');
  const metrohealthRecords = DOCUMENTARY_RECORDS.filter((r) => r.category === 'metrohealth');

  return (
    <div className="flex flex-col w-full selection:bg-[#dc2626] selection:text-white bg-white text-[#18181b]">
      {/* Content Warning Top Banner with Interactive Blur Toggle */}
      <section className="w-full bg-red-50/70 pt-[calc(var(--nav-height,72px)_+_1rem)] pb-3.5 px-6 lg:px-12 border-b border-red-100">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#dc2626] animate-pulse"></span>
            <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] font-bold">
              Sensitive Content Notice
            </span>
            <span className="hidden md:inline font-['Plus_Jakarta_Sans'] text-sm text-red-200">
              |
            </span>
            <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#71717a]">
              Content contains authentic medical trauma accounts and archival emergency scene records.
            </p>
          </div>

          <div className="flex items-center gap-2.5 bg-white px-3.5 py-1.5 rounded-full border border-red-200 shadow-sm">
            <span className="material-symbols-outlined text-[#dc2626] text-[18px]">
              {globalBlurDisabled ? 'visibility' : 'visibility_off'}
            </span>
            <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#18181b] font-semibold">
              {globalBlurDisabled ? 'All Media Visible' : 'Sensitive Media Protected'}
            </span>
            <button
              onClick={() => setGlobalBlurDisabled(!globalBlurDisabled)}
              className="ml-1 font-['Space_Grotesk'] text-[11px] uppercase tracking-wider bg-[#dc2626] hover:bg-[#b91c1c] text-white px-3 py-2.5 inline-flex items-center rounded-full transition-all cursor-pointer font-bold shadow-sm"
            >
              {globalBlurDisabled ? 'Blur Media' : 'Reveal All'}
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full bg-white overflow-hidden py-14 lg:py-20 border-b border-red-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[72px] text-[#18181b] uppercase tracking-tight leading-[1.05] mb-6 font-bold">
                September 28, 2014:
                <br />
                The{' '}
                <span className="font-['Playfair_Display'] text-3xl sm:text-5xl lg:text-[56px] lowercase text-[#dc2626] font-normal tracking-normal italic">
                  day
                </span>{' '}
                that
                <br />
                changed everything
              </h1>

              <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#52525b] max-w-xl mb-8 leading-relaxed">
                A catastrophic head-on collision shattered skull, bone, and mortal expectation. With an initial survival probability assessed at five percent, this chronology documents forty-eight crucial hours and the decade-long re-emergence that defied neurological science.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#chronology"
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-3 rounded-full font-['Space_Grotesk'] text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg font-bold group cursor-pointer"
                >
                  <span>Read The Chronology</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-y-0.5 transition-transform">
                    south
                  </span>
                </a>
                <a
                  href="#photographic-evidence"
                  className="inline-flex items-center gap-2 bg-white hover:bg-red-50 text-[#18181b] border border-red-200 hover:border-[#dc2626] px-6 py-3 rounded-full font-['Space_Grotesk'] text-xs uppercase tracking-wider transition-all cursor-pointer font-semibold shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#dc2626]">photo_library</span>
                </a>
              </div>
            </div>

            {/* Visual Hero Asset */}
            <div className="lg:col-span-5 relative mt-10 lg:mt-0 flex justify-center items-center">
              <div className="relative w-full max-w-md bg-[#faf9f8] p-4 rounded-2xl shadow-md border border-red-100">
                <div
                  onClick={() =>
                    onOpenImageLightbox({
                      url: BOOK_IMAGES.accidentSceneHero,
                      title: 'The Crash Scene • Frontal Collision',
                      subtitle: 'Interstate 71 at Mile Marker 241',
                      location: 'Cleveland, Ohio',
                      timeTag: '02:18 AM EST',
                    })
                  }
                  className="relative h-96 w-full rounded-xl overflow-hidden bg-neutral-100 cursor-pointer group/img"
                >
                  <div
                    className="bg-cover bg-center w-full h-full transform group-hover/img:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${BOOK_IMAGES.accidentSceneHero}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-red-300 font-bold">
                        Time of Impact
                      </p>
                      <p className="font-['Space_Grotesk'] text-xl font-bold text-white">
                        02:18 AM EST
                      </p>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      <span className="font-['Space_Grotesk'] text-[11px] text-white font-mono font-bold">
                        CASE ID: 928-MH
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metric Bar */}
      <section className="w-full bg-[#faf9f8] py-10 border-b border-red-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col space-y-1">
              <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] font-semibold">
                Initial Prognosis
              </span>
              <p className="font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#dc2626] font-bold">
                5%
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#52525b]">
                Estimated survival rate at trauma intake
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] font-semibold">
                ICU Coma Duration
              </span>
              <p className="font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#18181b] font-bold">
                17{' '}
                <span className="font-['Space_Grotesk'] text-xs text-[#71717a]">DAYS</span>
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#52525b]">
                Medically induced neurological stasis
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] font-semibold">
                Global Prayer Reach
              </span>
              <p className="font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#18181b] font-bold">
                7{' '}
                <span className="font-['Space_Grotesk'] text-xs text-[#71717a]">NATIONS</span>
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#52525b]">
                Three major world faith congregations
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] font-semibold">
                Neurological Rebirth
              </span>
              <p className="font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#dc2626] font-bold">
                100%
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#52525b]">
                Cognitive voice restored to advocate for survivors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5-Stage Survival Chronology */}
      <section className="w-full bg-white py-20" id="chronology">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#18181b] uppercase mt-1">
                The Five Stages of Survival
              </h2>
            </div>
            <div className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#71717a] flex items-center gap-2 font-bold">
              <span className="text-[#dc2626]">01</span>
              <span className="w-12 h-[2px] bg-red-200 inline-block"></span>
              <span>05</span>
            </div>
          </div>

          {/* Chronology Cards */}
          <div className="space-y-8 relative">
            {/* Stage 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#faf9f8] rounded-2xl p-6 lg:p-10 relative overflow-hidden group hover:border-[#dc2626] transition-all border border-red-100 shadow-sm">
              <div className="lg:col-span-3 flex flex-col justify-between">
                <div>
                  <span className="font-['Space_Grotesk'] text-5xl font-bold text-red-200 group-hover:text-[#dc2626] transition-colors">
                    01
                  </span>
                  <p className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] mt-2 font-bold">
                    Trauma Bay Red
                  </p>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b] uppercase mt-2">
                    The Crash &amp; The 5% Prognosis
                  </h3>
                </div>
                <div className="mt-4">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#71717a] font-semibold">
                    Location: MetroHealth Trauma Center
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#18181b] mb-4 leading-relaxed">
                  At 2:18 AM, high-velocity deceleration crushed the vehicle frame. Paramedics executed rapid extrication, fighting fading vitals on Interstate 71. Transported to Cleveland's Level 1 Trauma Center, the neurosurgical diagnostic team confronted catastrophic intracranial pressure and extensive traumatic brain injury (TBI).
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  The attending trauma surgeons offered the grim, objective statistical probability: a ninety-five percent likelihood of imminent mortality before sunrise. The human skull was decompressed via emergency craniectomy.
                </p>
              </div>
              <div
                onClick={() =>
                  onOpenImageLightbox({
                    url: BOOK_IMAGES.stage1Trauma,
                    title: 'Stage 01: Trauma Bay Red',
                    subtitle: 'Emergency Surgical Decompression Craniectomy',
                    location: 'MetroHealth Medical Center',
                  })
                }
                className="lg:col-span-4 h-64 lg:h-auto rounded-xl overflow-hidden bg-neutral-100 relative cursor-pointer group/img shadow-sm"
              >
                <div
                  className="bg-cover bg-center w-full h-full group-hover/img:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${BOOK_IMAGES.stage1Trauma}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>

            {/* Stage 02 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#faf9f8] rounded-2xl p-6 lg:p-10 relative overflow-hidden group hover:border-[#dc2626] transition-all border border-red-100 shadow-sm">
              <div className="lg:col-span-3 flex flex-col justify-between">
                <div>
                  <span className="font-['Space_Grotesk'] text-5xl font-bold text-red-200 group-hover:text-[#dc2626] transition-colors">
                    02
                  </span>
                  <p className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] mt-2 font-bold">
                    The Consultation
                  </p>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b] uppercase mt-2">
                    The Donation Recommendation
                  </h3>
                </div>
                <div className="mt-4">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#71717a] font-semibold">
                    Hour 36: Quiet Family Sanctuary
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#18181b] mb-4 leading-relaxed">
                  As neurological flatlines threatened, clinical staff quietly invited family elders to a private consultation suite. The conversation pivoted toward organ procurement—a compassionate attempt to yield meaning from an inevitable demise.
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  In that sterile room, his mother held unwavering spiritual resolve:{' '}
                  <span className="text-[#18181b] font-bold">
                    “His soul remains anchored. As long as breath exists, we do not surrender his vessel.”
                  </span>{' '}
                  The consent papers remained un-signed.
                </p>
              </div>
              <div
                onClick={() =>
                  onOpenImageLightbox({
                    url: BOOK_IMAGES.stage2Consultation,
                    title: 'Stage 02: Family ICU Vigil',
                    subtitle: 'Mother Refusing Organ Procurement Documents',
                    location: 'MetroHealth 4th Floor ICU',
                  })
                }
                className="lg:col-span-4 h-64 lg:h-auto rounded-xl overflow-hidden bg-neutral-100 relative cursor-pointer group/img shadow-sm"
              >
                <div
                  className="bg-cover bg-center w-full h-full group-hover/img:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${BOOK_IMAGES.stage2Consultation}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>

            {/* Stage 03 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#faf9f8] rounded-2xl p-6 lg:p-10 relative overflow-hidden group hover:border-[#dc2626] transition-all border border-red-100 shadow-sm">
              <div className="lg:col-span-3 flex flex-col justify-between">
                <div>
                  <span className="font-['Space_Grotesk'] text-5xl font-bold text-red-200 group-hover:text-[#dc2626] transition-colors">
                    03
                  </span>
                  <p className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] mt-2 font-bold">
                    Ecumenical Intercession
                  </p>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b] uppercase mt-2">
                    Three Faiths Unite Across 7 Nations
                  </h3>
                </div>
                <div className="mt-4">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#71717a] font-semibold">
                    Global Coordination
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#18181b] mb-4 leading-relaxed">
                  Word rippled across social lines and oceans. A Christian pastor led overnight prayer chains; Jewish cantors sounded psalms for healing; Muslim elders prostrated in midnight tahajjud in mosques across North America and the Middle East.
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  Seven sovereign nations joined in concurrent intercession. On Day 17, as intracranial swelling threatened cerebral herniation, neurological markers abruptly normalized, shocking the neurotrauma floor.
                </p>
              </div>
              <div
                onClick={() =>
                  onOpenImageLightbox({
                    url: BOOK_IMAGES.stage3Faith,
                    title: 'Stage 03: Global Intercession',
                    subtitle: 'Multi-Faith Prayer Vigils',
                    location: '7 Nations Interceding',
                  })
                }
                className="lg:col-span-4 h-64 lg:h-auto rounded-xl overflow-hidden bg-neutral-100 relative cursor-pointer group/img shadow-sm"
              >
                <div
                  className="bg-cover bg-center w-full h-full group-hover/img:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${BOOK_IMAGES.stage3Faith}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>

            {/* Stage 04 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#faf9f8] rounded-2xl p-6 lg:p-10 relative overflow-hidden group hover:border-[#dc2626] transition-all border border-red-100 shadow-sm">
              <div className="lg:col-span-3 flex flex-col justify-between">
                <div>
                  <span className="font-['Space_Grotesk'] text-5xl font-bold text-red-200 group-hover:text-[#dc2626] transition-colors">
                    04
                  </span>
                  <p className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] mt-2 font-bold">
                    The Awakening
                  </p>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b] uppercase mt-2">
                    Evolving Beyond the Coma
                  </h3>
                </div>
                <div className="mt-4">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#71717a] font-semibold">
                    Step-Down Neurological Ward
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#18181b] mb-4 leading-relaxed">
                  Emerging from sedation was not a cinematic moment; it was a grueling, disoriented baptism. The right side of his body refused command; language was fractured into guttural phonetics.
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  Yet the interior spark ignited. Faced with speech therapists who warned of permanent cognitive deficits, Saad whispered his cardinal creed: <em>“Tell me what I can’t do, and I’ll show you what I can do.”</em>
                </p>
              </div>
              <div
                onClick={() =>
                  onOpenImageLightbox({
                    url: BOOK_IMAGES.stage4Awakening,
                    title: 'Stage 04: The Awakening',
                    subtitle: 'Post-Coma Neuro Recovery & Cognitive Therapy',
                    location: 'MetroHealth Inpatient Rehabilitation',
                  })
                }
                className="lg:col-span-4 h-64 lg:h-auto rounded-xl overflow-hidden bg-neutral-100 relative cursor-pointer group/img shadow-sm"
              >
                <div
                  className="bg-cover bg-center w-full h-full group-hover/img:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${BOOK_IMAGES.stage4Awakening}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>

            {/* Stage 05 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#faf9f8] rounded-2xl p-6 lg:p-10 relative overflow-hidden group hover:border-[#dc2626] transition-all border border-red-100 shadow-sm">
              <div className="lg:col-span-3 flex flex-col justify-between">
                <div>
                  <span className="font-['Space_Grotesk'] text-5xl font-bold text-red-200 group-hover:text-[#dc2626] transition-colors">
                    05
                  </span>
                  <p className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] mt-2 font-bold">
                    Reborn in Service
                  </p>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b] uppercase mt-2">
                    Advocacy, Authorship &amp; TSN Mentorship
                  </h3>
                </div>
                <div className="mt-4">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#71717a] font-semibold">
                    Present Day Mission
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#18181b] mb-4 leading-relaxed">
                  Today, Saad walks the exact hospital corridors where his life was declared forfeit. Through the MetroHealth Trauma Survivors Network, he visits freshly injured patients at their bedsides, offering living proof that medical prognoses do not hold the final word.
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  His vehicle serves as a mobile ministry; his memoir <em>928</em> has reached thousands across the globe, transforming grief into actionable resilience.
                </p>
              </div>
              <div
                onClick={() =>
                  onOpenImageLightbox({
                    url: BOOK_IMAGES.stage5Service,
                    title: 'Stage 05: Life in Service',
                    subtitle: 'Bedside Mentorship & Keynote Addresses',
                    location: 'National Speaking Tour',
                  })
                }
                className="lg:col-span-4 h-64 lg:h-auto rounded-xl overflow-hidden bg-neutral-100 relative cursor-pointer group/img shadow-sm"
              >
                <div
                  className="bg-cover bg-center w-full h-full group-hover/img:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${BOOK_IMAGES.stage5Service}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentary Evidence & Archival Records */}
      <section className="w-full bg-[#faf9f8] py-20 border-t border-red-100" id="photographic-evidence">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#18181b] uppercase mt-1">
                Documentary Evidence &amp; Medical Scans
              </h2>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] max-w-md">
              Verified clinical records, emergency scene documentation, and surgical imaging from the MetroHealth trauma archive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCUMENTARY_RECORDS.map((item) => {
              const revealed = isRevealed(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() =>
                    onOpenImageLightbox({
                      url: item.imageUrl,
                      title: item.title,
                      subtitle: item.subtitle,
                      location: item.location,
                      timeTag: item.timeTag,
                    })
                  }
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-red-100 hover:border-[#dc2626] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                        revealed ? 'blur-0' : 'blur-xl'
                      }`}
                    />

                    {/* Sensitive Overlay Toggle if blurred */}
                    {!revealed && (
                      <div
                        onClick={(e) => toggleIndividual(item.id, e)}
                        className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center cursor-pointer"
                      >
                        <span className="w-10 h-10 rounded-full bg-white text-[#dc2626] flex items-center justify-center shadow-lg mb-2">
                          <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </span>
                        <p className="font-['Space_Grotesk'] text-xs uppercase font-bold text-white tracking-wider">
                          Click to Reveal
                        </p>
                        <p className="font-['Plus_Jakarta_Sans'] text-[10px] text-red-200 mt-0.5">
                          Archival Clinical Content
                        </p>
                      </div>
                    )}

                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] uppercase font-['Space_Grotesk'] font-bold text-[#dc2626] shadow-sm">
                      {item.tag}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[#71717a] block font-semibold">
                        {item.location}
                      </span>
                      <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#18181b] mt-1">
                        {item.title}
                      </h4>
                      <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#52525b] mt-1.5 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-red-100 flex items-center justify-between">
                      <span className="font-['Space_Grotesk'] text-xs font-bold text-[#dc2626]">
                        {item.timeTag}
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-[#71717a] group-hover:text-[#dc2626] group-hover:translate-x-0.5 transition-all">
                        open_in_full
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Book Connection Block with Real Book Picture */}
      <section className="w-full bg-white py-14 border-t border-red-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#faf9f8] p-8 lg:p-12 rounded-2xl border border-red-100 shadow-sm">
            <div className="lg:col-span-8 flex flex-col space-y-4">
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold text-[#18181b] uppercase">
                The full story is documented in{' '}
                <span className="font-['Playfair_Display'] lowercase text-[#dc2626] font-normal tracking-normal italic">
                  “928: this day changed my life”
                </span>
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#52525b] max-w-2xl leading-relaxed">
                Every chapter provides raw, unedited journal entries from hospital waiting rooms, intimate family testimony, and practical insights on surviving severe head trauma and rebuilding identity from zero.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl flex items-center gap-5 shadow-md border border-red-100">
              <img
                src={BOOK_IMAGES.bookCoverPhoto}
                alt="928 Memoir Book Cover"
                className="w-20 sm:w-24 h-auto aspect-[1/1.45] object-cover rounded-lg shadow-md border border-red-100 shrink-0"
              />
              <div className="flex flex-col justify-between space-y-3 flex-1 min-w-0">
                <div className="space-y-1">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] font-bold block">
                    Available Now
                  </span>
                  <p className="font-['Space_Grotesk'] text-base font-bold text-[#18181b] leading-snug">
                    Get Your Copy Today
                  </p>
                </div>
                <button
                  onClick={onOpenBuyModal}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white py-2.5 px-3 rounded-full font-['Space_Grotesk'] text-xs uppercase tracking-wider transition-all font-bold cursor-pointer shadow-md"
                >
                  <span>Order On Amazon</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Bottom CTA Navigation: Counseling & Contact */}
      <section className="w-full bg-[#faf9f8] py-16 border-t border-red-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[#18181b] uppercase mt-1">
              Walk the Path Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl flex flex-col justify-between group hover:border-[#dc2626] transition-all shadow-sm border border-red-100">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-[#dc2626]">
                  <span className="material-symbols-outlined text-[26px]">volunteer_activism</span>
                </div>
                <div>
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] font-bold">
                    Trauma Support
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b] uppercase mt-1">
                    One-on-One Peer Counseling
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] mt-2 leading-relaxed">
                    Connect directly with Saad through structured TSN mentorship. Invaluable guidance for patients and caregivers walking the path of brain injury rehabilitation.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('counseling')}
                  className="inline-flex items-center gap-1.5 font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#dc2626] hover:text-[#b91c1c] font-bold cursor-pointer"
                >
                  <span>Book a Session</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl flex flex-col justify-between group hover:border-[#dc2626] transition-all shadow-sm border border-red-100">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-[#dc2626]">
                  <span className="material-symbols-outlined text-[26px]">record_voice_over</span>
                </div>
                <div>
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] font-bold">
                    Keynotes &amp; Inquiries
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b] uppercase mt-1">
                    Keynote Speaking &amp; Press
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] mt-2 leading-relaxed">
                    Bring Saad to your medical institution, corporate summit, university, or faith community to share an unforgettable message on resilience, faith, and human perseverance.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-1.5 font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#dc2626] hover:text-[#b91c1c] font-bold cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
