import React from 'react'
import CatagoryCard from './CatagoryCard'
import { useCategory } from '../../../Contexts/CategoryContext'

function Category() {
    const catagory = useCategory();
    return (
        <div className="bg-white pt-4 pb-8 px-2 md:px-10 max-w-[1300px] mx-auto">
            <h1 className="text-blue-500 text-center font-bold text-3xl my-5">Catagories</h1>
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {
                    catagory ? catagory.map((onecategory) => (
                        <CatagoryCard
                            key={onecategory._id}
                            name={onecategory.name}
                            imageUrl={onecategory.imageURL.url}
                        />
                    )) : (
                        <p></p>
                    )
                }
                {
                    catagory ? catagory.map((onecategory) => (
                        <CatagoryCard
                            key={onecategory._id}
                            name={onecategory.name}
                            imageUrl={onecategory.imageURL.url}
                        />
                    )) : (
                        <p></p>
                    )
                }
                
            </div>
        </div>
    )
}

export default Category
