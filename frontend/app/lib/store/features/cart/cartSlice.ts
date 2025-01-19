import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
    id: string,
    name: string,
    price: number,
    image: string,
    size: string,
    quantity: number,
}

interface CartState {
    items: CartItem[],
}

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id && item.size === action.payload.size);
            if (existingItem)
                existingItem.quantity += action.payload.quantity;
            else
                state.items.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<{ id: string, size: string }>) => {
            state.items = state.items.filter((item) => item.id === action.payload.id && item.size !== action.payload.size);
        },
        updateQuantity: (state, action: PayloadAction<{ id: string, quantity: number }>) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item)
                item.quantity = action.payload.quantity;
        },
        clearCart(state) {
            state.items = [];
        },
    },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer