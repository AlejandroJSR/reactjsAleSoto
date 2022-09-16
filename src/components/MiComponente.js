import React, {useState,useEffect} from 'react'; 

const MiComponente = () => {

const [contador, setContador] = useState(0);
const [numero, setNumero] = useState(0);


useEffect(() => {
setNumero(numero +1)
});

setTimeout(() => {
console.log("useEffect");
},2000)

const   sumar = () => {
    setContador(contador + 1);}

const   restar = () => {
    setContador(contador - 1);}

const   reset = () => {
    setContador(0);

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