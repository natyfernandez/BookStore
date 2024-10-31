import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState([])

    const  addProductInCart = (newProdct) => {
        setCart( [ ...cart, newProdct ] )
    }

    const deleteProductInCart = (idProduct) => {
        const productsFilter = cart.filter( (productCart) => productCart.id !== idProduct )
        setCart(productsFilter)
    }

    const totalQuantity = () => {
        const quantity = cart.reduce( ( total, productCart ) => total + productCart.quantity, 0 )
        return quantity 
    }

    const totalPrice = () => {
        const price = cart.reduce( (total, productCart) => total + ( productCart.price * productCart.quantity ), 0 )
        return price
    }

    const deleteCart = () => {
        setCart([])
    }
    
    return(
        <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductInCart, deleteCart } }>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }