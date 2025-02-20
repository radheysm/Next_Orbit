import React from "react";
import ReactDOM from "react-dom/client";
const rootElement = document.getElementById('root');
const parent = React.createElement('div', {id:"parent"},[
        React.createElement('h1', {id:"heading"}, "Hello World"),
        React.createElement('h2', {id:"subheading"}, "This is a React App")
])

// JSX

const root = ReactDOM.createRoot(rootElement);
root.render(parent);