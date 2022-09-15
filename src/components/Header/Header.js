import './Header.scss'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="header-logo">
                    <Link className="navlink" to="/">
                        <img className="header-logo" src="/assets/logo/logo-full.png" alt="logo"/>
                    </Link>
                </div>
                <div className="navbar">
                    {/* <Link className="navlink" to="/" >Home</Link> */}
                    <Link className="navlink" to="/" >Tienda</Link>
                    <Link className="navlink" to="/Tienda/juguetes" >Juguetes</Link>
                    <Link className="navlink" to="/Tienda/alimentacion" >Alimentación</Link>
                    <Link className="navlink" to="/Tienda/higiene" >Higiene</Link>
                    <Link className='navlink' to='/Carrito' ><CartWidget/></Link>
                </div>
            </div>
        </div>
    )
}

export default Header