import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartCard from './CartCard';
import { useAuth } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import OrderSummary from './OrderSummary';

function Cart() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!auth.token) {
      navigate('/login');
    }
  }, [auth.token, navigate]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productRequests = auth.user.cart.map(item =>
          axios.get(`${import.meta.env.VITE_API_URL}/api/products?_id=${item.productID}`)
        );
        const responses = await Promise.all(productRequests);
        const fetchedProducts = responses.map(response => response.data[0]);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to fetch product info:', error);
      }
    };

    if (auth?.user?.cart) {
      fetchProducts();
    }
  }, [auth]);

  const getTotal = () => {
    return auth?.user?.cart?.reduce((total, item, index) => {
      const product = products[index];
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  return (
    <section className="h-full">
      <div className="grid grid-cols-12 md:px-8">
        <div className="col-span-12 xl:col-span-8 px-3 w-full max-xl:max-w-3xl max-xl:mx-auto">
          <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
            <div className="col-span-12 md:col-span-7">
              <p className="font-normal text-lg leading-8 text-gray-400">Product Details</p>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="grid grid-cols-5">
                <div className="col-span-3">
                  <p className="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
                </div>
                <div className="col-span-2">
                  <p className="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                </div>
              </div>
            </div>
          </div>
          {auth?.user?.cart?.map((item) => (
            <CartCard
              key={item.productID}
              quantity={item.quantity}
              productID={item.productID}
            />
          ))}
        </div>
        <OrderSummary total={getTotal()} shipping={40} />
      </div>
    </section>
  );
}

export default Cart;
