import React from 'react'
import FoodData from '../data/FoodData'
import FoodAllItem from './FoodAllItem'
const FoodAllList = () => {
    return (
        <>
            <div className='bg-[#fdf8f1]'>
                <div className='flex flex-col justify-center  gap-3 max-w-[80%] mx-auto p-1 mt-5'>
                    <h3 className='text-start md:text-center font-bold text-3xl'>Nearby Stores</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {FoodData.map((item) => {
                            return (
                                <FoodAllItem key={item.id} item={item} />
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default FoodAllList