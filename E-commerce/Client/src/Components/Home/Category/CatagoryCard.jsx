import React from 'react'

function CatagoryCard({title,imageUrl}) {
    return (
        <div className=" inline-block border w-24 md:w-36 mx-1 md:mx-4 h-24 md:h-36 shadow-lg rounded-md hover:bg-blue-100">
            <img className="mx-auto w-[50%] my-[10%]" src="./catagory.png" alt="" />
            <h1 className="text-center font-semibold ">Phones</h1>
        </div>
    )
}

export default CatagoryCard