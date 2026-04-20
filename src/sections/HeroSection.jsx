import PropTypes from "prop-types";
import GradientButton from "../components/ui/GradientButton";
import GradientText from "../components/ui/GradientText";
import FloatingShape from "../components/ui/FloatingShape";
import Skeleton from "../components/ui/Skeleton";

const HeroSection = ({ navigation, hero, isLoading }) => {
  if (isLoading) {
    return (
      <section className="hero-section container">
        <Skeleton className="skeleton--nav" />
        <div className="hero-section__content">
          <Skeleton className="skeleton--title" />
          <Skeleton className="skeleton--subtitle" />
          <Skeleton className="skeleton--button" />
        </div>
      </section>
    );
  }

  return (
    <section className="hero-section container">
      <header className="hero-nav">
        <img src={navigation.logo.src} alt={navigation.logo.alt} className="hero-nav__logo" />
        <nav className="hero-nav__links">
          {navigation.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <GradientButton href={navigation.cta.href}>{navigation.cta.label}</GradientButton>
      </header>

      <div className="hero-section__content fade-in">
        <h1>
          {hero.headlinePrefix} <GradientText>{hero.headlineGradient}</GradientText>
        </h1>
        <p>{hero.subheadline}</p>
        <GradientButton href={hero.cta.href}>{hero.cta.label}</GradientButton>
      </div>

      {hero.decorativeShapes.map((shape) => (
        <FloatingShape
          key={shape.id}
          variant={shape.variant}
          positionClass={shape.positionClass}
        />
      ))}
    </section>
  );
};

HeroSection.propTypes = {
  navigation: PropTypes.shape({
    logo: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    ).isRequired,
    cta: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    }).isRequired
  }),
  hero: PropTypes.shape({
    headlinePrefix: PropTypes.string.isRequired,
    headlineGradient: PropTypes.string.isRequired,
    subheadline: PropTypes.string.isRequired,
    cta: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    }).isRequired,
    decorativeShapes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        variant: PropTypes.oneOf(["yellow", "blue", "orange"]).isRequired,
        positionClass: PropTypes.string.isRequired
      })
    ).isRequired
  }),
  isLoading: PropTypes.bool.isRequired
};

HeroSection.defaultProps = {
  navigation: null,
  hero: null
};

export default HeroSection;
