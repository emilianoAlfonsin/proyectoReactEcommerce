import './Header.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="header-logo">
                    <img className="header-logo" src="/assets/logo/logo-full.png" alt="logo"/>
                </div>
                <div className="navbar">
                    {/* <Link className="navlink" to="/" >Home</Link> */}
                    <Link className="navlink" to="/" >Tienda</Link>
                    <Link className="navlink" to="/Tienda/juguetes" >Jugetes</Link>
                    <Link className="navlink" to="/Tienda/alimentacion" >Alimentación</Link>
                    <Link className="navlink" to="/Tienda/higiene" >Higiene</Link>
                    <Link className='navlink' to='/Carrito' ><ShoppingCartIcon/></Link>
                </div>
            </div>
        </div>
    )
}

export default Header