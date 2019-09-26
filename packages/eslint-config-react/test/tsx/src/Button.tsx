import React from "react";
import PropTypes from "prop-types"; // eslint-disable-line

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  block?: boolean;
  children?: React.ReactNode;
}

/* eslint-disable react/button-has-type */
const Button: React.FunctionComponent<ButtonProps> = ({ type, block, children }) => {
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

const d = ""; // eslint-disable-line

export default Button;

export const getComp = () => import("./Icon");
