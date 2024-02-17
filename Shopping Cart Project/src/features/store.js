import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Products/productSlice";
import cartReducer from "./Carts/cartSlice";

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
  },
});
