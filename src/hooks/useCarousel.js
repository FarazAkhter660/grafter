import { useCallback, useEffect, useMemo, useState } from "react";

const getItemsPerView = (config) => {
  if (window.innerWidth < 768) return config.mobile;
  if (window.innerWidth < 1100) return config.tablet;
  return config.desktop;
};

export const useCarousel = ({ totalItems, itemsPerViewConfig }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(() =>
    getItemsPerView(itemsPerViewConfig)
  );
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    const onResize = () => setItemsPerView(getItemsPerView(itemsPerViewConfig));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [itemsPerViewConfig]);

  const maxIndex = useMemo(
    () => Math.max(0, totalItems - itemsPerView),
    [totalItems, itemsPerView]
  );

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const onTouchStart = useCallback((event) => {
    setTouchStartX(event.changedTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(
    (event) => {
      if (touchStartX === null) return;
      const distance = event.changedTouches[0].clientX - touchStartX;
      if (distance > 60) goPrev();
      if (distance < -60) goNext();
      setTouchStartX(null);
    },
    [goNext, goPrev, touchStartX]
  );

  return {
    currentIndex,
    itemsPerView,
    canGoPrev: currentIndex > 0,
    canGoNext: currentIndex < maxIndex,
    goNext,
    goPrev,
    onTouchStart,
    onTouchEnd
  };
};
