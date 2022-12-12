// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get reference to the div with ID root
const reactElement = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(reactElement);

// 4) Create a component
function App() {
    return <h1>Hi there!</h1>;
}

// 5) Show the component on the screen
root.render(<App />);