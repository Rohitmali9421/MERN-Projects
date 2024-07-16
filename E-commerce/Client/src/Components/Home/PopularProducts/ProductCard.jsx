import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Contexts/UserContext';

function ProductCard({ id, title, imageUrl, price }) {
  const { addToCart } = useAuth();

  const handleAddToCart = async (e) => {
    e.preventDefault();
    addToCart(id);
  };

  return (
    <Link to={`/product/${id}`}>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto flex flex-col h-full">
        <div className="h-64 w-full flex items-center justify-center bg-gray-100">
          <img className="max-h-full max-w-full" src={imageUrl} alt="product image" />
        </div>
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div className="flex-1">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 line-clamp-2">{title}</h5>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-semibold text-gray-600">&#8377;{price}</span>
            <button
              onClick={(e) => {
                handleAddToCart(e);
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
