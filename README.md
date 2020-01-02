# React Hooks Playground

This repo has code that is used and discussed on my blog https://thedeployguy.com. I will embed the posts as much as I can in here but feel free to visit to check out some other posts.

## What are "Hooks"?

Hooks are functions that let you "Hook into" React state and lifecycle features from function components. React will preserve the value of useState during re-renders.

### Rules for using Hooks

Hooks are JavaScript functions, but they impose two additional rules:

Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions.

Directly from React Dev Blog

A more detailed comparison between the class way of using state e.g this.setState and hooks can be found here. The first hook we are going to discuss is useState.

## Hooks

- [useState](./README_useState.md)
- [useEffect](./README_useEffect.md)
