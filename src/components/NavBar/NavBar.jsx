import logo from './../../assets/logo.svg'
import CartWidget from './CartWidget'
import './navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                <img src={logo} alt="brand" />
            </div>

            <ul className='categorias'>
                <li>Juveniles</li>
                <li>Arte</li>
                <li>Ficción</li>
                <li>Autoayuda</li>
                <li>Negocios</li>
            </ul>

            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar