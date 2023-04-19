import { useState, useEffect } from "react"
import { getProducts } from '../../AsyncMock.js'
import { ItemList } from '../ItemList/ItemList.js'
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(Response => {
                setProducts(Response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [] )

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

    export default ItemListContainer