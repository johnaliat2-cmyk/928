import React from 'react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLegalModal: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegalModal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPrivacy = () => {
    onOpenLegalModal(
      'Privacy Policy',
      `Effective Date: January 1, 2026\n\nSaad Hamed and 928 Publishing respect your privacy. Any personal information collected through this website—including newsletter signups, counseling requests, and speaking inquiries—is held in strict confidence. We do not sell, rent, or trade your contact details to third parties. If you have any inquiries regarding your data, contact info@saad928.com.`
    );
  };

  const openTerms = () => {
    onOpenLegalModal(
      'Terms of Use',
      `Effective Date: January 1, 2026\n\nAll content, book excerpts, photographs, logos, and materials related to "928: This Day Changed My Life" are copyrighted by Saad Hamed. No reproduction or distribution without explicit prior written authorization is permitted. Peer counseling services provide personal testimony, peer support, and educational perspective through the Trauma Survivors Network model and do not constitute emergency medical or psychiatric treatment.`
    );
  };

  return (
    <footer className="w-full bg-white border-t border-red-100 py-14 text-[#18181b]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand & Creed */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-1.5">
                <span className="font-['Space_Grotesk'] text-3xl font-bold text-[#18181b]">928</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#dc2626] inline-block shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
              </div>
              <p className="font-['Playfair_Display'] text-xl text-[#52525b] max-w-md italic leading-snug">
                “Tell me what I can’t do, and I’ll show you what I can do, by the grace of God.”
              </p>
            </div>
            <div className="mt-8">
              <p className="font-['Space_Grotesk'] text-[11px] uppercase text-[#71717a] tracking-widest mb-1 font-semibold">
                A Memoir By
              </p>
              <p className="font-['Space_Grotesk'] text-2xl font-bold text-[#18181b]">Saad Hamed</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <p className="font-['Space_Grotesk'] text-[13px] uppercase text-[#18181b] font-bold tracking-wider mb-4">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => handleNav('home')}
                className="text-left py-2 font-['Plus_Jakarta_Sans'] text-[15px] text-[#52525b] hover:text-[#dc2626] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleNav('the-book')}
                className="text-left py-2 font-['Plus_Jakarta_Sans'] text-[15px] text-[#52525b] hover:text-[#dc2626] transition-colors cursor-pointer"
              >
                The Book
              </button>
              <button
                onClick={() => handleNav('about-saad')}
                className="text-left py-2 font-['Plus_Jakarta_Sans'] text-[15px] text-[#52525b] hover:text-[#dc2626] transition-colors cursor-pointer"
              >
                About Saad
              </button>
              <button
                onClick={() => handleNav('the-story')}
                className="text-left py-2 font-['Plus_Jakarta_Sans'] text-[15px] text-[#52525b] hover:text-[#dc2626] transition-colors cursor-pointer"
              >
                The Story
              </button>
              <button
                onClick={() => handleNav('in-the-news')}
                className="text-left py-2 font-['Plus_Jakarta_Sans'] text-[15px] text-[#52525b] hover:text-[#dc2626] transition-colors cursor-pointer"
              >
                In the News
              </button>
              <button
                onClick={() => handleNav('counseling')}
                className="text-left py-2 font-['Plus_Jakarta_Sans'] text-[15px] text-[#52525b] hover:text-[#dc2626] transition-colors cursor-pointer"
              >
                Counseling
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="text-left py-2 font-['Plus_Jakarta_Sans'] text-[15px] text-[#52525b] hover:text-[#dc2626] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Connect & Booking */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <p className="font-['Space_Grotesk'] text-[13px] uppercase text-[#18181b] font-bold tracking-wider">
                Connect &amp; Booking
              </p>
              <a
                className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-[15px] text-[#52525b] hover:text-[#dc2626] transition-colors"
                href="mailto:info@saad928.com"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>info@saad928.com</span>
              </a>
              <div>
                <a
                  className="inline-flex items-center gap-2 font-['Space_Grotesk'] text-[13px] tracking-wider text-[#52525b] hover:text-[#dc2626] transition-colors"
                  href="https://instagram.com/saad928book"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                  <span>@saad928book</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-50/70 border border-red-100">
              <p className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#dc2626] mb-1 font-bold">
                Available Worldwide
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#18181b] font-medium">
                Hardcover, Paperback &amp; Kindle Edition
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-red-100/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#71717a]">
            © 2026 Saad Hamed. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={openPrivacy}
              className="py-2 font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] hover:text-[#dc2626] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={openTerms}
              className="py-2 font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#71717a] hover:text-[#dc2626] transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
