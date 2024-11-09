import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import './itemcount.css';

const ItemCount = ({ stock , addProduct }) => {
    const [countUnits, setCountUnits] = useState(1);

    const handleClickDecrement = () => {
        if (countUnits > 1) {
            setCountUnits(countUnits - 1);
        }
    };

    const handleClickIncrement = () => {
        if (countUnits < stock) {
            setCountUnits(countUnits + 1);
        } 
    };

    return (
        <div className="addtoCartWidget d-flex align-items-center">
            <div className="countUnits d-flex align-items-center">
                <button className="btn btn-outline-light" onClick={handleClickDecrement}><LuMinus /></button>
                <p className="mx-4 my-0">{countUnits}</p>
                <button className="btn btn-outline-light" onClick={handleClickIncrement}><FiPlus /></button>
            </div>
            <button className="btn btn-primary" onClick={ () => addProduct(countUnits) }>Agregar al carrito</button>
            <p>Stock disponible: {stock}</p>
        </div>
    );
};

export default ItemCount;
