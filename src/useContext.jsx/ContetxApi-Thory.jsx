// =============================================== Context API =================================================== //
// ChatGPT Se Liya Hua Syntex ---> React.js me Context API ka use tab hota hai jab hume prop drilling se bachna hota hai. Prop drilling ka matlab hai, jab ek prop ko bahut saari components ke through pass karna padta hai, chahe beech ke components ko us prop ki zarurat na ho. Isse bachne ke liye Context API ka istemal kiya jata hai, jo React ke andar ek tarike ka global state management system jaisa kaam karta hai.



// ===================================== Context API kaam kaise karta hai ======================================== //
// ChatGPT Se Liya Hua Syntex ---> Context API kaam kaise karta hai:Context API ka use karke aap ek value (jaise ki state, function, ya object) ko tree ke andar kisi bhi component ko directly provide kar sakte ho, bina usko har ek intermediate component ke through pass kiye.


//  ChatGPT Se Liya Hua Syntex ---> Context API kaam kaise karta hai: Context API ka basic structure teen cheezon par based hota hai.

// 1. Create Context (Context banayein). Sabse pehle, hume ek Context banana padta hai. Iske liye React.createContext() ka use hota hai.
// MyContext-Compontents.js
import { createContext } from 'react';

// Context create kiya
const MyContext = createContext();

export default MyContext;


// 2. Provide Context (Context provide karein). Jahan hume context ka data share karna hai, wahan pe hum Context.Provider ka use karte hain. Ye Provider component ke children ko wo data provide karta hai jo hum isme pass karte hain.
// MyProvider-Components.js
import React, { useState } from 'react';
import MyContext from './MyContext'; // Context import kiya

const MyProvider = ({ children }) => {
    const [value, setValue] = useState("Hello from Context!");

    return (
        // Provider component jo data ko share karega
        <MyContext.Provider value={{ value, setValue }}>
            {children} {/* Children components ko data provide hoga */}
        </MyContext.Provider>
    );
};

// export default MyProvider;




// 3. Consume Context (Context ko consume karein). Jis component ko context ka data chahiye, wahan hum useContext hook ka use karte hain. Isse hume context me stored value mil jati hai bina props pass kiye.

// MyComponent.js - Context ko Consume Karna

// import React, { useContext } from 'react';
// import MyContext from './MyContext'; // Context import kiya

const MyComponent = () => {
    // useContext hook ka use karke context se value access kiya
    const { value } = useContext(MyContext);

    return <p>{value}</p>; // Context ka value render kiya
};

// export default MyComponent;




// 4. App.js - Sab Components ko Integrate Karna.
// App.js-Components.jsx.

import React from 'react';
import MyProvider from './MyProvider'; // Provider import kiya
import MyComponent from './MyComponent'; // Component import kiya

const App = () => {
    return (
        <MyProvider>
            <div>
                <h1>Context API Example</h1>
                <MyComponent /> {/* Yaha pe context ka data consume hoga */}
            </div>
        </MyProvider>
    );
};

// export default App;
