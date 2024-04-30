import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
  <Route path="/" element={<Hero />} />
  <Route
      path="/products"
      element={<Products />}
    />
</Routes>
  )
}

export default AllRoutes