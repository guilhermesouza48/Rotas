import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
	return (
		<div className="menu">
			<nav className="navMenu">
				<ul>
					<li>
						<Link to="/">Menu</Link>
					</li>
					<li>
						<Link to="/record">Voltar</Link>
					</li>
					<li>
						<Link to="/record/balancogeral/nc">
							Noticias da Capital
						</Link>
					</li>
					<li>
						<Link to="#">Noticias do Interior</Link>
					</li>
					<li>
						<Link to="#">Noticias de Brasília</Link>
					</li>
					<li>
						<Link to="#">Noticias de Culinária</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
