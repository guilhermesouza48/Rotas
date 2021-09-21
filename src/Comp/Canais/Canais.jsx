import React from "react";
import {Link} from "react-router-dom";
import "./Canais.css";

export default function Header() {
	return (
		<div className="menu">
			<nav className="navMenu">
				<ul>
					<li id="Home">
						<Link to="/">Home</Link>
					</li>
					<li id="Record">
						<Link to="/record">1 - Record</Link>
					</li>
					<li id="Cultura">
						<Link to="/cultura">2 - Cultura</Link>
					</li>
					<li id="Band">
						<Link to="/band"> 3 - Band</Link>
					</li>
					<li id="Globo">
						<Link to="/globo">4 - Globo</Link>
					</li>
					<li id="Sbt">
						<Link to="/sbt">5 - SBT</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

