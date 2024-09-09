// =========================================== useEffect React Hook ============================================== //
// ChatGPT Se Liya Hua Syntex ---> useEffect React Hook ko functional components ke andar side effects ko manage karne ke liye use kiya jata hai. Side effects aise actions hote hain jo React ke rendering ke process se bahar hote hain, jaise API calls karna, timers set karna, DOM ko directly manipulate karna, ya subscriptions handle karna.


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

