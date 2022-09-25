import {Item} from '../components/Item'

const ItemList = ({listProducts}) => {

    return(
    <>
    {listProducts.map((prod, i) => <Item key={`${prod.name}-${i}`} product={prod} />)}
    </>
    )
}
export { ItemList }