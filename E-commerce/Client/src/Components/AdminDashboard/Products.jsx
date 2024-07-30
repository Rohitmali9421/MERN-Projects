import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import { useCategory } from '../../Contexts/CategoryContext';
import { TiWarning } from "react-icons/ti";
import { toast } from 'react-toastify';
function Products() {
  const [loder, setloder] = useState(false)
  const [Product, setProduct] = useState(null);
  const category = useCategory()
  const [popup, setPopup] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);
  
  const fetchProducts = async () => {
    try {
      setloder(true)
      const response = await axios.get('http://localhost:8000/api/products');
      setProduct(response.data);
      setloder(false)
    } catch (error) {
      console.error('Failed to fetch Popular Products info:', error);
      setloder(false)
    }
  };
  const deleteProduct = async () => {
    try {
      setPopup(false)
      setloder(true)
      const response = await axios.delete('http://localhost:8000/api/products/' + deleteProductId);
      fetchProducts()
      toast.success(response?.data?.msg);
      setloder(false)
    } catch (error) {
      console.error('Failed to fetch delete Products info:', error);
      setloder(false)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  if (loder == true) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
      </div>
    )
  }
  return (
    <div className='w-full  p-6'>
      <div className={popup ? `w-screen h-screen fixed left-0 z-50 top-0 flex justify-center items-center` : `hidden`}>
        <div className="bg-blue-100 rounded text-teal-900 border border-red-500 px-4 py-3 shadow-md w-80">
          <div>
            <TiWarning className='text-center text-5xl text-red-500 w-full' />
            <p className="text-lg font-medium text-center">If you delete this category, all products associated with it will also be deleted.</p>
            <p className="font-bold text-red-500 text-center">Are you sure you want to proceed?</p>
          </div>
          <div className='w-full h-full flex justify-between p-3'>
            <button className='mx-4 w-20 h-10 rounded-md bg-blue-300 text-white font-bold' onClick={() => {
              setPopup(false);
              setDeleteProductId(null);
            }}> Cancel</button>
            <button className='mx-4 w-20 h-10 rounded-md bg-red-500 text-white font-bold' onClick={deleteProduct}>Delete</button>
          </div>
        </div>
      </div>
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
                      <Link to={`/admin/products/edit/${item._id}`}>
                        <button className="text-blue-500">
                          <FaRegEdit className="text-xl text-blue-700" />
                        </button>
                      </Link>
                      <button className="text-red-500 ml-2">
                        <RiDeleteBin6Line className="text-xl text-red-500"
                          onClick={() => { setPopup(true); setDeleteProductId(item._id); }} />
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
