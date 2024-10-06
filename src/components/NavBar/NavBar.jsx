import logo from './../../assets/logo.svg'
import CartWidget from './CartWidget'
import './navbar.css'

const NavBar = ({ countCart }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="brand" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 categorias">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Juveniles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Arte</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Ficción</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Autoayuda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Negocios</a>
                        </li>
                    </ul>
                    <form className="d-flex me-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <CartWidget countCart={countCart} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
