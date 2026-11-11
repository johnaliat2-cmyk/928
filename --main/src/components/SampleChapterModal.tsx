import React, { useState } from 'react';
import { SAMPLE_CHAPTER_TEXT, BOOK_IMAGES } from '../data/bookData';

interface SampleChapterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBuyModal: () => void;
}

export const SampleChapterModal: React.FC<SampleChapterModalProps> = ({
  isOpen,
  onClose,
  onOpenBuyModal,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isSerif, setIsSerif] = useState(true);

  if (!isOpen) return null;

  const fontClasses = {
    normal: 'text-base leading-relaxed',
    large: 'text-lg leading-loose',
    xlarge: 'text-xl leading-loose',
  }[fontSize];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-red-100 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative text-[#18181b] overflow-hidden">
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-red-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3.5">
            <img
              src={BOOK_IMAGES.bookCoverPhoto}
              alt="928 Book Cover"
              className="w-10 h-14 object-cover rounded-md shadow-md border border-red-100 shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 text-xs font-['Space_Grotesk'] text-[#dc2626] uppercase tracking-widest font-bold">
                <span className="material-symbols-outlined text-[15px]">menu_book</span>
                <span>Sample Chapter Preview • Prologue</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold tracking-tight text-[#18181b]">
                928: This Day Changed My Life
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Font size toggles */}
            <div className="hidden sm:flex items-center bg-[#faf9f8] border border-red-100 rounded-lg p-1 text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded cursor-pointer font-bold ${
                  fontSize === 'normal' ? 'bg-[#dc2626] text-white' : 'text-[#71717a]'
                }`}
                title="Default font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded cursor-pointer font-bold ${
                  fontSize === 'large' ? 'bg-[#dc2626] text-white' : 'text-[#71717a]'
                }`}
                title="Large font size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 rounded cursor-pointer font-extrabold ${
                  fontSize === 'xlarge' ? 'bg-[#dc2626] text-white' : 'text-[#71717a]'
                }`}
                title="Extra Large"
              >
                A++
              </button>
            </div>

            {/* Font Style Toggle */}
            <button
              onClick={() => setIsSerif(!isSerif)}
              className="text-xs font-['Space_Grotesk'] uppercase px-2.5 py-1.5 rounded-lg bg-[#faf9f8] border border-red-100 hover:border-[#dc2626] text-[#18181b] font-bold cursor-pointer transition-colors"
            >
              {isSerif ? 'Serif' : 'Sans'}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-11 h-11 flex items-center justify-center text-[#71717a] hover:text-[#18181b] transition-colors rounded-full bg-neutral-100 hover:bg-neutral-200 cursor-pointer"
              aria-label="Close Sample Reader"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Scrollable Reader Body */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-[#faf9f8] selection:bg-[#dc2626] selection:text-white">
          <div
            className={`max-w-2xl mx-auto space-y-6 text-[#27272a] ${
              isSerif ? "font-['Playfair_Display']" : "font-['Plus_Jakarta_Sans']"
            } ${fontClasses}`}
          >
            {SAMPLE_CHAPTER_TEXT.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {idx === 0 ? (
                  <span className="float-left text-5xl font-['Space_Grotesk'] font-bold leading-none pr-3 pt-1 text-[#dc2626]">
                    {paragraph.charAt(0)}
                  </span>
                ) : null}
                {idx === 0 ? paragraph.slice(1) : paragraph}
              </p>
            ))}
          </div>

          {/* End of sample teaser banner */}
          <div className="max-w-2xl mx-auto mt-12 p-6 rounded-2xl bg-white border border-red-200 text-center space-y-3 shadow-sm">
            <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#dc2626] font-bold">
              End of Free Excerpt
            </span>
            <h4 className="font-['Space_Grotesk'] text-xl font-bold text-[#18181b]">
              Continue the Journey in the Full Memoir
            </h4>
            <p className="text-sm text-[#52525b] font-['Plus_Jakarta_Sans']">
              The remaining 270 pages document the ICU vigil, 365 days of physical therapy, and the miraculous path of service.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenBuyModal();
              }}
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-7 py-3 rounded-full font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Order Full Copy on Amazon</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Bottom Sticky Action Strip */}
        <div className="p-4 border-t border-red-100 flex items-center justify-between bg-white">
          <span className="text-xs font-['Space_Grotesk'] text-[#71717a] font-semibold">
            Copyright © Saad Hamed. All rights reserved.
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenBuyModal();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#dc2626] hover:text-[#b91c1c] font-bold cursor-pointer"
          >
            <span>Get Complete Book</span>
            <span className="material-symbols-outlined text-[16px]">shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
