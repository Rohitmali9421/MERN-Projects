import React, { useEffect, useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoSearch } from 'react-icons/io5';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { TiWarning } from "react-icons/ti";
import { toast } from 'react-toastify';
import { useCategory } from '../../Contexts/CategoryContext';

function Category() {
  const{fetchCategory}=useCategory()
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [categories, setCategories] = useState([]);
  const { handleSubmit, register, formState: { errors }, reset } = useForm();
  const [popup, setPopup] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState(null);

  const loadFile = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/category`);
      setCategories(data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const deleteCategory = async () => {
    try {
      setLoader(true);
      setPopup(false);
      const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/api/category/${deleteCategoryId}`);
      fetchCategories();
      setLoader(false);
      toast.success(data.msg);
      fetchCategory()
    } catch (error) {
      console.error('Failed to delete category:', error);
      setLoader(false);
    }
  };

  const addCategory = async (data) => {
    try {
      setLoader(true);
      const { name } = data;
      const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/category`, { image, name }, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      fetchCategories();
      setImage(null);
      setImagePreview('');
      setLoader(false);
      toast.success(response.data.msg);
      reset();
      fetchCategory()
    } catch (error) {
      console.error('Failed to create category:', error);
      setLoader(false);
      reset();
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loader) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      {popup && (
        <div className='w-screen h-screen fixed left-0 z-50 top-0 flex justify-center items-center'>
          <div className="bg-blue-100 rounded text-teal-900 border border-red-500 px-4 py-3 shadow-md w-80">
            <div>
              <TiWarning className='text-center text-5xl text-red-500 w-full' />
              <p className="text-lg font-medium text-center">If you delete this category, all products associated with it will also be deleted.</p>
              <p className="font-bold text-red-500 text-center">Are you sure you want to proceed?</p>
            </div>
            <div className='w-full h-full flex justify-between p-3'>
              <button
                className='mx-4 w-20 h-10 rounded-md bg-blue-300 text-white font-bold'
                onClick={() => {
                  setPopup(false);
                  setDeleteCategoryId(null);
                }}
              >
                Cancel
              </button>
              <button className='mx-4 w-20 h-10 rounded-md bg-red-500 text-white font-bold' onClick={deleteCategory}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
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
                          <img className='w-16 rounded-sm mr-4' src={item.imageURL.url} alt={item.name} />
                        </div>
                      </td>
                      <td>
                        <div className='flex items-center my-3 w-full justify-center'>
                          {item.name}
                        </div>
                      </td>
                      <td>
                        <div className='flex items-center my-3 justify-center'>
                          <button className='text-red-500 ml-2' onClick={() => { setPopup(true); setDeleteCategoryId(item._id); }}>
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
          <form onSubmit={handleSubmit(addCategory)}>
            <div className='w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center'>
              <div className='p-6 m-6 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center text-center cursor-pointer'>
                <input
                  id='image'
                  type='file'
                  className='hidden'
                  accept='image/*'
                  onChangeCapture={loadFile}
                  {...register("image", { required: 'Image is required' })}
                />
                <label htmlFor='image' className='cursor-pointer'>
                  <div className={`w-full h-full flex flex-col justify-around items-center ${imagePreview ? 'hidden' : ''}`}>
                    <FaCloudUploadAlt className='text-9xl text-blue-600' />
                    <h1 className='font-normal'>Upload Category Image</h1>
                  </div>
                  {imagePreview && <img id='preview_img' src={imagePreview} className='mx-auto' alt='Image Preview' />}
                </label>
                {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
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
                  {...register("name", {
                    required: 'Name is required',
                    minLength: {
                      value: 3,
                      message: 'Name must be at least 3 characters long'
                    }
                  })}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white rounded mt-3 h-10 font-normal w-full'>
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
    </div>
  );
}

export default Category;
