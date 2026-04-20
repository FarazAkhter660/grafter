import PropTypes from "prop-types";

const GradientButton = ({ children, href, onClick, type = "button", disabled = false }) => {
  if (href) {
    return (
      <a href={href} className="gradient-button" aria-disabled={disabled}>
        {children}
      </a>
    );
  }

  return (
    <button className="gradient-button" type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

GradientButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool
};

GradientButton.defaultProps = {
  href: "",
  onClick: undefined,
  type: "button",
  disabled: false
};

export default GradientButton;
