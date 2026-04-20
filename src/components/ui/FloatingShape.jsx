import PropTypes from "prop-types";

const FloatingShape = ({ variant, positionClass }) => {
  return (
    <span
      className={`floating-shape floating-shape--${variant} ${positionClass}`.trim()}
      aria-hidden="true"
    />
  );
};

FloatingShape.propTypes = {
  variant: PropTypes.oneOf(["yellow", "blue", "orange"]).isRequired,
  positionClass: PropTypes.string.isRequired
};

export default FloatingShape;
