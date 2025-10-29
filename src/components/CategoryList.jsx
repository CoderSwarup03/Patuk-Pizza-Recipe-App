import React, { useEffect, useState } from 'react'
import { addCategory } from '../slice/CategorySlice'
import { useDispatch, useSelector } from 'react-redux'
import FoodData from '../data/FoodData'
import FoodAllList from './FoodAllList'
import CartList from './CartList'

const CategoryList = () => {
    const [category, setCategory] = useState([]);
    const dispatch = useDispatch();

    const handleCategory = () => {
        const filterCategory = [...new Set(FoodData.map((item) => item.category))]
        setCategory(filterCategory)
        console.log(filterCategory)
    }
    useEffect(() => {
        handleCategory()
    }, [])

    const addCategorys = useSelector((state) => state.category.category);

    return (
        <>
            <div className='max-w-[80%] mx-auto mt-[20vh] md:mt-[15vh] p-3'>
                <div className='flex flex-col gap-2 items-center md:items-start'>
                    <h1 className='text-2xl font-bold'>Find The Best Food!</h1>
                    <div className='flex flex-wrap gap-2'>
                        <button
                            onClick={() => dispatch(addCategory('All'))}
                            className={`cursor-pointer bg-green-500 hover:bg-green-600 hover:text-white font-semibold px-3 py-1 rounded-md ${addCategorys === 'All' && 'bg-green-600 text-white'}`}>All</button>
                        {
                            category.map((item) => {
                                return (
                                    <button
                                        onClick={() => dispatch(addCategory(item.category))}
                                        key={item.id}
                                        className={`cursor-pointer bg-green-500 hover:bg-green-600 hover:text-white font-semibold px-3 py-1 rounded-md ${addCategorys === item.category &&'bg-green-600 text-white'}`}>
                                        {item}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* here attached food list */}
            <FoodAllList />
            <CartList />
        </>
    )
}

export default CategoryList