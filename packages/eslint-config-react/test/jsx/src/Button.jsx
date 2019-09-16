import React from "react";
import PropTypes from "prop-types"; // eslint-disable-line

/* eslint-disable react/button-has-type */
const Button = ({ type, block, children }) => {
  return (
    <>
      <button type={type} style={block ? { width: "100%" } : null}>
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: "button",
  block: false,
};

export default Button;
