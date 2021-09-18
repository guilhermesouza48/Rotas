import React from "react";
import {Route} from "react-router-dom";

import menu from "../Canais/Canais";
import "./Cultura.css";
import Home from "../Home/Home";

function CulturaTv() {
	return (
		<div className="App">
			<div>
				<Route exact path="/cultura" render={() => <Home />}></Route>
			</div>
			<main>
				<div>
					<Home
						titulo={"Cultura"}
						color={"rgb(250, 50, 250)"}
					></Home>
				</div>
			</main>
		</div>
	);
}

export default CulturaTv;