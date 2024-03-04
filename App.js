// const headings=React.createElement("h1",{id:"head" , xy:"yy"},"Hello from React");
// console.log(headings);
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(headings);





const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"HELLO"),React.createElement("h2",{},"HELLO")]
),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"HELLO"),React.createElement("h2",{},"HELLO")]
)]
)
console.log(parent);
const root= ReactDOM.createRoot(document.getElementById("root2"));
root.render(parent);



