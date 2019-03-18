//Calling this index.js is important
// Steps to getting content on screen:
// 1. Import React and React DOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// 2. Create React component

function getButtonText(){
    return "Confirm";
}
//You can reference a function in JSX
const App = () => {
    const buttonText = "Click Me!";//Or a variable
    //However you can't put in Javascript Objects like buttonText = {text: "Click Me"}
    //Unless you put in buttonText.text instead of just buttonText
    //Also check console for other incompatible properties
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
        </div> 
    );
};


// 3. Take React component and display on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);



