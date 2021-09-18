import React from "react";
import "./Band.css";


import Home from "../Home/Home";
import Header from "../Canais/Canais";


function BandTv() {
	return (
		<div className="App">

			<div>
				<Header />
			</div>

			<main>
				<div>
					<Home
						titulo={"Band"}
						color={"rgb(100,100,100)"}
					></Home>
				</div>
			</main>

		</div>
	);
}

export default BandTv;
