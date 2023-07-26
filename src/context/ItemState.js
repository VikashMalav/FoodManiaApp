import React, { useState } from 'react'
import ItemContext from './ItemContext'

const ItemState = (props) => {
    const [state,setState]=useState([])
    return (
        <ItemContext.Provider value={{state,setState}}>
            {props.children }
        </ItemContext.Provider>
    )
}

export default ItemState