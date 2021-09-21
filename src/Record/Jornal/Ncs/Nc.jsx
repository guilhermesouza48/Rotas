import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./NcTop";
function Nc(){
	return (
			<div className="home">
				<div>
					<h1 class="titulo">CANAIS DE TV GRATIS E ONLINE!</h1>
				</div>
			<main>
				<Switch>
					<Route
						exact
						path="/record/balancogeral/nc"
						render={() => <Header />}
					></Route>
				</Switch>
				<div className="record">
					<div>
						<h2>Notícias da Capital</h2>
					</div>
				</div>
			</main>
			</div>
	);
}

export default Nc;
