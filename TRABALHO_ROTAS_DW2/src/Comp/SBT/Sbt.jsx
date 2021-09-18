import React from "react";

import Header from "../Canais/Canais";
import "./Sbt.css";
import Home from "../Home/Home";

function Sbttv() {
	return (
		<div className="App">
			<div>
				<Header />
			</div>
			<main>
				<div>
					<Home
						titulo={"Globo"}
						color={"rgb(220, 220, 210)"}
					></Home>
				</div>
			</main>
		</div>
	);
}

export default Sbttv;
