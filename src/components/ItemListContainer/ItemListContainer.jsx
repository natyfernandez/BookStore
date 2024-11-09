import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import dbFirebase from '../../db/dbFirebase.js';
import { useContext } from "react"
import { SearchContext } from "../../context/SearchContext";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();
  const { searchTerm } = useContext(SearchContext);

  const getProducts = () => {
    const collectionName = collection(dbFirebase, "products");
    getDocs(collectionName)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() };
        });
        setProducts(productsDb);
        setFilteredProducts(productsDb); 
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getProductsByCategory = () => {
    const collectionName = collection(dbFirebase, "products");
    const q = query(collectionName, where("genre", "==", idCategory));
    getDocs(q)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() };
        });
        setProducts(productsDb);
        setFilteredProducts(productsDb);  // Filtrar por categoría
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Filtrar productos por el término de búsqueda
  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Si no hay búsqueda, mostrar todos los productos
    }
  }, [searchTerm, products]);

  useEffect(() => {
    setLoading(true);
    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory]);

  return (
    <div className="itemlistcontainer container-xxl px-5 py-4">
      <h1>{greeting}</h1>
      <ItemList products={filteredProducts} loading={loading} />
    </div>
  );
};

export default ItemListContainer;
