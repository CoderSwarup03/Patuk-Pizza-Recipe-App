import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { MdShoppingCartCheckout } from "react-icons/md";
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartList = () => {
    const [cartToggle, setCartToggle] = useState(true);
    const cartItems = useSelector((state) => state.cart.cart);
    const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    return (
        <>
            <div className={`w-full lg:w-[25%] bg-white border-2 border-green-500 rounded-sm top-[8vh] md:top-[11vh] right-0 fixed h-[90vh] p-3 mb-[25px] z-50 ${cartToggle ? 'hidden' : 'block'}`}>
                <div className=' p-3 flex justify-between items-center border-b-2 border-green-600'>
                    <span className='text-[#1e1d23] text-xl font-bold'>Shopping Cart</span>
                    <RxCross1
                        onClick={() => setCartToggle(!cartToggle)}
                        className='text-xl font-bold cursor-pointer' />
                </div>
                {/* attached cart item */}
                <div className='border-2 border-green-500 h-[55vh] md:h-[62vh] mt-3 overflow-y-scroll p-2'>
                    {cartItems.map((item) => {
                        return (
                            <CartItem key={item.id} item={item} />
                        )
                    })}
                </div>

                <div className='absolute border-t-2 border-green-500 bottom-3 w-[90vw] lg:w-[23vw] '>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-2 items-center'>
                            <span className='text-xl font-bold'>Item</span>
                            <span className='text-xl font-bold'>Total</span>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <span className='text-xl font-bold'>{totalItems}</span>
                            <span className='text-xl font-bold'>₹{totalPrice}</span>
                        </div>
                    </div>
                    <div>
                        <button className='w-full bg-green-500 hover:bg-green-600 cursor-pointer text-white py-2 text-lg md:text-xl font-bold'>Place Order</button>
                    </div>
                </div>
            </div>
            <MdShoppingCartCheckout
                onClick={() => setCartToggle(!cartToggle)}
                className={`font-bold text-green-500 fixed bottom-5 right-5 text-[30px] md:text-[45px] bg-white rounded-md cursor-pointer ${totalItems > 0 && 'animate-bounce transition-all duration-500'}`} />
        </>
    )
}

export default CartList