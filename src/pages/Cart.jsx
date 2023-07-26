import React, { useState } from 'react'
import { useContext } from 'react'
import itemContext from '../context/ItemContext'
import { Button, ButtonGroup, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import { PlusOne } from '@mui/icons-material'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';

const Cart = () => {
  const { state, setState } = useContext(itemContext)

  // console.log(state)
  const handleQuantityInc = (item) => {
    if(item.quantity>=0 && item.quantity<=5 ){
      const incrementQuantity=state.findIndex((pro)=>pro===item)
      state[incrementQuantity].quantity++
      setState([...state])
      console.log(state)
    }
  }
  const handleQuantityDec = (item) => {
    if(item.quantity>1){
      const removeItem=state.findIndex((pro)=>pro===item)
      state[removeItem].quantity--
      setState([...state])
      console.log(state)
    }
    else if(item.quantity===1){
      const removeItem=state.findIndex((pro)=>pro===item)
      console.log(removeItem)
      const temp=[...state]
      console.log('temp',temp)
      temp.splice(removeItem,1)
      setState([...temp])
      console.log('remove',state)
    }
  }
  return (<>
  {state && state.length > 0 ?
  
    <><List>
      {state?.map((item) =>
        <ListItemText key={item.title}>
          <Card >
          <Grid container spacing={2}>
            
              
          <Grid item xs={8}>

          
            <CardHeader title={item.title}></CardHeader>

            <CardContent>
              <Typography variant='h5'>{ }</Typography >
              <Stack direction='column' spacing={2}>

                <Typography variant='body1'>Price-{item.price}$</Typography >
                {/* <IconButton><PlusOne/></IconButton> */}
                <Stack direction='row' spacing={1} >

                  <Typography variant='body1'>quantity-</Typography >
                  <ButtonGroup size='small'>
                    <Button onClick={() => { handleQuantityDec(item) }}><IndeterminateCheckBoxRoundedIcon /></Button>
                    <Button disableRipple >{item.quantity}</Button>
                    <Button onClick={() => { handleQuantityInc(item) }}><AddBoxRoundedIcon /></Button>
                  </ButtonGroup>
                </Stack>
              </Stack>
            </CardContent>
          </Grid>
          <Grid xs={4} item>
          <CardMedia spacing={4} component='img' width={200} height={200} image={item.image} />
          </Grid>
          </Grid>
          </Card>
        </ListItemText>
      )}
    </List>
    <Stack direction='row' spacing={2}><Typography variant='h6'>Total:</Typography><Typography variant='h6'
    >{ state?.reduce((acc, item) => acc+(item.price*item.quantity),0)}$</Typography></Stack></>:
    <Card><CardMedia component='img'  image='/EmptyCart.jpg' loading='lazy' /></Card>}
  </>
  )
}

export default Cart