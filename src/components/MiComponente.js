import React, {useState} from 'react'; 

const MiComponente = () => {

const [contador, setContador] = useState(0);

let numero = 0;

const   sumar = () => {
    setContador(contador + 1);}

const   restar = () => {
    setContador(contador - 1);}

const   reset = () => {
    setContador(0);}

return (
    <> 
    <div>Pantalla Iphone X</div>
    <h3>{contador}</h3>
    <button onClick={sumar}>Uno mas</button>
    <button onClick={restar}>Uno menos</button>
    <button onClick={reset}>Reset</button>
    </>
)
}

export default MiComponente