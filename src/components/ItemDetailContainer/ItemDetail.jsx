const ItemDetail = ({ product }) => {
    return (
        <>
            <h1>{product.title}</h1>
            <p><strong>Precio: {product.price}</strong></p>
            <p>Genero: {product.genre}</p>        
            <p>Autor: {product.autor}</p>        
            <p>Descripción: {product.description}</p>        
            <p>Número de páginas: {product.pages}</p>        
            <p>Editorial: {product.editorial}</p>        
            <p>Idioma: {product.idiom}</p>        
            <p>Fecha de publicación: {product.publication}</p>
        </>
    )   
}

export default ItemDetail