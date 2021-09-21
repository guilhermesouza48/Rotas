import React from "react";
import {Link} from "react-router-dom";

export default function RecordHeader(){
	return (
		<div className="menu">
			<nav className="navMenu">
				<ul>
					<li>
						<Link to="/">Voltar</Link>
					</li>
					<li>
						<Link to="#">Fala Brasil</Link>
					</li>
					<li>
						<Link to="/record/balancogeral">Balanço Geral</Link>
					</li>
					<li>
						<Link to="#">Cidade Alerta</Link>
					</li>
					<li>
						<Link to="#">A Fazenda</Link>
					</li>
					<li>
						<Link to="#">Raul Gil</Link>
					</li>
				</ul>
			</nav>            
		</div>
	);
}
