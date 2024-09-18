// =============================================== useContext =================================================== //
// ChatGPT Se Liya Hua Syntex ---> useContext React ka ek hook hai jo React me context API ke sath use hota hai. Ye tumhe components ke beech state ya data ko easily share karne ka tareeqa provide karta hai, bina prop drilling ki zarurat ke. 




// =========================================== Context API Kya Hai? ============================================== //
// ChatGPT Se Liya Hua Syntex ---> Context API Kya Hai: Context API React me ek powerful feature hai jo tumhe global state ya data ko directly kisi bhi component me access karne ki facility deta hai. Normally agar tumhe parent component se child component tak data pass karna hota hai to tum props use karte ho, lekin agar structure deep ho to data ko har level par pass karna padta hai, jise hum prop drilling kehte hain. Is problem ko solve karne ke liye Context API ka use hota hai.



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
