import React, { useState, useEffect } from "react";

function TitleUpdate() {
  const [clickAmount, incrementClicks] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${clickAmount} times`;
  });

  return (
    <button className="App" onClick={() => incrementClicks(clickAmount + 1)}>
      Click me and watch the Window Title change!
    </button>
  );
}

function TodosApp() {
  const [todos, setTodos] = useState([]);
  // The function that you pass into useEffect cannot be async. It must return a cleanup function or nothing.
  //   useEffect(() => {
  //     // The function that you pass into useEffect cannot be async. It must return a cleanup function or nothing.
  //     const fetchData = async () => {
  //       const result = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  //       setTodos(await result.json());
  //     };
  //     fetchData();
  //   });

  // ...

  // This will only run after the first render
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  //       setTodos(await result.json());
  //     };
  //     fetchData();
  //   }, []); // Providing an empty array means run only after the first render or this function had no "dependencies" requiring it to rerun.

  // ...

  // This will only run after the first render then only when the searchUserId state changes, defaults to '1'
  const [searchUserId, setSearchUserId] = useState("1");
  // This is to avoid sending a request every time we type in the input
  const [serachText, setSearchText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${searchUserId}`
      );
      setTodos(await result.json());
    };
    fetchData();
  }, [serachText]); // If the query dependency changes rerun this function

  const handleChange = e => {
    e.preventDefault();
    setSearchUserId(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={() => setSearchText(searchUserId)}>Get Users</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export { TitleUpdate, TodosApp };
