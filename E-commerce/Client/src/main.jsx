import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login.jsx'
import SignUp from './Components/Signup/SignUp.jsx'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import ProductDetails from './Components/Product/ProductDetails.jsx'
import Product from './Components/Product/Product.jsx'
import Cart from './Components/Cart/Cart.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </>


  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
