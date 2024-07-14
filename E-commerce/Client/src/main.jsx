import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Login from './Components/Login/Login.jsx';
import SignUp from './Components/Signup/SignUp.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import ProductDetails from './Components/Product/ProductDetails.jsx';
import Product from './Components/Product/Product.jsx';
import Cart from './Components/Cart/Cart.jsx';
import AuthProvider from './Contexts/UserContext.jsx';
import About from './Components/About/About.jsx';
import Support from './Components/Support/Support.jsx';
import CategoryProvider from './Contexts/CategoryContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="support" element={<Support />} />
        <Route path="cart" element={<Cart />} />
      </Route>
        <Route path="/admin" element={<AdminDashboard />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </CategoryProvider>
  </StrictMode>
);
