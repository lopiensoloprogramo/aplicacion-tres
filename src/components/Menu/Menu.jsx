import { Link } from 'react-router-dom';
import './Menu.css'
const Menu=()=>{


    return(
    <>
    <nav className="main-menu">
        <ul>
           <li> <Link to="/">Inicio</Link></li>
           <li> <Link to="/criptomonedas">Lista de Criptomonedas</Link></li>
           
        </ul>
    </nav>


    </>

    )
}
export default Menu;