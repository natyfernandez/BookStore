import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const { idCategory } = useParams()

  useEffect(() => {
    setLoading(true)

    getProducts()
      .then((data) => {
        if(idCategory){
          const filterProducts = data.filter( (product)=> product.genre === idCategory ) 
          setProducts(filterProducts)
        }else{
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [idCategory])

  return (
    <div className="itemlistcontainer container-xxl px-5 py-4">
      <h1>{greeting}</h1>
      <ItemList products={products} loading={loading} />
    </div>
  )
}

export default ItemListContainer