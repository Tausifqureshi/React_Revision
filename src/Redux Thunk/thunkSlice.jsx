import { createSlice } from "@reduxjs/toolkit";

const thunkSlice = createSlice({
  name: "todos",
  initialState: { data: [], loading: false, error: null },

  reducers: {},  //Synchronous actions ke liye.

  extraReducers: (builder)=>{ // Async thunk ke liye.
    // builder
    console.log(builder)
  }

});

export default thunkSlice;
