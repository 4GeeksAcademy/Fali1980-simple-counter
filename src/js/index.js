//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import SecondsCounter from "./component/secondscounter.jsx";

//render your react application
setInterval(secondsCount, 1000);
let counter = 0;
function secondsCount() {
    counter++
    ReactDOM.render(<SecondsCounter seconds = {counter}/>, document.querySelector("#app"));

}

