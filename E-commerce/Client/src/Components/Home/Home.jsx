import Category from "./Category/Category";
import OurServices from "./OurServices/OurServices";
import PopularProducts from "./PopularProducts/PopularProducts";



function Home() {
    return (

        <main>
            <div className="bg-blue-100 w-full grid grid-cols-2 py-14 lg:py-20">
                <div className=" ml-8 sm:ml-10 md:ml-24 flex justify-center font-semibold text-2xl flex-col font-serif">
                    <p className="text-orange-500 text-sm mb-2 md:text-lg">E-commerce</p>
                    <p className="text-gray-700 text-[6vw] font-bold leading-none  mb-4 md:mb-6">It's all <br />about you...</p>
                    {/* <p className="text-gray-500 text-xs leading-tight mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt natus veniam recusandae consectetur. Dolores mollitia  </p> */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-2 rounded text-xs w-20 sm:w-28">
                        Shop now
                    </button>
                </div>
                <div className="flex  items-center justify-center h-full w-full">
                    <img className="w-[70%] " src="https://res.cloudinary.com/dhturqqs5/image/upload/v1720344466/Ecommerce-MERN/UI%20Items/Homepage/sqdmnkqxf1iey5tl0nj6.png" alt="" />
                </div>
            </div >
            
                <Category />
            
            <PopularProducts />
            <OurServices />

        </main>
    )
}

export default Home;
