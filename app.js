
// for createElement we pass 2 arguments
// 1. HTML tag like h1, h2, h3, button etc
// 2. { } object as arguments like id or class to the place where we are rendering
// 3. the message or ui elements or childrean of that HTML tag
const heading = React.createElement("h1", {id:"heading", syz:"nothing"}, "Hello REACT");
//Create root 



const parent = React.createElement(
    "div", 
    {id:"parent"}, [
        React.createElement("div",{id:"child"},
        [React.createElement("h2",{id:"childHeading"},"First sibling"), 
        React.createElement("h3",{id:"childHeading"},"second sibling")
        ]),
        React.createElement("div",{id:"child"},
        [React.createElement("h2",{id:"childHeading"},"First sibling"), 
        React.createElement("h3",{id:"childHeading"},"second sibling")])
    ]
    );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 