// Slic ko aisa samj sakte ho ek application ,me kafi sahre feutre ho sakte hai.har ek feayure ke liye alag alag action ho sakte hai and alag aalg  reducercs ho sakte hai

// Redux Toolkit se `createSlice` ko import kar rahe hain
import { createSlice } from "@reduxjs/toolkit";

// Counter ka initial state set kar rahe hain jisme `count` ki shuruaat 0 se ho rahi hai
const initialState = { count: 0 };

// Ek slice bana rahe hain jo `counterSlice` ke naam se export hoga
// `createSlice` ek Redux Toolkit ka function hai jo aapko reducers aur actions ko ek hi jagah define karne ki suvidha deta hai.
export const counterSlice = createSlice({
  // Slice ka naam `counter` rakha hai, jo state tree me bhi is naam se save hoga
  name: "counter", // Yeh slice ka naam hai, aur jab aap store ko access karenge toh yeh key ke naam se access hoga (state.counter)
  
  // Initial state define kar rahe hain jo slice ki shuruaati value hogi
  // `initialState` me humne `count` ki initial value 0 set ki hai. Yeh store me default value hogi.
  initialState: initialState,

  // Reducers: Yeh functions hain jo state ko update karte hain based on actions
  reducers: {
    
    // Increment reducer: `count` ko 1 se badhata hai
    increment: (state, action) => {  // state ko increment kar raha hai

      // State ko shallow copy karke `count` me 1 add karke naya state return kar rahe hain
      return { ...state, count: state.count + 1 }; // `count` ki value ko badha rahe hain
    },

    // Decrement reducer: `count` ko 1 se kam karta hai
    decrement: (state, action) => { // state ko decrement kar raha hai

      // Agar `count` 0 se bada hai to 1 minus karta hai, warna state change nahi hoti
      if (state.count > 0) { 
        return { ...state, count: state.count - 1 }; // `count` ko decrease kar rahe hain
      }
      return state; // Agar `count` 0 hai to wahi state return kar dete hain bina kisi change ke
    },

    // Reset reducer: `count` ko dobara 0 par set kar deta hai
    reset: (state, action) => {  // state ko reset kar raha hai

      return { ...state, count: 0 }; // State ko reset karke count ko 0 set kar rahe hain
    },
  },
});

// Action creators ko export karte hain jisse components me inhe dispatch kar sakte hain
export const { increment, decrement, reset } = counterSlice.actions;

// Reducer ko export karte hain jisse store me use kar sakein
export default counterSlice.reducer;