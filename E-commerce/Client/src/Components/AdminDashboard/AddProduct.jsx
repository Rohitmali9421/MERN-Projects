import React from 'react'

function AddProduct() {
  
    return (
        <div className='w-full  p-6'>
            <h1 className='font-semibold text-3xl my-2'>Products</h1>
            <form action="" >
                <div className='grid grid-cols-1 lg:grid-cols-3 '>
                    <div className='w-full shadow-md mt-8 border bg-white rounded-md  px-3 md:px-6 py-6 lg:col-span-2'>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="productName">Product Name <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md  text-sm  md:px-5 text-gray-600 font-normal  w-full'
                                type="text"
                                placeholder="Product Name"
                                name="title"
                                id="productName"
                                required
                            />
                        </div>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="productDecription">Product Description <sup className='text-red-400'>*</sup></label>
                            <textarea
                                className='outline-none border focus:border-blue-700 min-h-20 px-3 py-2 my-2 rounded-md  text-sm  md:px-5 text-gray-600 font-normal  w-full'
                                placeholder="Product Description"
                                name="title"
                                id="productDecription"
                                required
                            />
                        </div>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="productContent">Product Content <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md  text-sm  md:px-5 text-gray-600 font-normal  w-full '
                                type="text"
                                placeholder="Product Content"
                                name="title"
                                id="productContent"
                                required
                            />
                        </div>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="productID">Product ID <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md  text-sm  md:px-5 text-gray-600 font-normal  w-full '
                                type="text"
                                placeholder="Product ID"
                                name="title"
                                id="productID"
                                required
                            />
                        </div>
                        <div className='my-1'>
                            <label for="productCategory" className='text-sm font-semibold px-1 text-gray-800'>Category</label>
                            <select id="productCategory" className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md  text-sm  md:px-5 text-gray-600 font-normal  w-full '>
                                <option selected="">Select category</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="productPrice">Price <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md  text-sm  md:px-5 text-gray-600 font-normal  w-full '
                                type="number"
                                placeholder="Price"
                                name="title"
                                id="productPrice"
                                required
                            />
                        </div>
                    </div >

                    {/* <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div> */}
                    
                    
                </div>
            </form>
        </div >
    )
}

export default AddProduct
