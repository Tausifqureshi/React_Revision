// ============================================ Writing React Code =============================================== //
// ChatGPT Se Liya Hua Syntex --->  1. Writing React Code
// Components: React code is primarily composed of components. A component is a JavaScript function or class that returns a React element. Components can be either functional or class-based.

// JSX: Components often use JSX, a syntax extension that looks similar to HTML. JSX is transformed into JavaScript by tools like Babel.

// =============================================== Compilation =================================================== //
// ChatGPT Se Liya Hua Syntex ---> 2. Compilation
// Babel: JSX code is not directly understood by browsers, so it needs to be compiled into plain JavaScript. Babel is a tool that transforms JSX into React.createElement calls, which are plain JavaScript objects that describe what the UI should look like.

// Webpack: Webpack or similar bundlers are used to bundle your JavaScript files and other assets (like CSS or images) into a single output file or smaller chunks. It also handles module resolution and code splitting.


// ================================================ Rendering ==================================================== //
// ChatGPT Se Liya Hua Syntex --->  3. Rendering
// ReactDOM: Once the code is compiled and bundled, ReactDOM is used to render your React components into the DOM. The entry point is usually the index.js file, where ReactDOM.render() is called to render the root component into a DOM element.

// Virtual DOM: React maintains a virtual DOM to optimize updates. When a component’s state changes, React creates a new virtual DOM tree and compares it with the previous one (this process is called "reconciliation"). It then updates the real DOM efficiently by only making the necessary changes.


// ============================================ Component Lifecycle ============================================== //
// ChatGPT Se Liya Hua Syntex --->  4. Component Lifecycle
// Mounting: When a component is first created and inserted into the DOM.
// Updating: When a component’s state or props change, causing it to re-render.
// Unmounting: When a component is removed from the DOM.


// ============================================= State Management ================================================ //
// ChatGPT Se Liya Hua Syntex ---> 5. State Management

//  useState: Functional components use the useState hook to manage local state.

// useEffect: This hook allows you to perform side effects in function components, like data fetching or subscriptions.

// Context API: For managing global state and passing data through the component tree without props drilling.


// ============================================ Handling User Input ============================================== //
// ChatGPT Se Liya Hua Syntex ---> 6. Handling User Input

// Event Handlers: Components handle user interactions like clicks or form submissions using event handlers. React provides a synthetic event system that wraps the native events.


// ================================================= Routing ===================================================== //
// ChatGPT Se Liya Hua Syntex ---> 7. Routing
// React Router: For navigating between different views or pages in a single-page application, React Router is used. It manages the routing by rendering different components based on the URL.