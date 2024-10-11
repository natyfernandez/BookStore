import { useState, useEffect } from "react";
import { getProduct } from "../../data/data.js";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { idProduct } = useParams()

    useEffect(() => {
        getProduct(idProduct)
            .then((data) => setProduct(data))
            .catch((error) => console.error(error))
            .finally(() => {
                console.log('Finalizo la promesa')
            })
    }, [idProduct])

    return (
        <div className="itemlistcontainer container-xxl px-5 py-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                <div className="col">
                    {product ? (
                        <img src={product.image} alt={product.title} className="img-fluid" />
                    ) : (
                        <p>Cargando imagen...</p>
                    )}
                </div>
                <div className="col info">
                    {product ? <ItemDetail product={product} /> : <p>Cargando detalles...</p>}
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;