import React from "react"; // eslint-disable-line

export default () => {
  return new Promise(resolve => setTimeout(resolve, 3000));
};