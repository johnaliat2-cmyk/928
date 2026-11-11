import React from 'react';
import { BOOK_IMAGES, TIMELINE_EVENTS } from '../data/bookData';
import { PageId } from '../types';

interface AboutSaadScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBuyModal: () => void;
  onOpenImageLightbox: (image: {
    url: string;
    title: string;
    subtitle: string;
    location?: string;
  }) => void;
}

export const AboutSaadScreen: React.FC<AboutSaadScreenProps> = ({
  onNavigate,
  onOpenBuyModal,
  onOpenImageLightbox,
}) => {
  const missionFaces = [
    {
      id: 'face-1',
      colSpan: 'md:col-span-7',
      aspect: 'aspect-[16/10]',
      tag: 'Trauma Survivors Network',
      tagBg: 'bg-[#dc2626] text-white',
      title: 'Bedside Advocacy at MetroHealth',
      desc: 'Walking the same trauma halls where he was once given 5% to live, assuring new patients that survival is real.',
      imageUrl: BOOK_IMAGES.face1HospitalVisit,
      alt: "Saad Hamed visiting a fellow traumatic brain injury survivor in a bright MetroHealth recovery ward, holding the patient's hand with warm sincere compassion.",
    },
    {
      id: 'face-2',
      colSpan: 'md:col-span-5',
      aspect: 'aspect-[4/3]',
      tag: 'Mobile Ministry',
      tagBg: 'bg-red-100 text-[#dc2626]',
      title: 'The Rideshare Sanctuary',
      desc: 'Transforming everyday transit rides into profound counseling interventions and sharing copies of 928 with those in crisis.',
      imageUrl: BOOK_IMAGES.face2Rideshare,
      alt: 'Saad Hamed in the driver seat of his vehicle during dusk in downtown Cleveland, smiling warmly through the rearview mirror while counseling a passenger.',
    },
    {
      id: 'face-3',
      colSpan: 'md:col-span-4',
      aspect: 'aspect-[4/3]',
      tag: 'Veteran Community',
      tagBg: 'bg-red-100 text-[#dc2626]',
      title: 'Brothers in Arms',
      desc: 'Standing with military brothers to de-stigmatize PTSD and traumatic brain injuries among combat veterans.',
      imageUrl: BOOK_IMAGES.face3Veterans,
      alt: 'Saad Hamed posing shoulder-to-shoulder with fellow Marine Corps veterans at a Memorial Day gathering.',
    },
    {
      id: 'face-4',
      colSpan: 'md:col-span-8',
      aspect: 'aspect-[16/9]',
      tag: 'Public Keynote',
      tagBg: 'bg-[#18181b] text-white',
      title: '“This Day Changed My Life” Launch Tour',
      desc: 'Sharing the 928 message across hospitals, rehabilitation centers, and veterans’ groups across the nation.',
      imageUrl: BOOK_IMAGES.face4Keynote,
      alt: 'Saad Hamed on stage delivering a keynote speech about resilience and faith at a Cleveland community auditorium.',
    },
  ];

  return (
    <div className="flex flex-col w-full selection:bg-[#dc2626] selection:text-white bg-white text-[#18181b]">
      {/* Hero Title & Identity Statement */}
      <div className="relative w-full overflow-hidden bg-white border-b border-red-100">
        <div className="absolute -top-40 right-10 w-[580px] h-[580px] bg-red-500/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-[45%] -left-32 w-[460px] h-[460px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-[calc(var(--nav-height,72px)_+_2.5rem)] md:pt-[calc(var(--nav-height,80px)_+_4rem)] pb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-8 h-[2px] bg-[#dc2626]"></span>
            <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] font-bold">
              Biographical Ledger • Author Profile
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-12">
              <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold text-[#18181b] tracking-tighter">
                About{' '}
                <span className="font-['Playfair_Display'] text-4xl sm:text-6xl text-[#dc2626] italic font-normal">
                  Saad
                </span>{' '}
                Hamed
              </h1>
              <p className="mt-3 font-['Space_Grotesk'] text-xl sm:text-2xl text-[#52525b] font-normal">
                Marine Veteran, Trauma Survivor, Author &amp; Counselor
              </p>
            </div>
          </div>

          {/* Roles Ribbons Row */}
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="bg-[#faf9f8] px-4 py-2 rounded-full flex items-center gap-2.5 shadow-sm border border-red-100">
              <span className="w-2 h-2 rounded-full bg-[#dc2626]"></span>
              <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#18181b] font-semibold">
                U.S. Marine Veteran (1999–2004)
              </span>
            </div>
            <div className="bg-[#faf9f8] px-4 py-2 rounded-full flex items-center gap-2.5 shadow-sm border border-red-100">
              <span className="w-2 h-2 rounded-full bg-[#dc2626]"></span>
              <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#18181b] font-semibold">
                Published Author
              </span>
            </div>
            <div className="bg-[#faf9f8] px-4 py-2 rounded-full flex items-center gap-2.5 shadow-sm border border-red-100">
              <span className="w-2 h-2 rounded-full bg-[#dc2626]"></span>
              <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#18181b] font-semibold">
                TSN Peer Counselor (MetroHealth)
              </span>
            </div>
            <div className="bg-[#faf9f8] px-4 py-2 rounded-full flex items-center gap-2.5 shadow-sm border border-red-100">
              <span className="w-2 h-2 rounded-full bg-[#71717a]"></span>
              <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#18181b] font-semibold">
                Mobile Ministry &amp; Counselor
              </span>
            </div>
          </div>
        </section>

        {/* Split Author Hero Stage & Editorial Dossier */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Portrait Framed Stage */}
            <div className="lg:col-span-5 relative flex flex-col justify-between">
              <div className="relative bg-[#faf9f8] p-4 rounded-2xl shadow-sm overflow-hidden group border border-red-100">
                <div
                  onClick={() =>
                    onOpenImageLightbox({
                      url: BOOK_IMAGES.saadHeroPortrait,
                      title: 'Saad Hamed',
                      subtitle: 'Marine Veteran, Trauma Survivor, Author & Counselor',
                      location: 'Cleveland, Ohio',
                    })
                  }
                  className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100 cursor-pointer shadow-inner"
                >
                  <img
                    className="w-full h-full object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-105"
                    alt="Saad Hamed, Marine veteran with resilient dignified eyes, faint surgical scar on skull temple"
                    src={BOOK_IMAGES.saadHeroPortrait}
                  />

                  {/* Red corner brackets overlay */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#dc2626] pointer-events-none"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#dc2626] pointer-events-none"></div>

                  {/* Overlaid Identity Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-between border border-red-100 shadow-md">
                    <div>
                      <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] block font-bold">
                        Service Call
                      </span>
                      <p className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-[#18181b]">
                        Big Yabba • Teflon
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#dc2626] text-white flex items-center justify-center font-bold font-['Space_Grotesk'] text-sm shadow-sm">
                      928
                    </div>
                  </div>
                </div>

                {/* Footnote Stamp Below Picture */}
                <div className="pt-4 pb-1 px-2 flex justify-between items-center text-[#71717a]">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest font-semibold">
                    Cleveland, Ohio • MetroHealth Trauma Survivor
                  </span>
                  <span className="font-['Space_Grotesk'] text-[11px] text-[#dc2626] tracking-widest font-bold">
                    UNBROKEN SPIRIT
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative Dossier */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="bg-[#faf9f8] p-8 lg:p-10 rounded-2xl shadow-sm space-y-6 border border-red-100">
                <div className="flex items-center gap-2">
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] font-bold">
                    The Awakening • September 28
                  </span>
                </div>
                <p className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#18181b] leading-tight italic">
                  “On September 28, 2014, my original life ended. Doctors told my family there was less than a five percent chance I would survive the night.”
                </p>
                <div className="space-y-4 font-['Plus_Jakarta_Sans'] text-base text-[#52525b] leading-relaxed">
                  <p>
                    Before that catastrophic midnight collision, Saad Hamed was an invincible Marine veteran nicknamed <span className="text-[#18181b] font-bold">Teflon</span>—a man forged in the demanding crucible of the 510 Airframes Unit. But physical strength could not insulate him from the devastating blow of a severe Traumatic Brain Injury, shattered facial bones, and months trapped in a coma.
                  </p>
                  <p>
                    Emerging into a disorienting, reconstructed world, Saad lost his corporate career, physical equilibrium, and familiar cognitive rhythms. Yet, rooted in an unyielding faith and his Marine ethos, he forged an updated, battle-tested version of the human spirit who now lives for a singular daily assignment:
                  </p>
                </div>

                {/* Daily Mandate Callout */}
                <div className="p-6 rounded-xl bg-white flex items-start gap-4 shadow-sm border border-red-100">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-[#dc2626] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[26px]">
                      volunteer_activism
                    </span>
                  </div>
                  <div>
                    <p className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] mb-1 font-bold">
                      The Daily Vow
                    </p>
                    <p className="font-['Space_Grotesk'] text-lg sm:text-xl text-[#18181b] font-bold">
                      Inspire at least one new person every single day—no matter what.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#faf9f8] p-5 rounded-xl text-center shadow-sm border border-red-100">
                  <span className="block font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#dc2626] font-bold">
                    5%
                  </span>
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] block mt-1 font-semibold">
                    Survival Prognosis
                  </span>
                </div>
                <div className="bg-[#faf9f8] p-5 rounded-xl text-center shadow-sm border border-red-100">
                  <span className="block font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#18181b] font-bold">
                    3,600+
                  </span>
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] block mt-1 font-semibold">
                    Lives Touched Daily
                  </span>
                </div>
                <div className="bg-[#faf9f8] p-5 rounded-xl text-center shadow-sm border border-red-100">
                  <span className="block font-['Space_Grotesk'] text-3xl sm:text-4xl text-[#dc2626] font-bold">
                    9/28
                  </span>
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] block mt-1 font-semibold">
                    Rebirth Date
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Three P's & Core Mantras (White & Red) */}
        <section className="w-full bg-[#faf9f8] py-20 relative border-t border-red-100">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="mb-14">
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#18181b]">
                The Three P's Framework
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-base text-[#52525b] max-w-xl mt-2">
                A universal philosophy developed over ten years of intense neurological rehab and spiritual discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Prayer */}
              <div className="bg-white p-8 rounded-2xl shadow-sm relative overflow-hidden group hover:border-[#dc2626] transition-all border border-red-100">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-[#dc2626] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[26px]">favorite</span>
                </div>
                <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] block mb-2 font-bold">
                  First Pillar
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl text-[#18181b] font-bold mb-3">
                  Prayer
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  Surrendering control to the divine when monitor lines flatten. Cultivating profound gratitude in darkness before healing has visually begun.
                </p>
              </div>

              {/* Card 2: Persistence */}
              <div className="bg-white p-8 rounded-2xl shadow-sm relative overflow-hidden group hover:border-[#dc2626] transition-all border border-red-100">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-[#dc2626] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[26px]">trending_up</span>
                </div>
                <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] block mb-2 font-bold">
                  Second Pillar
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl text-[#18181b] font-bold mb-3">
                  Persistence
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  Taking one staggering footstep a day. Relearning speech syllables, swallowing reflexes, and mental calculation regardless of grueling setbacks.
                </p>
              </div>

              {/* Card 3: Patience */}
              <div className="bg-white p-8 rounded-2xl border-b-2 border-b-[#dc2626] shadow-sm relative overflow-hidden group hover:border-[#dc2626] transition-all border border-red-100">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-[#dc2626] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[26px]">hourglass_empty</span>
                </div>
                <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] block mb-2 font-bold">
                  Third Pillar
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl text-[#18181b] font-bold mb-3">
                  Patience
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] leading-relaxed">
                  Neurological recovery is counted not in weeks, but in decades. Embracing stillness while the broken neural pathways slowly recraft themselves.
                </p>
              </div>
            </div>

            {/* Master Quote Banner */}
            <div className="mt-12 bg-white p-8 lg:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-red-100 shadow-sm">
              <div className="flex items-center gap-6">
                <div className="hidden sm:flex w-16 h-16 rounded-full bg-red-100 items-center justify-center shrink-0 text-[#dc2626]">
                  <span className="material-symbols-outlined text-[36px]">format_quote</span>
                </div>
                <div>
                  <p className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#18181b] italic">
                    “Tell me what I can’t do, and I’ll show you what I can do, by the grace of God.”
                  </p>
                  <p className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#71717a] mt-2 font-bold">
                    — Saad Hamed, The 928 Creed
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenBuyModal}
                className="shrink-0 inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-3 rounded-full font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Read The Memoir</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* Interactive Chronological Ledger (Timeline) */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 bg-white">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#18181b]">
                Timeline of Crucible &amp; Grace
              </h2>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#52525b] max-w-md">
              Trace the critical inflection points that dismantled Saad's physical existence and constructed a mobile ministry of trauma advocacy.
            </p>
          </div>

          <div className="space-y-6">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl transition-all shadow-sm group border ${
                  event.isHighlight
                    ? 'bg-red-50/50 border-red-200'
                    : 'bg-[#faf9f8] border-red-100 hover:border-[#dc2626]'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-3">
                    <span className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[#dc2626]">
                      {event.year}
                    </span>
                    <span className="block font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] mt-1 font-semibold">
                      {event.roleTag}
                    </span>
                  </div>

                  <div className="lg:col-span-6 space-y-2">
                    <h3 className="font-['Space_Grotesk'] text-xl text-[#18181b] font-bold">
                      {event.title}
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#52525b] leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="lg:col-span-3 flex lg:justify-end items-center">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold font-['Space_Grotesk'] ${
                        event.isHighlight
                          ? 'bg-[#dc2626] text-white'
                          : 'bg-white text-[#18181b] border border-red-100'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {event.icon}
                      </span>
                      <span>{event.badgeText}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Military Tribute Card: 510 Airframes & USMC Brotherhood */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-20">
          <div className="bg-[#faf9f8] p-8 lg:p-12 rounded-2xl shadow-sm relative overflow-hidden border border-red-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#18181b] tracking-tight">
                  Honoring the 510 Airframes Brothers
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#52525b] leading-relaxed">
                  “The brotherhood of the Marine Corps taught me that pain is temporary, but surrender is forever. When my body was shattered at MetroHealth, it wasn’t just medical skill that pulled me through—it was the muscle memory of Marine grit, discipline, and brotherhood.”
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                    <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] block font-semibold">
                      MOS Specialty
                    </span>
                    <span className="font-['Space_Grotesk'] text-xl text-[#18181b] font-bold">
                      Airframes
                    </span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                    <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] block font-semibold">
                      Unit Farewell
                    </span>
                    <span className="font-['Space_Grotesk'] text-xl text-[#dc2626] font-bold">
                      510 Tribute
                    </span>
                  </div>
                  <div className="bg-white p-4 rounded-xl col-span-2 sm:col-span-1 border border-red-100 shadow-sm">
                    <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] block font-semibold">
                      Rank Achieved
                    </span>
                    <span className="font-['Space_Grotesk'] text-xl text-[#18181b] font-bold">
                      LCPL
                    </span>
                  </div>
                </div>
              </div>

              {/* Archival Military Photo Frame */}
              <div className="lg:col-span-5 relative">
                <div
                  onClick={() =>
                    onOpenImageLightbox({
                      url: BOOK_IMAGES.usmcArchivalPlaque,
                      title: 'Squadron 510 Farewell Plaque • Archival',
                      subtitle: 'LCPL Saadadin M. Hamed with Marine squadron brothers',
                      location: '1999–2004 Military Service',
                    })
                  }
                  className="relative w-full bg-white p-3 rounded-xl shadow-md group border border-red-100 cursor-pointer"
                >
                  <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-[#18181b]">
                    <img
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      alt="Squadron 510 farewell plaque vintage archival photo from 2002"
                      src={BOOK_IMAGES.usmcArchivalPlaque}
                    />
                    <div className="absolute inset-0 bg-[#dc2626]/10 mix-blend-color pointer-events-none"></div>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[#71717a] px-1">
                    <span className="font-['Space_Grotesk'] text-xs tracking-wider uppercase font-semibold">
                      Squadron 510 Farewell Plaque • Archival
                    </span>
                    <span className="font-['Space_Grotesk'] text-xs text-[#dc2626] uppercase font-bold">
                      1999–2004
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Masonry Grid (The Faces of the Mission) */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#18181b]">
                The Faces of the Mission
              </h2>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#52525b] max-w-sm">
              Snapshots of raw human connection: from hospital ICU bedsides and veteran assemblies to rideshare counseling sessions across Cleveland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {missionFaces.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  onOpenImageLightbox({
                    url: item.imageUrl,
                    title: item.title,
                    subtitle: item.tag,
                    location: item.desc,
                  })
                }
                className={`${item.colSpan} bg-white rounded-2xl overflow-hidden shadow-sm group border border-red-100 hover:border-[#dc2626] cursor-pointer flex flex-col justify-between transition-all`}
              >
                <div className={`relative ${item.aspect} overflow-hidden`}>
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={item.alt}
                    src={item.imageUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span
                      className={`px-3 py-1 font-['Space_Grotesk'] text-[10px] uppercase rounded-full inline-block mb-2 font-bold ${item.tagBg}`}
                    >
                      {item.tag}
                    </span>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-red-100 mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Connect & Booking Banner with Real Book Picture */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-24">
          <div className="bg-[#faf9f8] rounded-2xl p-8 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm border border-red-100">
            <div className="flex flex-col sm:flex-row items-center gap-6 max-w-2xl">
              <img
                src={BOOK_IMAGES.bookCoverPhoto}
                alt="928: This Day Changed My Life by Saad Hamed"
                className="w-24 sm:w-28 h-auto aspect-[1/1.45] object-cover rounded-xl shadow-lg border border-red-100 shrink-0"
              />
              <div className="space-y-2 text-center sm:text-left">
                <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] block font-bold">
                  Official Memoir &amp; Keynotes
                </span>
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#18181b]">
                  Bring the 928 Message to Your Community
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b]">
                  Available for hospital grand rounds, traumatic brain injury conferences, military veteran assemblies, and faith-based keynote presentations.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto text-center bg-[#dc2626] hover:bg-[#b91c1c] text-white px-7 py-3.5 rounded-full font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Book Speaking
              </button>
              <button
                onClick={onOpenBuyModal}
                className="w-full sm:w-auto text-center bg-white hover:bg-red-50 text-[#18181b] border border-red-200 hover:border-[#dc2626] px-7 py-3.5 rounded-full font-['Space_Grotesk'] text-xs uppercase tracking-wider transition-all cursor-pointer font-semibold shadow-sm"
              >
                Order Book
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
