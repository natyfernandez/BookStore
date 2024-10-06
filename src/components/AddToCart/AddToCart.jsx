import { useState } from "react";
import CartWidget from "../NavBar/CartWidget";
import ItemCount from "../ItemCountContainer/ItemCount";

const addToCart = () => {
    const [countCart, setCountCart] = useState(0); 

    const addToCart = (countUnits) => {
        setCountCart(countCart + countUnits);
    }

  return (
    <>
        <CartWidget countCart={countCart} />
        <ItemCount addToCart={addToCart} />
    </>
  )
}

export default addToCart