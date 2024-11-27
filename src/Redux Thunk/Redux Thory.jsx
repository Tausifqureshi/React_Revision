// ============================================= Redux Middleware =============================================== //
// ChatGPT Se Liya Hua Syntex --->  1. Redux Middleware Kya Hai?
// Redux middleware ek function hai jo dispatch aur reducers ke beech ka bridge banata hai. Middleware ke bina, Redux sirf synchronous actions ko hi handle kar sakta hai. Middleware actions ko intercept kar ke usme kuch extra kaam karne ka moka deta hai (jaise logging, asynchronous operations, etc.).


// ======================================== Redux Thunk Kya Karta Hai =========================================== //
// ChatGPT Se Liya Hua Syntex ---> 2. Redux Thunk Kya Karta Hai?
// Thunk ka kaam hai asynchronous logic ko handle karna. Ek "thunk" asal mein ek function hai jo ek action object return karne ki bajaye ek function return karta hai. Ye function dispatch aur getState ko arguments ke roop mein access kar sakta hai.

// ChatGPT Se Liya Hua Syntex ---> Redux Thunk ye kaam karta hai.
// 1. Aapko asynchronous actions likhne deta hai.
// 2. API se data fetch karne ke baad Redux store ko update karta hai.
// 3. Dispatch karne ke process ko flexible banata hai.



// ====================================== Redux Middleware Kya hota hai ========================================= //
// ChatGPT Se Liya Hua Syntex --->  Middleware kya hota hai Redux mein?
// Middleware ek aisa function hai jo Redux store ke dispatch() method aur reducer ke beech aata hai. Ye action ko intercept kar sakta hai, usko modify kar sakta hai ya naye actions dispatch kar sakta hai.


// ========================================== Redux Thunk ki zarurat ============================================= //
// ChatGPT Se Liya Hua Syntex ---> Redux Thunk ki zarurat kyun hoti hai.
// 1. Redux store mein data synchronous tarike se update hota hai, lekin modern web applications mein asynchronous kaam common hai (jaise user data fetch karna, background tasks handle karna).

// 2. Redux ke rules ke mutabik, aapke actions pure JavaScript objects hone chahiye. Lekin Redux Thunk allow karta hai ki action ke roop mein ek function bheja ja sake jo async kaam kar sake.



// ========================================== Redux Thunk ki zarurat ============================================= //
// ChatGPT Se Liya Hua Syntex ---> Redux Thunk ka kaam kaise hota hai?

// 1. Default Redux Flow:
// Action -> Reducer -> Store
// Ye flow synchronous hota hai.

// 2. Redux Thunk ke saath Flow:
// Redux Thunk allow karta hai ki action creators ek function return karein (object ki jagah).
// Ye function dispatch aur getState ko parameters ke roop mein accept karta hai.
// Is function ke andar asynchronous operations (jaise API requests) perform kiye ja sakte hain aur unka result handle karte hue naye actions dispatch kiye ja sakte hain.
