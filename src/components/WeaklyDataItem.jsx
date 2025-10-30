import React from 'react'
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/CartSlice';
const WeaklyDataItem = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-5 px-2 py-4 border-2 border-green-500 rounded-lg '>
                <img src={item.img} alt="" />
                <h3 className='text-lg  md:text-2xl font-bold hover:text-[#ffa203]'>{item.name}</h3>
                <span className='text-2xl font-bold text-[#ffa306]'>₹{item.price}</span>
                <button
                    onClick={() => dispatch(addToCart({
                        id: item.id,
                        img: item.img,
                        name: item.name,
                        price: item.price,
                        qty: item.qty = 1,
                        category: item.category,
                        title: item.title
                    }))}
                    className='flex gap-2 justify-center items-center bg-[#ffa203] px-2 md:px-4 py-1 text-lg md:text-xl font-bold text-white cursor-pointer'>
                    <MdOutlineShoppingCartCheckout />
                    Add To Cart</button>
            </div>
        </>
    )
}

export default WeaklyDataItem