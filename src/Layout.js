import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Cart from './pages/Cart'
import App from './App'
import ItemState from './context/ItemState'
const Layout = () => {
  return (
    <><ItemState>

      <Routes>
        <Route path='/' element={<App />}>
        </Route>
          <Route path='/cart' element={<Cart />} />


      </Routes>
    </ItemState>
    </>
  )
}

export default Layout