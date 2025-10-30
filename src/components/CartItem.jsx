import React from 'react'
import { MdDelete } from "react-icons/md";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '../slice/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='border-2 border-green-500 p-3 my-2 flex justify-between items-center gap-3'>
        <img src={item.img} className='h-[8vh] md:h-[8vh] w-[8vh] md:w-[5vw] rounded-md' alt="" />
        <div className='flex flex-col'>
          <span className='text-sm md:text-sm font-semibold'>{item.name}</span>
          <span className='text-sm md:text-sm font-semibold'>{item.price}</span>
        </div>
        <div className='flex flex-col items-center'>
          <MdDelete
            onClick={() => dispatch(removeFromCart({
              id: item.id
            }))}
            className='text-red-500  text-md lg:text-xl cursor-pointer' />
          <div className='flex gap-1 justify-between items-center'>
            <AiOutlineMinusSquare
              onClick={() => item.qty > 1 ? dispatch(decrementQty({
                id: item.id
              })) : item.qty = 1}
              className='text-sm md:text-lg font-bold cursor-pointer' />
            <span className='text-lg font-semibold'>{item.qty}</span>
            <AiOutlinePlusSquare
              onClick={() => dispatch(incrementQty({
                id: item.id
              }))}
              className='text-sm md:text-lg font-bold cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem