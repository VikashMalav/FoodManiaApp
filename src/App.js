import React from 'react'
import { useState } from 'react';
import Navbar from './Components/Navbar'
import Container from './Components/Container';
import foods from './Data';
import "./style.css";
import { AppBar, Box, Grid, Toolbar } from '@mui/material';
import { Routes } from 'react-router-dom';
import Cart from './pages/Cart';
const App = () => {
  console.log(foods)
  const [cart, setCart] = useState(0)
  const [cartItem, setCartItem] = useState({})
  console.log(cartItem)

  return (<>

    < Box mt={3}  >
    <AppBar>
      <Toolbar>

      <Navbar cart={cart} setCart={setCart} cartItem={cartItem} setCartItem={setCartItem} />
      </Toolbar>
      </AppBar>
      <Grid   md={12} mt={6}>

    {
    foods?.map((item) => {
      return (

        <Grid   md={4} key={item.title} m={2}>

          <Container cart={cart} setCart={setCart} cartItem={cartItem} setCartItem={setCartItem} price={item.price} discription={item.description} title={item.title} image={item.image_url} />
        </Grid>
      
      )
    })
  }
  </Grid>
    
   </Box >
   
   </>
  )
}

export default App