import React, {useEffecct} from 'react';
import ItemCount from '../components/ItemCount'; 

const initialProducts = [
    {name:"Pantalla Iphone X", id: 1, price: 150, stock: 10},
    {name:"Carcasa Iphone X", id: 2, price: 50, stock: 10},
]



// const promesa = new Promise((res,rej) => {  
//     res(initialProducts)
// })

// const ItemListContainer = ({greeting}) => {

//     useEffecct(() => {
//         console.log(promesa);
//         promesa
//         .then((data) => {
//         console.log("ok");
//         console.log(data);
//         })
//     }, [])


const ItemListContainer = ({greeting}) => {
    return (
        <h2>{greeting}</h2>
    
    )}

    export default ItemListContainer


// import React from 'react';
// // import ItemCount from ' from 'itemCount'; 
// const ItemListContainer = ({greeting}) => {
//     return (

// <>
// <h2>{greeting}</h2>
// <itemCount initial={1} stock={10} onAdd={() =>{}} />
// </>
//     )}

//     export default ItemListContainer