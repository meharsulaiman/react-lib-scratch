# React From Scratch

A lightweight implementation of React's core functionality, built from scratch to understand the fundamental concepts behind React.

## Overview

This project aims to recreate the basic functionality of React, including:

- Creating elements using a custom `createElement` function
- Rendering components to the DOM
- Handling props and children
- Basic support for functional components

## Features

- Custom `React.createElement` function
- Simple `ReactDOM.render` implementation
- Support for nested elements and components
- Basic prop handling
- Rudimentary support for array rendering (e.g., in lists)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/react-from-scratch.git
   cd react-from-scratch
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```

2. Open `http://localhost:1234` in your browser to see the result.

## Project Structure

- `react.js`: Contains the core `React.createElement` function
- `react-dom.js`: Implements the `ReactDOM.render` function and DOM manipulation
- `app.js`: Example usage of the custom React implementation

## Example

```jsx
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
```

## Limitations

This is a basic implementation and lacks many features of the full React library, including:

- State management
- Lifecycle methods
- Event handling
- Reconciliation algorithm
- Performance optimizations

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/yourusername/react-from-scratch/issues).

## License

[ISC](https://choosealicense.com/licenses/isc/)

## Acknowledgements

- Inspired by the React library
- Built as a learning exercise to understand React's core concepts
