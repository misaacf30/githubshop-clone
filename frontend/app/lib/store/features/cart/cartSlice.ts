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
    size: 0,
    total: 0,
}

const initialState: CartState = {
    items: [],
    size: 0,
    total: 0,
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
            state.size += action.payload.quantity;
            state.total += action.payload.price * action.payload.quantity;
        },
        removeFromCart: (state, action: PayloadAction<{ id: string, size: string}>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id && item.size === action.payload.size);        
            if(existingItem) {  
                const quantity = existingItem.quantity; 
                const price = existingItem.price;        
                state.items = state.items.filter((item) => item != existingItem);
                state.size -= quantity;
                state.total -= price * quantity;
            }      
        },
        incrementQuantity: (state, action: PayloadAction<{ id: string, size: string }>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id && item.size === action.payload.size);
            if (existingItem) {
                existingItem.quantity++;
                state.size++;
                state.total += existingItem.price;
            }

        },
        decrementQuantity: (state, action: PayloadAction<{ id: string, size: string }>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id && item.size === action.payload.size);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
                state.size--;
                state.total -= existingItem.price;
            }
            else if(existingItem && existingItem.quantity === 1) {
                const price = existingItem.price;
                state.items = state.items.filter((item) => item != existingItem);
                state.size--;
                state.total -= price;              
            }
        },
        clearCart(state) {
            state.items = [];
            state.size = 0;
            state.total = 0;
        },
    },
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer