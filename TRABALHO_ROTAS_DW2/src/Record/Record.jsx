import React from "react";
import {Route, Switch} from "react-router-dom";
import RecordHeader from "./RecordTop";
import "./Record.css";
import Home from "../Comp/Home/Home";

function Recordtv() {
	return (
		<div className="App">

			<div>
				<Switch>
					<Route
						exact
						path="/Record"
						render={() => <home />}
					></Route>
				</Switch>
			</div>

			<main>
				<div>
					<Home
						titulo={"Record"}
						color={"rgb(247, 250, 50)"}
					></Home>
				</div>
			</main>
		</div>
	);
}

export default Recordtv;
