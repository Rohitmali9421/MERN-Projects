import React from 'react'
import ServiceCard from './ServiceCard'

const categories = [
    {
        id: 1,
        image: "https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-01.jpg",
        label: "#House",
        title: "Express Your Beautiful Life Through Furniture",
        size: "large",
    },
    {
        id: 2,
        image: "https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-02.jpg",
        label: "#Accessories",
        title: "Discover Our Accessories Collection",
        size: "small",
    },
    {
        id: 3,
        image: "https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-03.jpg",
        label: "#Office",
        title: "Make Your Workspace More Comfortable",
        size: "small",
    },
];
function OurServices() {
    return (
        <section className="bg-white py-20 ">
            
                <div className="px-8 md:mx-10 grid md:grid-cols-2 gap-4">

                    <div className="row-span-2  relative mb-10 w-full">
                        <img
                            src={categories[0].image}
                            alt="category"
                            className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute left-0 top-0 h-full w-full px-6 py-10 sm:px-10">
                            <div className="max-w-[400px]">
                                <span className="mb-3 block text-base font-medium text-body-color">
                                    {categories[0].label}
                                </span>
                                <a
                                    href="#"
                                    className="text-xl font-semibold text-dark lg:text-2xl xl:text-[28px] xl:leading-10"
                                >
                                    {categories[0].title}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative mb-10 w-full">
                        <img
                            src={categories[1].image}
                            alt="category"
                            className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute left-0 top-0 h-full w-full px-6 py-10 sm:px-10">
                            <div className="max-w-[400px]">
                                <span className="mb-3 block text-base font-medium text-body-color">
                                    {categories[0].label}
                                </span>
                                <a
                                    href="#"
                                    className="text-xl font-semibold text-dark lg:text-2xl xl:text-[28px] xl:leading-10"
                                >
                                    {categories[0].title}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative mb-10 w-full">
                        <img
                            src={categories[2].image}
                            alt="category"
                            className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute left-0 top-0 h-full w-full px-6 py-10 sm:px-10">
                            <div className="max-w-[400px]">
                                <span className="mb-3 block text-base font-medium text-body-color">
                                    {categories[0].label}
                                </span>
                                <a
                                    href="#"
                                    className="text-xl font-semibold text-dark lg:text-2xl xl:text-[28px] xl:leading-10"
                                >
                                    {categories[0].title}
                                </a>
                            </div>
                        </div>
                    </div>



                </div>
            
        </section>
    )
}

export default OurServices
