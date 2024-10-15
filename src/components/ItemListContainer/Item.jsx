import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="item col h-100">
            <div className="card">
                <div className="image-container">
                    <img src={product.image} className="card-img-top" alt={product.title} />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <p>Precio: {product.price}</p>
                    <p>Género: {product.genre}</p>
                    <Link className="btn btn-primary" to={`/product/${product.id}`}>Ver producto</Link>
                </div>
            </div>
        </div>
    )
}

export default Item;
