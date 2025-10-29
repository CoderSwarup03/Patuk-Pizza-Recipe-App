import React from 'react'
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/CartSlice';
const FoodAllItem = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className='flex flex-col justify-center gap-1 bg-white p-3'>
                <img src={item.img} alt="" />
                <div className='flex flex-col md:flex-row justify-between items-center px-3 py-1'>
                    <h2 className='text-md md:text-xl font-bold'>{item.name}</h2>
                    <span className='bg-gray-200 px-3 py-1 font-semibold'>{item.category}</span>
                </div>
                <div className='flex justify-between p-3'>
                    <span className='text-lg md:text-2xl font-bold'>${item.price}</span>
                    <div className='flex justify-center items-center gap-2'>
                        <AiOutlinePlusSquare className='text-2xl font-bold cursor-pointer' />
                        <span className='text-xl font-semibold'>1</span>
                        <AiOutlineMinusSquare className='text-2xl font-bold cursor-pointer' />
                    </div>
                </div>
                <div className='flex justify-between items-center p-3'>
                    <span className='text-2xl font-bold text-gray-500'>Offers:</span>
                    <span
                        onClick={() => dispatch(addToCart({
                            id: item.id,
                            img: item.img,
                            name: item.name,
                            price: item.price,
                            qty: item.qty = 1,
                            category: item.category,
                            title: item.title
                        }))}
                        className='text-xl font-bold text-white bg-[#ffa203] px-6 py-1 cursor-pointer'>Cart</span>
                </div>
                <div className='p-3 rounded-md'>
                    <h3 className='bg-[#ffa203] px-4 py-1 font-semibold text-white'>{item.offers}</h3>
                </div>
            </div>
        </>
    )
}

export default FoodAllItem