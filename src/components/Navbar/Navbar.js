import './Navbar.scss'
import { useState } from 'react'
import { Box, Drawer } from '@mui/material'
import SideNavbar from './SideNavbar'
import TopNavbar from './TopNavbar'
import Header from '../Header/Header'

const drawerWidth = 200;
const navItems = ['Home', 'Tienda', 'Nosotros', 'Contacto']

const Navbar = (props) => {
    const { window } = props
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const container = window !== undefined ? () => window().document.body : undefined

    return (
        <Box sx={{ display: 'flex' }}>
            <TopNavbar navItems={navItems} handleDrawerToggle={handleDrawerToggle}/>
            {/* <Header/> */}
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, 
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <SideNavbar navItems={navItems} handleDrawerToggle={handleDrawerToggle} />
                </Drawer>
            </Box>
        </Box>
    );
    }

    export default Navbar;
