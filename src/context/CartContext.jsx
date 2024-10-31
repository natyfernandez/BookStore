import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState([])

    const  addProductInCart = (newProdct) => {
        const condicion = isInCart(newProdct.id)
        if(condicion){
            const newCart = cart.map((productCart) => {
                if (productCart.id === newProdct.id) {
                    if (productCart.stock >= (productCart.quantity + newProdct.quantity)) {
                        return { ...productCart, quantity: productCart.quantity + newProdct.quantity }
                    }
                    return productCart
                }
                else{
                    return productCart
                }
            })

            setCart(newCart)
        }else{
            setCart( [ ...cart, newProdct ] )
        }
    }

    const isInCart = (idProduct) => {
        return cart.some( (productCart) => productCart.id === idProduct )
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