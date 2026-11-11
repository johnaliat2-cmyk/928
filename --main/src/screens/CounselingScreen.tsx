import React, { useState } from 'react';
import { BOOK_IMAGES } from '../data/bookData';
import { PageId } from '../types';

interface CounselingScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBuyModal: () => void;
}

export const CounselingScreen: React.FC<CounselingScreenProps> = ({
  onNavigate,
  onOpenBuyModal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'veteran',
    inquiryType: 'peer-counseling',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#18181b] pt-24 pb-20 selection:bg-[#dc2626] selection:text-white">
      {/* Emergency Crisis Hotline Ribbon */}
      <div className="bg-[#dc2626] text-white py-3 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-['Space_Grotesk']">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-base">emergency</span>
            <span className="font-bold uppercase tracking-wider">Are you or a loved one in immediate crisis?</span>
          </div>
          <div className="flex items-center gap-4 text-white text-xs font-semibold">
            <span>Veterans Crisis Line: <strong className="underline">Dial 988, then Press 1</strong></span>
            <span className="hidden sm:inline text-red-200">|</span>
            <span className="hidden sm:inline">Text <strong className="underline">838255</strong></span>
          </div>
        </div>
      </div>

      {/* Screen Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Space_Grotesk'] font-bold tracking-tight text-[#18181b] leading-[1.08] mb-6 uppercase">
              Walking Beside You Through the{' '}
              <span className="font-['Playfair_Display'] italic font-normal text-[#dc2626] lowercase">
                Deepest Valley
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#52525b] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
              When doctors speak in medical jargon and the world expects you to "just bounce back," you need someone
              who has laid in that coma, fought through cognitive reconstruction, and rebuilt their motor neural
              pathways one heartbeat at a time.
            </p>
            <p className="text-sm text-[#71717a] leading-relaxed mb-8 font-['Plus_Jakarta_Sans']">
              Saad Hamed provides dedicated, compassionate 1-on-1 peer guidance for combat veterans, catastrophic
              accident survivors, traumatic brain injury patients, and the exhausted family caregivers standing guard beside them.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#intake-form"
                className="px-8 py-3.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-['Space_Grotesk'] uppercase tracking-widest font-bold rounded-full transition-all flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Request Mentorship Intake</span>
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
              </a>
              <button
                onClick={onOpenBuyModal}
                className="px-8 py-3.5 bg-white hover:bg-red-50 border border-red-200 text-[#18181b] text-xs font-['Space_Grotesk'] uppercase tracking-widest font-bold rounded-full transition-colors cursor-pointer shadow-sm"
              >
                Order Book as Companion Guide
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#faf9f8] border border-red-100 rounded-2xl p-8 relative shadow-sm">
              <div className="absolute top-4 right-4 text-xs font-['Space_Grotesk'] font-bold text-[#dc2626] bg-red-100 px-3 py-1 rounded-full">
                VERIFIED PEER
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#dc2626] overflow-hidden shrink-0 shadow-sm">
                  <img
                    src={BOOK_IMAGES.counselingPortrait}
                    alt="Saad Hamed, USMC veteran and Level 1 trauma survivor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#18181b]">Saad Hamed</h3>
                  <p className="text-xs text-[#71717a] font-semibold">USMC Veteran • Level 1 Trauma Survivor</p>
                  <p className="text-xs text-[#dc2626] font-bold mt-0.5">Author of "928: This Day Changed My Life"</p>
                </div>
              </div>

              <blockquote className="italic font-['Playfair_Display'] text-base text-[#27272a] border-l-2 border-[#dc2626] pl-4 mb-6 leading-relaxed">
                "I am not a clinical psychiatrist with a clipboard. I am a brother who died on an asphalt highway, woke up
                blind and paralyzed, and proved that faith and repetition can conquer any prognosis."
              </blockquote>

              <div className="space-y-3 text-xs font-['Space_Grotesk'] text-[#71717a]">
                <div className="flex items-center justify-between py-1.5 border-b border-red-100">
                  <span className="font-semibold">Modality:</span>
                  <span className="text-[#18181b] font-bold">Virtual 1-on-1 (Secure Video) / Phone</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-red-100">
                  <span className="font-semibold">Focus:</span>
                  <span className="text-[#18181b] font-bold">TBI, Polytrauma, PTSD, Caregivers</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-red-100">
                  <span className="font-semibold">Framework:</span>
                  <span className="text-[#dc2626] font-bold">The 3 P's (Prayer, Persistence, Patience)</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="font-semibold">Initial Consultation:</span>
                  <span className="text-[#dc2626] font-bold">100% Pro Bono / Confidential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Pillars of Saad's Counseling Approach */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-t border-red-100">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-['Space_Grotesk'] font-bold text-[#18181b]">
            How We Rebuild Resilience Together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#faf9f8] border border-red-100 rounded-2xl p-8 hover:border-[#dc2626] transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-[#dc2626] mb-6">
              <span className="material-symbols-outlined text-2xl">favorite</span>
            </div>
            <h3 className="text-xl font-['Space_Grotesk'] font-bold text-[#18181b] mb-3">1. Prayer &amp; Universal Faith</h3>
            <p className="text-sm text-[#52525b] leading-relaxed font-['Plus_Jakarta_Sans']">
              Anchoring your soul beyond physical pain. Discovering peace in surrender without giving up the fight,
              honoring your creator, and releasing the bitterness of "Why me?" to uncover "What now?"
            </p>
          </div>

          <div className="bg-[#faf9f8] border border-red-100 rounded-2xl p-8 hover:border-[#dc2626] transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-[#dc2626] mb-6">
              <span className="material-symbols-outlined text-2xl">fitness_center</span>
            </div>
            <h3 className="text-xl font-['Space_Grotesk'] font-bold text-[#18181b] mb-3">2. Relentless Persistence</h3>
            <p className="text-sm text-[#52525b] leading-relaxed font-['Plus_Jakarta_Sans']">
              The military discipline of microscopic wins. When you cannot run, walk. When you cannot walk, crawl.
              Re-wiring the brain through obsessive micro-habits and daily accountability logs.
            </p>
          </div>

          <div className="bg-[#faf9f8] border border-red-100 rounded-2xl p-8 hover:border-[#dc2626] transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-[#dc2626] mb-6">
              <span className="material-symbols-outlined text-2xl">hourglass_empty</span>
            </div>
            <h3 className="text-xl font-['Space_Grotesk'] font-bold text-[#18181b] mb-3">3. Sacred Patience</h3>
            <p className="text-sm text-[#52525b] leading-relaxed font-['Plus_Jakarta_Sans']">
              Nerve regeneration and emotional healing take years, not weeks. Learning to be gentle with yourself on
              the dark days while fiercely defending your baseline gains.
            </p>
          </div>
        </div>
      </section>

      {/* Intake Form Section */}
      <section id="intake-form" className="max-w-4xl mx-auto px-6 lg:px-12 py-16 scroll-mt-24">
        <div className="bg-white border border-red-100 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-md">
          <div className="max-w-xl mx-auto">
            <span className="text-xs uppercase font-['Space_Grotesk'] tracking-widest text-[#dc2626] font-bold block mb-2 text-center">
              Confidential Intake Form
            </span>
            <h2 className="text-3xl font-['Space_Grotesk'] font-bold text-[#18181b] text-center mb-4">
              Schedule Your Free 30-Minute Peer Session
            </h2>
            <p className="text-xs sm:text-sm text-[#71717a] text-center mb-8 font-['Plus_Jakarta_Sans']">
              All communications are strictly confidential. Saad personally reviews every request and responds
              within 48 hours to coordinate a video or phone dialogue.
            </p>

            {submitted ? (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center animate-fade-in">
                <span className="material-symbols-outlined text-4xl text-[#dc2626] mb-4">check_circle</span>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b] mb-2">Message Received</h3>
                <p className="text-sm text-[#52525b] mb-6 font-['Plus_Jakarta_Sans']">
                  Thank you, <strong>{formData.name}</strong>. Your intake form has been sent directly to Saad Hamed's
                  personal desk. You will receive an email confirmation at <strong>{formData.email}</strong> with
                  scheduling links.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#dc2626] text-white text-xs font-['Space_Grotesk'] uppercase tracking-widest font-bold rounded-full cursor-pointer shadow-sm"
                >
                  Submit Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-2 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Miller"
                      className="w-full bg-[#faf9f8] border border-red-100 rounded-xl px-4 py-3 text-sm text-[#18181b] focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@domain.com"
                      className="w-full bg-[#faf9f8] border border-red-100 rounded-xl px-4 py-3 text-sm text-[#18181b] focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-2 font-semibold">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#faf9f8] border border-red-100 rounded-xl px-4 py-3 text-sm text-[#18181b] focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-2 font-semibold">
                      Your Identity / Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#faf9f8] border border-red-100 rounded-xl px-4 py-3 text-sm text-[#18181b] focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-red-500"
                    >
                      <option value="veteran">Military Veteran / Active Duty</option>
                      <option value="tbi-survivor">TBI / Head Injury Survivor</option>
                      <option value="trauma-survivor">Catastrophic Crash / Trauma Survivor</option>
                      <option value="caregiver">Spouse / Parent / Family Caregiver</option>
                      <option value="medical-staff">Healthcare Worker / Therapist</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-2 font-semibold">
                    How Can Saad Walk Beside You? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Saad a little about your journey, what stage of recovery you are in, and what support you are seeking..."
                    className="w-full bg-[#faf9f8] border border-red-100 rounded-xl p-4 text-sm text-[#18181b] focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-red-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-['Space_Grotesk'] uppercase tracking-widest font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Submit Confidential Request</span>
                  <span className="material-symbols-outlined text-sm">lock</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
