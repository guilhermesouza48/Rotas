import React from "react";
import {Link} from "react-router-dom";
import Home from "../Comp/Home/Home";

export default function RecordHeader () {
	return (
		<div className="menu">
			<nav className="navMenu">
				<li>
					<Link to="/">Voltar</Link>
				</li>
				<li>
					<Link to="/falabrasil">Fala Brasil</Link>
				</li>
				<li>
					<Link to="/Record/BalancoGeral">Balanço Geral</Link>
				</li>
				<li>
					<Link to="/#">Cidade Alerta</Link>
				</li>
				<li>
					<Link to="/#">A Fazenda</Link>
				</li>
				<li>
					<Link to="/#">Raul Gil</Link>
				</li>
			</nav>

			<main>
				<div id="home">
					<Home
						titulo={"Record"}
						color={"rgb(10, 250, 10)"}
					></Home>
				</div>
			</main>
            
		</div>
	);
}
