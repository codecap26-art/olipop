import { useState, useCallback } from 'react';

/**
 * Custom hook to preload all frames for a drink variant.
 * Returns { images, progress, isLoaded, preload }.
 */
export function useFrameLoader() {
  const [cache, setCache] = useState({}); // { [drinkId]: Image[] }
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const preload = useCallback((drinkId, framePaths) => {
    // Already cached
    if (cache[drinkId]) {
      setCurrentId(drinkId);
      setProgress(100);
      return Promise.resolve(cache[drinkId]);
    }

    setIsLoading(true);
    setProgress(0);
    setCurrentId(drinkId);

    return new Promise((resolve) => {
      const images = [];
      let loaded = 0;
      const total = framePaths.length;

      framePaths.forEach((src, index) => {
        const img = new Image();
        img.src = src;
        img.onload = img.onerror = () => {
          loaded++;
          images[index] = img;
          const pct = Math.round((loaded / total) * 100);
          setProgress(pct);
          if (loaded === total) {
            setCache((prev) => ({ ...prev, [drinkId]: images }));
            setIsLoading(false);
            resolve(images);
          }
        };
      });
    });
  }, [cache]);

  return { cache, progress, isLoading, currentId, preload };
}
