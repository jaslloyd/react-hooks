import React, { useState } from "react";
import "./App.css";

function CounterApp() {
  // useState returns [value, dispatch/updater function] which you can use array destructing to get each of the pair.
  const [count, setCount] = useState(0);
  // You can have more than one useState in a Component, e.g using a boolean here
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

// Need a simpler example...
function TodoList() {
  const [todos, setTodos] = useState([
    {
      name: "Collect the Dog",
      isCompleted: false
    }
  ]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="todos">
      <ul>
        {todos.map((todo, i) => (
          <li>{todo.name}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="What you would like to do..."
        onChange={e => setNewTodo(e.target.value)}
      />
      <button
        onClick={() =>
          setTodos([
            // Notice how I am spreading the existing todos before I add a new one.
            ...todos,
            {
              name: newTodo,
              isCompleted: false
            }
          ])
        }
      >
        Add Todo
      </button>
    </div>
  );
}

export default CounterApp;
