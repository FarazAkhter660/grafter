import PropTypes from "prop-types";

const GradientText = ({ as: Tag, children, className = "" }) => {
  return <Tag className={`gradient-text ${className}`.trim()}>{children}</Tag>;
};

GradientText.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

GradientText.defaultProps = {
  as: "span",
  className: ""
};

export default GradientText;
