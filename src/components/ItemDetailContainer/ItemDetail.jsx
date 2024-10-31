import { Link } from 'react-router-dom';
import ItemCount from './../ItemCountContainer/ItemCount';

const ItemDetail = ({ product , addProduct, hideItemCount }) => {
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
                    {product ? (
                        <div className="col info">
                            <h1>{product.title}</h1>
                            <p><strong>Precio: {product.price}</strong></p>
                            <p>Genero: {product.genre}</p>
                            <p>Autor: {product.autor}</p>
                            <p>Descripción: {product.description}</p>
                            <p>Número de páginas: {product.pages}</p>
                            <p>Editorial: {product.editorial}</p>
                            <p>Idioma: {product.idiom}</p>
                            <p>Fecha de publicación: {product.publication}</p>
                            {
                                hideItemCount === true ? (
                                    <Link to="/cart">Terminar compra</Link>
                                ) : (
                                    <ItemCount stock={product.stock} addProduct={addProduct} /> 
                                )
                            }
                        </div>
                    ) : (
                        <p>Cargando detalles...</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail