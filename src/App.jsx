import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Envuelve todo con SearchProvider */}
      <SearchProvider>
        <CartProvider>
          <NavBar />
          <main>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi Book Store'} />} />
              <Route path='/category/:idCategory' element={<ItemListContainer greeting={""} />} />
              <Route path='/product/:idProduct' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
          </main>
        </CartProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
