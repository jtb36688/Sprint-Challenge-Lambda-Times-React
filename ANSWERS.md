- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes is a seperate npx package for React, which used to be built into React. It is used for type-checking the props object for each individual component. Components are often reused in different contexts in a React app, or can even be taken to be reused in completely different Apps. PropTypes will provide error messages if the component is used in a way that causes it not to receive all the proper props it needs to work.

- [ ] Describe a life-cycle event in React?

A lifecycle event is one of the few built-in React methods that class components follow when code is being run. constructor() and render() are required, and are run by every class component. There are many other lifecycle methods than run every time certain events occur in the process of running the App.

- [ ] Explain the details of a Higher Order Component?

A higher order component is one that takes in another component as an argument, which will be visible when exporting to it with export/ as an argument in its original declaration. The component(s) that it is provided will attain the logic provided in the higher order component.


- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

We can used styled-components, which is a concise way of styling that allows us to assign all style attributes within our .js files. It brings amongst all the benefits of JS, allowing us to use ternary operators and nest elements in our styling as if we were using LESS. It also allows us to use custom component naming conventions for all of our jsx tags.
We can use Reactstrap, which is an efficient way of styling that uses pre-built components that are modular if attributes are used when calling them. This allows us to very quickly create React components without by taking aways some of the styles planning stage. Reactstrap also provides a very easy way to create difficult-to-make components such as modals and carousels.
We can also style just using CSS and a preprocessor such as Less or Sass. Styling just in CSS allows our styling code to be in a different file than our JS, which is good when components may be often reused or moved in a way that would require new styling. If a preprocessor is used, we can use many advanced features such as variables, nesting, and mixins.