import React from 'react'

function Header() {
  return (
    <div>
         <nav id="logo">
        <a href="#"><img src={logo} alt="Logo Digital House" /></a>
    </nav>
    <nav id="opciones">
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Estrenos</a></li>
            <li><a href="#productos">Peliculas</a></li>
            <li><a href="#contacto">Mis Favoritos</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Header