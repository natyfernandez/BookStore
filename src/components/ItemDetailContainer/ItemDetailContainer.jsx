import { useState, useEffect } from "react";
import { getProduct } from "../../data/data.js";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { idProduct } = useParams()

    const addProduct = (countUnits) => {
        const productCart = { ...product, quantity: countUnits }
        console.log(productCart)
    }

    useEffect(() => {
        getProduct(idProduct)
            .then((data) => setProduct(data))
            .catch((error) => console.error(error))
            .finally(() => {
                console.log('Finalizo la promesa')
            })
    }, [idProduct])

    return (
        <>
            <ItemDetail product={product} addProduct={addProduct} />
        </>
    );
};

export default ItemDetailContainer;