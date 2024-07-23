import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

function PopularProducts() {
    const [popularProduct, setPopularProduct] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/products?category=668fc8e3b1412c42b31766f4');
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
            <h1 className="text-blue-500 text-center font-bold text-3xl my-4">Popular Products</h1>
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
