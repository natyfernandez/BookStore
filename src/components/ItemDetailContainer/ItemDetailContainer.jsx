import { useState, useEffect } from "react";
import { getProduct } from "../../data/data.js";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { addProductInCart } = useContext(CartContext)
    const { idProduct } = useParams()

    const addProduct = (countUnits) => {
        const productCart = { ...product, quantity: countUnits }
        addProductInCart( productCart )
    }

    useEffect(() => {
        getProduct(idProduct)
            .then((data) => setProduct(data))
            .catch((error) => console.error(error))
            .finally(() => {
            })
    }, [idProduct])

    return (
        <>
            <ItemDetail product={product} addProduct={addProduct} />
        </>
    );
};

export default ItemDetailContainer;