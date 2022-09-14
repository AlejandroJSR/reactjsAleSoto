import React from 'react';
import Header from './components/header';
import ItemListContainer from './components/ItemsListContainer.js';

const App = () => {

  const nombre = "Alejandro";
  const apellido = "Soto"
  const greeting = "Bienvenido a Proandroid"

  return (
    <>
    <Header nombre={nombre} id="1" apellido={apellido}/>
    <ItemListContainer greeting={greeting}/> 
    </>
    
  )
}

export default App;