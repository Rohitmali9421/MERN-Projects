import React from 'react'
import CatagoryCard from './CatagoryCard'

function Category() {
    return (
        <div className="bg-white pt-4 pb-8 px-2 md:px-10 max-w-[1300px] mx-auto">
            <h1 className="text-blue-500 text-center font-bold text-3xl my-5">Catagories</h1>
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                <CatagoryCard />
                <CatagoryCard />
                <CatagoryCard />
                <CatagoryCard />
                <CatagoryCard />
                <CatagoryCard />
                <CatagoryCard />
                <CatagoryCard />
                <CatagoryCard />
                <CatagoryCard />
            </div>
        </div>
    )
}

export default Category
