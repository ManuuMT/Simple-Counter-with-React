import React from "react";
import PropTypes from "prop-types";

// Creating component:
// Every digit of the counter will need its own prop
const SecondsCounter = props => {
	return (
		<>
			<label> ~ Time is only an illusion ~ </label>
			<div className="box">
				<div className="clock">
					<i className="far fa-clock"></i>
				</div>
				<div className="fourthDigit">{props.fourthDigit}</div>
				<div className="thirdDigit">{props.thirdDigit}</div>
				<div className="secondDigit">{props.secondDigit}</div>
				<div className="firstDigit">{props.firstDigit}</div>
			</div>
		</>
	);
};

SecondsCounter.propTypes = {
	firstDigit: PropTypes.number,
	secondDigit: PropTypes.number,
	thirdDigit: PropTypes.number,
	fourthDigit: PropTypes.number
};

export default SecondsCounter;
