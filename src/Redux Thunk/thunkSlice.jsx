import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// Thunk function jo Axios se data fetch karega
// export const fetchDatat = createAsyncThunk("todos/fetch", async () => {
//     try {
//       const response = await axios.get("http://localhost:8001/todo");
//       return response.data;  // Response ke data ko return karein
//     } catch (error) {
//       // Agar error ho, toh error ko return karein
//       throw Error(error.message);
//     }
//   });


export const fetchDatat = createAsyncThunk("todos/fetch", async()=>{
const response = await axios.get("http://localhost:8001/todo");
console.log("Respons Data Get",response.data);
return response.data;  // Response ke data ko return karein
})

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
