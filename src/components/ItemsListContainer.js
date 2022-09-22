import React, {useEffecct} from 'react';
import ItemCount from '../components/ItemCount';
// import products from '../../assets/productos';

const initialProducts = [
    {name:"Pantalla Iphone X", id: 1, price: 150, stock: 10},
    {name:"Carcaa Iphone X", id: 2, price: 50, stock: 10},
]
const ItemListContainer = ({greeting}) => {
    return (

<>
<h2>{greeting}</h2>
<ItemCount initial={1} stock={10} onAdd={() => {}} />
</>
    )}

    export default ItemListContainer