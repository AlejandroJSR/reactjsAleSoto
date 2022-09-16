import React, {useState} from 'react'; 

const MiComponente = () => {

const [contador, setContador] = useState(0);

let numero = 0;

const   sumar = () => {
    setContador(contador + 1);}

const   restar = () => {
    setContador(contador - 1);}

const   reset = () => {
    setContador(0);
    // function();
}

return (
    <> 
    <div>Pantalla Iphone X</div>
    <h3>{contador}</h3>
    <button onClick={sumar}> + 1</button>
    <button onClick={restar}> - 1</button>
    <button onClick={reset}>Agregar al Carrito</button>
    </>
)
}

export default MiComponente