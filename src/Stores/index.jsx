import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
const store = configureStore({
    reducer: {ui : uiSlice.reducer}
})

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";

// // Define the slice
// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: { cartIsOpen: false },
//     reducers: {
//         cartToggle(state) {
//             state.cartIsOpen = !state.cartIsOpen;
//         }
//     }
// });

// // Export the action
// export const { cartToggle } = cartSlice.actions;

// // Create and export the reducer
// const cartReducer = cartSlice.reducer;

// // Create the store
// const store = configureStore({
//     reducer: {
//         cart: cartReducer
//     }
// });

// // Export the store
// export default store;
