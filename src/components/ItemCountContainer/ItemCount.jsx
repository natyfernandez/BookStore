import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import './itemCount.css';

const ItemCount = ({ addToCart, stock }) => {
    const [countUnits, setCountUnits] = useState(1);

    const aumentar = () => {
        if (countUnits < stock) {
            setCountUnits(countUnits + 1);
        } else {
            alert(`El stock disponible es de ${stock} unidades`);
        }
    };

    const disminuir = () => {
        if (countUnits > 1) {
            setCountUnits(countUnits - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(countUnits);
    };

    return (
        <div className="addtoCartWidget">
            <div className="countUnits">
                <button onClick={disminuir}><LuMinus /></button>
                <p>{countUnits}</p>
                <button onClick={aumentar}><FiPlus /></button>
            </div>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
            <p>Stock disponible: {stock}</p> {/* Mostrar el stock disponible */}
        </div>
    );
};

export default ItemCount;
