import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/products?_id=' + id);
      setProduct(response.data);
    } catch (error) {
      console.error('Failed to fetch Popular Products info:', error);
    }
  };
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 my-4 '>
      <div className='flex justify-center items-center'>
        <img className='w-52 md:w-80 lg:w-96' src={product[0]?.images.url} alt="" />
      </div>
      <div className='flex flex-col mx-8 md:mx-12 lg:mx-20 my-5 '  >
        <h1 className='font-bold my-2'>Havic HV G-92 Gamepad</h1>
        <h1 className='font-semibold'>$192.00</h1>
        <p className='text-sm '>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>

        <button className="text-white   hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5  my-4  bg-blue-700 focus:outline-none ">Add To cart</button>

        <div className='border rounded-md  w-full my-3 '>
          <div className='flex items-center gap-4 p-6 '>
            <img className='w-12 ' src="https://res.cloudinary.com/dhturqqs5/image/upload/v1720703049/Ecommerce-MERN/UI%20Items/ProductDetailPage/jby55rypcmjmthdjuvol.png" alt="" />
            <div>
              <h1 className='font-bold'>Free Delivery</h1>
              <p className='text-sm font-semibold text-gray-700'>Enter your postal code for Delivery Availability</p>
            </div>
          </div>

          <div className='flex items-center gap-4 border-t-2 p-6 '>
            <img className='w-12 ' src="https://res.cloudinary.com/dhturqqs5/image/upload/v1720703074/Ecommerce-MERN/UI%20Items/ProductDetailPage/boryeiarmvsycvibuo2h.png" alt="" />
            <div>
              <h1 className='font-bold'>Return Delivery</h1>
              <p className='text-sm font-semibold text-gray-700'>Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
