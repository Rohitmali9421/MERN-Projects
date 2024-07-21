import React, { useEffect } from 'react';
import CartCard from './CartCard';
import { useAuth } from '../../Contexts/UserContext';
import {  useNavigate } from 'react-router-dom';


function Cart() {
  const { auth } = useAuth();
  const navigate=useNavigate()
  useEffect(() => {
    if (!auth.token) {
      navigate('/login');
    }
  }, [auth.token, navigate]);
  return (
    <section className=" h-full ">

      <div className="grid grid-cols-12 md:px-8">
        <div className="col-span-12 xl:col-span-8 px-3  w-full max-xl:max-w-3xl max-xl:mx-auto">
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
            
            <CartCard key={item.productID} quantity={item.quantity} productID={item.productID} />
          ))}


        </div>
        <div
          className="p-4 col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 ">
          <h2 className="font-manrope font-bold text-3xl leading-10 text-black py-8  border-b border-gray-300">
            Order Summary</h2>
          <div className="mt-8">
            <div className="flex items-center justify-between pb-6 pr-3">
              <p className="font-normal text-lg leading-8 text-black">Total</p>
              <p className="font-medium text-lg leading-8 text-black">$480.00</p>
            </div>
            <div className="flex items-center justify-between pb-6 pr-3">
              <p className="font-normal text-lg leading-8 text-black">Shiping</p>
              <p className="font-medium text-lg leading-8 text-black">$40.00</p>
            </div>

            <button
              className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">Checkout
            </button>

          </div>
        </div>
      </div>

    </section>
  );
}

export default Cart;


