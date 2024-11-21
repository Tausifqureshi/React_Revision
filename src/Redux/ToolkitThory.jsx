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





// ================================================ useSelector ================================================== //
// ChatGPT Se Liya Hua Syntex ---> useSelector - Redux Store se Data Fetch Karne Ka Tareeka.

// useSelector ek hook hai jo directly Redux store se data fetch karta hai aur us data ko React component me use karne ke liye provide karta hai.



import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};
// ChatGPT Se Liya Hua Syntex ---> Kaise Kaam Karta Hai.
// 1. useSelector ko ek callback function pass kiya jata hai (state) => state.todos, jisme state Redux store ki state hai.

// 2. Ye Redux store se todos wala part uthata hai aur todos variable me daal deta hai.

// 3. Jab bhi todos data me koi update hota hai, toh ye component automatically re-render ho jata hai, yani screen par naya data reflect ho jata hai.



// =============================================== useDispatch =================================================== //
// ChatGPT Se Liya Hua Syntex ---> useDispatch - Actions Dispatch Karne Ka Tareeka

// useDispatch ek hook hai jo Redux store ko update karne ke liye actions dispatch (bhejne) ka tareeka provide karta hai. Iska kaam ye hai ki jab bhi aapko Redux store me koi data change karna ho, toh aap useDispatch se ek action bhejte hain jo reducer me jakar kaam karta hai aur state ko modify kar deta hai.

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

const AddTodo = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({ id: Date.now(), text: todoText }));
    setTodoText(''); // Input field reset
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};


// ChatGPT Se Liya Hua Syntex ---> Kaise Kaam Karta Hai.

// 1. useDispatch ek function hai jo dispatch function return karta hai.

// 2. dispatch ka use karke aap actions ko Redux store tak pohcha sakte hain.

// 3. handleAddTodo function me dispatch(addTodo({ id, text })) se addTodo action ko bheja jata hai.

// 4. Ye addTodo action todoSlice me jakar store me ek naya todo item add kar deta hai.




// =================================================== Name ====================================================== //
// ChatGPT Se Liya Hua Syntex --->  Redux Toolkit me name ka use aksar slice ke naam ko define karne ke liye kiya jata hai. Ye ek property hoti hai jo Redux ke slice ko identify karne ka kaam karti hai.

// ChatGPT Se Liya Hua Syntex ---> name ka use case.
// 1. Jab aap Redux Toolkit ka slice banate ho, to aapko createSlice function ka use karte waqt name ki property specify karni hoti hai.

// 2. name slice ke actions aur reducers ko uniquely identify karne me madad karta hai.

// 3. Ye reducer ke action type ko create karne me bhi madad karta hai

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlices = createSlice({
  name: 'counter',  // name property ka use
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;



// ChatGPT Se Liya Hua Syntex ---> Key Points:
// 1. Slice identification: name slice ko identify karne ke liye use hota hai, jisse action types generate karte waqt uniquely identify kiya jata hai.

// 2. Action Types Generation: Agar aap name: 'counter' rakhte ho, to actions ke types kuch is tarah generate honge:
// 'counter/increment'
// 'counter/decrement'

// 3. Code clarity: Ye name property se Redux store mein aapke slice ka purpose clear hota hai aur maintain karne mein asani hoti hai.

// 4. Debugging: name se actions aur reducers ko easily debug kiya ja sakta hai, kyunki action type ko trace karna simple hota hai.



// =============================================================================================================== //
// ChatGPT Se Liya Hua Syntex ---> Haan, bilkul sahi samjha aapne.

// name ka use sirf createSlice ke andar hota hai. Yeh slice ka naam hota hai, jo aapke actions aur reducers ko identify karne mein help karta hai. Yeh dispatching actions aur slice ke actions ke liye use hota hai.

// reducer ke andar, jab aap store configure karte hain, toh jo key (e.g., myCounterState) aap configureStore mein define karte hain, wahi key state ko represent karti hai Redux store mein. Is key se hi aap state ko access karte hain.


// ChatGPT Se Liya Hua Syntex ---> Clear explanation:
// 1. name in createSlice:
// Yeh slice ko identify karta hai.
// Iska use actions aur reducers ko create karte waqt hota hai.
// Aap dispatch ke time is name ko use karte hain actions ko dispatch karne ke liye.
// name se state ko access nahi kiya jata.

// 2. myCounterState in configureStore:
// Yeh Redux store mein state ko organize karta hai.
// Aap jab store ko configure karte hain, toh yeh key use hoti hai state ko access karte waqt.
// Is key se state ko access karte hain: state.myCounterState.count.

  

// Slice me name ka use hota hai
// export const counterSlice = createSlice({
//   name: "counter",  // Yeh sirf action aur reducers ke liye hai
//   initialState: { count: 0 },
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
//   },
// });


// Store me reducer ke through key define karte hain
// const store = configureStore({
//   reducer: {
//     myCounterState: counterSlice.reducer,  // Yeh store me state ko 'myCounterState' ke naam se store kar raha hai
//   },
// });

// ChatGPT Se Liya Hua Syntex ---> Final conclusion:
// 1. name ka use action ko uniquely identify karne ke liye hota hai.

// 2. reducer ke andar key jo aap define karte hain (myCounterState), wahi key store me state ko represent karti hai. Isse hi aap state ko access karte hain.


// =============================================================================================================== //





















