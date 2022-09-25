import React, {useEffect, useState} from 'react';
import ItemCount from '../components/ItemCount';
import {ItemList} from '../components/ItemList';
import {products} from '../assets/productos';
import {customFetch} from '../components/customFetch';

const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState ([])

    useEffect (() => {
        customFetch(products)
            .then(res => setListProducts(res))
    }, [])

    console.log(listProducts)
    return (

<>
<h2>{greeting}</h2>
<ItemCount initial={1} stock={10} onAdd={() => {}} />
<ItemList listProducts={listProducts} />
</>
    )}

    export default ItemListContainer