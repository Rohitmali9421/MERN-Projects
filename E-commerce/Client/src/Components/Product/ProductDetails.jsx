import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../../Contexts/UserContext';
import ProductDeatailFeatures from './ProductDeatailFeatures';

function ProductDetails() {
  const { addToCart } = useAuth()
  const { id } = useParams()
  const [product, setProduct] = useState()
 
// this is for fetching product from product id from url
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products?_id=` + id);
      setProduct(response.data?.[0]);
    } catch (error) {
      console.error('Failed to fetch Products info:', error);
    }
  };

  const handleaddToCart = async (e) => {
    e.preventDefault()
    addToCart(id)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 my-4 '>
      <div className='flex justify-center items-center'>
        <img className='w-52 md:w-80 lg:w-96' src={product?.image?.url} alt="Product Image" loading='lazy' />
      </div>
      <div className='flex flex-col mx-8 md:mx-12 lg:mx-20 my-5 '  >
        <h1 className='font-bold my-2'>{product?.title}</h1>
        <h1 className='font-semibold'>₹{product?.price}</h1>
        <p className='text-sm '>{product?.description}</p>
        <button onClick={handleaddToCart} className="text-white   hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5  my-4  bg-blue-700 focus:outline-none ">Add To cart</button>
        <ProductDeatailFeatures />
      </div>
    </div>
  )
}

export default ProductDetails
