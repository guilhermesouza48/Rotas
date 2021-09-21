import React from "react";
import {Route, Switch} from "react-router-dom";
import RecordHeader from "./RecordTop";
import "./Record.css";

function Recordtv() {
	return (
			<div className="home">
				<div>
					<h1 class="titulo">CANAIS DE TV GRATIS E ONLINE!</h1>
				</div>
			<div>
				<Switch>
					<Route
						exact
						path="/record"
						render={() => <RecordHeader />}
					></Route>
				</Switch>
				<div className="record">
					<div>
						<h2>Canal Record</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Recordtv;
