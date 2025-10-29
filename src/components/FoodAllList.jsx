import React from 'react'
import FoodData from '../data/FoodData'
import FoodAllItem from './FoodAllItem'
import { useSelector } from 'react-redux'

const FoodAllList = () => {
    const category = useSelector((state) => state.category.category);
    const search = useSelector((state) => state.search.search);
    console.log(search)
    return (
        <>
            <div className='bg-[#fdf8f1]'>
                <div className='flex flex-col justify-center  gap-3 max-w-[80%] mx-auto p-1 mt-[30px]'>
                    <h3 className='text-start md:text-center font-bold text-3xl'>Nearby Stores</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {FoodData.filter((item) => {
                            if (category === 'All') {
                                return item.name.toLowerCase().includes(search.toLowerCase())
                            } else {
                                return category === item.category && item.name.toLowerCase().includes(search.toLowerCase())
                            }
                        }).map((item) => {
                            return (
                                <FoodAllItem key={item.id} item={item} />
                            )
                        })}

                        {/* {FoodData.map((item) => {
                            return (
                                <FoodAllItem key={item.id} item={item} />
                            )
                        })} */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default FoodAllList