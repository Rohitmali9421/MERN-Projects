import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

function PopularProducts() {
    const [popularProduct, setPopularProduct] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products?category=66aa7a255b11e0d4b28e0b30`);
            setPopularProduct(response.data);
        } catch (error) {
            console.error('Failed to fetch Popular Products info:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="bg-white pt-4 pb-10 flex flex-col items-center ">
            <div className="w-full px-4">
                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-[70px]">
                    <h2 className="mb-4 text-3xl text-blue-500 font-bold text-dark  ">
                        Popular Products
                    </h2>
                    <p className="text-base text-body-color">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni possimus culpa animi, consectetur labore at?
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mt-3 mx-8 max-w-[1300px]">
                {popularProduct?.map((product) => (
                    <ProductCard
                        key={product._id}
                        id={product._id}
                        imageUrl={product.image.url}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default PopularProducts;
