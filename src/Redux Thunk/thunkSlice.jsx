import { createSlice } from "@reduxjs/toolkit";

const thunkSlice = createSlice({
    name : "exmple",
    initialState:  {data: [],
    loading: false,
    error: null,
},


reducers: {},
})


export default thunkSlice;