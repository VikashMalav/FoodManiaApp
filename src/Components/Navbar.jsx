import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginModal from './LoginModal'

import { Box, Button, List,IconButton,Badge, SwipeableDrawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
const Navbar = ({cart,setCart}) => {
    const [state, setState] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [countItem,setCountitem]=useState(0)
    const toggleDrawer = (anchor) => {
        console.log(anchor)
        setState((prev) => !prev)
        console.log(state)
    }
    return (<>
        <nav>
            <SwipeableDrawer
                onOpen={toggleDrawer}
                onClose={toggleDrawer}
                open={state}>
                <Box
                    sx={{ width: 250 }}
                // role="presentation"
                // onClick={toggleDrawer('left')}
                // onKeyDown={toggleDrawer('left')}
                >
                    <List>
                        {['food order', 'dinout', 'grocery', 'instamart'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <RestaurantIcon /> : <LunchDiningIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </SwipeableDrawer>
            <Button variant='text' color='secondary' size='large' onClick={() => toggleDrawer('left')} startIcon={<MenuIcon fontSize='large' />} >

            </Button>
            {/* <h2>Vicky</h2> */}
            <ul className="nav_list">
                <li>home</li>
                <li>contact</li>
                <li>services</li>
                <li onClick={() => setIsLogin(true)}>login</li>
                <li>
                    <IconButton aria-label="cart">
                    <Badge badgeContent={cart} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton></li>
            </ul>
        </nav>
        {isLogin === true && <LoginModal isOpen={isLogin} />}
    </>


    )
}

export default Navbar