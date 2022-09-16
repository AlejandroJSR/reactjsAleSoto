import React, {useState} from 'react';
import Header from './components/header';
import ItemListContainer from './components/ItemsListContainer.js';
import MiComponente from './components/MiComponente'; 
import ItemCount from './components/ItemCount'; 
const App = () => {

  const nombre = "Alejandro";
  const apellido = "Soto"
  const greeting = "Bienvenido a Proandroid"
  const addCart = "Agregaste al carrito"

  return (
    <>
    <Header nombre={nombre} id="1" apellido={apellido}/>
    <ItemListContainer greeting={greeting}/> 
   {/* <MiComponente /> */}
   <ItemCount />
    </>
    
  )
}

export default App;