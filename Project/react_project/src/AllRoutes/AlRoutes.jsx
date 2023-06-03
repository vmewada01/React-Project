import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EntireHome from '../Components/EntireHome'
import Products from '../Components/Products'

const AlRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<EntireHome/>} />
    <Route path="/products" element={<Products/>} />
   </Routes>
  )
}

export default AlRoutes