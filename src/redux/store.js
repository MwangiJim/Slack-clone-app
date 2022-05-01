import { configureStore } from "@reduxjs/toolkit";
import { reducerSlice } from "./reducer.js/reducerSlice";

let store = configureStore({
    reducer:{
        slackReducer:reducerSlice.reducer
    }
})

export default store;