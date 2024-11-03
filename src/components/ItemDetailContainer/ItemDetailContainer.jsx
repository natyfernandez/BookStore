import { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext.jsx";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/dbFirebase.js";

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

    const getProducts = () => {
        const docRef = doc( db, "products", idProduct )
        getDoc(docRef)
            .then((dataDb) => {
                const productDb = { id: dataDb.id, ...dataDb.data() }
                setProduct(productDb)
            })
    }

    useEffect(() => {
        getProducts()
    }, [idProduct])

    return (
        <>
            <ItemDetail product={product} addProduct={addProduct} hideItemCount={hideItemCount} />
        </>
    );
};

export default ItemDetailContainer;