// =========================================== useEffect React Hook ============================================== //
// ChatGPT Se Liya Hua Syntex ---> useEffect React Hook ko functional components ke andar side effects ko manage karne ke liye use kiya jata hai. Side effects aise actions hote hain jo React ke rendering ke process se bahar hote hain, jaise API calls karna, timers set karna, DOM ko directly manipulate karna, ya subscriptions handle karna.

// ChatGPT Se Liya Hua Syntex ---> useEffectka use side effects ko perform karne ke liye kiya jata hai, side effects ka matlab hai wo hota hai  jo react se bahar hota hai, jaise API call karna, DOM ko manipulate karna, ya kisi event listener ko add ya remove karna. timers set karna, ya subscriptions handle karna.

//// ChatGPT Se Liya Hua Syntex ---> 🔸 Side Effects kya hote hain?
// Side effects woh kaam hote hain jo component ke render ke baad ya kisi state ke change ke baad hote hain — jaise:

// API call karna

// setTimeout, setInterval use karna

// DOM ko manually change karna

// Event listener lagana

// Local storage access karna

// Cleanup karna (like removing event listener)


// //  usEffect chalne ke rules:
// | Part                           | Description                                |
// | ------------------------------ | ------------------------------------------ |
// | `useEffect(() => {}, [])`      | Sirf ek baar chalega (component mount par) |
// | `useEffect(() => {}, [state])` | Jab `state` change hoga, tab chalega       |
// | `useEffect(() => {})`          | Har render ke baad chalega (rare case)     |
// | `useEffect(() => { return () => {}; }, [state])` | Cleanup function chalega (state change par) |
// | `useEffect(() => { return () => {}; }, [1props, props])` | props chnage hone per yaah function call hoga |


// ========================================= useEffect Hook Parameters =========================================== //
// ChatGPT Se Liya Hua Syntex --->  Parameters:
// Effect function (callback): Yeh function wo code execute karta hai jo side effects ke liye likha gaya ho. Side effects ka matlab wo actions jo directly render ke baad perform kiye jate hain, jaise API calls, DOM ke changes, timers set karna, etc.

// Dependencies array: Is array me wo values di jati hain jinke change hone par useEffect function ko dobara execute kiya jaye. Agar aap yeh array khali chodte hain ([]), to effect function sirf ek baar execute hoga, jab component mount hoga. Agar aap dependencies daalte hain, to jab jab wo dependencies update hoti hain, tab tab effect function firse run hota hai.

import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // useEffect will run every time the component renders or count changes
  useEffect(() => {
    console.log(`You clicked ${count} times`);

    // Cleanup function, will be called on unmount or before the next render
    return () => {
      console.log('Cleaning up...');
    };
  }, [count]); // Runs when 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ExampleComponent;


// ===================================== useEffect Hook Important Concepts ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Important Concepts:
// 1. Mounting: Jab component pehli baar DOM me add hota hai, to useEffect ka callback function run hota hai.

// 2. Updating: Jab state ya props update hote hain aur dependencies array me jo values hain wo change hoti hain, to useEffect phir se run hota hai.

// 3. Unmounting: Jab component DOM se remove ho raha hota hai, to cleanup function (agar defined kiya gaya ho) run hota hai.



// ===================================== useEffect Hook API Calls ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Example: API Call with useEffect.
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array ensures it runs only once (on mount)

  return (
    <div>
      <ul> 
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

// export default App;




// ===================================== useEffect Hook LocalStorage ======================================= //

import React, { useState, useEffect } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // 🔹 Load data from localStorage when component mounts
  useEffect(() => {
    try {
      const savedData = JSON.parse(localStorage.getItem('userForm')) || {};
      setFormData(savedData);
    } catch (error) {
      console.error('Invalid JSON in localStorage:', error);
    }
  }, []);

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 🔹 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    localStorage.setItem('userForm', JSON.stringify(formData));
    alert('Form data saved to localStorage!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Save</button>
      </form>

      <p><strong>Saved Name:</strong> {formData.name}</p>
      <p><strong>Saved Email:</strong> {formData.email}</p>
    </div>
  );
};

// export default UserForm;



// ===================================== useEffect Hook settime out  ======================================= //
import React, { useState, useEffect } from "react";

function TimeoutExample() {
  const [message, setMessage] = useState("Waiting...");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage("3 seconds passed!");
    }, 3000);

    // Cleanup agar component jaldi unmount ho jaye to timeout clear kar de
    return () => clearTimeout(timeoutId);
  }, []);

  return <div>{message}</div>;
}

// export default TimeoutExample;





import React, { useState, useEffect } from "react";

function IntervalExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup interval jab component unmount ho ya effect re-run ho
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}

// export default IntervalExample;


// ===================================== useEffect Hook dom manipulation ======================================= //
// . Input pe automatically focus set karna (on mount) . dom element pe direct focus lagana
import React, { useEffect, useRef } from "react";

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // DOM element pe direct focus lagana
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
    </div>
  );
}

// export default AutoFocusInput;



// ============================= useEffect me kab api call karna ya nhi karna ==================================== //
// 1️⃣ Auto Data Load (page open hote hi call hoti hai → useEffect me) Ye wali APIs hamesha page khulte hi load hoti hain:

// getProducts → Products ki list dikhane ke liye
// getCategories → Category menu banane ke liye
// getCart → Logged in user ka cart load karne ke liye
// getCurrentUser / profile → User ka data dikhane ke liye
// getOrders → Past orders history dikhane ke liye
// getSettings → Website settings / banners / offers





// 2️⃣ User Action Based Data (tabhi chale jab user kuch kare → button / form / event). Ye wali APIs tabhi hit hoti hain jab user kuch action kare:

// loginUser → Jab login form submit kare
// registerUser → Jab signup form submit kare
// addToCart → Jab "Add to Cart" button dabaye
// removeFromCart → Jab cart se item delete kare
// placeOrder → Jab checkout kare
// logoutUser → Jab logout button dabaye
// updateProfile → Jab user profile update kare