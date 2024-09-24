import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div className='container'>
      <header>
        <NavBar />
      </header>
      <ItemListContainer greeting={'Bienvenidos a mi Book Store'}/>
    </div>
  )
}

export default App
