import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, totalPrice, deleteProductInCart, deleteCart } = useContext(CartContext)

    if (cart.length === 0) {
        return(
            <div className="container-xxl d-flex justify-content-center align-items-center flex-column px-5 py-5">
                <h2 className="text-center">No hay productos en el carrito</h2>
                <Link to="/" className="btn btn-primary mt-3" >Volver a inicio</Link>
            </div>
        )
    }

    return (
        <div className="container-xxl px-5 py-4">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">Portada</th>
                            <th scope="col" className="text-center">Titulo</th>
                            <th scope="col" className="text-center">Precio</th>
                            <th scope="col" className="text-center">Cantidad</th>
                            <th scope="col" className="text-center">Subtotal</th>
                            <th scope="col" className="text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((productCart) => (
                                <tr key={productCart.id} className="w-100">
                                    <td className="align-middle text-center">
                                        <img src={productCart.image} width={100} alt="" />
                                    </td>
                                    <td className="align-middle text-center">
                                        <p>{productCart.title}</p>
                                    </td>
                                    <td className="align-middle text-center">
                                        <p>{productCart.price}</p>
                                    </td>
                                    <td className="align-middle text-center">
                                        <p>{productCart.quantity} </p>
                                    </td>
                                    <td className="align-middle text-center">
                                        <p>{productCart.price * productCart.quantity}</p>
                                    </td>
                                    <td className="align-middle text-center">
                                        <button className="btn btn-danger" onClick={() => deleteProductInCart(productCart.id)} >Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>                
            </div>

            <div className="d-flex justify-content-end align-items-center">
                <p className="h3 m-0">Total: {totalPrice()} </p>
                <div className="d-flex">
                    <button className="btn btn-danger ms-3" onClick={deleteCart} >Vaciar carrito</button>
                    <Link to="/checkout" className="btn btn-primary ms-3" >Continuar compra</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart