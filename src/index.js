import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <Header />
      <h2>Hello World!</h2>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
