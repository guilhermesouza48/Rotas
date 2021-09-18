import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../Canais/Canais";
import "./Globo.css";
import Home from "../Home/Home";

function Globotv() {
	return (
		<div className="App">
			<div>
				<Switch>
					<Route
						exact
						path="/globo"
						render={() => <Home />}
					></Route>
				</Switch>
			</div>
			<main>
				<div>
					<Home
						titulo={"Globo"}
						color={"rgb(247, 250, 50)"}
					></Home>
				</div>
			</main>
		</div>
	);
}

export default Globotv;
