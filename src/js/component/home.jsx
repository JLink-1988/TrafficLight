import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("yellow");
	return (
		<div className="traffic-light">
			<div
				onClick={() => setSelected("red")}
				className={
					"red light" + (selected === "red" ? " glow" : "")
				}></div>
			<div
				onClick={() => setSelected("yellow")}
				className={
					"yellow light" + (selected === "yellow" ? " glow" : "")
				}></div>
			<div
				onClick={() => setSelected("green")}
				className={
					"green light" + (selected === "green" ? " glow" : "")
				}></div>
		</div>
	);
};

export default Home;
