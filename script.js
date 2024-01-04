 

const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"children"},
React.createElement("h1",{id:"heading1"},"this is h1"),
React.createElement("h2",{id:"heading2"},"this is h2")))
const heading=React.createElement("h1",{id:"heading"},"this is h1 tag");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);