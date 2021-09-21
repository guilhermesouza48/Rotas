import React from "react";
import './Home.css';
import Header from '../Canais/Canais'

function Home(){
    return (
        <div className="home">
            <div>
                <h1 class="titulo">CANAIS DE TV GRATIS E ONLINE!</h1>
            </div>
            <div>
                <Header />
            </div>
            <div className="home">
					<div>
						<h2>Bem-vindo</h2>
					</div>
				</div>
        </div>
    )
}
export default Home;
