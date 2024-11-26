import { configureStore } from "@reduxjs/toolkit";
import thunkSlice from "./thunkSlice";

export const store = configureStore({
  reducer : {
    myExampleTodos: thunkSlice.reducer,
  }
})