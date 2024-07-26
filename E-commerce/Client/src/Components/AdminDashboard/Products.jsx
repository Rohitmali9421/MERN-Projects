import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import { useCategory } from '../../Contexts/CategoryContext';
function Products() {
  const [Product, setProduct] = useState(null);
  const category = useCategory()

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/products');
      setProduct(response.data);
    } catch (error) {
      console.error('Failed to fetch Popular Products info:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className='w-full  p-6'>
      <h1 className='font-semibold text-3xl my-2'>Products</h1>
      <div className='w-full shadow-md mt-8 border bg-white rounded-md  px-3 md:px-6 py-6'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center p-2  rounded-md focus-within:border-blue-700 shadow-sm border'>
            <IoSearch className='md:text-xl text-sm ' />
            <input className='outline-none text-xs md:px-2 px-1 w-24 sm:w-full' type="text" placeholder='Search By Product Name' />
          </div>
          <Link to="/admin/products/add" >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:py-3  px-2 rounded text-xs w-28">
              + Add Product
            </button>
          </Link>
        </div>
        <div className='w-full py-6 overflow-x-scroll'>
          <table className="w-full">
            <thead className="w-full text-xs text-gray-600 text-start h-14 border-b-2">
              <tr>
                <th className="p-2 min-w-80">PRODUCT</th>
                <th className="p-2 min-w-16">PRICE</th>
                <th className="p-2  min-w-16">CATEGORY</th>
                <th className="p-2 min-w-16">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {Product?.map((item, index) => (
                <tr className="border-b-2" key={index}>
                  <td>
                    <div className="flex items-center my-3">
                      <img
                        className="w-16 rounded-sm mr-4"
                        src={item.image.url}
                        alt={item.title}
                      />
                      <h1 className="font-medium">{item.title}</h1>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center my-3 w-full justify-center">
                      ${item.price}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center my-3 justify-center">
                      {category?.map((cat => {
                        if (cat._id == item.category) return cat.name
                      }))}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center my-3 justify-center">
                      <button className="text-blue-500">
                        <FaRegEdit className="text-xl text-blue-700" />
                      </button>
                      <button className="text-red-500 ml-2">
                        <RiDeleteBin6Line className="text-xl text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default Products
