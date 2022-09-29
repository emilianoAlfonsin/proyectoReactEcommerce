import { Box,
    Divider, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText 
    } from "@mui/material"
import { Link } from "react-router-dom"


const SideNavbar = ({navItems, handleDrawerToggle}) => {
    return (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Link className="header-logo" to="/">
                <img className="header-logo" src="/assets/logo/logo-full.png" alt="logo"/>
            </Link>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton  component={Link} to={`/${item}`} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default SideNavbar