import { NavLink } from "react-router-dom";

const Home=()=>{



    return(

        <>
        <h1>Hola, Bienvenido a JCMARKET</h1>
        <p>Conoce las 100 criptomonedas más populares</p>
        <NavLink to='/criptomonedas'>Ver Criptomonedas</NavLink>
        </>
    )
}

export default Home;