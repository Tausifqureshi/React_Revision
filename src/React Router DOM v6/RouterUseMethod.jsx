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
// Kya hota hai RouterProvider?
// RouterProvider ek React component hai jo React Router v6.4+ mein introduce kiya gaya tha. Ye React app ko ek routing context provide karta hai. Iska kaam hai app ke andar routing ka system activate karna.

// Aap ise samajh sakte hain: 📦 RouterProvider = React Router ka "Engine Starter"
// Ye batata hai ki:"Yeh meri routing config hai, aur app ke andar har jagah routing isi ke hisaab se kaam karegi."


// Kab use karte hain RouterProvider?
// React Router v6.4+ mein jab aap createBrowserRouter() ya createHashRouter() ka use karte hain (jo ki naya data API based routing system hai), tab aapko RouterProvider se app ko wrap karna hota hai.

//  ChatGPT Se Liya Hua Syntex ---> RouterProvider Kya Karta Hai Internally?
// 1. Routing Tree Load karta hai — Jo routes aap createBrowserRouter() mein define karte ho, unka structure read karta hai.

// 2. URL ke according correct component render karta hai — Jaise hi URL change hoti hai (/about, /contact etc), RouterProvider dekhta hai ki kaunsa route match ho raha hai, aur wahi component dikhata hai.

// 3. Data Loading ka system handle karta hai — v6.4+ mein har route ke saath aap loader functions de sakte ho, jo automatically data fetch karte hain jab route match hota hai.

// 4. Error Boundaries, Lazy Loading, Actions etc. ka support deta hai.






// ================================================== OutLet ===================================================== //
//  ChatGPT Se Liya Hua Syntex ---> 5.  Outlet Kya Hai? <Outlet> React Router v6 ka ek powerful component hai.
// Definition: <Outlet> ek placeholder hota hai jo nested routes ko render karta hai. Jab parent route render hota hai, toh us parent ke under defined child route us <Outlet> component ke andar display hota hai.

// Nested Routing: Jab aap ek parent route ke andar multiple child routes define karte hain, toh parent route ka layout toh hamesha dikhai dega, lekin jo child route hoga, uska content <Outlet> ke andar render hoga.




// ============================================= Link aur NavLink ================================================ //
//  ChatGPT Se Liya Hua Syntex ---> 6.  Link aur NavLink
// Component: Link aur NavLink anchors (<a>) ka alternative hai, jo page ko refresh kiye bina navigation karne ke liye use hota hai.

// Difference:
// 1. Link normal link ke liye use hota hai.
// 2. NavLink-Compontents hai : NavLink active state ke sath aata hai jo usko current active link me style karne ki suvidha deta hai.


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


//  ChatGPT Se Liya Hua Syntex ---> Kaise kaam karta hai useParams.
// Jab aap React Router ke routes define karte ho, to aap kuch routes ko dynamic bana sakte ho, jisme URL ke kuch parts changeable hote hain. Example ke liye:


// Dynamic Route Define karna: Aapko route me :id define karna padta hai jo ek dynamic parameter hota hai.
{/* <Route path="/product/:id" element={<ProductDetails />} /> */}

// import React from "react";
// import { useParams } from "react-router-dom";

// function ProductDetails() {
//   // useParams hook ko use karke URL se 'id' ko access kar rahe hain
//   const { id } = useParams();

//   return (
//     <div>
//       <h2>Product ID: {id}</h2>
//       {/* Yaha aap is 'id' ke base par API call ya data fetch kar sakte ho */}
//     </div>
//   );
// }



// =============================================== useLocation =================================================== //
//  ChatGPT Se Liya Hua Syntex ---> 10. useLocation.
// React Router me useLocation ek hook hai jo aapko current location (URL path) ke bare me information provide karta hai. Iska istemal aapko pata lagane ke liye karte hain ki user abhi kis route par hai ya kis page par hai.

// useLocation ka use:
// Is hook se aapko ek object milta hai jo current location ke bare me detailed information deta hai, jaise:

// 1. pathname: current URL ka path (e.g., /dashboard).
// 2. search: URL query string (e.g., ?id=123).
// 3. hash: URL me anchor (#section).
// 4. state: aap additional state pass kar sakte hain jab user ek route se doosre route par navigate karta hai.


// ChatGPT Se Liya Hua Syntex ---> location object ke properties:
// pathname: Current URL ka path deta hai.

// Example: /about ya /dashboard.
// search: Query string ko represent karta hai jo ? ke baad hota hai URL me.

// Example: ?name=john&age=30.
// hash: URL me anchor point ko represent karta hai, jo # ke baad hota hai.

// Example: #section1.
// state: Aap jab navigation karte ho toh kuch extra data pass kar sakte ho iske through.

// Example: Agar aap state pass karte ho navigate('/about', { state: { from: 'home' } }), toh yeh location.state me accessible hota hai.



// import { useLocation } from 'react-router-dom';

// function HomePage() {
//   const location = useLocation();

//   if (location.pathname === '/dashboard') {
//     return <h1>Welcome to Dashboard</h1>;
//   } else {
//     return <h1>Welcome to Home Page</h1>;
//   }
// }




// =============================================== useNavigation ================================================= //
//  ChatGPT Se Liya Hua Syntex ---> 11. useNavigation.











