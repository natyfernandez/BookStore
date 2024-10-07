import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ product }) => {
    return (
        <div className="modal fade modal-lg modal-dialog-scrollable" id="infomodal" data-bs-backdrop="static"
            data-bs-keyboard="false" tabIndex="-1" aria-labelledby="infomodalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="infomodalLabel">
                            {product ? product.title : "Cargando..."}
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body row row-cols-1 row-cols-md-2">
                        <div className="col">
                            {product ? (
                                <img src={product.image || "ruta/a/imagen/por/defecto.jpg"} alt={product.title} className="img-fluid" />
                            ) : (
                                <p>Cargando imagen...</p>
                            )}
                        </div>
                        <div className="col info">
                            {product ? <ItemDetail product={product} /> : <p>Cargando detalles...</p>}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;