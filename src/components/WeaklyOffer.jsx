import React from 'react'
import FoodDataa from '../data/FoodDataa'
import WeaklyDataItem from './WeaklyDataItem'
const WeaklyOffer = () => {
    return (
        <>
            <div className='flex justify-center items-center gap-4 flex-col mt-[150px] md:mt-[100px] mb-[100px] max-w-[80%] mx-auto'>
                <h1 className='text-xl md:text-4xl font-semibold'>Weekly Pizza Offer</h1>
                <div className='mt-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            FoodDataa.map((item) => {
                                return (
                                    <WeaklyDataItem key={item.id} item={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeaklyOffer