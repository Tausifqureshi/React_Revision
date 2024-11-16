// =================================================== Redux ===================================================== //
// ChatGPT Se Liya Hua Syntex ---> Redux ek JavaScript state management library hai jo primarily React applications mein use hoti hai, lekin ye kisi bhi JavaScript framework ke sath use ki ja sakti hai. Redux ka main purpose hota hai app ke state ko centralized aur predictable tarike se manage karna.

// ============================================== Redux  kya hai ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Redux kya hai.
// Redux ek predictable state container hai jo JavaScript applications ke liye banaya gaya hai. Yeh aapko ek centralized store provide karta hai, jismein aapka poora application ka state hota hai. Jab koi bhi component ko state ya data ka access ya update chahiye hota hai, toh wo Redux ke through is central store se interact karta hai

// ============================================= Redux ka History ================================================ //
// ChatGPT Se Liya Hua Syntex ---> Redux ka History.
// Redux ko 2015 me Dan Abramov aur Andrew Clark ne develop kiya tha. Redux ka creation React ke ek major problem ko solve karne ke liye kiya gaya tha: state management. React me state ko manage karna kabhi kabhi complex ho sakta tha jab app bada ho jaata tha, aur components ke beech data share karna difficult hota tha. Redux ne is issue ko solve kiya aur ek predictable way me state ko manage kiya jisme ek centralized store rakha jaata hai.


// ========================================= Redux Ka Core Principle: ============================================ //
// ChatGPT Se Liya Hua Syntex ---> Redux Ka Core Principl.

// 1. Single Source of Truth: Redux mein pura application ka state ek single store mein rakha jata hai.

// 2. State is Read-Only: Aap state ko directly modify nahi kar sakte, sirf actions ke through state ko update kar sakte hain.

// 3. Changes are Made with Pure Functions: State ko update karne ke liye aapko pure functions (reducers) ka use karna padta hai.


// ========================================== Redux ki Basic Concepts ============================================ //
// ChatGPT Se Liya Hua Syntex ---> Redux ki Basic Concepts. Redux mein kuch basic concepts hote hain jo aapko samajhna zaroori hai.

// 1.  Store: Redux mein store wo central location hai jahan aapke application ki state rakhi jati hai. Ye ek object hota hai jo aapke entire application ke state ko contain karta hai. Is store ko hum global state bhi keh sakte hain.

// import { createStore } from 'redux';

// const store = createStore(itemsReducer);
// store.dispatch(addItemAction('Apple'));



// 2. Action: Action ek plain JavaScript object hota hai jo state me changes karne ke liye dispatched kiya jaata hai. Action me do cheezein hoti hain:
// type: Yeh string hota hai jo action ko define karta hai (for example, "ADD_ITEM").
// payload: Yeh optional hota hai aur jo data action ke sath send kiya jaata hai (for example, ek new item jo add karna hai).

// const addTodoAction = {
//     type: 'ADD_TODO',
//     payload: {
//       id: 1,
//       text: 'Learn Redux'
//     }
//   };
  























