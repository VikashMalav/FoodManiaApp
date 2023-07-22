import { Box, Button, CardMedia } from '@mui/material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import React, { useState } from 'react'

const Container = ({ image, title, discription,cart,setCart }) => {
    const handleCart=()=>{
        setCart((prevCart)=>prevCart+1)
        console.log(cart)
    }
    return (
        <Box className="container">
            <div className="left">
                <h2>{title}</h2>
                <div>
                    <h5>{discription}</h5>
                </div>
                <Box>
                    <Button color='secondary' onClick={handleCart} endIcon={<ShoppingCartRoundedIcon />} variant='contained'>add to cart</Button>
                </Box>
            </div>
            <div className="right">
                <CardMedia component='img' image={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq'} />
                {/* <img src={image} /> */}

            </div>
        </Box>
    )


}

export default Container