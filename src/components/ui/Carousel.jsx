import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useCarousel } from "../../hooks/useCarousel";
import ProductCard from "./ProductCard";

const Carousel = ({ products, config }) => {
  const {
    currentIndex,
    itemsPerView,
    canGoPrev,
    canGoNext,
    goNext,
    goPrev,
    onTouchStart,
    onTouchEnd
  } = useCarousel({
    totalItems: products.length,
    itemsPerViewConfig: config.itemsPerView
  });
  const viewportRef = useRef(null);

  useEffect(() => {
    if (!viewportRef.current) return;
    const slideWidth = viewportRef.current.clientWidth / itemsPerView;
    viewportRef.current.scrollTo({
      left: slideWidth * currentIndex,
      behavior: "smooth"
    });
  }, [currentIndex, itemsPerView]);

  return (
    <div className="carousel">
      <div
        ref={viewportRef}
        className="carousel__viewport"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="carousel__track" aria-live="polite">
          {products.map((product) => (
            <div className="carousel__slide" key={product.id}>
              <ProductCard title={product.title} image={product.image} alt={product.alt} />
            </div>
          ))}
        </div>
      </div>

      {config.showArrows && (
        <div className="carousel__controls">
          <button
            className="carousel__arrow"
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label="Go to previous slide"
          >
            &#8592;
          </button>
          <button
            className="carousel__arrow"
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            aria-label="Go to next slide"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired,
  config: PropTypes.shape({
    itemsPerView: PropTypes.shape({
      mobile: PropTypes.number.isRequired,
      tablet: PropTypes.number.isRequired,
      desktop: PropTypes.number.isRequired
    }).isRequired,
    showArrows: PropTypes.bool.isRequired
  }).isRequired
};

export default Carousel;
