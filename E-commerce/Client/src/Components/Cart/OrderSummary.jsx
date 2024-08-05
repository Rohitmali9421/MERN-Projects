import React from 'react';

function OrderSummary({ total = 0, shipping = 0 }) {
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
                    className="w-full text-center bg-blue-500 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-blue-600">
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default OrderSummary;
