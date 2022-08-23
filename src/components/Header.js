import './Header.scss'
import logoWhite from '../assets/logo-white.png'
// import a from '@mui/material/Button';


export const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="header-logo">
                    <img className="header-logo" src={logoWhite} alt="logo"/>
                </div>
                <div className="navbar">
                    <a className="navlink" href="#" >Home</a>
                    <a className="navlink" href="#" >Catalogo</a>
                    <a className="navlink" href="#" >Quienes somos</a>
                    <a className="navlink" href="#" >Contacto</a>
                </div>
            </div>
        </div>
    )
}