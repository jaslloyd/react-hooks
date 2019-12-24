import React, { useState } from "react";
import "./App.css";

/*
  React will "keep" the value of useState during re-renders, you can think of the below as a function that contains and keeps state every time you call it.
*/
function CounterApp() {
  // Use state returns [value, dispatch/updater function]
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>React Hooks Playground</h1>
      <h2>useState: Simple Counter</h2>
      {/* Value be read / rendered like any other value in react */}
      <p>{count}</p>
      {/* If you need to update the value at any time you can via the updater function */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default CounterApp;
