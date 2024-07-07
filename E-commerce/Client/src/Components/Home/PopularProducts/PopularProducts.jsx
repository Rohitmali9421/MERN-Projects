import React from 'react'
import ProductCard from './ProductCard'

function PopularProducts() {
    return (
        <div className="bg-white pt-4 pb-10 flex flex-col items-center ">
            <h1 className="text-blue-500 text-center font-bold text-3xl my-4">Popular Products</h1>
            <h1 className="text-gray-500 text-center font-bold text-4xl mb-5">Choose as you want</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mt-3  mx-8 max-w-[1300px]">

                <ProductCard imageUrl="https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg" title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport" price="599" />
                <ProductCard imageUrl="https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg" title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport" price="599" />
                <ProductCard imageUrl="https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg" title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport" price="599" />
                <ProductCard imageUrl="https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg" title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport" price="599" />
                <ProductCard imageUrl="https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg" title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport" price="599" />
                <ProductCard imageUrl="https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg" title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport" price="599" />



            </div>

        </div>
    )
}

export default PopularProducts
