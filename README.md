# React Hooks Playground

## What are "Hooks"?

Hooks are functions that let you "Hook into" React state and lifecycle features from function components. React will preserve the value of useState during re-renders, you can think of the below as a function that contains and keeps state every time you call it.

Good comparison between this.setState and Hooks [here](https://reactjs.org/docs/hooks-state.html)

## What is the useState Hook?

Let me start off with a simple counter example: (I have commented the code to give a better overview)

// TODO: Insert code for useState.

useState allows you to add local state to a functional component. The only argument useState takes is the initial state. In the example above, it is 0 because our counter starts from zero. useState can take most JS types, number, strings, objects\*, arrays etc.

Also as you can see in the example you can use useState more than once in your component as we have. This may look strange you may ask wouldn't it be better to do something like this:

//TODO: Insert example of using object instead of two different values:

I wouldn't blame you for thinking this because if you translate back to classes way it maps well:

// TODO: Insert example of using this.state

However, they are not the same, when we use setState in the class version e.g this.setState({count: this.state.count + 1}) react would 'merge' state updates (all merging means is it keeps all the old state and only updates what you told it to). However useState doesn't merge updates, that is why if you run the same code via an updater function `setState({count: count + 1})` you would actually end up delete the isCounterControlsShowing property because the updater function sets the value to whatever you passed in, i.e it doesn't care about old values.
