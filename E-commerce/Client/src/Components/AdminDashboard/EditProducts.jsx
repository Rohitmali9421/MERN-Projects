import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCategory } from '../../Contexts/CategoryContext';
import { useForm } from "react-hook-form"
import { useParams } from 'react-router-dom';

function EditProduct() {
    const {category} = useCategory()
    const [image, setImage] = useState(null)
    const { handleSubmit, register, formState: { errors }, reset } = useForm()
    const [loder, setloder] = useState(false)
    const { id } = useParams()
    const fetchProduct = async () => {
        try {
            setloder(true)
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products?_id=${id}`);
            const productData = response.data;
            const defaultCategoryName = category?.find(cat => cat._id == response.data[0]?.category);
            reset({
                title: productData[0].title,
                description: productData[0].description,
                content: productData[0].content,
                price: productData[0].price,
                category:defaultCategoryName.name
            })
            const output = document.getElementById('preview_img');
            output.src =productData?.[0]?.image?.url
            setloder(false) 
        } catch (error) {
            console.error('Failed to fetch product info:', error);
            setloder(false)
        }
    };

    useEffect(() => {
        fetchProduct()
    }, [id])
    const addProduct = async (data) => {
        setloder(true)
        const { title, price, description, content, category } = data
        try {
            // await axios.post('http://localhost:8000/api/products', {
            //     title,
            //     price,
            //     description,
            //     content,
            //     category,
            //     image
            // }, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data',
            //     },
            // })
            // reset()
            // setImage(null)
            console.log("done");
            
            setloder(false)
        } catch (error) {
            console.error('Failed to fetch Catagory info:', error);
            setloder(false)
        }

    };

    const loadFile = (event) => {
        const file = event.target.files[0];
        setImage(file);
        const output = document.getElementById('preview_img');
        output.src = URL.createObjectURL(file);
    };

    if (loder == true) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
            </div>
        )
    }
    return (
        <div className='w-full p-6'>
            <h1 className='font-semibold text-3xl my-2'>Edit Product</h1>
            <form onSubmit={handleSubmit(addProduct)}>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 mt-8'>
                    <div className='w-full shadow-md border bg-white rounded-md px-3 md:px-6 py-6 lg:col-span-2'>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="productName">Product Name <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="text"
                                placeholder="Product Name"
                                name="title"
                                id="productName"
                                {...register("title", {
                                    required: 'Name is required',
                                    minLength: {
                                        value: 3,
                                        message: 'Name must be at least 3 characters long'
                                    }
                                })}
                            />
                            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
                        </div>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="productDescription">Product Description <sup className='text-red-400'>*</sup></label>
                            <textarea
                                className='outline-none border focus:border-blue-700 min-h-20 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                placeholder="Product Description"
                                name="description"
                                id="productDescription"
                                {...register("description", {
                                    required: 'Description is required',
                                    minLength: {
                                        value: 20,
                                        message: 'Description must be at least 20 characters long'
                                    }
                                })}
                            />
                            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                        </div>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="productContent">Product Content <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="text"
                                placeholder="Product Content"
                                name="content"
                                id="productContent"
                                {...register("content", {
                                    required: 'Content is required',
                                    minLength: {
                                        value: 20,
                                        message: 'Content must be at least 20 characters long'
                                    }
                                })}
                            />
                            {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content.message}</p>}
                        </div>

                        <div className="my-1">
                            <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">
                                Category
                            </label>
                            <select
                                id="productCategory"
                                name="category"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                {...register("category",
                                    { required: 'Category is required' })}
                            >
                                {category?.map((item) => (
                                    <option key={item?._id} value={item?.name}>{item?.name}</option>
                                ))}
                            </select>
                            {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
                        </div>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="productPrice">Price <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="number"
                                placeholder="Price"
                                name="price"
                                id="productPrice"
                                {...register("price", {
                                    required: 'Price is required',
                                })}
                            />
                            {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
                        </div>
                        <button type="submit" className="mt-4 px-4 w-32 py-2 bg-blue-600 text-white rounded-md">Save</button>
                    </div>

                    <div className="w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
                        <div className="p-6 m-6 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center text-center cursor-pointer">
                            <input
                                id="image"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChangeCapture={loadFile}
                                
                            />
                            <label htmlFor="image" className="cursor-pointer">
                                <img id="preview_img" className="mx-auto " alt="Image Preview" />
                            </label>
                            
                        </div>
                        <img className='h-auto' src="https://img.freepik.com/free-vector/landing-page-image-upload-concept_23-2148298840.jpg?t=st=1721152175~exp=1721155775~hmac=d146e5751c60e0b82466d3c75e09443fd9069188512c4744f2918b49376266e3&w=740" alt="Upload Illustration" />
                    </div>

                </div>

            </form>
        </div>
    );
}

export default EditProduct;
