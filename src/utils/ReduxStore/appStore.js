import { configureStore } from "@reduxjs/toolkit";
import cartReduer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReduer,
    },
});

export default appStore;

