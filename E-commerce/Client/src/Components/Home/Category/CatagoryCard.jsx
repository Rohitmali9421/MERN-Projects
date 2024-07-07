import React from 'react'

function CatagoryCard({title,imageUrl}) {
    return (
        <div className="border w-36  h-36 shadow-lg rounded-md hover:bg-blue-100">
            <img className="mx-auto w-[50%] my-[10%]" src="./catagory.png" alt="" />
            <h1 className="text-center font-semibold ">Phones</h1>
        </div>
    )
}

export default CatagoryCard
