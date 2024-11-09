import { useContext, useState } from "react"
import FormCheckout from './FormCheckout';
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import db from './../../db/dbFirebase.js';
import { Link } from "react-router-dom";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    surname: '',
    phone: '', 
    email: '',
    adress: '',
    dni: ''
  })
  const [ orderId, setOrderId ] = useState(null)
  const { cart, totalPrice, deleteCart } = useContext(CartContext)

  const handleChangeInput = (event) => {
    setDataForm( { ...dataForm, [event.target.name]: event.target.value } )
    event.target.value
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const order = {
        buyer: { ...dataForm },
        products: [...cart],
        date: Timestamp.fromDate(new Date()), // Uso correcto de Timestamp
        total: totalPrice()
    };

    uploadOrder(order)
  };

  const uploadOrder = (newOrder) => {
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, newOrder)
      .then((response)=> {
        setOrderId(response.id)
      })
      .finally(()=> {
        updateStock()
      })
  }

  const updateStock = () => {
    cart.map(( { quantity, id, ...productCart} )=> {
      const productRef = doc(db, "products", id)
      setDoc(productRef, { ...productCart, stock: productCart.stock - quantity })
    })

    deleteCart()
  }

  return (
    <div className="container-xxl px-5 py-5">
      {
        orderId ? (
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h2>Orden enviada exitosamente!</h2>
            <p className="mt-1">Guarde su número de seguimiento: {orderId} </p>
            <Link to="/" className="btn btn-primary mt-1" >Volver a inicio</Link>
          </div>
        ) : (
          <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
        )
      }
    </div>
  )
}

export default Checkout