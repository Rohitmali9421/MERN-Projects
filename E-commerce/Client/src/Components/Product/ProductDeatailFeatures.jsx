import React from 'react'

function ProductDeatailFeatures() {
    return (
        <div className='border rounded-md  w-full my-3 '>
            <div className='flex items-center gap-4 p-6 '>
                <img className='w-12 ' src="https://res.cloudinary.com/dhturqqs5/image/upload/v1720703049/Ecommerce-MERN/UI%20Items/ProductDetailPage/jby55rypcmjmthdjuvol.png" alt="" />
                <div>
                    <h1 className='font-bold'>Free Delivery</h1>
                    <p className='text-sm font-semibold text-gray-700'>Enter your postal code for Delivery Availability</p>
                </div>
            </div>

            <div className='flex items-center gap-4 border-t-2 p-6 '>
                <img className='w-12 ' src="https://res.cloudinary.com/dhturqqs5/image/upload/v1720703074/Ecommerce-MERN/UI%20Items/ProductDetailPage/boryeiarmvsycvibuo2h.png" alt="" />
                <div>
                    <h1 className='font-bold'>Return Delivery</h1>
                    <p className='text-sm font-semibold text-gray-700'>Free 30 Days Delivery Returns. Details</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDeatailFeatures
