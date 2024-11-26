import { createSlice } from "@reduxjs/toolkit";

const thunkSlice = createSlice({
  name: "todos",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
});

export default thunkSlice;
