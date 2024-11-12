import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // `counterReducer` ko import karein

const store = configureStore({
  reducer: {
    counter: counterReducer, // yahan sirf `counterSlice.reducer` ka reference dena hai
  },
});

export default store;
