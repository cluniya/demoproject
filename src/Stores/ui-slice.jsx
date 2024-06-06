import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

// Export the actions correctly
export const uiActions = uiSlice.actions;

// Export the reducer correctly
export default uiSlice;
