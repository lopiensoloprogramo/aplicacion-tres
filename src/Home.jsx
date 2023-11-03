import { NavLink } from "react-router-dom";
import './Home.css'
const Home=()=>{



    return(

        <>
        <div className="bienvenido">
                <h2>Bienvenido a JCMARKET</h2>
                <p>Conoce las 100 criptomonedas más populares...</p>
                <div className="ver-mas"><NavLink to='/criptomonedas'>Ver Criptomonedas</NavLink></div>
            </div> 
       
        
        </>
    )
}

export default Home;