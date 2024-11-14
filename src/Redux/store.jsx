// Redux Toolkit se `configureStore` ko import kar rahe hain
import { configureStore } from "@reduxjs/toolkit";

// `counterSlice` se `counterReducer` ko import kar rahe hain
// `counterReducer` woh function hai jo counter state ko manage karega, jo `counterSlice` mein define hai.
import counterReducer from "./counterSlice"; 

// Store ko configure kar rahe hain
const store = configureStore({
  reducer: { 
    // `reducer` object hai, jo saare state changes ko handle karta hai.
    // Yahan humne counter state ko manage karne ke liye `counterReducer` ka use kiya hai.
    
    counter: counterReducer,  // `counter` state ko manage karne ke liye humne `counterReducer` ko bind kiya hai.
    // Jab bhi `counter` state ko modify karne ka action dispatch hoga,
    // toh Redux us action ko `counterReducer` ke madhyam se samajhkar aur usko apply karke state ko update karega.

  },
});

// Store ko export kar rahe hain taaki app ke kisi bhi part mein ise access kiya ja sake.
export default store;
