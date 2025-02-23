import React from 'react';
import CatagoryCard from './CatagoryCard';
import { useCategory } from '../../../Contexts/CategoryContext';
import Slider from "react-slick";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <IoIosArrowDropleftCircle
            className={className}
            style={{ ...style, display: "none", color: "#3b82f6", fontSize: "2rem" }} // Customize the style
            onClick={onClick}
        />
    );
}

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <IoIosArrowDroprightCircle
            className={className}
            style={{ ...style, display: "none", color: "#3b82f6", fontSize: "2rem" }} // Customize the style
            onClick={onClick}
        />
    );
}

function Category() {
    const { category } = useCategory();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    };

    return (
        <div className='w-full max-w-[1300px] mx-auto '>
            <div className="bg-white pt-4 pb-8 px-2 md:px-10 max-w-[1300px] mx-8 ">
                <h1 className="text-blue-500 text-center font-bold text-3xl my-5">Categories</h1>
                <div className='mx-auto w-full h-full slider-container'>
                    <Slider {...settings}>
                        {
                            Array.isArray(category) && category.length > 0 ? (
                                category.map((onecategory) => (
                                    <CatagoryCard
                                        key={onecategory._id}
                                        name={onecategory.name}
                                        imageUrl={onecategory.imageURL.url}
                                    />
                                ))
                            ) : (
                                <p>Not Found</p>
                            )
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Category;
