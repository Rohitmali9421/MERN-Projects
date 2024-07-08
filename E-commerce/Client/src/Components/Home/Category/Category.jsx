import React from 'react';
import CatagoryCard from './CatagoryCard';
import { useCategory } from '../../../Contexts/CategoryContext';

function Category() {
    const { category, loading, error } = useCategory();

    return (
        <div className="bg-white pt-4 pb-8 px-2 md:px-10 max-w-[1300px] mx-auto">
            <h1 className="text-blue-500 text-center font-bold text-3xl my-5">Categories</h1>
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && category && category.map((oneCategory) => (
                    <CatagoryCard
                        key={oneCategory._id}
                        name={oneCategory.name}
                        imageUrl={oneCategory.imageURL.url}
                    />
                ))}
                {!loading && !error && (!category || category.length === 0) && <p>Not Found</p>}
            </div>
        </div>
    );
}

export default Category;
