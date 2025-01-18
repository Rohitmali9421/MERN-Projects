import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { LiaCreativeCommonsSampling } from "react-icons/lia";
import { GiNotebook } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Contexts/UserContext';

function AdminDashboard() {
    const [admin, setAdmin] = useState(0);
    const [menu, toggleMenu] = useState(false);
    const [loader, setLoader] = useState(true);
    const { auth,logout } = useAuth();

    const handleMenuToggle = () => {
        toggleMenu(!menu);
    };
    const navigate=useNavigate()
    const handleLoout = () => {
        logout()
        navigate("/")
        
    }
    const checkAdmin = async () => {

        if (auth?.token) {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/infor`, {
                });
                setAdmin(response.data.role);
            } catch (error) {
                console.error('Failed to fetch user info:', error);
            }
        }
        setLoader(false);
    };

    useEffect(() => {
        checkAdmin();
    }, [auth]);

    if (loader) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
            </div>
        );
    }

    if (!admin) {
        return (<h1>404 not found</h1>);
    }

    return (
        <>
            <div className={`${menu ? "" : "-translate-x-full"} fixed top-0 left-0 z-40 w-64 h-screen transition-transform md:translate-x-0 bg-white`}>
                <div className='px-4 flex justify-between items-center h-20 border-b'>
                    <Link to="/">
                        <div className='flex items-center'>
                            <LiaCreativeCommonsSampling className='mr-2 text-3xl text-blue-500' />
                            <h1 className='font-bold text-2xl text-blue-500'>PeekMart</h1>
                        </div>
                    </Link>
                    <IoIosArrowDropleftCircle className='md:hidden block text-blue-500 text-xl' onClick={handleMenuToggle} />
                </div>
                <div className='flex flex-col justify-between px-4 h-full'>
                    <ul>
                        <Link to="/admin">
                            <li className='flex items-center my-3 bg-transparent hover:bg-blue-50 rounded-md px-4 py-2'>
                                <MdDashboard className='text-xl text-blue-500 mr-3' />
                                <h1 className='font-bold'>Dashboard</h1>
                            </li>
                        </Link>
                        <Link to="/admin/products">
                            <li className='flex items-center my-3 hover:bg-blue-50 rounded-md px-4 py-2'>
                                <FaBoxOpen className='text-xl text-blue-500 mr-3' />
                                <h1 className='font-bold'>Products</h1>
                            </li>
                        </Link>
                        <Link to="/admin/category">
                            <li className='flex items-center my-3 hover:bg-blue-50 rounded-md px-4 py-2'>
                                <IoMdCart className='text-xl text-blue-500 mr-3' />
                                <h1 className='font-bold'>Category</h1>
                            </li>
                        </Link>
                        <Link to="/admin/orders">
                            <li className='flex items-center my-3 hover:bg-blue-50 rounded-md px-4 py-2'>
                                <GiNotebook className='text-xl text-blue-500 mr-3' />
                                <h1 className='font-bold'>Orders</h1>
                            </li>
                        </Link>

                    </ul>
                    <ul className='mb-32'>
                        <li onClick={handleLoout} className='flex items-center my-3 hover:bg-blue-50 rounded-md px-4 py-2'>
                            <BiLogOut className='text-xl text-red-600 mr-3' />
                            <h1 className='font-bold'>Logout</h1>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full bg-blue-50 md:pl-64">
                <nav className='w-full h-20 bg-white border'>
                    <FaBars className='md:hidden block' onClick={handleMenuToggle} />
                </nav>
                <Outlet />
            </div>
        </>
    );
}

export default AdminDashboard;
