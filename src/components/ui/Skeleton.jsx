import PropTypes from "prop-types";

const Skeleton = ({ className = "" }) => {
  return <div className={`skeleton ${className}`.trim()} aria-hidden="true" />;
};

Skeleton.propTypes = {
  className: PropTypes.string
};

Skeleton.defaultProps = {
  className: ""
};

export default Skeleton;
