import React, { useState, useEffect } from 'react';
import { PageId, QuoteItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AudioPlayerModal } from './components/AudioPlayerModal';
import { BookPurchaseModal } from './components/BookPurchaseModal';
import { SampleChapterModal } from './components/SampleChapterModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { LegalModal } from './components/LegalModal';

import { HomeScreen } from './screens/HomeScreen';
import { TheBookScreen } from './screens/TheBookScreen';
import { AboutSaadScreen } from './screens/AboutSaadScreen';
import { TheStoryScreen } from './screens/TheStoryScreen';
import { NewsScreen } from './screens/NewsScreen';
import { CounselingScreen } from './screens/CounselingScreen';
import { ContactScreen } from './screens/ContactScreen';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Modal states
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  // Lightbox state
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    subtitle: string;
    location?: string;
    timeTag?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    subtitle: '',
  });

  // Legal modal state
  const [legalModalData, setLegalModalData] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({
    isOpen: false,
    title: '',
    content: '',
  });

  // Saved bookmarks
  const [savedQuotes, setSavedQuotes] = useState<QuoteItem[]>(() => {
    try {
      const saved = localStorage.getItem('928_saved_quotes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('928_saved_quotes', JSON.stringify(savedQuotes));
    } catch {
      // ignore
    }
  }, [savedQuotes]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleToggleBookmark = (quote: QuoteItem) => {
    const exists = savedQuotes.some((q) => q.id === quote.id);
    if (exists) {
      setSavedQuotes((prev) => prev.filter((q) => q.id !== quote.id));
      showToast('Reflection removed from your saved bookmarks.');
    } else {
      setSavedQuotes((prev) => [...prev, quote]);
      showToast('Reflection bookmarked in your personal ledger.');
    }
  };

  const handleRemoveQuote = (id: string) => {
    setSavedQuotes((prev) => prev.filter((q) => q.id !== id));
  };

  const handleClearAllBookmarks = () => {
    setSavedQuotes([]);
    showToast('All saved reflections cleared.');
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenImageLightbox = (image: {
    url: string;
    title: string;
    subtitle: string;
    location?: string;
    timeTag?: string;
  }) => {
    setLightboxData({
      isOpen: true,
      imageUrl: image.url,
      title: image.title,
      subtitle: image.subtitle,
      location: image.location,
      timeTag: image.timeTag,
    });
  };

  const handleOpenLegalModal = (title: string, content: string) => {
    setLegalModalData({
      isOpen: true,
      title,
      content,
    });
  };

  return (
    <div className="min-h-screen bg-[#faf9f8] text-[#18181b] selection:bg-[#dc2626] selection:text-white flex flex-col font-sans">
      {/* Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBuyModal={() => setIsBuyModalOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        savedQuotesCount={savedQuotes.length}
      />

      {/* Main Screen Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenBuyModal={() => setIsBuyModalOpen(true)}
            onOpenAudioModal={() => setIsAudioModalOpen(true)}
            onOpenSampleModal={() => setIsSampleModalOpen(true)}
          />
        )}

        {currentPage === 'the-book' && (
          <TheBookScreen
            onNavigate={handleNavigate}
            onOpenBuyModal={() => setIsBuyModalOpen(true)}
            onOpenSampleModal={() => setIsSampleModalOpen(true)}
            onOpenAudioModal={() => setIsAudioModalOpen(true)}
            onToggleSaveQuote={handleToggleBookmark}
            isQuoteSaved={(id) => savedQuotes.some((q) => q.id === id)}
          />
        )}

        {currentPage === 'about-saad' && (
          <AboutSaadScreen
            onNavigate={handleNavigate}
            onOpenBuyModal={() => setIsBuyModalOpen(true)}
            onOpenImageLightbox={handleOpenImageLightbox}
          />
        )}

        {currentPage === 'the-story' && (
          <TheStoryScreen
            onNavigate={handleNavigate}
            onOpenBuyModal={() => setIsBuyModalOpen(true)}
            onOpenImageLightbox={handleOpenImageLightbox}
          />
        )}

        {currentPage === 'in-the-news' && (
          <NewsScreen
            onNavigate={handleNavigate}
            onOpenBuyModal={() => setIsBuyModalOpen(true)}
          />
        )}

        {currentPage === 'counseling' && (
          <CounselingScreen
            onNavigate={handleNavigate}
            onOpenBuyModal={() => setIsBuyModalOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactScreen
            onNavigate={handleNavigate}
            onOpenBuyModal={() => setIsBuyModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegalModal={handleOpenLegalModal}
      />

      {/* Modals & Drawers */}
      <BookPurchaseModal
        isOpen={isBuyModalOpen}
        onClose={() => setIsBuyModalOpen(false)}
      />

      <AudioPlayerModal
        isOpen={isAudioModalOpen}
        onClose={() => setIsAudioModalOpen(false)}
        chapterTitle="Audio Sample: Introduction (Narrated by Saad Hamed)"
        durationSeconds={192}
      />

      <SampleChapterModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        onOpenBuyModal={() => {
          setIsSampleModalOpen(false);
          setIsBuyModalOpen(true);
        }}
      />

      <ImageLightboxModal
        isOpen={lightboxData.isOpen}
        onClose={() => setLightboxData((prev) => ({ ...prev, isOpen: false }))}
        imageUrl={lightboxData.imageUrl}
        title={lightboxData.title}
        subtitle={lightboxData.subtitle}
        location={lightboxData.location}
        timeTag={lightboxData.timeTag}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedQuotes={savedQuotes}
        onRemoveQuote={handleRemoveQuote}
        onClearAll={handleClearAllBookmarks}
      />

      <LegalModal
        isOpen={legalModalData.isOpen}
        onClose={() => setLegalModalData((prev) => ({ ...prev, isOpen: false }))}
        title={legalModalData.title}
        content={legalModalData.content}
      />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-white border border-[#dc2626] text-[#18181b] px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 font-mono text-xs animate-slide-up">
          <span className="material-symbols-outlined text-[#dc2626] text-base">info</span>
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
