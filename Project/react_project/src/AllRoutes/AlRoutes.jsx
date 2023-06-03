import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EntireHome from '../Components/EntireHome'
import Products from '../Components/Products'
import Login from '../Components/Login'

const AlRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<EntireHome/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/login" element={<Login/>} />
   </Routes>
  )
}

export default AlRoutes