import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
import { useAuth } from '../../Contexts/UserContext';
function OrderSummary({ total = 0, shipping = 0 }) {
    const {auth} =useAuth()
    async function makePayment(){
        console.log(auth?.user.cart);
        
        const stripe = await loadStripe('pk_test_51PslHS01P2oidCoNPCsWFgAShz1RRAl1EmD6NJ2qqXZoLRc956VPV4kM1KNuIyBCovRhH7ALgxMhLSf1Jt0FyIXJ00qL2TFHSR');

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/checkout` ,{
            cart:auth?.user.cart
        });

        const result=stripe.redirectToCheckout(
            {
                sessionId:response.data.id
            }
        )
        console.log(result);
        
    }
    return (
        <div
            className="p-4 col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black py-8  border-b border-gray-300">
                Order Summary
            </h2>
            <div className="mt-8">
                <div className="flex items-center justify-between pb-6 pr-3">
                    <p className="font-normal text-lg leading-8 text-black">Total</p>
                    <p className="font-medium text-lg leading-8 text-black">${total.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between pb-6 pr-3">
                    <p className="font-normal text-lg leading-8 text-black">Shipping</p>
                    <p className="font-medium text-lg leading-8 text-black">${shipping.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between pb-6 pr-3">
                    <p className="font-normal text-lg leading-8 text-black">Grand Total</p>
                    <p className="font-bold text-lg leading-8 text-black">${(total + shipping).toFixed(2)}</p>
                </div>
                <button
                onClick={makePayment}
                    className="w-full text-center bg-blue-500 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-blue-600">
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default OrderSummary;
