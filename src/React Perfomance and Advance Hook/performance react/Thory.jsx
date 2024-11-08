// ============================================= React Performance =============================================== //
// ChatGPT Se Liya Hua Syntex ---> React performance optimize karna bahut important hai, especially jab aapka application complex ya heavy ho jaata hai. React ke kuch powerful tools aur techniques hain jo performance ko improve karne mein madad karte hain. Main yahan kuch key concepts aur practices explain kar raha hoon jo aap React app ke performance ko optimize karne mein use kar sakte hain.


// ======================================= Component  ko Control Karna ========================================== //
// ChatGPT Se Liya Hua Syntex ---> 1. Component Re-rendering ko Control Karna
// Jab bhi component re-render hota hai toh React uska virtual DOM compare karta hai, jo time aur resources leta hai. Kuch methods hain jisse aap unnecessary re-renders avoid kar sakte hain:

// React.memo: Yeh ek Higher Order Component hai jo functional components mein lagaya ja sakta hai taaki voh tabhi re-render ho jab unke props change hoon. Agar props nahi badalte toh React memoize (yaad rakh leta hai) us component ka previous output aur same output return kar deta hai.

// import React, { memo } from 'react';

// const MyComponent = memo((props) => {
//   return <div>{props.text}</div>;
// });


// ================================== Code Splitting aur Lazy Loading ka Use ===================================== //
// ChatGPT Se Liya Hua Syntex ---> 2. Code Splitting aur Lazy Loading ka Use
// Agar ek large application hai toh pura code ek sath load karne ki jagah code splitting kar sakte hain taaki sirf required components load ho aur app fast feel ho.
// React.lazy aur Suspense ke saath code splitting aur lazy loading easily implement kar sakte hain, jisse JavaScript bundle size kam ho jata hai aur initial load time improve hota hai.


// import React, { Suspense, lazy } from 'react';

// const OtherComponent = lazy(() => import('./OtherComponent'));

// function MyComponent() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <OtherComponent />
//     </Suspense>
//   );
// }


// ======================================== React DevTools ka Use karna ========================================== //
// ChatGPT Se Liya Hua Syntex ---> 3. React DevTools ka Use karna.
// React DevTools ki Profiler functionality se app ke slow components ko identify kar sakte hain aur ye analyze kar sakte hain ki kaha par bottlenecks hain. Yeh show karta hai ki kitne time ke baad kaunsa component render hua aur kitna time laga render hone me.


// =================================== useCallback aur useMemo Hooks ka Use ====================================== //
// ChatGPT Se Liya Hua Syntex ---> 4. useCallback aur useMemo Hooks ka Use
// useCallback: Agar kisi component me function baar baar re-create ho raha ho aur unnecessary renders cause kar raha ho toh useCallback se wo function memoize kar sakte hain taaki wo re-create na ho unnecessarily.
// useMemo: Yeh heavy calculations ko memoize karta hai taaki har render me same calculation repeat na ho. Iska use computationally heavy operations ko optimize karne ke liye hota hai jo baar baar change nahi hote.
import React, { useCallback } from 'react';

const MyComponent = ({ handleClick }) => {
    const onClick = useCallback(() => {
      handleClick();
    }, [handleClick]);
  
    return <button onClick={onClick}>Click me</button>;
  };
  
// ========================================= Avoiding Inline Functions =========================================== //
// ChatGPT Se Liya Hua Syntex ---> 5. Avoiding Inline Functions and Inline Object Creation
// Inline functions aur inline objects har render pe naye create hote hain. Yeh unwanted renders aur performance issues cause kar sakte hain, especially jab wo functions ya objects child components me props ke through pass hote hain.
// Iska solution ye hai ki inline functions ko useCallback se wrap karein aur objects ko useMemo ke saath wrap karein taaki wo ek hi baar create ho aur reusability badhe.


// ============================================= Event Delegation ================================================ //
// ChatGPT Se Liya Hua Syntex ---> 6. Event Delegation
// Agar bahut saare events bind ho rahe hain toh har element par event bind karne ki jagah parent container par event delegation apply kar sakte hain taaki event bubbling ka fayda uthaye aur unnecessary event listeners ko avoid kiya ja sake.


// ============================================= Event Delegation ================================================ //
// ChatGPT Se Liya Hua Syntex ---> 7. CSS and Animation Optimization
// CSS-in-JS libraries ka use jahan zaroori ho wahan karein aur animations ko CSS animations ya requestAnimationFrame ke saath handle karna best practice hai, kyunki yeh React ke rendering cycle ko directly interfere nahi karti aur smooth transitions maintain karti hain.


// ========================================= Avoiding Reconciliation ============================================ //
// ChatGPT Se Liya Hua Syntex ---> 8. Avoiding Reconciliation (Reconciler ko Optimize karna)
// React ka reconciliation process ensure karta hai ki DOM efficiently update ho, par ye bhi zaroori hai ki hum unnecessary DOM updates ko avoid karein.
// Component keys properly define karein aur jab bhi list items render ho toh unique keys ka use karein taaki React efficiently changes ko track kare aur diffing process ko optimize kare.