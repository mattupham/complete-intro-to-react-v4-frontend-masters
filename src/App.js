import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleClick() {
    alert("Title was clicked");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.handleClick }, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "bird",
        breed: "Pigeon"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "cat",
        breed: "Mixed"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
