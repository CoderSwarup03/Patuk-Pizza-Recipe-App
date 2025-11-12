import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom';
const OrderSection = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        setTimeout(() => {
            navigate('/')
        }, 3500);
    }, [])

    return (
        <>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] mx-auto'>
                {
                    loading ? (<PropagateLoader className='text-center text-gray-500 font-semibold' />) : (
                        <div
                            className='flex flex-col items-center'>
                            <h4 className='text-md md:text-2xl font-bold text-gray-800'>Order Successfully Done!</h4>
                            <span className='text-sm md:text-lg font-semibold'>Your order has been successfully placed</span>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default OrderSection