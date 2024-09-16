// ================================================ Custom Hook =================================================== //
// ChatGPT Se Liya Hua Syntex ---> React custom hooks kaafi useful concept hain jab aapko apne components me reusable logic ko share karna ho. Jaise aapne lifecycle methods, state management, ya data fetching ka logic bar-bar likhne ke bajaye, ek custom hook bana kar usko multiple components me use kar sakte ho.

// ============================================ Custom Hook kya hai ============================================== //
// ChatGPT Se Liya Hua Syntex ---> Custom Hook kya hai?
// Custom hook ek function hota hai jo use se start hota hai aur React hooks (like useState, useEffect, etc.) ka use karta hai. Iska purpose specific logic ko encapsulate karna aur use dobara-dobara use karne layak banana hota hai.

// Real-World Example:
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  return width;
}

function MyResponsiveComponent() {
  const width = useWindowWidth();

  return (
    <div>
      <p>Window width is: {width}px</p>
    </div>
  );
}


// ========================================== Custom Hooks ke Benefits ============================================ //
// ChatGPT Se Liya Hua Syntex ---> Custom Hooks ke Benefits:
//  1.Reusability: Aap ek baar logic ko likh kar use baar-baar kisi bhi component me use kar sakte ho.
// 2.Separation of Concerns: Custom hooks se aapka component kaafi clean aur maintainable ban jaata hai kyunki logic ko hooks ke andar move kar diya jaata hai.
// 3.Encapsulation: Custom hook ko use karne wala component sirf hook ka return value jaanta hai, uske internal implementation ke baare me nahi. Isse component zyada focused ho jaata hai.
