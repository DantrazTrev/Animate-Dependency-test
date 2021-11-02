import React from "react";
import ReactDOM from "react-dom";
import { AnimateKeyframes } from "react-simple-animate";
import { divStyle, buttonStyle } from "./styles";

class App extends React.PureComponent {
  state = {
    play: false
  };

  render() {
    return (
      <>
        <Nim play={this.state.play} duration={10} />
        <button
          style={buttonStyle}
          onClick={() => this.setState(({ play }) => ({ play: !play }))}
        >
          Play
        </button>
      </>
    );
  }
}
const Nim = ({ play, duration }) => {
  return (
    <AnimateKeyframes
      play={play}
      iterationCount="infinite"
      duration={duration}
      delay={0}
      keyframes={[
        "transform: translateX(0px)",
        "transform: translateX(200px)",
        "transform: translate(200px, 200px)",
        "transform: translate(0, 200px)",
        "transform: translate(0)"
      ]}
      // keyframes is an array of styles, and each style
      // will be distributed over 100% of the duration
    >
      <div style={divStyle} />
    </AnimateKeyframes>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
