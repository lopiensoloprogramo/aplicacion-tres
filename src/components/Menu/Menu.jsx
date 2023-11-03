import { Link,useNavigate } from 'react-router-dom';
import './Menu.css'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Menu=()=>{
const navigation= useNavigate()
const usuario= useContext(UserContext)
    return(
    <>
    <nav className="main-menu">
        <ul>
           <li> <Link to="/">Inicio</Link></li>
           <li> <Link to="/criptomonedas">Lista de Criptomonedas</Link></li>
           <li> <Link to="/perfil">Perfil de {usuario.first_name+" "+usuario.last_name}</Link></li>
           <li onClick={()=>{
            localStorage.removeItem('tokenEdMarket');
            navigation("/login")
           }}> <a>Cerrar Sesion</a></li>
        </ul>
    </nav>


    </>

    )
}
export default Menu;