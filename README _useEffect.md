# React Hooks: useEffect

The useEffect Hook lets you preform side effects in function components. If you're familiar with React class components you can think of useEffect Hook as `componentDidMount`, `componentDidUpdate` and `componentWillUnmount` combined. While it is not really the best thing to associate old lifecycle methods to the useEffect hook I realized it is the best way when you just start learning them. When you use useEffect, it tells React that your component needs to do something _after_ render. By default useEffect runs after first render and after every update, there are ways to control it. This is one first gotchas you will run into.

useEffect Summary

- It runs something _after_ render!
- By default it runs after first render and after every update, (there are ways to contorl it)
- Unlike `componentDidMount` or `componentDidUpdate`, effects scheduled with `useEffect` don’t block the browser from updating the screen.
- There are two types of Effects:
  <!-- TODO: Add link to Effect without cleanup -->
  - Effects without Cleanup
    - Fetching Data
    - Manual DOM mutations
    - Logging
      <!-- TODO: Add link to Effect with Cleanup -->
  - Effects with Cleanup
    - Subscriptions / Event listeners
    - Intervals / Timeouts

## Effects without Cleanup

```jsx
function TodosApp() {
  const [todos, setTodos] = useState([]);
  // This will run on every single render!!
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/todos`,
      );
      setData(result.json());
    };
    fetchData();
  });

  // This will only run after the first render
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/todos`,
      );
      setData(result.json());
    };
    fetchData();
  }, []); // <=== Providing an empty array means only run after the first render or better way this function had no "dependencies" requiring it to run again.

    // This will only run after the first render then only when the query state changes
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/todos?query=${query}`,
      );
      setData(result.json());
    };
    fetchData();
  }, [query]); // If the query dependency changes rerun this function

  return (
    ...
  );
}
```
