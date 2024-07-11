import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({id, title, imageUrl, price }) {
  return (
    <Link to={`/product/${id}`}>
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto ">
      <img className="p-8 rounded-t-lg" src={imageUrl} alt="product image" />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{title}</h5>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold text-gray-600 ">&#8377;{price}</span>
          <button className="text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Add to cart</button>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
