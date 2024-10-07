import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../../data/data.js"

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.log('Finalizo la promesa')
      })
  }, [])

  return (
    <div className="itemlistcontainer container-xxl px-3 pt-4 pb-3">
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer