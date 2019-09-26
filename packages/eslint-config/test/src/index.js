import React from "react"; // eslint-disable-line

console.log(BigInt);

export default () => {
  // import("@vta/eslint-config").then(res => console.log({ res }));
  return new Promise(resolve => setTimeout(resolve, 3000));
};
