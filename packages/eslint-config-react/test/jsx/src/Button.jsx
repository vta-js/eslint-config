import React from "react";
import PropTypes from "prop-types"; // eslint-disable-line

/* eslint-disable react/button-has-type */
const Button = ({ type, block, children }) => {
  const [state, setState] = React.useState();

  /* eslint-disable react-hooks/rules-of-hooks */
  if (type === "submit") {
    React.useEffect(() => {
      console.log(Date.now());
    }, []);
  }
  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    console.log({ type, state, setState });
  }, []);

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

export const getComp = () => import("./Icon");

export default Button;
