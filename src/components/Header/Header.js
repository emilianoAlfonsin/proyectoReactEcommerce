import './Header.scss'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { Nav, Container, Navbar, NavDropdown, Dropdown, NavLink, NavItem } from 'react-bootstrap';
import LoginModal from '../LoginModal/LoginModal';
import SignupModal from '../Signup/SignupModal';


const Header = () => {


    return (
        <>
            <Navbar className='header-container sticky-top' bg="light" expand="lg">
                <Container className='header' >
                    <Navbar.Brand as={Link} to="/" >
                        <img className="header-logo" src="/assets/logo/logo-full.png" alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav >
                            <NavLink as={Link} to="/" >Home</NavLink>
                            <NavDropdown title="Tienda" id="basic-nav-dropdown" className='navlink'>
                                <NavDropdown.Item as={Link} to="/Tienda" >
                                    Todos los productos                    
                                </NavDropdown.Item>
                                <Dropdown.Divider/>
                                <NavDropdown.Item as={Link} to="/Tienda/juguetes" >                            
                                    Juguetes                    
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Tienda/alimentacion" >                            
                                    Alimentación                    
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Tienda/higiene" >                            
                                    Higiene                    
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavLink as={Link} to="/Nosotros" >Nosotros</NavLink>
                            <NavLink as={Link} to="/Contacto" >Contacto</NavLink>
                            <NavLink as={Link} to='/Carrito' ><CartWidget/></NavLink>
                            <NavItem className='nav-link'>                                
                                <LoginModal/>
                            </NavItem>
                            <NavItem className='nav-link'>                                
                                <SignupModal/>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}


export default Header