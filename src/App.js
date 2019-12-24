import React, { useState } from "react";
import "./App.css";

/*
  Hooks are functions that let you "Hook into" React state and lifecycle features from function components.
  React will preserve the value of useState during re-renders, you can think of the below as a function that contains and keeps state every time you call it.

  Good comparision between this.setState and Hooks https://reactjs.org/docs/hooks-state.html
*/
function CounterApp() {
  // useState can take any JS type, number, strings, objects*, arrays etc etc, the value you use here is the initial value.
  // useState returns [value, dispatch/updater function] which you can use array destructing to get each of the pair.
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

      <TodoList />
    </div>
  );
}

/*
  One of the first useState Gotchas you are going to run into us when you are using objects. You have probably become use to doing something like:
  this.state = {
    property1: value1,
    property2: value2,
  }

  and your first taught when you go to use useState is to have the same:

  useState({
     property1: value1,
    property2: value2,
  })
*/

// Need a simpler example...
function TodoList() {
  const [todos, setTodos] = useState([
    {
      name: "Collect the Dog",
      isCompleted: false
    }
  ]);
  const [newTodo, setNewTodo] = useState("");

  function markTodoCompleted(todoIndex) {
    const existingTodos = [...todos];
    existingTodos[todoIndex].isCompleted = true;
    setTodos(existingTodos);
  }
  return (
    <div className="todos">
      <ul>
        {todos.map((todo, i) => (
          <li>
            {todo.name}
            <button onClick={() => markTodoCompleted(i)}>Mark as Done</button>
            {todo.isCompleted && "Completed"}
          </li>
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
