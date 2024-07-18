import React, { useEffect, useState } from 'react';
import { FaCloudUploadAlt, FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoSearch } from 'react-icons/io5';
import axios from 'axios';

function Category() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', image: null });

  const loadFile = (event) => {
    const output = document.getElementById('preview_img');
    output.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById('preview_img').classList.remove('hidden');
    document.getElementById('imageupload').classList.add('hidden');
    setNewCategory({ ...newCategory, image: event.target.files[0] });
    output.onload = () => {
      URL.revokeObjectURL(output.src);
    };
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/category');
      setCategories(response.data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const addCategory = async () => {
    const formData = new FormData();
    formData.append('name', newCategory.name);
    formData.append('image', newCategory.image);
    try {
      await axios.post('http://localhost:8000/api/category', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      fetchCategories();
      // Clear the inputs
      setNewCategory({ name: '', image: null });
      document.getElementById('preview_img').classList.add('hidden');
      document.getElementById('imageupload').classList.remove('hidden');
      document.getElementById('preview_img').src = '';
      document.getElementById('image').value = '';
    } catch (error) {
      console.error('Failed to create category:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className='w-full p-6'>
      <h1 className='font-semibold text-3xl my-2'>Category</h1>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 mt-8'>
        <div className='w-full shadow-md border bg-white rounded-md px-3 md:px-6 py-6 lg:col-span-2'>
          <div className='w-full flex items-center'>
            <div className='flex items-center p-2 rounded-md focus-within:border-blue-700 shadow-sm border'>
              <IoSearch className='md:text-xl text-sm' />
              <input
                className='outline-none text-xs md:px-2 px-1 w-24 sm:w-full'
                type='text'
                placeholder='Search By Category Name'
              />
            </div>
          </div>
          <div className='w-full py-6 overflow-x-scroll'>
            <table className='w-full'>
              <thead className='w-full text-xs text-gray-600 text-start h-14 border-b-2'>
                <tr>
                  <th className='p-2 min-w-16'>CATEGORY IMAGE</th>
                  <th className='p-2 min-w-16'>CATEGORY NAME</th>
                  <th className='p-2 min-w-16'>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item, index) => (
                  <tr className='border-b-2' key={index}>
                    <td>
                      <div className='flex items-center my-3 w-full justify-center'>
                        <img
                          className='w-16 rounded-sm mr-4'
                          src={item.imageURL.url}
                          alt=''
                        />
                      </div>
                    </td>
                    <td>
                      <div className='flex items-center my-3 w-full justify-center'>
                        {item.name}
                      </div>
                    </td>
                    <td>
                      <div className='flex items-center my-3 justify-center'>
                        <button className='text-red-500 ml-2'>
                          <RiDeleteBin6Line className='text-xl text-red-500' />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <form action="">
          <div className='w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center'>
            <div className='p-6 m-6 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center text-center cursor-pointer'>

              <input id='image' type='file' className='hidden' accept='image/*' required onChange={loadFile} />
              <label htmlFor='image' className='cursor-pointer'>
                <div id='imageupload' className='w-full h-full flex flex-col justify-around items-center'>
                  <FaCloudUploadAlt className='text-9xl text-blue-600' />
                  <h1 className='font-normal'>Upload Category Image</h1>
                </div>
                <img id='preview_img' className='mx-auto hidden' alt='Image Preview' />
              </label>
            </div>
            <div className='my-4 mx-6'>
              <label className='text-sm font-semibold px-1 text-gray-800' htmlFor='categoryName'>
                Category Name <sup className='text-red-400'>*</sup>
              </label>
              <input
                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                type='text'
                placeholder='Category Name'
                name='name'
                id='categoryName'
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                required
              />
              <button
                type="submit"
                className='bg-blue-500 hover:bg-blue-700 text-white rounded mt-3 h-10 font-normal w-full'
                onSubmit={addCategory}
              >
                + Add Category
              </button>
              <img
                className='h-auto'
                src='https://img.freepik.com/free-vector/phone-customization-concept-illustration_114360-4313.jpg?t=st=1721313248~exp=1721316848~hmac=af53184bf541396ff087745cf9eec17683278dfe5abf66ddc4f7220504f7e09f&w=740'
                alt='Upload Illustration'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Category;
