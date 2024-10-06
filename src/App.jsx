import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCountContainer/ItemCount";
import './App.css';

function App() {
  const [countCart, setCountCart] = useState(0); // Estado del carrito
  const stock = 10; // Stock temporal

  // Función para agregar productos al carrito
  const addToCart = (countUnits) => {
    // Verificar si al agregar, se excede el stock disponible
    if (countCart + countUnits > stock) {
      alert(`No puedes agregar más de ${stock} unidades en total al carrito.`);
    } else {
      setCountCart(countCart + countUnits); // Agregar unidades al carrito
    }
  };

  return (
    <>
      <header>
        <NavBar countCart={countCart} />  
      </header>
      <main>
        <ItemListContainer greeting={'Bienvenidos a mi Book Store'} />
        <ItemCount addToCart={addToCart} stock={stock} /> {/* Pasar el stock como prop */}
      </main>
    </>
  );
}

export default App;
