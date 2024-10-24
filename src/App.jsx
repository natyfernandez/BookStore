import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting={'Bienvenidos a mi Book Store'} /> } />
            <Route path='/category/:idCategory' element={ <ItemListContainer greeting={""} /> } />
            <Route path='/product/:idProduct' element={ <ItemDetailContainer /> } />            
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
