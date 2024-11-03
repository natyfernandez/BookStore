import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from 'firebase/firestore';
import dbFirebase from '../../db/dbFirebase.js'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const { idCategory } = useParams()

  const getProducts = () => {
    const collectionName = collection(dbFirebase, "products")
    getDocs(collectionName)
    .then((dataDb)=>{
      const productsDb = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() }
      })
      
      setProducts(productsDb)
    })
    .finally(
      setLoading(false)
    )
  }
  
  const getProductsByCategory = () => {
    const collectionName = collection(dbFirebase, "products")
    const q = query( collectionName, where( "genre", "==", idCategory ) )
    getDocs(q)
    .then((dataDb)=>{
      const productsDb = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() }
      })
      
      setProducts(productsDb)
    })
    .finally(
      setLoading(false)
    )
  }

  useEffect(() => {
    setLoading(true)
    if (idCategory) {
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [idCategory])

  return (
    <div className="itemlistcontainer container-xxl px-5 py-4">
      <h1>{greeting}</h1>
      <ItemList products={products} loading={loading} />
    </div>
  )
}

export default ItemListContainer