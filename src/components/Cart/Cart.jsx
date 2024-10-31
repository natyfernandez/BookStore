import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
    const { cart, totalPrice, deleteProductInCart, deleteCart } = useContext(CartContext)

    return (
        <>
            {
                cart.map((productCart) => (
                    <div key={productCart.id}>
                        <img src={productCart.image} width={100} alt="" />
                        <p>{productCart.name}</p>
                        <p>Precio: {productCart.price}</p>
                        <p>Cantidad: {productCart.quantity} </p>
                        <p>Subtotal: {productCart.price * productCart.quantity}</p>
                        <button onClick={() => deleteProductInCart(productCart.id)} >Eliminar</button>
                    </div>
                ))
            }

            <div>
                <p>Total: {totalPrice()} </p>
                <button onClick={deleteCart} >Vaciar carrito</button>
            </div>
        </>
    )
}

export default Cart