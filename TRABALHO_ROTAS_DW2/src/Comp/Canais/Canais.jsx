import React from "react";
import {Link} from "react-router-dom";
import "./Canais.css";

export default function Header() {
	return (
		<div className="menu">
			<nav className="navMenu">
				<li id="Record">
					<Link to="/Record">1 - Record</Link>
				</li>
				<li id="Cultura">
					<Link to="/Cultura">2 - Cultura</Link>
				</li>
				<li id="Band">
					<Link to="/Band"> 3 - Band</Link>
				</li>
				<li id="Globo">
					<Link to="/Globo">4 - Globo</Link>
				</li>
				<li id="Sbt">
					<Link to="/Sbt">5 - SBT</Link>
				</li>
			</nav>
		</div>
	);
}

