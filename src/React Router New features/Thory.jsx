





// =============================================== useLoderData ================================================== //
// ChatGPT Se Liya Hua Syntex ---> React Router me useLoaderData ek hook hai jo kisi bhi route ka pre-loaded data fetch karne me madad karta hai. Iska kaam ye hai ki jab aap kisi specific route pe navigate karte hain, to us route ke saath kuch initial data load ho sake, bina kisi additional fetch request ke.

// Yeh hook kaafi helpful hai jab aapko kisi route pe pahunchte hi kuch data show karna ho. Isse pehle se loaded data mil jata hai jo user experience ko fast aur smooth banata hai.

// ==================================== useLoaderData ka Working Mechanism ======================================= //
// ChatGPT Se Liya Hua Syntex ---> useLoaderData ka Working Mechanism.

// 1.Route me Loader Set Karna: useLoaderData sirf tab kaam karta hai jab aap apne route configuration me loader define karte hain. loader ek function hai jo data fetch karta hai jab route pe navigate kiya jata hai.
// import { createBrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/profile",
//     element: <Profile />,
//     loader: async () => {
//       // Yahan data ko fetch karte hain
//       const response = await fetch("https://api.example.com/user");
//       if (!response.ok) {
//         throw new Response("Data fetch error", { status: response.status });
//       }
//       return response.json();
//     },
//   },
// ]);



// 2. useLoaderData ka Use Karna: Route me jab loader se data load ho jata hai, to us data ko useLoaderData hook ke zariye access kiya ja sakta hai.

// import { useLoaderData } from "react-router-dom";

// function Profile() {
//   const userData = useLoaderData();

//   return (
//     <div>
//       <h1>{userData.name}</h1>
//       <p>{userData.email}</p>
//     </div>
//   );
// }




// 3. Error Handling: Agar loader function me data fetch karte waqt koi error aata hai, to ErrorBoundary component ka use karke handle kiya ja sakta hai.

// const router = createBrowserRouter([
//     {
//       path: "/profile",
//       element: <Profile />,
//       loader: async () => {
//         const response = await fetch("https://api.example.com/user");
//         if (!response.ok) {
//           throw new Response("Error fetching data", { status: response.status });
//         }
//         return response.json();
//       },
//       errorElement: <ErrorPage />,
//     },
//   ]);
  


// =============================================== useLocation ================================================== //
// ChatGPT Se Liya Hua Syntex ---> Key Benefits of useLoaderData.

// 1. Faster Load Times: Route load hote hi data ready mil jata hai.

// 2. Reduced Client-Side Fetching: Jitni baar bhi user page ko reload karega, data pehle se load hoga aur dobara fetch karne ki zaroorat nahi padegi.

// 3. Better Error Handling: Agar loading me error aata hai, to user ko easily notify kiya ja sakta hai.