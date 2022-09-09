import React from 'react';
import logo from '../assets/proandroid-logo.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header = () => {
    return (
    <>
    
    <img src={logo} alt="logo" />  
    <h1>Proandroid</h1>
    <nav>
    <ul class="menu">
        <li><a href="index.html">Inicio</a> </li>
        <li><a href="pages/accesorios.html">Accesorios</a></li>
        <li><a href="pages/repuestos.html">Repuestos</a></li>
        <li> <a href="pages/mayoristas.html">Mayoristas</a> </li>
        <li><a href="pages/nosotros.html">Nosotros</a></li>
    <div class="usuario-menu">
        <li><a href="pages/usuario.html">Usuario</a></li></div>
    </ul>

<AddShoppingCartIcon color="sucess" fontSize="large" />

    </nav>


    </>
    )}

    export default Header