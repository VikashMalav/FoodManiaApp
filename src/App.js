import React from 'react'
import { useState } from 'react';
import Navbar from './Components/Navbar'
import Container from './Components/Container';
import foods from './Data';
import "./style.css";
import { Box } from '@mui/material';

const App = () => {
  console.log(foods)
  const [cart,setCart]=useState(0)
  
  return (
  <Box>
    <Navbar cart={cart} setCart={setCart} />
    
    {foods?.map((item)=>{
      return(<>
        
        <Box key={item.title} m={2}>
        <Container cart={cart} setCart={setCart}  discription={item.description} title={item.title} image={item.image_url} />
        </Box>
      </>
      )
    })}
    
   </Box>
  
  )
}

export default App