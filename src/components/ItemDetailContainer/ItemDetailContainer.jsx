import { useState, useEffect, useContext } from "react";
import { getProduct } from "../../data/data.js";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext.jsx";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [hideItemCount, setHideItemCount] = useState(false)
    const { addProductInCart } = useContext(CartContext)
    const { idProduct } = useParams()

    const addProduct = (countUnits) => {
        const productCart = { ...product, quantity: countUnits }
        addProductInCart( productCart )
        setHideItemCount(true)
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
            <ItemDetail product={product} addProduct={addProduct} hideItemCount={hideItemCount} />
        </>
    );
};

export default ItemDetailContainer;