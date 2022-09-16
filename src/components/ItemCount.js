import React, {useState} from 'react'; 

const initial = "1"
const stock = "10"

const   ItemCount = () => {
    const [count,setCount] = useState(initial)

    let numero = 0;
    const sumar = () => count < stock && setCount(count + 1)
    const restar = () => count > initial && setCount(count - 1)

return (
    <> 
    <h3>Pantalla Iphone X</h3>
    <h2>{count}</h2>
    <button onClick={sumar}> + 1</button>
    <button onClick={restar}> - 1</button>
    <button onClick>Agregar al Carrito</button> 
    </>
)
}


export default ItemCount