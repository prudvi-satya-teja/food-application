import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div", 
    { "id" : "parent"},
    [ React.createElement(
        "div", 
        { "id" : "child"},
        [ React.createElement("h1", {}, "I'm Namaste react"), 
          React.createElement("h2", {}, "I'm an h2 tag")
        ]
    ), 
    React.createElement(
        "div", 
        { "id" : "child2"},
        [ React.createElement("h1", {}, "I'm h1 tag"), 
          React.createElement("h2", {}, "I'm an h2 tag")
        ]
    )]
)

// JSX

const heading = React.createElement("h1", 
    {  id: "heading", xyz:"abc" },
    "Hello World from React!"
);


console.log(parent);  // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);









// const  addElement = () => {
//     const root = document.getElementById("root");

//     const child = document.createElement("h1");
//     child.id = "hello";
//     child.innerHTML = "hello world";

//     root.appendChild(child);

// }
// addElement();

// ReactElement(Object) => HTML(Broweser Understands)
//-------------------------------------------------

// from here the react

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1> I'm h1 tag</h1>
 *          <h1> I'm h2 tag</h2>
 *      </div>
*       <div id="child">
*               <h1> I'm h1 tag</h1>
*                <h1> I'm h2 tag</h2>
*        </div>
 * </div>
 */
