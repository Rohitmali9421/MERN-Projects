import React from 'react';


function Cart() {
  return (
    <section className=" h-full ">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">Shopping Cart</h2>
              <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">3 Items</h2>
            </div>
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
            <div
              class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
              <div class="w-full md:max-w-[126px]">
                <img src="https://pagedone.io/asset/uploads/1701162850.png" alt="perfume bottle image"
                  class="mx-auto"></img>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                <div class="md:col-span-2">
                  <div class="flex flex-col max-[500px]:items-center gap-3">
                    <h6 class="font-semibold text-base leading-7 text-black">Rose Petals Divine</h6>
                    <h6 class="font-normal text-base leading-7 text-gray-500">Perfumes</h6>
                    <h6 class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$120.00</h6>
                  </div>
                </div>
                <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                  <div class="flex items-center h-full">
                    <button
                      class="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                        xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                        viewBox="0 0 22 22" fill="none">
                        <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                          stroke-linecap="round" />
                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                          stroke-linecap="round" />
                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                          stroke-linecap="round" />
                      </svg>
                    </button>
                    <input type="text"
                      class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                      placeholder="1"></input>
                    <button
                      class="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                        xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                        viewBox="0 0 22 22" fill="none">
                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                          stroke-linecap="round" />
                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                          stroke-width="1.6" stroke-linecap="round" />
                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                          stroke-width="1.6" stroke-linecap="round" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                  <p class="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$120.00</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
            <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
              Order Summary</h2>
            <div class="mt-8">
              <div class="flex items-center justify-between pb-6">
                <p class="font-normal text-lg leading-8 text-black">Total</p>
                <p class="font-medium text-lg leading-8 text-black">$480.00</p>
              </div>
              <div class="flex items-center justify-between pb-6">
                <p class="font-normal text-lg leading-8 text-black">Shiping</p>
                <p class="font-medium text-lg leading-8 text-black">$40.00</p>
              </div>

              <button
                class="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">Checkout</button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;


