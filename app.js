import React from "./react";
import ReactDOM from "./react-dom";

function Card(props) {
  const fruits = ["apple", "banana", "mango"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(
  <Card name="Sulaiman">
    <p>This is a paragraph</p>
  </Card>,
  document.getElementById("root")
);
