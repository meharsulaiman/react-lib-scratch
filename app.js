import React from "./react";
import ReactDOM from "./react-dom";

function Card(props) {
  console.log(props);
  return (
    <div>
      <h2
        style={{
          color: "blue",
        }}
      >
        Hello World in H2 by {props.name}
      </h2>
      {props.children}
    </div>
  );
}

ReactDOM.render(
  <Card name="Sulaiman">
    <p>This is a paragraph</p>
  </Card>,
  document.getElementById("root")
);
