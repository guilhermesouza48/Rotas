import React from "react";
import {Route, Switch} from "react-router-dom";
import '../Record.css';
import Header from "./BalancoGeralTop";

function Balanco() {
	return (
			<div className="home">
				<div>
					<h1 class="titulo">CANAIS DE TV GRATIS E ONLINE!</h1>
				</div>
			<main>
				<Switch>
					<Route
						exact
						path="/record/balancogeral"
						render={() => <Header />}
					></Route>
				</Switch>
			</main>
			<div className="record">
					<div>
						<h2>Balanço Geral</h2>
					</div>
				</div>
		</div>
	);
}

export default Balanco;
