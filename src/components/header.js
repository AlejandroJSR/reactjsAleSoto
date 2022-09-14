import React from 'react';
import logo from '../assets/proandroid-logo.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./Header.css"
import CartWidget from './CartWidget.js';
import ItemsListContainer from './ItemsListContainer';

const Header = ({nombre, apellido, id}) => {
    console.log({nombre, apellido, id});


    
    return (
    <>
    <header>
    <img src={logo} alt="logo" />  
    <h1>Proandroid</h1>
    <h3>Bienvenido {nombre}</h3>
    <nav>
    <ul class="menu">
        <li><a href="../public/index.html">Inicio</a> </li>
        <li><a href="../public/index.html">Accesorios</a></li>
        <li><a href="../public/index.html">Repuestos</a></li>
        <li> <a href="../public/index.html">Mayoristas</a> </li>
        <li><a href="../public/index.html">Nosotros</a></li>
    <div class="usuario-menu">
        <li><a href="../public/index.html">Usuario</a></li></div>
    </ul>
    </nav>
    < CartWidget/>

    </header>

    <h2> </h2>>

    <greeting>


    </greeting>
    </>
    )}

    export default Header