//Import React
import React from "react";
import ReactDOM from "react-dom";

//Import Bootstrap
import "bootstrap";

//Styles
import "../styles/index.scss";

//Components
import SecondsCounter from "./component/SecondsCounter.jsx";

// Sets the seconds counter at 0
let counter = 0;

let renderCounter = () => {
	// Divides the counter and calculates a module to obtain every digit
	const fourth = Math.floor(counter / 1000) % 10;
	const third = Math.floor(counter / 100) % 10;
	const second = Math.floor(counter / 10) % 10;
	const first = counter % 10;
	// Adds 1 second and then it renders with every new digit
	counter++;
	ReactDOM.render(
		<SecondsCounter
			firstDigit={first}
			secondDigit={second}
			thirdDigit={third}
			fourthDigit={fourth}
		/>,
		document.querySelector("#app")
	);
};

// We need a setInterval to use instead of the useState
// to render the component every one second
setInterval(renderCounter, 1000);
