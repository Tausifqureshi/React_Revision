import { createSlice } from "@reduxjs/toolkit";

const thunkSlice = createSlice({
  name: "todos",
  initialState: { data: [], loading: false, error: null },

  reducers: {}, //Synchronous actions ke liye.

  extraReducers: (builder) => {// Async thunk ke liye.
    // `builder` Redux Toolkit ka helper hai jo asynchronous actions ko handle karta hai.
    // Yeh `pending`, `fulfilled`, aur `rejected` states ko manage karta hai.

    console.log("builder ke ander builder method mile ge", builder);
    // Output mein builder ke methods milenge, jaise addCase, addMatcher, addDefaultCase.




  },
});

export default thunkSlice.reducer;
