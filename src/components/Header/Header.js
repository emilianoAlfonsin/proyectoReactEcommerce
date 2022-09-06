import './Header.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="header-logo">
                    <img className="header-logo" src="./assets/logo/logo-full.png" alt="logo"/>
                </div>
                <div className="navbar">
                    <Link className="navlink" to="/" >Home</Link>
                    <Link className="navlink" to="/Tienda" >Tienda</Link>
                    <Link className="navlink" to="/About" >Quienes somos</Link>
                    <Link className="navlink" to="/Contacto" >Contacto</Link>
                    <Link className='navlink' to='/Carrito' ><ShoppingCartIcon/></Link>
                </div>
            </div>
        </div>
    )
}

export default Header