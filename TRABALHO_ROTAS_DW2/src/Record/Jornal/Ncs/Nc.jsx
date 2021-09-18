import React from "react";
import {Route, Switch} from "react-router-dom";

import Header from "./NcTop";
import Home from "../../../Comp/Home/Home";

function Nc () {
	return (
		<div className="App">
			<main>
				<Switch>
					<Route
						exact
						path="/Record/BalancoGeral/Nc"
						render={() => <Header />}
					></Route>
				</Switch>
			</main>
			<main>
				<div>
					<Home
						titulo={"Noticias da Capital"}
						color={"rgb(10, 250, 10)"}
					></Home>
				</div>
			</main>
		</div>
	);
}

export default Nc;
