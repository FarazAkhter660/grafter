import PropTypes from "prop-types";
import Carousel from "../components/ui/Carousel";
import Skeleton from "../components/ui/Skeleton";

const FeaturesSection = ({ featuresSection, carousel, isLoading }) => {
  if (isLoading) {
    return (
      <section className="features-section container" id="features">
        <Skeleton className="skeleton--section-title" />
        <Skeleton className="skeleton--section-subtitle" />
        <div className="features-section__cards-skeleton">
          <Skeleton className="skeleton--card" />
          <Skeleton className="skeleton--card" />
          <Skeleton className="skeleton--card" />
        </div>
      </section>
    );
  }

  return (
    <section className="features-section container fade-in" id="features">
      <h2>
        {featuresSection.title} <span>{featuresSection.titleAccent}</span>
      </h2>
      <p>{featuresSection.subtitle}</p>
      <div className="features-section__divider" />
      <Carousel products={featuresSection.products} config={carousel} />
    </section>
  );
};

FeaturesSection.propTypes = {
  featuresSection: PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleAccent: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
      })
    ).isRequired
  }),
  carousel: PropTypes.shape({
    itemsPerView: PropTypes.shape({
      mobile: PropTypes.number.isRequired,
      tablet: PropTypes.number.isRequired,
      desktop: PropTypes.number.isRequired
    }).isRequired,
    showArrows: PropTypes.bool.isRequired
  }),
  isLoading: PropTypes.bool.isRequired
};

FeaturesSection.defaultProps = {
  featuresSection: null,
  carousel: null
};

export default FeaturesSection;
