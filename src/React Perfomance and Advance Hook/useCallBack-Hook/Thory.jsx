// =========================================== UseCallbACK Hook ============================================== //
// ChatGPT Se Liya Hua Syntex ---> React me useCallback ek hook hai jo ki functions ko memoize karne ke liye use hota hai. Iska matlab ye hai ki agar ek specific function baar-baar create ho raha hai aur uski dependencies change nahi ho rahi hain, toh useCallback use karke hum us function ko cache kar sakte hain. Isse React unnecessary re-renders se bachata hai aur performance ko improve karta hai.




// ======================================= UseCallbACK Hook Syntax ========================================== //
// ChatGPT Se Liya Hua Syntex --->  Yahan useCallback do arguments leta hai:

// 1. Pehla argument ek function hai jo aapko memoize karna hai.

// 2. Dusra argument ek array hai jo dependencies define karta hai. Jab tak ye dependencies nahi badalte, function dobara recreate nahi hota.

// const memoizedCallback = useCallback(() => {
//   // function body
// }, [dependencies]);



// ================================ UseCallbACK Hook Kab Use Karna Chahiye =================================== //
// ChatGPT Se Liya Hua Syntex ---> Kab Use Karna Chahiye. 
// Jab kisi function ko baar-baar recreate hone se rokna ho, jo unnecessary renders aur performance issues ko avoid karta hai, tab useCallback ka use hota hai. Jaise agar aapka component kisi child component ko pass kar raha hai jo function prop ki tarah use ho raha hai, toh us case me agar function baar-baar recreate hoga toh child component bhi baar-baar render hoga.
import React, { useState, useCallback } from "react";

function TodoApp() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    // `increment` function: Ye simple function hai jo count ko increase karega
    const increment = () => setCount(count + 1);

    // `addTodo` ko useCallback se wrap kiya gaya hai
    const addTodo = useCallback(() => {
        setTodos((prevTodos) => [...prevTodos, "New Todo"]);
    }, [todos]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            
            <Todos todos={todos} addTodo={addTodo} />
        </div>
    );
}

function Todos({ todos, addTodo }) {
    console.log("Todos child component re-rendered");

    return (
        <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => (
                <p key={index}>{todo}</p>
            ))}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

export default TodoApp;



// ======================================== Benefits and Drawbacks =========================================== //
// ChatGPT Se Liya Hua Syntex ---> Benefits and Drawbacks.
// 1. Benefits: Yeh hook performance ko improve karta hai jab baar-baar reference change hona zaroori nahi hota.

// 2. Drawbacks: Overusing useCallback bhi overhead create kar sakta hai aur readability ko complex bana sakta hai, toh use karte waqt yeh sochna zaroori hai ki kya actual me optimization zaroori hai.



