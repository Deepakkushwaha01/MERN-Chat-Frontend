import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice"
export const store= configureStore({

reducer:{
    user:themeReducer,
}

})