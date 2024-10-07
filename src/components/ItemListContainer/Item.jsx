import { useState } from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const Item = ({ product }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const showDetail = () => {
        setSelectedProduct(product); 
        const modalElement = document.getElementById('infomodal');
        if (modalElement) {
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        } else {
            console.error("El modal no fue encontrado");
        }
    };

    return (
        <div className="item col h-100">
            <div className="card">
                <div className="image-container">
                    <img src={product.image} className="card-img-top" alt={product.title} />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <p>precio: {product.price}</p>
                    <p>genero: {product.genre}</p>
                    {/* Cambiamos para pasar la referencia de la función, no la invocación */}
                    <button className="btn btn-primary" onClick={showDetail}>Ver producto</button>
                    {/* El contenedor del modal */}
                    <ItemDetailContainer product={selectedProduct} />
                </div>
            </div>
        </div>
    )
}

export default Item;
