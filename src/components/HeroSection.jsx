import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronUp, ChevronDown, TwitterIcon, InstagramIcon, FacebookIcon, TikTokIcon } from './Icons';

export default function HeroSection({
  drinks,
  currentIndex,
  onPrev,
  onNext,
  frameImages,
  isVariantLoading,
}) {
  const canvasRef = useRef(null);
  const stickyRef = useRef(null);
  const heroRef = useRef(null);
  const currentFrameRef = useRef({ value: 0 });
  const [currentFrame, setCurrentFrame] = useState(0);
  const [textFading, setTextFading] = useState(false);
  const prevIndexRef = useRef(currentIndex);

  const drink = drinks[currentIndex];

  // Handle text fade when variant changes
  useEffect(() => {
    if (prevIndexRef.current !== currentIndex) {
      setTextFading(true);
      const timeout = setTimeout(() => {
        setTextFading(false);
        prevIndexRef.current = currentIndex;
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Paint frame on canvas
  const paintFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas || !frameImages || frameImages.length === 0) return;

    const ctx = canvas.getContext('2d');
    const img = frameImages[Math.min(Math.max(0, Math.floor(frameIndex)), frameImages.length - 1)];
    if (!img || !img.naturalWidth) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
    }
    
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const viewRatio = w / h;
    let drawW, drawH, drawX, drawY;
    
    if (imgRatio > viewRatio) {
      drawH = h;
      drawW = h * imgRatio;
      drawX = (w - drawW) / 2;
      drawY = 0;
    } else {
      drawW = w;
      drawH = w / imgRatio;
      drawX = 0;
      drawY = (h - drawH) / 2;
    }

    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, [frameImages]);

  // Smooth Scroll Animation with GSAP
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      if (!frameImages || frameImages.length === 0) return;

      const updateFrames = () => {
        const hero = heroRef.current;
        if (!hero) return;

        const rect = hero.getBoundingClientRect();
        const scrollableHeight = hero.offsetHeight - window.innerHeight;
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
        const targetFrame = scrollProgress * (frameImages.length - 1);

        // Animate the frame value with a 3-second duration
        gsap.to(currentFrameRef.current, {
          value: targetFrame,
          duration: 3,
          ease: "power2.out",
          overwrite: true,
          onUpdate: () => {
            const rounded = Math.floor(currentFrameRef.current.value);
            setCurrentFrame(rounded);
            paintFrame(rounded);
          }
        });
      };

      window.addEventListener('scroll', updateFrames, { passive: true });
      // Initial paint
      paintFrame(0);

      return () => {
        window.removeEventListener('scroll', updateFrames);
        gsap.killTweensOf(currentFrameRef.current);
      };
    });
  }, [frameImages, paintFrame]);

  // Resize handler
  useEffect(() => {
    const onResize = () => paintFrame(currentFrame);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [currentFrame, paintFrame]);

  const indexStr = String(currentIndex + 1).padStart(2, '0');

  return (
    <section className="hero" ref={heroRef} id="hero">
      <div className="hero-sticky" ref={stickyRef}>
        <div className="hero-canvas">
          <canvas ref={canvasRef} />
        </div>

        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-text-left">
              <h1
                className={`hero-drink-name ${textFading ? 'hero-fade-out' : ''}`}
              >
                {drink.name}
              </h1>
              <p
                className={`hero-drink-subtitle ${textFading ? 'hero-fade-out' : ''}`}
              >
                {drink.subtitle}
              </p>
              <p
                className={`hero-drink-desc ${textFading ? 'hero-fade-out' : ''}`}
              >
                {drink.description}
              </p>
            </div>

            <div className="hero-text-right">
              <div className={`hero-index ${textFading ? 'hero-fade-out' : ''}`}>
                {indexStr}
              </div>
              <div className="hero-nav-controls">
                <button
                  className={`hero-nav-btn ${isVariantLoading ? 'loading' : ''}`}
                  onClick={onPrev}
                  aria-label="Previous drink"
                  disabled={isVariantLoading}
                >
                  <ChevronUp />
                  <span className="variant-loader" />
                </button>
                <button
                  className={`hero-nav-btn ${isVariantLoading ? 'loading' : ''}`}
                  onClick={onNext}
                  aria-label="Next drink"
                  disabled={isVariantLoading}
                >
                  <ChevronDown />
                  <span className="variant-loader" />
                </button>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="hero-scroll-hint">
              <span className="scroll-line" />
              Scroll to explore
            </div>

            <div className="hero-social-row">
              <a href="#" className="hero-social-icon" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" className="hero-social-icon" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" className="hero-social-icon" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" className="hero-social-icon" aria-label="TikTok"><TikTokIcon /></a>
            </div>

            <div className="hero-dots">
              {drinks.map((d, i) => (
                <span
                  key={d.id}
                  className={`hero-dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    if (i !== currentIndex) {
                      if (i < currentIndex) onPrev();
                      else onNext();
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
