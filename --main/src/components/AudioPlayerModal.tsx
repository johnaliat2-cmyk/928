import React, { useState, useEffect, useRef } from 'react';

interface AudioPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  chapterTitle?: string;
  durationSeconds?: number;
}

export const AudioPlayerModal: React.FC<AudioPlayerModalProps> = ({
  isOpen,
  onClose,
  chapterTitle = 'Introduction: The Impact Point & The 5%',
  durationSeconds = 252, // 4 mins 12 secs
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [volume, setVolume] = useState<number>(0.8);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= durationSeconds) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000 / playbackSpeed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackSpeed, durationSeconds]);

  if (!isOpen) return null;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPct = (currentTime / durationSeconds) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-red-100 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#18181b]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center text-[#71717a] hover:text-[#18181b] transition-colors rounded-full bg-neutral-100 hover:bg-neutral-200 cursor-pointer"
          aria-label="Close Audio Player"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Audio Banner */}
        <div className="flex items-center gap-2 text-[#dc2626] text-xs font-['Space_Grotesk'] uppercase tracking-widest mb-3 font-bold">
          <span className="material-symbols-outlined text-[18px]">podcasts</span>
          <span>Official Audio Companion • Chapter Stream</span>
        </div>

        <h3 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[#18181b] mb-1">
          {chapterTitle}
        </h3>
        <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#52525b] mb-6">
          Original author narration by Saad Hamed (Recorded in Cleveland, OH)
        </p>

        {/* Waveform Visualization */}
        <div className="h-16 bg-[#faf9f8] rounded-2xl p-3 flex items-center justify-between gap-1 mb-6 border border-red-100 shadow-inner">
          {Array.from({ length: 32 }).map((_, idx) => {
            const height = isPlaying
              ? Math.max(15, (Math.sin(idx * 0.4 + currentTime * 0.5) * 0.5 + 0.5) * 100)
              : Math.max(10, ((idx % 7) + 2) * 9);
            const isPassed = (idx / 32) * 100 <= progressPct;

            return (
              <span
                key={idx}
                style={{ height: `${height}%` }}
                className={`w-1.5 rounded-full transition-all duration-150 ${
                  isPassed ? 'bg-[#dc2626]' : 'bg-red-200'
                }`}
              />
            );
          })}
        </div>

        {/* Time Progress Bar */}
        <div className="space-y-2 mb-6">
          <input
            type="range"
            min={0}
            max={durationSeconds}
            value={currentTime}
            onChange={(e) => setCurrentTime(Number(e.target.value))}
            className="w-full accent-[#dc2626] cursor-pointer h-1.5 bg-neutral-200 rounded-lg"
          />
          <div className="flex justify-between text-xs font-['Space_Grotesk'] text-[#71717a] font-semibold">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(durationSeconds)}</span>
          </div>
        </div>

        {/* Player Controls Cluster */}
        <div className="flex items-center justify-between">
          {/* Speed Toggle */}
          <div className="flex items-center gap-1 bg-[#faf9f8] border border-red-100 rounded-full p-1 text-xs">
            {[1, 1.25, 1.5].map((speed) => (
              <button
                key={speed}
                onClick={() => setPlaybackSpeed(speed)}
                className={`px-2.5 py-1 rounded-full font-['Space_Grotesk'] font-bold cursor-pointer transition-colors ${
                  playbackSpeed === speed
                    ? 'bg-[#dc2626] text-white shadow-sm'
                    : 'text-[#71717a] hover:text-[#18181b]'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>

          {/* Main Play / Pause Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentTime(Math.max(0, currentTime - 15))}
              className="p-2 text-[#71717a] hover:text-[#dc2626] transition-colors cursor-pointer"
              title="Rewind 15 seconds"
            >
              <span className="material-symbols-outlined text-[24px]">replay_15</span>
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              <span className="material-symbols-outlined text-[32px]">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>

            <button
              onClick={() => setCurrentTime(Math.min(durationSeconds, currentTime + 15))}
              className="p-2 text-[#71717a] hover:text-[#dc2626] transition-colors cursor-pointer"
              title="Forward 15 seconds"
            >
              <span className="material-symbols-outlined text-[24px]">forward_15</span>
            </button>
          </div>

          {/* Volume icon */}
          <div className="hidden sm:flex items-center gap-2 text-[#71717a]">
            <span className="material-symbols-outlined text-[20px]">
              {volume === 0 ? 'volume_off' : 'volume_up'}
            </span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-16 accent-[#dc2626] h-1.5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
