import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export const fetchDatat = createAsyncThunk("todos/fetch", async () => {
  const response = await axios.get("http://localhost:8001/todo");
  // console.log("Respons Data Get",response.data);
  return response.data; // Response ke data ko return karein
});

export const addTodos = createAsyncThunk("todos/add", async (title) => {
  const response = await axios.post("http://localhost:8001/todo", {
    // post request hai ye.
    title: title,
     completed : false,
  });
  console.log("Posting Datat", response.data);
  return response.data; // Response ke data ko return karein
});

export const deleteTodos = createAsyncThunk("todos/delete", async (id) => {
  const response = await axios.delete(`http://localhost:8001/todo/${id}`);
  console.log("Delete Datat", response);
  return id; // Sirf ID return karein
});


export const toggleTodos = createAsyncThunk("todos/toggle", async ({ id, completed }) => {
    const response = await axios.patch(`http://localhost:8001/todo/${id}`, {
      completed: !completed, // Toggling the completed status
    });
    return response.data; // Return the updated todo
  });

  
const thunkSlice = createSlice({
  name: "todos",
  initialState: { data: [], loading: false, error: null },

  reducers: {}, //Synchronous actions ke liye.
  
  extraReducers: (builder) => {
    // Async thunk ke liye.
    // `builder` Redux Toolkit ka helper hai jo asynchronous actions ko handle karta hai.
    // Yeh `pending`, `fulfilled`, aur `rejected` states ko manage karta hai.

    console.log("builder ke ander builder method mile ge", builder);
    // Output mein builder ke methods milenge, jaise addCase, addMatcher, addDefaultCase.
    
    // `pending` case, jab data load ho raha ho
    builder
      .addCase(fetchDatat.pending, (state) => {
        state.loading = true; // Jab tak data load ho raha hai
        // console.log("padding state...");
      })

      // `fulfilled` case, jab data successfully fetch ho gaya ho
      .addCase(fetchDatat.fulfilled, (state, action) => {
        // jo uperr axios me datat return kar re hai o is fulfiled wale me mile ga action.payload me
        // console.log("actions mil ra hai yaha se fulfiled ka",action.payload);
        state.loading = false; // Loading ko false set karna.
        state.data = action.payload; // Data ko state mein store karna.
      })
      // `rejected` case, jab data fetch mein error aaye
      .addCase(fetchDatat.rejected, (state, action) => {
        // console.log("actions mil ra hai yaha se reject ka",action.error);
        state.loading = false; // Loading ko false set karna
        state.error = action.error.message; // Error ko state mein store karna
      });  
  
    // Add Todos (POST request)
    // `pending` case, jab data load ho raha ho
    builder
      .addCase(addTodos.pending, (state) => {
        state.loading = true; // Jab tak data load ho raha hai
        console.log("padding state addTodos...");
      })
      // `fulfilled` case, jab data successfully fetch ho gaya ho
      .addCase(addTodos.fulfilled, (state, action) => {
        // jo uperr axios me datat return kar re hai o is fulfiled wale me mile ga action.payload me
        console.log("actions mil ra hai yaha se fulfiled ka addTodos", action);
        state.loading = false; // Loading ko false set karna.
        state.data.push(action.payload); // Add the new todo to the state
      })
      // `rejected` case, jab data fetch mein error aaye
      .addCase(addTodos.rejected, (state, action) => {
        console.log(
          "actions mil ra hai yaha se reject ka addTodos",
          action.error
        );
        state.loading = false; // Loading ko false set karna
        state.error = action.error.message; // Error ko state mein store karna
      });



    // Delete Todos
    builder
      .addCase(deleteTodos.pending, (state) => {
        state.loading = true; // Jab tak data load ho raha hai
        console.log("padding state Delete Todos...");
      })

      // `fulfilled` case, jab data successfully fetch ho gaya ho
      .addCase(deleteTodos.fulfilled, (state, action) => {
        // jo uperr axios me datat return kar re hai o is fulfiled wale me mile ga action.payload me
        console.log("actions mil ra hai yaha se fulfiled ka Delete", action);
        state.loading = false; // Loading ko false set karna.
        state.data = state.data.filter((todo) => todo.id !== action.payload); // Deleted item ko state se hataen
      })
      // `rejected` case, jab data fetch mein error aaye
      .addCase(deleteTodos.rejected, (state, action) => {
        console.log(
          "actions mil ra hai yaha se reject ka Delete",
          action.error
        );
        state.loading = false; // Loading ko false set karna
        state.error = action.error.message; // Error ko state mein store karna
      });

      //Tggole Todos
      builder
      .addCase(toggleTodos.pending, (state) => {
        state.loading = true; // Jab tak data load ho raha hai
        console.log("padding state Toggle Todos...");
      })

      // `fulfilled` case, jab data successfully fetch ho gaya ho
      .addCase(toggleTodos.fulfilled, (state, action) => {
        // jo uperr axios me datat return kar re hai o is fulfiled wale me mile ga action.payload me
        console.log("actions mil ra hai yaha se fulfiled ka Toggle Todos", action);
        state.loading = false; // Loading ko false set karna.
        state.data.forEach((todo) => {
            if (todo.id === action.payload.id) {
              todo.completed  = action.payload.completed ; // `completed` status toggle karein
            }
          });
      })
      // `rejected` case, jab data fetch mein error aaye
      .addCase(toggleTodos.rejected, (state, action) => {
        console.log(
          "actions mil ra hai yaha se reject ka Toggle Todos",
          action.error
        );
        state.loading = false; // Loading ko false set karna
        state.error = action.error.message; // Error ko state mein store karna
      });
  },
});

export default thunkSlice.reducer;

// json-server --watch db.json --port 800 //json server start karenge ke liye hai yr command