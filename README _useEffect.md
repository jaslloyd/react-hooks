# React Hooks: useEffect

useEffect Summary

- Lets you preform side effects in function components.
- useEffect is `componentDidMount`, `componentDidUpdate` and `componentWillUnmount` combined.
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
// Making a network request (note: Hooks are not the final solution to making network requests in React, Suspense is meant for that in the future)
function TodosApp() {
  const [todos, setTodos] = useState([]);
  // This will run on every single render!!
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/todos`,
      );
      setData(await result.json());
    };
    fetchData();
  });

  // This will only run after the first render
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/todos`,
      );
      setData(await result.json());
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
      setData(await result.json());
    };
    fetchData();
  }, [query]); // If the query dependency changes rerun this function

  return (
    ...
  );
}
```