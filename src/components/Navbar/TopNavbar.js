import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom"


const TopNavbar = ({navItems, handleDrawerToggle}) => {
    return (
        <AppBar component="nav" position="static" sx={{ marginBottom: 2 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
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
                    </Box>
                </Toolbar>
            </AppBar>
    )
}

export default TopNavbar