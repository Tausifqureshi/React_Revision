import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,

  reducers: {
    increment: (state,action) => {
        return { ...state, count: state.count + 1 };
      },

      decrement: (state,action) => {
        if (state.count > 0) {
          return { ...state, count: state.count - 1 };
        }
        return state; // agar count 0 ya usse chhota ho, toh same state return karega
      },

    reset: (state,action) => {
        return { ...state, count: 0 };
      },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
