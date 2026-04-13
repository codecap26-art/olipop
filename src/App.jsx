import React, { useState, useEffect, useCallback, useRef } from 'react';
import './index.css';

import drinks from './data/drinks';
import { useFrameLoader } from './hooks/useFrameLoader';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import IngredientsSection from './components/IngredientsSection';
import NutritionSection from './components/NutritionSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const SECTION_IDS = ['product', 'ingredients', 'nutrition', 'reviews', 'faq', 'contact'];

function App() {
  // Theme state — default dark
  const [isDark, setIsDark] = useState(true);
  // Current drink variant index
  const [currentIndex, setCurrentIndex] = useState(0);
  // Initial load complete flag
  const [initialLoaded, setInitialLoaded] = useState(false);
  // Active section for nav highlight
  const [activeSection, setActiveSection] = useState('');
  // Variant switching in progress
  const [isVariantLoading, setIsVariantLoading] = useState(false);

  const { cache, progress, preload } = useFrameLoader();

  // Initial preload — load first variant
  useEffect(() => {
    preload(drinks[0].id, drinks[0].framePaths).then(() => {
      setInitialLoaded(true);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
      }
      return next;
    });
  }, []);

  // Navigate variants
  const goToVariant = useCallback(
    async (direction) => {
      if (isVariantLoading) return;
      const total = drinks.length;
      const nextIndex = direction === 'next'
        ? (currentIndex + 1) % total
        : (currentIndex - 1 + total) % total;

      const nextDrink = drinks[nextIndex];

      // If already cached, switch instantly
      if (cache[nextDrink.id]) {
        setCurrentIndex(nextIndex);
        return;
      }

      // Otherwise preload first
      setIsVariantLoading(true);
      await preload(nextDrink.id, nextDrink.framePaths);
      setCurrentIndex(nextIndex);
      setIsVariantLoading(false);
    },
    [currentIndex, isVariantLoading, cache, preload]
  );

  // Intersection observer for active nav section
  useEffect(() => {
    const observers = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3, rootMargin: '-72px 0px 0px 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [initialLoaded]);

  // Scroll-reveal animation
  useEffect(() => {
    if (!initialLoaded) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe after a tick so DOM is ready
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        revealObserver.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      revealObserver.disconnect();
    };
  }, [initialLoaded, currentIndex]);

  const currentDrink = drinks[currentIndex];
  const currentFrames = cache[currentDrink.id] || [];

  return (
    <>
      <LoadingScreen progress={progress} isLoaded={initialLoaded} />

      {initialLoaded && (
        <>
          <Navbar isDark={isDark} toggleTheme={toggleTheme} activeSection={activeSection} />

          <HeroSection
            drinks={drinks}
            currentIndex={currentIndex}
            onPrev={() => goToVariant('prev')}
            onNext={() => goToVariant('next')}
            frameImages={currentFrames}
            isVariantLoading={isVariantLoading}
          />

          <ProductSection currentDrink={currentDrink} />
          <IngredientsSection />
          <NutritionSection />
          <ReviewsSection />
          <FAQSection />
          <CTASection drinks={drinks} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
