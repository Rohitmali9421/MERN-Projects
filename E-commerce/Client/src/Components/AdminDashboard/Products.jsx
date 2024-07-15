import React from 'react'
import { IoSearch } from "react-icons/io5";
function Products() {
  return (
    <div className='w-full  p-6'>
      <h1 className='font-semibold text-3xl my-2'>Products</h1>
      <div className='w-full shadow-md mt-8 border bg-white rounded-md h-screen px-3 md:px-6 py-6'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center p-2  rounded-md focus-within:border-blue-700 shadow-sm border'>
            <IoSearch className='md:text-xl text-sm ' />
            <input className='outline-none text-xs md:px-2 px-1 w-24 sm:w-full' type="text" placeholder='Search By Product Name' />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:py-3  px-2 rounded text-xs w-28">
            + Add Product
          </button>
        </div>
        <div className='w-full py-6'>
        <table className='w-full'>
            <thead className='w-full text-xs text-gray-600 text-start  h-14 border-b-2'>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>ACTION</th>
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Products
