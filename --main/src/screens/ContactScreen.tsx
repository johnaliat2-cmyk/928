import React, { useState } from 'react';
import { BOOK_IMAGES } from '../data/bookData';
import { PageId } from '../types';

interface ContactScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBuyModal: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({
  onNavigate,
  onOpenBuyModal,
}) => {
  const [inquiryType, setInquiryType] = useState('speaking');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    date: '',
    subject: '',
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
      {/* Top Banner */}
      <div className="border-b border-red-100 bg-[#faf9f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between text-xs font-['Space_Grotesk'] uppercase tracking-widest text-[#71717a]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#dc2626] animate-pulse"></span>
            <span className="font-bold text-[#18181b]">Direct Dispatch &amp; Official Bureau</span>
            <span className="text-red-200">•</span>
            <span>Cleveland, OH, USA</span>
          </div>
          <div className="flex items-center gap-4 text-[#71717a]">
            <span>Average Response: &lt; 24h</span>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact info & Speaking info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-['Space_Grotesk'] font-bold tracking-tight text-[#18181b] leading-tight mb-6 uppercase">
                Get In Touch With <br />
                <span className="font-['Playfair_Display'] italic font-normal text-[#dc2626] lowercase">
                  Saad Hamed
                </span>
              </h1>
              <p className="text-sm sm:text-base text-[#52525b] leading-relaxed font-['Plus_Jakarta_Sans']">
                Whether you are arranging a keynote lecture, requesting a television or podcast interview, inquiring
                about community partnerships, or reaching out as a reader whose life was touched by <em>928</em>,
                this ledger connects you straight to Saad's team.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              <div className="p-5 bg-[#faf9f8] border border-red-100 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-[#dc2626] shrink-0">
                  <span className="material-symbols-outlined text-xl">record_voice_over</span>
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] font-bold text-base text-[#18181b]">Keynotes &amp; Lectures</h4>
                  <p className="text-xs text-[#71717a] mt-1 leading-relaxed font-['Plus_Jakarta_Sans']">
                    Veterans Affairs, neuroscience symposiums, hospital trauma units, and universities nationwide.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-[#faf9f8] border border-red-100 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-[#dc2626] shrink-0">
                  <span className="material-symbols-outlined text-xl">mic</span>
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] font-bold text-base text-[#18181b]">Media &amp; Podcasts</h4>
                  <p className="text-xs text-[#71717a] mt-1 leading-relaxed font-['Plus_Jakarta_Sans']">
                    Saad is available for in-studio or remote broadcasts, documentary features, and press Q&amp;As.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-[#faf9f8] border border-red-100 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-[#dc2626] shrink-0">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] font-bold text-base text-[#18181b]">Reader Correspondence</h4>
                  <p className="text-xs text-[#71717a] mt-1 leading-relaxed font-['Plus_Jakarta_Sans']">
                    Personal reflections from survivors, families, and comrades are welcomed and held with reverence.
                  </p>
                </div>
              </div>
            </div>

            {/* Cleveland Portrait */}
            <div className="rounded-2xl overflow-hidden border border-red-100 shadow-sm">
              <img
                src={BOOK_IMAGES.contactCleveland}
                alt="Saad Hamed beside the Cleveland script sign with the city skyline behind him"
                className="w-full h-60 object-cover object-center"
              />
            </div>

            {/* Direct Connect Coordinates */}
            <div className="p-6 bg-[#faf9f8] border border-red-100 rounded-2xl space-y-3 text-xs font-['Space_Grotesk'] shadow-sm">
              <div className="text-[#dc2626] font-bold uppercase tracking-widest text-[11px] mb-2">
                Official Coordinates
              </div>
              <div className="flex items-center justify-between py-1 border-b border-red-100 text-[#71717a]">
                <span className="font-semibold">Executive Office:</span>
                <span className="text-[#18181b] font-bold">Cleveland, Ohio, USA</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-red-100 text-[#71717a]">
                <span className="font-semibold">Official Inquiries:</span>
                <span className="text-[#18181b] font-bold">contact@saad928.com</span>
              </div>
              <div className="flex items-center justify-between py-1 text-[#71717a]">
                <span className="font-semibold">Global Publisher:</span>
                <span className="text-[#18181b] font-bold">928 Publishing Group</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-red-100 rounded-2xl p-8 sm:p-10 relative shadow-md">
              {/* Type Switcher */}
              <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-[#faf9f8] rounded-xl border border-red-100">
                <button
                  type="button"
                  onClick={() => setInquiryType('speaking')}
                  className={`flex-1 py-2.5 px-3 text-xs font-['Space_Grotesk'] uppercase tracking-wider rounded-lg transition-all cursor-pointer font-bold ${
                    inquiryType === 'speaking'
                      ? 'bg-[#dc2626] text-white shadow-sm'
                      : 'text-[#71717a] hover:text-[#18181b]'
                  }`}
                >
                  Speaking Inquiries
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('media')}
                  className={`flex-1 py-2.5 px-3 text-xs font-['Space_Grotesk'] uppercase tracking-wider rounded-lg transition-all cursor-pointer font-bold ${
                    inquiryType === 'media'
                      ? 'bg-[#dc2626] text-white shadow-sm'
                      : 'text-[#71717a] hover:text-[#18181b]'
                  }`}
                >
                  Media &amp; Press
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('general')}
                  className={`flex-1 py-2.5 px-3 text-xs font-['Space_Grotesk'] uppercase tracking-wider rounded-lg transition-all cursor-pointer font-bold ${
                    inquiryType === 'general'
                      ? 'bg-[#dc2626] text-white shadow-sm'
                      : 'text-[#71717a] hover:text-[#18181b]'
                  }`}
                >
                  Reader Note
                </button>
              </div>

              {submitted ? (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center animate-fade-in">
                  <span className="material-symbols-outlined text-4xl text-[#dc2626] mb-4">send</span>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b] mb-2">Dispatch Transmitted</h3>
                  <p className="text-sm text-[#52525b] mb-6 font-['Plus_Jakarta_Sans']">
                    Thank you, <strong>{formData.name}</strong>. Your communication regarding{' '}
                    <strong className="text-[#dc2626]">{inquiryType.toUpperCase()}</strong> has been routed to Saad Hamed's team.
                    You will receive confirmation at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        phone: '',
                        date: '',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-[#dc2626] text-white text-xs font-['Space_Grotesk'] uppercase tracking-widest font-bold rounded-full cursor-pointer shadow-sm"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-2 font-semibold">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Commander Robert Taylor"
                        className="w-full bg-[#faf9f8] border border-red-100 rounded-xl px-4 py-3 text-sm text-[#18181b] focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-2 font-semibold">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rtaylor@organization.org"
                        className="w-full bg-[#faf9f8] border border-red-100 rounded-xl px-4 py-3 text-sm text-[#18181b] focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-2 font-semibold">
                        Organization / Outlet (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. MetroHealth System / CNN"
                        className="w-full bg-[#faf9f8] border border-red-100 rounded-xl px-4 py-3 text-sm text-[#18181b] focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-2 font-semibold">
                        Target Date or Timeline
                      </label>
                      <input
                        type="text"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        placeholder="e.g. Q3 2026 or Immediate"
                        className="w-full bg-[#faf9f8] border border-red-100 rounded-xl px-4 py-3 text-sm text-[#18181b] focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-2 font-semibold">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={
                        inquiryType === 'speaking'
                          ? 'e.g. Keynote Invitation: Annual Trauma & Resiliency Summit'
                          : inquiryType === 'media'
                          ? 'e.g. Feature Interview Request on TBI Recovery'
                          : 'e.g. Personal Note Regarding Chapter 7'
                      }
                      className="w-full bg-[#faf9f8] border border-red-100 rounded-xl px-4 py-3 text-sm text-[#18181b] focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-2 font-semibold">
                      Message Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please include details about audience size, broadcast reach, location, or the specifics of your request..."
                      className="w-full bg-[#faf9f8] border border-red-100 rounded-xl p-4 text-sm text-[#18181b] focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-red-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-['Space_Grotesk'] uppercase tracking-widest font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>Send Official Dispatch</span>
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
