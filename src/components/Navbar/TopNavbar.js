import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


const TopNavbar = ({navItems, handleDrawerToggle}) => {
    return (
        <>
            <AppBar component="nav" position="fixed" color="secondary" sx={{ opacity: 0.9 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        edge="start"
                        sx={{ display: { sm: 'none' } }}
                        >
                        <MenuIcon/>
                    </IconButton>
                    <Link className="header-logo" to="/">
                        <img className="header-logo" src="/assets/logo/logo-full.png" alt="logo"/>
                    </Link>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} component={Link} sx={{ color: '#fff' }} to={`/${item}`}>
                            {item}
                        </Button>
                        ))}
                        <Button component={Link} to="/Carrito">
                            <CartWidget/>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar sx={{marginBottom: 3}}/>
        </>
    )
}

export default TopNavbar