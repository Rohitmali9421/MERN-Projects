import React from 'react'

function Dashboard() {
    return (
        <div className='w-full p-6'>
            <div className='w-full'>
                <h1 className='font-semibold text-3xl my-2'>Dashboard</h1>
                <p className='font-semibold text-gray-600'>Welcome to your dashboard...</p>
            </div>
            <div className='grid grid-cols-1  gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full my-5'>
                <div className='w-full h-20 bg-white rounded-md max-w-80 mx-auto'>
                </div>
                <div className='w-full h-20 bg-white rounded-md max-w-80 mx-auto'>
                </div>
                <div className='w-full h-20 bg-white rounded-md max-w-80 mx-auto'>
                </div>
                <div className='w-full h-20 bg-white rounded-md max-w-80 mx-auto'>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard
