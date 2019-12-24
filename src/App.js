import React, { useState } from "react";
import "./App.css";

/*
  React will "keep" the value of useState during re-renders, you can think of the below as a function that contains and keeps state every time you call it.
*/
function CounterApp() {
  // Use state can take any JS type, number, strings, objects*, arrays etc etc, the value you use here is the initial value.
  // Use state returns [value, dispatch/updater function]
  const [count, setCount] = useState(0);
  // You can have more than one useState in a Component, using a boolean here to show or hide a section.
  const [isCounterControlsShowing, toggleCounterControls] = useState(true);
  return (
    <div className="App">
      <h1>React Hooks Playground</h1>
      <h2>useState: Simple Counter</h2>
      {/* Value be read / rendered like any other value in react */}
      <p>{count}</p>
      {/* If you need to update the value at any time you can via the updater function */}
      {isCounterControlsShowing && (
        <div className="counter-controls">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      )}

      <button onClick={() => toggleCounterControls(!isCounterControlsShowing)}>
        Toggle Counter controls
      </button>
    </div>
  );
}

export default CounterApp;
