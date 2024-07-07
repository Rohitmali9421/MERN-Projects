import React from 'react'

function ServiceCard({imageUrl, serviceTitle,serviceDescription}) {
    return (
        <div className="flex flex-col items-center w-1/4 ">
            <img className="w-1/2 mb-3 md:mb-6" src={imageUrl} alt="" />
            <h1 className="text-[2vw] font-bold">{serviceTitle}</h1>
            <p className="text-center px-3 text-[1.5vw] md:text-sm lg:text-base font-semibold">{serviceDescription}</p>
        </div>
    )
}

export default ServiceCard
