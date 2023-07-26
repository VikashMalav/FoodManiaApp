import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginModal from './LoginModal'
import { Box, Button, List, IconButton, Badge, SwipeableDrawer, ListItem, ListItemButton, ListItemIcon, ListItemText, AppBar, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import itemContext from '../context/ItemContext';

const Navbar = ({ cart, setCartItem, cartItem }) => {
    const {state,setState}=useContext(itemContext)
    const [state1, setState1] = useState(false)
    // const [isLogin, setIsLogin] = useState(false)
    const [countItem, setCountitem] = useState(0)
    const toggleDrawer = (anchor) => {
        console.log(anchor)
        setState1((prev) => !prev)
        console.log(state1)
    }
    const handleCartItem = () => {
        console.log('first')
    }
    return (<>
        
            <SwipeableDrawer
                onOpen={toggleDrawer}
                onClose={toggleDrawer}
                open={state1}>
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
                <li><Typography>home</Typography></li>
                <li><Typography>contact</Typography></li>
                <li><Typography>services</Typography></li>
               
                {/* <li onClick={() => setIsLogin(true)}>login</li> */}
                <li><LoginModal/></li>
                <li>
                    <IconButton aria-label="cart">
                        <Badge badgeContent={state.length} color="secondary">
                            <NavLink to='/cart'><ShoppingCartIcon style={{ textDecoration: 'none', color: 'purple' }} onClick={handleCartItem} /></NavLink>
                        </Badge>
                    </IconButton></li>
            </ul>
    
        {/* {isLogin === true && <LoginModal isOpen={isLogin} />} */}
    </>


    )
}

export default Navbar