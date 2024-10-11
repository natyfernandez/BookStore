import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()

  useEffect(() => {
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
        console.log('Finalizo la promesa')
      })
  }, [idCategory])

  return (
    <div className="itemlistcontainer container-xxl px-5 py-4">
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer