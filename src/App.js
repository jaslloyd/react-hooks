import React, { useState } from "react";
import "./App.css";

/*
  Hooks are functions that let you "Hook into" React state and lifecycle features from function components.
  React will preserve the value of useState during re-renders, you can think of the below as a function that contains and keeps state every time you call it.

  Good comparison between this.setState and Hooks https://reactjs.org/docs/hooks-state.html
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
  When using multiple useState's you may ask wouldn't it be better to do something like this:
  const [state, setState] = useState({
    count: 0,
    isCounterControlsShowing: false,
  })
  I wouldn't blame you for thinking this because if you translate back to classes way it maps well:
  this.state = {
    property1: value1,
    property2: value2,
  }

  However, they are not the same, when we use setState in class version e.g `this.setState({count: this.state.count + 1})` react would 'merge' state updates (all merging means is it keeps all the old state and only updates what you told it.). However useState doesn't not merge updates, that is why if you ran the same code via an updater function `setState({count: count + 1})` you would actually end up delete the isCounterControlsShowing property because the updater function sets the value to whatever you passed in, it doesn't care about old values...

  If you decide to use an object for multiple properties always merge the old and new state, it can be accomplished using spread syntax, if you have deeper objects you will run into issues but at that point you should really think about changing the data shape.

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
