// =========================================== createBrowserRouter ============================================== //
// ChatGPT Se Liya Hua Syntex ---> 1. createBrowserRouter.
// createBrowserRouter React Router v6.4 se introduce kiya gaya ek function hai jo aapko browser-based routing setup karne ki suvidha deta hai. Iska use karne se aapko routes define karne ka ek naya tarika milta hai, jisme aapko routing logic aur components ko ek saath manage karne ki flexibility milti hai.



// =========================================== createBrowserRouter ============================================== //
// ChatGPT Se Liya Hua Syntex ---> 2. createRoutesFromElements.

// createRoutesFromElements React Router v6 ka ek utility function hai jo aapko JSX elements se routes create karne ki suvidha deta hai. Iska istemal karna bahut aasan hai, aur ye aapko declarative syntax me routes define karne ki flexibility deta hai. Chaliye iske baare me detail me samjhte hain:

// 1. Kya hai createRoutesFromElements?
// createRoutesFromElements function ko aap React Router ke <Route> elements ka use karke ek array of route objects create karne ke liye istemal karte hain. Iska fayda ye hai ki aapko routes ko define karte waqt aapko manual route configuration nahi karna padta, balki aap directly JSX me routes likh sakte hain.

// 2. Kaise kaam karta hai?
// Ye function aapko <Route> components se ek array of route objects return karta hai.
// Aap isse router configuration ke liye istemal kar sakte hain.




// =================================================== Route ===================================================== //
//  ChatGPT Se Liya Hua Syntex ---> 3. Route.
// React Router mein Route aur Routes components ka istemal routing ko define karne ke liye kiya jata hai. Inka kaam aur istemal kaise hota hai, yeh samajhne ke liye, chaliye in dono components ko detail mein dekhte hain.

// 1. Route Component
// Definition: <Route> component ek specific path ke liye ek React component ko render karne ka kaam karta hai. Yeh path URL ke path se match karta hai.


{/* <Route path="/example" element={<ExampleComponent />} /> */}




// 2. Routes Component
// Definition: <Routes> component ek container hai jo aapke application ke sabhi <Route> components ko wrap karta hai. Yeh component ensure karta hai ki sirf first matching route hi render ho.

{/* <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
</Routes> */}


// 3. Router bhi ek wrapping component hai jo routing functionality ko provide karta hai. Ye React Router ka core part hai aur isse aapke application mein routing context establish hota hai.




// ============================================== RouterProvider ================================================= //
//  ChatGPT Se Liya Hua Syntex ---> 4. RouterProvider Kya Hai?
// RouterProvider ek component hai jo React application ko routing context provide karta hai. Lekin yeh BrowserRouter ya HashRouter ke mukable zyada advanced aur customizable hota hai, kyunki yeh router object ko le kar routing ko control karta hai.

// React Router v6 mein yeh feature primarily Data API aur Loader, Action, aur ErrorElement jaise nayi features ko support karne ke liye banaya gaya hai, jo traditional router setup mein directly possible nahi tha.




// ================================================== OutLet ===================================================== //
//  ChatGPT Se Liya Hua Syntex ---> 5.  Outlet Kya Hai? <Outlet> React Router v6 ka ek powerful component hai.
// Definition: <Outlet> ek placeholder hota hai jo nested routes ko render karta hai. Jab parent route render hota hai, toh us parent ke under defined child route us <Outlet> component ke andar display hota hai.

// Nested Routing: Jab aap ek parent route ke andar multiple child routes define karte hain, toh parent route ka layout toh hamesha dikhai dega, lekin jo child route hoga, uska content <Outlet> ke andar render hoga.




// ============================================= Link aur NavLink ================================================ //
//  ChatGPT Se Liya Hua Syntex ---> 6.  Link aur NavLink
// Component: Link aur NavLink anchors (<a>) ka alternative hai, jo page ko refresh kiye bina navigation karne ke liye use hota hai.

// Difference:
// 1. Link normal link ke liye use hota hai.
// 2. NavLink active state ke sath aata hai jo usko current active link me style karne ki suvidha deta hai.


// ================================================= Navigate ==================================================== //
//  ChatGPT Se Liya Hua Syntex ---> 7. Navigate:
// Navigate ka matlab hota hai ek page ya application ke andar ek jagah se doosri jagah jana. Jab user kisi page ke ek part se doosre part ya ek page se doosre page par jata hai, to is process ko navigation kehte hain. Web development me, navigation kaam karta hai browser ko ek specific URL ya route par le jane ke liye.

// Example:
// Jab aap kisi website ke home page se "About Us" page par jate hain, to ye navigation hoti hai.
// React me hum navigation ke liye react-router-dom ka use karte hain, jisme hum <Link> ya useNavigate ka use karke ek route se doosre route par jate hain.


// =============================================== useNavigate =================================================== //
//  ChatGPT Se Liya Hua Syntex ---> 8. useNavigate
// useNavigate Method: React Router v6 mein, useNavigate ek hook hai jo humein programmatically navigation karne ki facility deta hai bina kisi <Link> component ka use kiye. Iska matlab hai ki aap code ke madhyam se user ko kisi specific page par le jaa sakte ho. Is hook ka istemal us situation mein hota hai jab aapko dynamically ya kisi action ke baad user ko ek specific route par redirect karna ho.

// 1. useNavigate(): Jab aap is hook ko call karte ho, to ye aapko ek function return karta hai jiska use aap user ko kisi specific route par navigate karne ke liye kar sakte ho.

// 2. navigate('/path'): Is function ko call karte samay aap us route ka path pass karte ho jahan aapko user ko bhejna hai. Jaise upar example mein hum user ko "/home" route par le ja rahe hain.


// import { useNavigate } from 'react-router-dom';
// function Login() {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Successful login ke baad dashboard par navigate karein
//     navigate('/dashboard');
//   };

//   return (
//     <button onClick={handleLogin}>Login</button>
//   );
// }


// ================================================ useParams =================================================== //
//  ChatGPT Se Liya Hua Syntex ---> 9. useParams.
// Method: useParams ek hook hai jo URL ke parameters ko access karne ka tarika provide karta hai. Ye dynamic URLs me helpful hota hai.


// =============================================== useLocation =================================================== //
//  ChatGPT Se Liya Hua Syntex ---> 10. useLocation.
// Method: useLocation hook current location (URL path, search params, hash) ko return karta hai. Iska use URL ko inspect karne ke liye hota hai.














