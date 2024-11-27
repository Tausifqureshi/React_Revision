// ======================================= Redux Toolkit Me Redux Thunk ========================================= //
// ChatGPT Se Liya Hua Syntex --->  Redux Toolkit Me Redux Thunk
// Redux Toolkit, jo Redux ka modern way hai, apne saath Redux Thunk middleware ko default include karta hai. Jab aap configureStore function ka use karte hain, to Redux Thunk pehle se hi setup hota hai.

// Aapko Redux Thunk ko manually add karne ki zarurat nahi hoti.

// npm install @reduxjs/toolkit react-redux

//  1. Store Setup Karo (store.js)
// import { configureStore } from '@reduxjs/toolkit';

// const store = configureStore({
//   reducer: rootReducer, // Aapka main reducer yahan jayega
// });

// export default store;



// 2.  Slice Banaye : Redux Toolkit me ek slice banate hain jo state aur actions ko manage karega:
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ChatGPT Se Liya Hua Syntex ---> createAsyncThunk ka Use:
// Redux Toolkit mein asynchronous actions ko handle karne ke liye hum createAsyncThunk ka use karte hain. Yeh ek utility function hai jo thunk action ko create karta hai aur automatically lifecycle actions (pending, fulfilled, rejected) ko handle karta hai.

// Async Thunk
export const fetchData = createAsyncThunk('example/fetchData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json();
});

// Slice
const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default exampleSlice.reducer;


// ChatGPT Se Liya Hua Syntex --->   Extra Reducers Kya Karte Hain?
// Jab aap createAsyncThunk use karte hain, Redux Toolkit automatically 3 actions generate karta hai:

//  1. pending: Jab asynchronous kaam start hota hai.
// 2. fulfilled: Jab kaam successfully complete hota hai.
// 3. rejected: Jab kaam fail hota hai.
// In states ko handle karne ke liye hum extraReducers ka use karte hain.



// 3. Component Me Dispatch Kare: Redux state aur actions ko React components me use kare:
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers()); // Async thunk ko call kiya
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

// export default UsersList;



// ============================================= builder function ================================================ //
// ChatGPT Se Liya Hua Syntex ---> builder function kya hota hai?
// builder ek function hai jo createSlice ke extraReducers mein use hota hai. extraReducers ka kaam hai ki wo external actions (jaise async actions jo hum createAsyncThunk ke saath create karte hain) ko handle kare. Jab hum createSlice bana rahe hote hain, to hum action types ko define karte hain, aur builder function ki madad se un actions ko pending, fulfilled, aur rejected states ke liye handle karte hain.

// ChatGPT Se Liya Hua Syntex ---> builder ka use:
// Jab hum createAsyncThunk ka use karte hain (jo asynchronous actions ke liye hota hai), to extraReducers ke andar builder ko use karke hum thunk actions ke lifecycle ko handle karte hain.

// extraReducers: (builder) => {
//   builder
//     .addCase(action, (state, action) => { ... })  // For a specific action
//     .addMatcher(matcher, (state, action) => { ... })  // For matching multiple actions
//     .addDefaultCase((state, action) => { ... });  // For handling default cases
// }


// ChatGPT Se Liya Hua Syntex --->  builder.addCase(action, reducer):
// 1. addCase ka use specific actions ko handle karne ke liye hota hai.
// 2. action: Yeh action type hota hai jo createAsyncThunk ya koi bhi action creator return karta hai.
// 3. reducer: Yeh function hota hai jo state ko modify karta hai jab action trigger hota hai.


















