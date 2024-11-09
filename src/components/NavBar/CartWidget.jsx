import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    const total = totalQuantity()

    return (
        <Link to="/cart" className="btn position-relative p-0">
            <IoCartOutline size={30} color="white" />
            {
                total >= 1 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{ total }</span>
            }
        </Link>
    );
};

export default CartWidget;
