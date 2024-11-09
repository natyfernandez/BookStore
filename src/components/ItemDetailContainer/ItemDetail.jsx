import { Link } from 'react-router-dom';
import ItemCount from './../ItemCountContainer/ItemCount';
import Loading from './../Loading/Loading';
import { useState, useEffect } from 'react';

const ItemDetail = ({ product, addProduct, hideItemCount }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (product) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [product]);

    return (
        <div className="container-xxl px-5 py-4">
            {loading ? (
                <Loading />
            ) : (
                <div className="row g-5">
                    <div className="col-3">
                        <img src={product.image} alt={product.title} className="img-fluid w-100" />
                    </div>
                    <div className="col-9 info">
                        <div className="col">
                            <h1>{product.title}</h1>
                            <p><strong>Precio: {product.price}</strong></p>
                            <p>Género: {product.genre}</p>
                            <p>Autor: {product.autor}</p>
                            <p>Descripción: {product.description}</p>
                            <p>Número de páginas: {product.pages}</p>
                            <p>Editorial: {product.editorial}</p>
                            <p>Idioma: {product.idiom}</p>
                            <p>Fecha de publicación: {product.publication}</p>
                            {hideItemCount ? (
                                <Link className="btn btn-primary" to="/cart">Terminar compra</Link>
                            ) : (
                                <ItemCount stock={product.stock} addProduct={addProduct} />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemDetail;
