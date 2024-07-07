import React from 'react'
import ServiceCard from './ServiceCard'

function OurServices() {
    return (
        <div >
            <h1 className="text-blue-500 text-center font-bold text-3xl my-4">Our Services</h1>
            <div className="flex gap-4 justify-center my-10">

                <ServiceCard
                    serviceTitle="Order Online"
                    serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    imageUrl="https://res.cloudinary.com/dhturqqs5/image/upload/v1720344215/Ecommerce-MERN/UI%20Items/Homepage/rmupoehltpkqdoqlpvao.png"
                />
                <ServiceCard
                    serviceTitle="Fast delivery"
                    serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    imageUrl="https://res.cloudinary.com/dhturqqs5/image/upload/v1720344217/Ecommerce-MERN/UI%20Items/Homepage/hwca1xwbw0xrq9v0lmob.png"
                />
                <ServiceCard
                    serviceTitle="Takeaway"
                    serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    imageUrl="https://res.cloudinary.com/dhturqqs5/image/upload/v1720345821/Ecommerce-MERN/UI%20Items/Homepage/nnlz1lsznwkg4hozpvuf.png"
                />
            </div>
        </div>
    )
}

export default OurServices
