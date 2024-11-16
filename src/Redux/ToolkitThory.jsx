// ========================================== Redux ToolKit kya hai ============================================= //
// ChatGPT Se Liya Hua Syntex ---> Redux Toolkit kya hai.
// Redux Toolkit (RTK) Redux ka official tool hai jo Redux ko zyada efficient aur developer-friendly banata hai. Redux ka setup thoda complex ho sakta tha, lekin RTK isko simplify karne ke liye kaafi saare helper functions aur utilities provide karta hai.


// ======================================= Redux ToolKit Main Concepts ========================================== //
// ChatGPT Se Liya Hua Syntex --->  Redux Toolkit ke Main Concepts.

// 1. Configure Store: RTK mein store ko configure karna pehle se bahut asaan ho gaya hai. Aapko ek hi function configureStore ka use karna hota hai jo store ko configure kar deta hai.

import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: rootReducer,
});



// 2. Slices: Redux Toolkit mein, "slice" ek naya concept hai jo ek reducer aur actions ko ek saath group karta hai. Slices ka use karke, aap easily actions aur reducers ko define kar sakte hain. Example:
import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;




// 2. createAsyncThunk: Ye ek utility function hai jo asynchronous operations ko handle karta hai. Agar aapko API call karna hai ya koi async operation perform karna hai, to createAsyncThunk ka use karke actions create kar sakte hain. 

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await fetch('https://api.example.com/items');
  return response.json();
});




// 4. combineReducers: Yeh Redux Toolkit ke sath bhi use hota hai, jab multiple reducers ko ek sath combine karna ho.
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  user: userSlice.reducer,
});




// ========================================== Redux ToolKit ka Flow ============================================= //
// ChatGPT Se Liya Hua Syntex --->  Redux Toolkit ka Flow.

// 1. Store Creation: configureStore use karke store create hota hai.

// 2. Slice Creation: createSlice se state aur actions ko manage kiya jata hai.

// 3. Async Actions: createAsyncThunk se async logic handle hota hai.

// 4. Dispatching Actions: Actions ko dispatch karke state update kiya jata hai.

// 5. Selector Functions: State ko access karne ke liye selectors create hote hain.


// =============================================== Redux ToolKit ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Redux Toolkit ka Example (Complete Flow)

// 1: Install Redux Toolkit aur React-Redux
// npm install @reduxjs/toolkit react-redux


// 2. Store Setup Karna.

// import { configureStore } from '@reduxjs/toolkit';
// import itemsReducer from './itemsSlice';

// const store = configureStore({
//   reducer: {
//     items: itemsReducer,
//   },
// });

// export default store;



// 3. Slice Create Karna.
// import { createSlice } from '@reduxjs/toolkit';

// const itemsSlice = createSlice({
//   name: 'items',
//   initialState: [],
//   reducers: {
//     addItem(state, action) {
//       state.push(action.payload);
//     },
//     removeItem(state, action) {
//       return state.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { addItem, removeItem } = itemsSlice.actions;
// export default itemsSlice.reducer;



// 4. React Component Mein Redux ka Use Karna:
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addItem, removeItem } from './itemsSlice';

// const ItemList = () => {
//   const items = useSelector(state => state.items);
//   const dispatch = useDispatch();

//   const handleAdd = () => {
//     dispatch(addItem({ id: 1, name: 'New Item' }));
//   };

//   const handleRemove = (id) => {
//     dispatch(removeItem(id));
//   };

//   return (
//     <div>
//       <button onClick={handleAdd}>Add Item</button>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.name}
//             <button onClick={() => handleRemove(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ItemList;




// =============================================== Redux ToolKit ================================================= //
// ChatGPT Se Liya Hua Syntex --->  Redux aur Redux Toolkit ke Features aur Benefits

// 1. Code Simplicity: Redux Toolkit ke sath code likhna simple aur maintainable ho jata hai.

// 2. Less Boilerplate: Redux me actions, reducers, aur state management ke liye kaafi boilerplate code hota hai jo Redux Toolkit me reduce ho jata hai.

// 3. Enhanced Developer Experience: Redux DevTools aur middleware ka default support aur createAsyncThunk ke sath async actions handle karna asaan ho jata hai.

// 4. TypeScript Support: Redux Toolkit TypeScript ke sath bhi kaam karta hai jo strongly typed applications ke liye ideal hai.



// =================================== Differences Redux and Redux ToolKit ====================================== //
// ChatGPT Se Liya Hua Syntex --->  Differences Redux and Redux ToolKit.

// Redux:
// 1. Manual setup: Actions, reducers, aur store manually setup karna padta hai.

// 2. Boilerplate code: Redux me kaafi boilerplate code likhna padta hai.

// 3. Redux DevTools: Redux DevTools ko manually configure karna padta hai.


// Redux Toolkit:
// 1. Simplified setup: Toolkit me configureStore se store setup karna simple hai.

// 2. Less code: Redux Toolkit me built-in functions (like createSlice) hain, jo code ko kaafi reduce karte hain.

// 3. Default DevTools: DevTools by default enabled hota hai.





// =============================================================================================================== //
















































