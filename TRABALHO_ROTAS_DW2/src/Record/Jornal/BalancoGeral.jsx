import React from "react";
import {Route, Switch} from "react-router-dom";

import Header from "./BalancoGeralTop";
import Corpo from "../../Comp/Home/Home";

function Balanco() {
	return (
		<div className="App">
			<main>
				<Switch>
					<Route
						exact
						path="/record/balancogeral"
						render={() => <Header />}
					></Route>
				</Switch>
			</main>
			<main>
				<div>
					<Corpo
						titulo={"Balanço Geral"}
						color={"rgb(10, 250, 10)"}
					></Corpo>
				</div>
			</main>
		</div>
	);
}

export default Balanco;
