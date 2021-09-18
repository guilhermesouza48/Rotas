import React from "react";

const Home = (props) => {

    let corp = {backgroundColor: props.color || "red"}

    return (

        <div className="home" style={corp}>

            <h1 className="titulo">{props.titulo}</h1>

            <h2 className="sub">{props.sub}</h2>
        
        </div>
    )
}

export default Home;