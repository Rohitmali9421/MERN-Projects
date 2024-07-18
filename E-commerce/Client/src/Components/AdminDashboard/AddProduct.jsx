import axios from 'axios';
import React, { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { useCategory } from '../../Contexts/CategoryContext';

function AddProduct() {
    const category = useCategory()
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        content: '',
        productID: '',
        category: '',
        price: "",
        image: null,
    });
    const addProduct = async () => {

        try {
            const response = await axios.post('http://localhost:8000/api/products', {
                product_id: formData.productID,
                title: formData.title,
                price: formData.price,
                decription: formData.description,
                content: formData.content,
                image: formData.image,
                category: "Popular"
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        } catch (error) {
            console.error('Failed to fetch Catagory info:', error);
        }

    };

    const loadFile = (event) => {
        const output = document.getElementById('preview_img');
        output.src = URL.createObjectURL(event.target.files[0]);
        document.getElementById("preview_img").classList.remove("hidden");
        document.getElementById("imageupload").classList.add("hidden");
        setFormData({ ...formData, image: event.target.files[0] });
        output.onload = () => {
            URL.revokeObjectURL(output.src);
        };
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        console.log("Image File:", formData.image);
        addProduct()

    };

    return (
        <div className='w-full p-6'>
            <h1 className='font-semibold text-3xl my-2'>Add Product</h1>
            <form onSubmit={handleSubmit}>
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
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="productDescription">Product Description <sup className='text-red-400'>*</sup></label>
                            <textarea
                                className='outline-none border focus:border-blue-700 min-h-20 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                placeholder="Product Description"
                                name="description"
                                id="productDescription"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="productContent">Product Content <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="text"
                                placeholder="Product Content"
                                name="content"
                                id="productContent"
                                value={formData.content}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="productID">Product ID <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="text"
                                placeholder="Product ID"
                                name="productID"
                                id="productID"
                                value={formData.productID}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='my-1'>
                            <label htmlFor="productCategory" className='text-sm font-semibold px-1 text-gray-800'>Category</label>
                            <select
                                id="productCategory"
                                name="category"
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                value={formData.category}
                                onChange={handleChange}
                                required
                            >
                                {category?.map((item) => (
                                    <option key={item?._id} value={item?.name}>{item?.name}</option>
                                ))}

                            </select>
                        </div>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="productPrice">Price <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="number"
                                placeholder="Price"
                                name="price"
                                id="productPrice"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="mt-4 px-4 w-32 py-2 bg-blue-600 text-white rounded-md">Add</button>
                    </div>

                    <div className="w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
                        <div className="p-6 m-6 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center text-center cursor-pointer">
                            <input id="image" type="file" className="hidden" accept="image/*" onChange={loadFile} />
                            <label htmlFor="image" className="cursor-pointer">
                                <div id='imageupload' className='w-full h-full flex flex-col justify-around items-center'>
                                    <FaCloudUploadAlt className='text-9xl text-blue-600' />
                                    <h1 className='font-normal'>Upload Product Image</h1>
                                </div>
                                <img id="preview_img" className="mx-auto hidden" alt="Image Preview" />
                            </label>
                        </div>
                        <img className='h-auto' src="https://img.freepik.com/free-vector/landing-page-image-upload-concept_23-2148298840.jpg?t=st=1721152175~exp=1721155775~hmac=d146e5751c60e0b82466d3c75e09443fd9069188512c4744f2918b49376266e3&w=740" alt="Upload Illustration" />

                    </div>

                </div>

            </form>
        </div>
    );
}

export default AddProduct;
