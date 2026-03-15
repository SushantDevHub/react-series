 import React from "react";
import ReactDOM from "react-dom/client";

const anotherReactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank"
  },
  "Click me to visit Google"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  anotherReactElement
);