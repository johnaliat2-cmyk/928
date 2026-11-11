import React from 'react';
import { QuoteItem } from '../types';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedQuotes: QuoteItem[];
  onRemoveQuote: (id: string) => void;
  onClearAll: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  savedQuotes,
  onRemoveQuote,
  onClearAll,
}) => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (quote: QuoteItem) => {
    navigator.clipboard.writeText(`${quote.text} — ${quote.attribution} (${quote.chapter})`);
    setCopiedId(quote.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-md bg-[#1c1b1d] border-l border-[#5c403c]/40 h-full flex flex-col shadow-2xl text-[#e5e1e4]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#353437] flex items-center justify-between bg-[#131315]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb4ab]">bookmark</span>
            <div>
              <h3 className="font-['Space_Grotesk'] text-lg font-bold">Saved Reflections</h3>
              <p className="text-xs text-[#c6c6c7]">{savedQuotes.length} Quotes Bookmarked</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center text-[#c6c6c7] hover:text-[#fff6f5] rounded-full bg-[#2a2a2c] cursor-pointer"
            aria-label="Close Bookmarks"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedQuotes.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <span className="material-symbols-outlined text-4xl text-[#353437]">bookmark_border</span>
              <p className="font-['Space_Grotesk'] font-bold text-base">No Saved Reflections Yet</p>
              <p className="text-xs text-[#c6c6c7] max-w-xs mx-auto">
                Click the bookmark icon on any quote across "The Book" or "About Saad" to save inspiring axioms here for daily fortitude.
              </p>
            </div>
          ) : (
            savedQuotes.map((q) => (
              <div
                key={q.id}
                className="p-4 rounded-xl bg-[#201f22] border border-[#353437] space-y-3 relative group"
              >
                <div className="flex items-center justify-between text-xs text-[#ffb4ab] font-['Space_Grotesk'] uppercase tracking-wider">
                  <span>{q.category}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(q)}
                      title="Copy to clipboard"
                      className="text-[#c6c6c7] hover:text-[#fff6f5] cursor-pointer flex items-center gap-1 text-[11px]"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {copiedId === q.id ? 'check' : 'content_copy'}
                      </span>
                      {copiedId === q.id && <span className="text-[#ffb4ab]">Copied!</span>}
                    </button>
                    <button
                      onClick={() => onRemoveQuote(q.id)}
                      title="Remove bookmark"
                      className="text-[#c6c6c7] hover:text-[#dc2626] cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">delete</span>
                    </button>
                  </div>
                </div>

                <p className="font-['Playfair_Display'] italic text-sm text-[#e5e1e4] leading-relaxed">
                  {q.text}
                </p>

                <div className="text-[11px] text-[#c6c6c7] font-['Space_Grotesk'] flex items-center justify-between border-t border-[#353437]/50 pt-2">
                  <span>{q.attribution}</span>
                  <span>{q.chapter}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {savedQuotes.length > 0 && (
          <div className="p-4 border-t border-[#353437] bg-[#131315] flex items-center justify-between">
            <button
              onClick={onClearAll}
              className="text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#c6c6c7] hover:text-[#dc2626] transition-colors cursor-pointer"
            >
              Clear All
            </button>
            <span className="text-xs text-[#c6c6c7]">Saved in current session</span>
          </div>
        )}
      </div>
    </div>
  );
};
