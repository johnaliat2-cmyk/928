import React from 'react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  subtitle: string;
  location?: string;
  timeTag?: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  subtitle,
  location,
  timeTag,
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fadeIn cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#1c1b1d] border border-[#5c403c]/40 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative text-[#e5e1e4] cursor-default flex flex-col max-h-[90vh]"
      >
        {/* Top Control Bar */}
        <div className="p-4 bg-[#131315] border-b border-[#353437] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#dc2626]"></span>
            <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#ffb4ab]">
              Archival Evidence Record
            </span>
            {timeTag && (
              <span className="text-xs bg-[#2a2a2c] text-[#c6c6c7] px-2 py-0.5 rounded font-mono">
                {timeTag}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center text-[#c6c6c7] hover:text-[#fff6f5] transition-colors rounded-full bg-[#2a2a2c] cursor-pointer"
            aria-label="Close Lightbox"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Image Display */}
        <div className="relative bg-[#0e0e10] flex items-center justify-center p-2 flex-1 overflow-hidden min-h-[350px]">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[60vh] max-w-full object-contain rounded shadow-lg"
          />
        </div>

        {/* Footer Details */}
        <div className="p-4 sm:p-6 bg-[#131315] border-t border-[#353437] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#e5e1e4]">{title}</h4>
            <p className="text-sm text-[#ffb4ab]">{subtitle}</p>
            {location && <p className="text-xs text-[#c6c6c7] mt-0.5">{location}</p>}
          </div>
          <div className="text-xs text-[#c6c6c7] text-right">
            <span>Case ID: 928-MH • MetroHealth Medical Center</span>
          </div>
        </div>
      </div>
    </div>
  );
};
