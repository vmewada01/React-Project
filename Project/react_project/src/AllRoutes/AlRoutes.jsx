import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EntireHome from '../Components/EntireHome'
import Products from '../Components/Products'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Cart from '../Components/Cart'
import Checkout from '../Components/Checkout'

const AlRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<EntireHome/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout />}/>
   </Routes>
  )
}

export default AlRoutes