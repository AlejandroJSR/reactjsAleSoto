const Item = ({product}) => {
    return(
<>
    <h3>{product.name}</h3>
    <div>{product.price}</div>
    <div src={product.img} div/>
    
    
</>

    )
}
export { Item }