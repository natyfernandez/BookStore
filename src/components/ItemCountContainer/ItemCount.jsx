import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import './itemCount.css';

const ItemCount = ({ stock , addProduct }) => {
    const [countUnits, setCountUnits] = useState(1);

    const handleClickIncrement = () => {
        if (countUnits < stock) {
            setCountUnits(countUnits + 1);
        } else {
            alert(`El stock disponible es de ${stock} unidades`);
        }
    };

    const handleClickDecrement = () => {
        if (countUnits > 1) {
            setCountUnits(countUnits - 1);
        }
    };

    return (
        <div className="addtoCartWidget">
            <div className="countUnits">
                <button onClick={handleClickDecrement}><LuMinus /></button>
                <p>{countUnits}</p>
                <button onClick={handleClickIncrement}><FiPlus /></button>
            </div>
            <button onClick={ () => addProduct(countUnits) }>Agregar al carrito</button>
            <p>Stock disponible: {stock}</p>
        </div>
    );
};

export default ItemCount;
