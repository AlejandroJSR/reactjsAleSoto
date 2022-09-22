import React, {useState} from 'react'; 
import ItemListContainer from '../components/ItemsListContainer'; 

const   ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    

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