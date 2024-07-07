import React from 'react'
import CatagoryCard from './CatagoryCard'

function Category() {
    return (
        <div className="bg-white pt-4 pb-10">
            <h1 className="text-blue-500 text-center font-bold text-3xl my-5">Catagories</h1>
            <div className="flex gap-3 mx-10 justify-center overflow-hidden">
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
