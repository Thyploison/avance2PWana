import React from 'react'
import {Link} from "react-router-dom"
import logo from '../images/logo.png'
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
const Header = () => {
  return (
    
<nav>
   <div className='container nav_container'>
    <Link to= "/" className ='nav_logo'>
     <img src={logo} alt="NavBar Logo" />  

   </Link>
   <ul className = "nav_menu"> 
    <li><Link to="/profile">Perfil</Link></li>
    <li><Link to="/create">Publicar</Link></li>
    <li><Link to="/authors">Autores</Link></li>
    <li><Link to="/logout">Salir</Link></li>
   </ul>
   <button className='nav_toggle-btn'>{/*boton regresar */}
   <AiOutlineClose />
   </button>
   </div>
</nav>

  )
}

export default Header