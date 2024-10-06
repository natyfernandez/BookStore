import { IoCartOutline } from "react-icons/io5";

const CartWidget = ({ countCart }) => {
    return (
        <button type="button" className="btn position-relative p-0">
            <IoCartOutline size={30} color="black" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {countCart}
            </span>
        </button>
    );
};

export default CartWidget;
