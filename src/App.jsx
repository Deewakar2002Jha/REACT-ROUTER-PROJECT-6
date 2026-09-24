import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Service from './Pages/Service'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Product from './LectureExample/Product'
import ProductDetails from './LectureExample/ProductDetails'
const App = () => {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/about" element={<About />} />

        {/* Dynamic routing */}
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        {/* 404 Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
