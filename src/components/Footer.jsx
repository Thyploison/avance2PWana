import React from 'react'
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer>
        <ul className='footer_categories'>
        <li><Link to="/posts/categories/:arteUrbano">Arte Urbano y Murales</Link></li>
        <li><Link to="/posts/categories/:arteDigital">Ilustración Digital</Link></li>
        <li><Link to="/posts/categories/:Ilustracion3d">Ilustracion 3D</Link></li>
        <li><Link to="/posts/categories/:Modelado3d">Modelado 3d</Link></li>
        <li><Link to="/posts/categories/:Tutoriales">Tutoriales</Link></li>
        <li><Link to="/posts/categories/:Reseñas">Reseñas</Link></li>
        </ul>
        <div className='footer_copyright'>
          <small>All rights Reserved &copy; Copyrigh, Nuestro Arte.</small>


        </div>
    </footer>
  )
}

export default Footer