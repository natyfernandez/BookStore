import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from "./components/ItemCountContainer/ItemCount";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [countCart, setCountCart] = useState(0);
  const stock = 10;

  const addToCart = (countUnits) => {
    if (countCart + countUnits > stock) {
      alert(`No puedes agregar más de ${stock} unidades en total al carrito.`);
    } else {
      setCountCart(countCart + countUnits);
    }
  };

  return (
    <>
      <BrowserRouter>
        <NavBar countCart={countCart} onSearch={handleSearch} />
        <main>
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting={'Bienvenidos a mi Book Store'} /> } />
            <Route path='/category/:idCategory' element={ <ItemListContainer greeting={""} /> } />
            <Route path='/product/:idProduct' element={ <ItemDetailContainer /> } />            
          </Routes>
          <ItemCount addToCart={addToCart} stock={stock} />
        </main>
      </BrowserRouter>
    </>
  );
}

const handleSearch = (searchTerm) => {
    // Maneja la búsqueda si es necesario aquí
};

export default App;
