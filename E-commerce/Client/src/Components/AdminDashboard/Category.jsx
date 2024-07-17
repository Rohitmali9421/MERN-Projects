import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
function Category() {
  const [Category, setCategory] = useState(null);


  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/category');
      setCategory(response.data);
    } catch (error) {
      console.error('Failed to fetch  info:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className='w-full  p-6'>
      <h1 className='font-semibold text-3xl my-2'>Category</h1>
      <div className='w-full shadow-md mt-8 border bg-white rounded-md  px-3 md:px-6 py-6'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center p-2  rounded-md focus-within:border-blue-700 shadow-sm border'>
            <IoSearch className='md:text-xl text-sm ' />
            <input className='outline-none text-xs md:px-2 px-1 w-24 sm:w-full' type="text" placeholder='Search By Category Name' />
          </div>
          <Link to="/admin/products/add" >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:py-3  px-2 rounded text-xs w-28">
              + Add Category
            </button>
          </Link>
        </div>
        <div className='w-full py-6 overflow-x-scroll'>
          <table className="w-full">
            <thead className="w-full text-xs text-gray-600 text-start h-14 border-b-2">
              <tr>
                <th className="p-2 min-w-16">CATEGORY IMAGE</th>
                <th className="p-2 min-w-16">CATEGORY NAME</th>
                <th className="p-2 min-w-16">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {Category?.map((item, index) => (
                <tr className="border-b-2" key={index}>
                  <td>
                    <div className="flex items-center my-3 w-full justify-center">
                      <img
                        className="w-16 rounded-sm mr-4"
                        src={item.imageURL.url}
                        alt=""
                      />
      
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center my-3 w-full justify-center">
                      {item.name}
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

export default Category
