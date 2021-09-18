import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
	return (
		<div className="menub1">
			<nav className="menub2">
				<li>
					<Link to="/">Menu</Link>
				</li>
				<li>
					<Link to="/Record">Voltar</Link>
				</li>
				<li>
					<Link to="/Record/Jornal/Ncs">
						Noticias da Capital
					</Link>
				</li>
				<li>
					<Link to="/#">Noticias do Interior</Link>
				</li>
				<li>
					<Link to="/#">Noticias de Brasília</Link>
				</li>
				<li>
					<Link to="/#">Noticias de Culinária</Link>
				</li>
			</nav>
		</div>
	);
}
