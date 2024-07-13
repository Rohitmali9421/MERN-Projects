import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../Home/PopularProducts/ProductCard';

function Product() {
    const [popularProduct, setPopularProduct] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/products');
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mt-3 mx-8 max-w-[1300px]">
                {popularProduct?.map((product) => (
                    <ProductCard 
                        key={product._id} 
                        id={product._id} 
                        imageUrl={product.images.url} 
                        title={product.title} 
                        price={product.price} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Product;
