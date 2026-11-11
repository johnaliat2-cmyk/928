import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-[#1b1b1d] border border-[#353437] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-[#353437] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#ff5449]">shield</span>
            <h3 className="font-serif text-xl font-bold text-[#f2f2f3]">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-[#252427] hover:bg-[#353437] flex items-center justify-center text-[#c6c6c7] hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#c6c6c7] leading-relaxed font-sans whitespace-pre-line">
          {content}
        </div>

        <div className="p-4 border-t border-[#353437] bg-[#161618] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#ff5449] hover:bg-[#d83a30] text-white text-xs font-mono uppercase tracking-widest font-bold rounded-lg transition-colors"
          >
            Acknowledged & Close
          </button>
        </div>
      </div>
    </div>
  );
};
