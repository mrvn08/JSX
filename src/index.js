//Calling this index.js is important
// Steps to getting content on screen:
// 1. Import React and React DOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// 2. Create React component
const App = () => {
    return <div>Hi there!</div>;
};

// 3. Take React component and display on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);



