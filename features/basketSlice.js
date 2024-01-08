import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket(state, action) {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket(state, action) {
            state.items += 1;
        }
    }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Select what's in the basket
export const selectBasketItems = (state) => state.basket.items;

export default basketSlice.reducer;