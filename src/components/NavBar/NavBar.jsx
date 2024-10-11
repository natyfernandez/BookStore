import logo from './../../assets/logo.svg'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = ({ countCart }) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 py-4">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="brand" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 categorias">
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/Romance">Romance</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to=
                                "/category/Comedia">Comedia</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to=
                                "/category/Ciencia Ficción">Ciencia Ficción</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to=
                                "/category/Misterio">Misterio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to=
                                "/category/Drama">Drama</Link>
                            </li>
                        </ul>
                        <form className="d-flex me-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        <CartWidget countCart={countCart} />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
