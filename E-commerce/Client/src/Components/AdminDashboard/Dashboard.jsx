import React from 'react'
import { GiNotebook } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { TbUsersGroup } from "react-icons/tb";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import 'react-calendar/dist/Calendar.css';
function Dashboard() {
    return (
        <div className='w-full p-6'>
            <div className='w-full'>
                <h1 className='font-semibold text-3xl my-2'>Dashboard</h1>
                <p className='font-semibold text-gray-600'>Welcome to your dashboard...</p>
            </div>
            <div className='grid grid-cols-1  gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full my-5'>
                <div className='w-full  bg-white rounded-md max-w-80 mx-auto px-5 py-3'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold'>356</h1>
                            <p className='text-xs font-normal'>Orders Received</p>
                        </div>
                        <div>
                            <GiNotebook className='w-10 h-10 p-2 text-white bg-green-400 rounded-full' />
                        </div>
                    </div>
                    <div className='flex px-2  mt-3 w-14 py-1 rounded-sm text-xs font-normal items-center text-green-400  bg-green-50'>
                        <h1 >10% </h1>
                        <BsGraphUp className='pl-1 ' />
                    </div>
                </div>
                <div className='w-full  bg-white rounded-md max-w-80 mx-auto px-5 py-3'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold'>$5680</h1>
                            <p className='text-xs font-normal'>Average Daily Sales</p>
                        </div>
                        <div>
                            <VscGraph className='w-10 h-10 p-2 text-white bg-violet-400 rounded-full' />
                        </div>
                    </div>
                    <div className='flex px-2  mt-3 w-14 py-1 rounded-sm text-xs font-normal items-center text-violet-400  bg-violet-50'>
                        <h1 >30% </h1>
                        <BsGraphUp className='pl-1 ' />
                    </div>
                </div>
                <div className='w-full  bg-white rounded-md max-w-80 mx-auto px-5 py-3'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold'>5.8K</h1>
                            <p className='text-xs font-normal'>New Customers This Month</p>
                        </div>
                        <div>
                            <TbUsersGroup className='w-10 h-10 p-2 text-white bg-sky-400 rounded-full' />
                        </div>
                    </div>
                    <div className='flex px-2  mt-3 w-14 py-1 rounded-sm text-xs font-normal items-center text-sky-400  bg-sky-50'>
                        <h1 >13% </h1>
                        <BsGraphUp className='pl-1 ' />
                    </div>
                </div>
                <div className='w-full  bg-white rounded-md max-w-80 mx-auto px-5 py-3'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold'>580</h1>
                            <p className='text-xs font-normal'>Pending Orders</p>
                        </div>
                        <div>
                            <BsFillBoxSeamFill className='w-10 h-10 p-2 text-white bg-orange-400 rounded-full' />
                        </div>
                    </div>
                    <div className='flex px-2  mt-3 w-14 py-1 rounded-sm text-xs font-normal items-center text-orange-400  bg-orange-50'>
                        <h1 >13% </h1>
                        <BsGraphUp className='pl-1 ' />
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center flex-col justify-around overflow-clip lg:flex-row'>
                <div >


                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'March '] }]}
                        series={[
                            { data: [400, 300, 500], color: 'rgba(75, 192, 192, 1)' },
                            { data: [100, 600, 300], color: 'rgba(54, 162, 235, 1)' },
                            { data: [200, 500, 600], color: 'rgba(255, 99, 132, 1)' }
                        ]}
                        width={400}
                        height={400}
                    />

                </div>
                <div>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 100, label: 'Men' ,color: 'rgba(75, 192, 192, 1)' },
                                    { id: 1, value: 150, label: 'Womem',color:'rgba(54, 162, 235, 1)' },
                                    { id: 2, value: 200, label: 'Child',color: 'rgba(255, 99, 132, 1)' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard
