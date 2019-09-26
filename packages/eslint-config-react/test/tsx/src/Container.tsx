import React from "react";

class Container extends React.Component {
  componentDidMount() {
    console.log("did mount");
  }

  /* eslint-disable class-methods-use-this */
  setUID() {
    console.log("setuid");
  }
  /* eslint-enable class-methods-use-this */

  setPSW = () => {
    console.log("set psw");
  };

  render() {
    return "container";
  }
}

export default Container;
