// Yeh component Redux store banata hai jisme poori application ki state hoti hai.

// Redux Toolkit se `configureStore` function ko import kar rahe hain. jo Redux store banane ke liye use hota hai.
import { configureStore } from "@reduxjs/toolkit";

// `counterSlice` se `counterSlice` ko import kar rahe hain. Yeh counter ki state aur uske changes (increment, decrement) ko control karta hai.
import counterSlice from "./counterSlice"; 
 
// Redux store ko configure aur banate hain
const store = configureStore({

  reducer: { 
    // `reducer` object hai, jo saare state changes ko handle karta hai.
    // Yahan humne counter state ko manage karne ke liye `counterReducer` ka use kiya hai.
    
    myCounterState: counterSlice,  // `counter` state ko manage karne ke liye humne `counterReducer` ko bind kiya hai.
    // Jab bhi `counter` state ko modify karne ka action dispatch hoga,
    // toh Redux us action ko `counterReducer` ke madhyam se samajhkar aur usko apply karke state ko update karega.
  
  },
});

// Store ko export kar rahe hain taaki app ke kisi bhi part mein ise access kiya ja sake.
export default store;










