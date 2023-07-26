import { Box, Button, CardMedia, Snackbar, Typography, Alert, Chip, Divider, Card, CardHeader } from '@mui/material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import React, { useContext, useState } from 'react'
import itemContext from '../context/ItemContext';

const Container = ({ image, title, discription, cart, setCart, setCartItem, cartItem, price }) => {
    const [open, setOpen] = useState(false)
    const { state, setState } = useContext(itemContext)
    const handleCart = (itemObj) => {

        if (state.find((item) => item.title === itemObj.title)) {
            const sameItem = state.find((item) => item.title === itemObj.title)
            sameItem.quantity++


            console.log(state)
        }
        else {

            setCart((prevCart) => prevCart + 1)
            setOpen(true)

            setState([...state, itemObj])

            console.log(state)
        }
    }
    const handleClose = () => setOpen(false);
    return (
        <Card variant="outlined" className="container">
            <div className="left">
                <CardHeader title={title}>


                </CardHeader>

                <Typography variant='body1'   >


                    price:{price}$

                </Typography>
                <Typography variant='subtitle2'>
                    {discription}
                </Typography>

                <Box>

                    <Button color='secondary' onClick={() => handleCart({ title: title, quantity: 1, image: image, price: price, discription: discription })} endIcon={<ShoppingCartRoundedIcon />} variant='contained'>add to cart</Button>

                    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            food added to cart 😊
                        </Alert>
                    </Snackbar>
                </Box>


            </div>
            <div className="right">
                <CardMedia component='img' image={image} />


            </div>
        </Card>
    )


}

export default Container