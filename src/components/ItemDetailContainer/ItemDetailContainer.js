import "./ItemDetailContainer.css"
import { useEffect, useState } from "react"
import { getProductById } from "../../AsyncMock.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailcontainer = () =>{
    const[product, setProduct] = useState(null)

    const{ itemId } = useParams

    useEffect(() =>{
        getProductById('item Id')
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
    

};

export default ItemDetailcontainer;