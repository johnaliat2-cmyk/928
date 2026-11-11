import React, { useState } from 'react';
import { BOOK_IMAGES } from '../data/bookData';

interface BookPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookPurchaseModal: React.FC<BookPurchaseModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'retailers' | 'bulk'>('retailers');
  const [bulkSubmitted, setBulkSubmitted] = useState(false);
  const [bulkData, setBulkData] = useState({
    name: '',
    organization: '',
    email: '',
    quantity: '50',
    notes: '',
  });

  if (!isOpen) return null;

  const handleBulkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBulkSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-red-100 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-[#18181b]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center text-[#71717a] hover:text-[#18181b] transition-colors rounded-full bg-neutral-100 hover:bg-neutral-200 cursor-pointer"
          aria-label="Close Dialog"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-[#dc2626] text-xs font-['Space_Grotesk'] uppercase tracking-widest mb-1 font-bold">
          <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
          <span>Acquire Official Memoir</span>
        </div>
        <h3 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[#18181b] mb-4">
          Order Direct or Bulk Editions
        </h3>

        {/* Real Book Cover Preview Card */}
        <div className="flex items-center gap-4 p-4 bg-[#faf9f8] rounded-2xl border border-red-100 mb-6 shadow-sm">
          <img
            src={BOOK_IMAGES.bookCoverPhoto}
            alt="928: This Day Changed My Life by Saad Hamed"
            className="w-16 h-24 object-cover rounded-lg shadow-md border border-red-100 shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#18181b] truncate">
              928: This Day Changed My Life
            </h4>
            <p className="font-['Space_Grotesk'] text-xs text-[#dc2626] font-semibold">By Saad Hamed</p>
            <div className="flex flex-wrap gap-2 mt-2.5">
              <span className="text-[10px] font-['Space_Grotesk'] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-100 text-[#dc2626]">
                Official Release
              </span>
              <span className="text-[10px] font-['Space_Grotesk'] font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-[#71717a]">
                284 Pages • Global Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-red-100 mb-6">
          <button
            onClick={() => setActiveTab('retailers')}
            className={`pb-2.5 px-4 font-['Space_Grotesk'] text-sm uppercase tracking-wider font-bold border-b-2 cursor-pointer transition-colors ${
              activeTab === 'retailers'
                ? 'text-[#dc2626] border-[#dc2626]'
                : 'text-[#71717a] border-transparent hover:text-[#18181b]'
            }`}
          >
            Major Booksellers
          </button>
          <button
            onClick={() => setActiveTab('bulk')}
            className={`pb-2.5 px-4 font-['Space_Grotesk'] text-sm uppercase tracking-wider font-bold border-b-2 cursor-pointer transition-colors ${
              activeTab === 'bulk'
                ? 'text-[#dc2626] border-[#dc2626]'
                : 'text-[#71717a] border-transparent hover:text-[#18181b]'
            }`}
          >
            Bulk &amp; Educational Orders
          </button>
        </div>

        {activeTab === 'retailers' ? (
          <div className="space-y-3">
            {/* Amazon Primary */}
            <a
              href="https://www.amazon.com/dp/B0946CY4ZT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#dc2626] hover:bg-[#b91c1c] text-white transition-all group shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
                <div>
                  <p className="font-['Space_Grotesk'] font-bold text-base">
                    Amazon (Kindle, Paperback &amp; Hardcover)
                  </p>
                  <p className="text-xs text-red-100">
                    Immediate worldwide dispatch • Prime Eligible
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_outward
              </span>
            </a>

            {/* Barnes & Noble */}
            <a
              href="https://www.barnesandnoble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#faf9f8] hover:bg-red-50 text-[#18181b] border border-red-100 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px] text-[#dc2626]">
                  menu_book
                </span>
                <div>
                  <p className="font-['Space_Grotesk'] font-bold text-base">Barnes &amp; Noble</p>
                  <p className="text-xs text-[#71717a]">NOOK Book &amp; Physical Editions</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[20px] text-[#71717a] group-hover:translate-x-1 transition-transform">
                arrow_outward
              </span>
            </a>

            {/* Apple Books */}
            <a
              href="https://books.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#faf9f8] hover:bg-red-50 text-[#18181b] border border-red-100 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px] text-[#dc2626]">
                  devices
                </span>
                <div>
                  <p className="font-['Space_Grotesk'] font-bold text-base">Apple Books</p>
                  <p className="text-xs text-[#71717a]">Instant Download for iPad, iPhone &amp; Mac</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[20px] text-[#71717a] group-hover:translate-x-1 transition-transform">
                arrow_outward
              </span>
            </a>

            {/* Audible Audio Edition */}
            <a
              href="https://www.audible.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#faf9f8] hover:bg-red-50 text-[#18181b] border border-red-100 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px] text-[#dc2626]">
                  headphones
                </span>
                <div>
                  <p className="font-['Space_Grotesk'] font-bold text-base">
                    Audible Unabridged Audiobook
                  </p>
                  <p className="text-xs text-[#71717a]">Narrated with Author's Voice Notes</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[20px] text-[#71717a] group-hover:translate-x-1 transition-transform">
                arrow_outward
              </span>
            </a>
          </div>
        ) : (
          <div>
            {bulkSubmitted ? (
              <div className="p-6 bg-red-50 border border-red-200 rounded-2xl text-center space-y-3">
                <span className="material-symbols-outlined text-4xl text-[#dc2626]">
                  check_circle
                </span>
                <h4 className="font-['Space_Grotesk'] text-xl font-bold text-[#18181b]">
                  Inquiry Dispatched
                </h4>
                <p className="text-sm text-[#52525b] font-['Plus_Jakarta_Sans']">
                  Thank you, <strong>{bulkData.name}</strong>. Our publishing coordinator will contact{' '}
                  <strong>{bulkData.email}</strong> within 24 hours with custom educational pricing and freight estimates.
                </p>
                <button
                  onClick={() => setBulkSubmitted(false)}
                  className="mt-2 text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#dc2626] font-bold hover:underline cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleBulkSubmit} className="space-y-4">
                <p className="text-xs text-[#71717a] font-['Plus_Jakarta_Sans']">
                  We provide special discount packages for VA hospitals, rehabilitation clinics, churches, support groups, and veteran non-profits.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-1 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={bulkData.name}
                      onChange={(e) => setBulkData({ ...bulkData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className="w-full bg-[#faf9f8] border border-red-100 rounded-xl px-3.5 py-2.5 text-xs text-[#18181b] focus:border-[#dc2626] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-1 font-semibold">
                      Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={bulkData.organization}
                      onChange={(e) => setBulkData({ ...bulkData, organization: e.target.value })}
                      placeholder="e.g. MetroHealth TSN"
                      className="w-full bg-[#faf9f8] border border-red-100 rounded-xl px-3.5 py-2.5 text-xs text-[#18181b] focus:border-[#dc2626] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-1 font-semibold">
                      Work / Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={bulkData.email}
                      onChange={(e) => setBulkData({ ...bulkData, email: e.target.value })}
                      placeholder="contact@org.org"
                      className="w-full bg-[#faf9f8] border border-red-100 rounded-xl px-3.5 py-2.5 text-xs text-[#18181b] focus:border-[#dc2626] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-1 font-semibold">
                      Estimated Quantity
                    </label>
                    <select
                      value={bulkData.quantity}
                      onChange={(e) => setBulkData({ ...bulkData, quantity: e.target.value })}
                      className="w-full bg-[#faf9f8] border border-red-100 rounded-xl px-3.5 py-2.5 text-xs text-[#18181b] focus:border-[#dc2626] focus:outline-none"
                    >
                      <option value="25">25 - 49 Copies (15% Off)</option>
                      <option value="50">50 - 99 Copies (25% Off)</option>
                      <option value="100">100 - 249 Copies (35% Off)</option>
                      <option value="250">250+ Copies (Institution Special)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-['Space_Grotesk'] uppercase tracking-wider text-[#71717a] mb-1 font-semibold">
                    Delivery Timeline &amp; Program Notes
                  </label>
                  <textarea
                    rows={3}
                    value={bulkData.notes}
                    onChange={(e) => setBulkData({ ...bulkData, notes: e.target.value })}
                    placeholder="Briefly state intended use (e.g., patient gift bags, symposium handout)..."
                    className="w-full bg-[#faf9f8] border border-red-100 rounded-xl p-3 text-xs text-[#18181b] focus:border-[#dc2626] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-['Space_Grotesk'] uppercase tracking-widest font-bold rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  Submit Bulk Request
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
