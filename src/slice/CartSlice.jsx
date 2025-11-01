import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existCart = state.cart.find((item) => item.id === action.payload.id)
            if (existCart) {
                state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
            } else {
                state.cart.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },
        incrementQty: (state, action) => {
           state.cart =  state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
        },
        decrementQty: (state,action) => {
            state.cart =  state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item)
        }
    }
})

export const { addToCart, removeFromCart,incrementQty,decrementQty } = CartSlice.actions
export default CartSlice.reducer