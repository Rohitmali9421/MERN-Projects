import React from 'react'

function CatagoryCard({name,imageUrl}) {
    return (
        <div className='w-full flex justify-center'>
        <div  className=" inline-block border w-24 md:w-36 mx-1 md:mx-4 h-24 md:h-36 shadow-lg rounded-md hover:bg-blue-100">
            <img className="mx-auto w-[50%] my-[10%]" src={imageUrl} alt="" />
            <h1 className="text-center font-semibold ">{name}</h1>
        </div>
        </div>
    )
}

export default CatagoryCard
