import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";

function AdminDashboard() {
    const [menu, toggleMenu] = useState(false);

    const handleMenuToggle = () => {
        toggleMenu(!menu);
    };

    return (
        <>
            <div className={`${menu ? "" : "-translate-x-full"} fixed top-0 left-0 z-40 w-64 h-screen transition-transform md:translate-x-0 bg-white`}>
                <div className='flex justify-between m-6 items-center'>
                    <h1 className='font-bold text-2xl text-blue-500'>PeekMart</h1>
                    <IoIosArrowDropleftCircle className='md:hidden block' onClick={handleMenuToggle} />
                </div>

            </div>

            <div className="w-full h-screen bg-blue-100 md:pl-64">
                <nav>
                    <FaBars className='md:hidden block ' onClick={handleMenuToggle} />
                </nav>
            </div>
        </>
    );
}

export default AdminDashboard;
