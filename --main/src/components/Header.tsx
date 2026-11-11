import React, { useState } from 'react';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBuyModal: () => void;
  onOpenBookmarks: () => void;
  savedQuotesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBuyModal,
  onOpenBookmarks,
  savedQuotesCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'the-book', label: 'The Book' },
    { id: 'about-saad', label: 'About Saad' },
    { id: 'the-story', label: 'The Story' },
    { id: 'in-the-news', label: 'In the News' },
    { id: 'counseling', label: 'Counseling' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[rgba(0,0,0,0.08)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
      <div className="h-[var(--nav-height,80px)] max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-1 group cursor-pointer focus:outline-none min-h-[44px] px-1 -mx-1"
            aria-label="Navigate to Home"
          >
            <span className="font-['Space_Grotesk'] text-2xl font-black tracking-tight text-[#18181b] uppercase group-hover:text-[#dc2626] transition-colors">
              928
            </span>
            <span className="w-2 h-2 rounded-full bg-[#dc2626] inline-block mb-1 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-['Space_Grotesk'] text-[13px] uppercase tracking-wider transition-colors cursor-pointer py-1 border-b-2 ${
                    isActive
                      ? 'text-[#dc2626] font-bold border-[#dc2626]'
                      : 'text-[#52525b] hover:text-[#dc2626] border-transparent font-medium'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/saad928book"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 font-['Space_Grotesk'] text-[13px] tracking-wider text-[#52525b] hover:text-[#dc2626] transition-colors px-2 py-1"
          >
            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            <span className="hidden md:inline">@saad928book</span>
          </a>

          {/* Buy Button */}
          <a
            href="https://www.amazon.com/dp/B0946CY4ZT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-2.5 rounded-full font-['Space_Grotesk'] text-[13px] uppercase transition-all shadow-md hover:shadow-[0_4px_16px_rgba(220,38,38,0.35)] group cursor-pointer font-bold tracking-wider"
          >
            <span>Buy on Amazon</span>
            <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              arrow_outward
            </span>
          </a>

          {/* Saved Quotes / Bookmarks Drawer Toggle */}
          <button
            onClick={onOpenBookmarks}
            title="Saved Quotes & Reflections"
            aria-label="Saved Quotes"
            className="relative w-11 h-11 rounded-full bg-red-50 hover:bg-red-100 text-[#dc2626] border border-red-200 flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">bookmark</span>
            {savedQuotesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#dc2626] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                {savedQuotesCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-11 h-11 flex items-center justify-center text-[#18181b] hover:text-[#dc2626] transition-colors cursor-pointer rounded-lg hover:bg-red-50"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-red-100 px-6 py-4 space-y-2 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-3 min-h-[44px] font-['Space_Grotesk'] text-sm uppercase tracking-wider ${
                currentPage === item.id
                  ? 'text-[#dc2626] font-bold pl-2 border-l-2 border-[#dc2626]'
                  : 'text-[#52525b] hover:text-[#dc2626]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-red-100 flex items-center justify-between">
            <a
              href="https://instagram.com/saad928book"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#52525b] hover:text-[#dc2626]"
            >
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              <span>@saad928book</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBuyModal();
              }}
              className="text-xs uppercase tracking-wider text-[#dc2626] font-bold"
            >
              Order Hardcover / Kindle →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
