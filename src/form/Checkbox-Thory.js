// Handle To Checkbox component
// ================= checkbox aur radio button dono React me alag tareeke se handle hote hain ==================== //

//ChatGPT SE liya hus sentex ---> checkbox aur radio button dono React me alag tareeke se handle hote hain, kyunki dono ka behavior alag hota hai.

//  Checkbox ka use kab hota hai. Jab user multiple options select kar sakta hai.

// 1. Aapki hobbies kya hain? ✅ Cricket ✅ Football ✅ Music
// 2. User 1 se zyada select kar sakta hai
const [hobbies, setHobbies] = useState([]);

const handleCheckboxChange = (e) => {
  const { value, checked } = e.target;
  setHobbies((prev) =>
    checked ? [...prev, value] : prev.filter((item) => item !== value)
  );
};

// ✔️ Har checkbox ka checked={hobbies.includes("value")} hota hai
// ✔️ On change pe value array me add/remove hoti hai


// ========================================= CheckBox value attribute ============================================ //
//  ChatGPT SE liya hus sentex ---> Checkbox value attribute ka use kab hota hai.

// 1. Jab sirf ek checkbox ho (e.g. "I agree to terms")
// To value dena zaroori nahi hota.
const [agreed, setAgreed] = useState(false);

<input
  type="checkbox"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>
// Yahan value ki koi zarurat nahi hai, kyunki bas hume pata karna hai user ne tick kiya ya nahi (true/false).

//  2. Jab multiple checkboxes ho (e.g. select hobbies)
// To value dena zaroori hota hai — warna pata nahi chalega kaunsa option tick hua.

const [selected, setSelected] = useState([]);
const handleChange = (e) => {
  const { value, checked } = e.target;
  setSelected((prev) =>
    checked ? [...prev, value] : prev.filter((item) => item !== value)
  );
};

{/* <input
  type="checkbox"
  value="cricket"
  checked={selected.includes("cricket")}
  onChange={handleChange}
/> */}

<inputm    
  type="checkbox"
  value="football"
  checked={selected.includes("football")}
  onChange={handleChange}
/>

// Agar tu value nahi dega to React e.target.value me "on" return karega (jo default hota hai), aur wo useful nahi hai.

//  Ek Line me Gyaan -----> Checkbox me agar multiple options handle kar raha hai to value zaroor de — warna pata hi nahi chalega kaunsa select hua.




//====Checkbox and radio button me value me ham state varible name q nhi dete checked me dete hai state varible====//

// chatGPT se liya hua syntex --->  Tera Sawal ----> Radio/Checkbox me value me hum state ka naam kyun nahi dete.Jabki text input me value={state} likhte hain. input ka code thory.js me diya hua hai.




// ========================================= bina e.target.checked ke use========================================= //
// ChatGPT se liya hua syntex ---> Toggle kar re bina e.target.checked ke use karne ka
// 1. Agar toggle true hai, to false ho jayega.
// 2. Agar toggle false hai, to true ho jayega.
// 3. Ye bhi toggle karne ka valid tarika hai, bas ye current state par dependent hai.

// ChatGPT se liya hua syntex ---> kab use nhi karna chaiye e.target.checked
// Use !isChecked only when:
// 1. Ek hi checkbox hai
// 2. Toggle UI bana rahe ho (like theme switch, show/hide password)
// 3. Tum sure ho ki current state always latest hoga

// ChatGPT se liya hua syntex ---> ✅ Advantages:
// 1. ✅ Code chhota aur simple
// 2. ✅ Useful for toggle components (e.g. side drawer, menu, show/hide)

// ChatGPT se liya hua syntex ---> ❌ Disadvantages:
// 1. ❌ Multiple checkboxes handle nahi kar sakta easily
// 2. ❌ Risk of stale state if not using functional update
// 3. ❌ Not suitable for real form handling

// Singal Checkbox Example  Toggle bina e.target.checked ke use ke.
// import React, { useState } from "react";
// function CheckboxComponent() {
//     const [isChecked, setIsChecked] = useState(false);

//     const handleCheckboxChange = () => {
//         setIsChecked(!isChecked);
//     };

//     return (
//         <div>
//             <label>
//                 <input
//                     type="checkbox"
//                     checked={isChecked}
//                     onChange={handleCheckboxChange}
//                 />
//                 Check me!
//             </label>
//             {isChecked ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
//         </div>
//     );
// }

// export default CheckboxComponent;

// ====================================== e.target.checked use karne ke.========================================== //
// ChatGPT se liya hua syntex ---> Toggle kar re e.target.checked use karne ke.
// 1. Lekin e.target.checked use karne ka fayda kya hai?
// 2. More reliable: Actual DOM value se update karta hai.
// 3. Asynchronous setState me issue nahi aata.

// ChatGPT se Liya Hua Syntex ---> Kab kaunsa use kare. ✅ Use e.target.checked jab use:
// 1. Kya karta hai ====> Ye checkbox ke actual HTML element se checked property uthata hai — jo true ya false hoti hai.

// 2. Form elements ke sath kaam kar rahe ho (checkboxes, radios)
// 3. Multiple checkboxes/radio buttons handle karne ho
// 4. Jab tum DOM ke actual behavior se state sync rakhna chahte ho


// ChatGPT se Liya Hua Syntex ---> ✅ Advantages:
// 1. ✅ Real-time value milta hai from DOM

// 2. ✅ Accurate aur reliable — no stale state issue

// 3.  ✅ Zyada scalable (large forms, dynamic inputs)

// 4. ✅ Clean aur standard practice

// ChatGPT se Liya Hua Syntex --->❌ Disadvantage:
// 1. Thoda extra typing (destructuring etc.), but negligible

// checkbox Example e.target.checked use karne ka
// import React, { useState } from "react";
//  function Checkbos() {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//         />
//         Check me!
//       </label>
//       {isChecked ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
//     </div>
//   );
// }

// export default Checkbos;


// ======================== Multipal Checkbox Example. Array-Based Checkbox Handling ============================ //
// kaam 100% same hi ho raha hai — sirf data ka structure alag hai, aur handle karne ka tareeka thoda different hai. Array and object dono me checkbox handle karne ka logic similar hai, bas data structure alag hai. Array me items ko push ya filter karte ho, aur object me key-value pairs update karte ho.

// ChatGPT se liya hua syntex ---> Multipal Checkbox Example. Array-Based Checkbox Handling
// 1. Jab koi item checked hota hai → uska value array me push karte ho.
// 2. Jab unchecked hota hai → filter karke array se remove.

// import React, { useState } from "react";
// function CheckboxComponent() {
//   const [checkedItems, setCheckedItems] = useState([]);

//   const handleCheckboxChange = (e) => {
   
//     const  {name, checked} = e.target; // Destructuring to get name and checked state
//     setCheckedItems((prev) => {
//       if (checked) {
//         return [...prev, name]; // Add the name if checked
//       } else {
//         return prev.filter((item) => item !== name); // Remove the name if unchecked
//       }
//     });


//     // const { value, checked } = e.target;
//     // setCheckedItems((prev) => {
//     //   if (checked) {
//     //     return [...prev, value]; // Add the value if checked
//     //   } else {
//     //     return prev.filter((item) => item !== value); // Remove the value if unchecked
//     //   }
//     // });
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="item1"
//           value="HTML "
//           onChange={handleCheckboxChange}
//         />
//         Item 1
//       </label>

//       <label>
//         <input
//           type="checkbox"
//           name="item2"
//         value="JavaScript"
//           onChange={handleCheckboxChange}
//         />
//         Item 2
//       </label>

//       <label>
//         <input
//           type="checkbox"
//           name="item3"
//           onChange={handleCheckboxChange}
//           value="React"
//         />
//         Item 3
//       </label>
//       <div>

//            <h1> itme print {checkedItems.join(", ")}</h1>
//       </div>
//     </div>
//   );
// }
// export default CheckboxComponent;


// ChatGPT se liya hua syntex ---> Array-Based Checkbox Handling dynamic example
// ArrayBasedCheckbox.js

// import React, { useState } from "react";

// function ArrayBasedCheckbox() {
//   const [checkedItems, setCheckedItems] = useState([]);
//   const options = ["html", "css", "js"];

//   const handleChange = (e) => { 
//     const { value, checked } = e.target;
//     setCheckedItems((prev) =>
//       checked ? [...prev, value] : prev.filter((item) => item !== value)
//     );
//   };

//   return (
//     <div>
//       <h2>🔘 Array Based</h2>
//       {options.map((item) => (
//         <label key={item}>
//           <input
//             type="checkbox"
//             value={item}
//             checked={checkedItems.includes(item)}
//             onChange={handleChange}
//           />
//           {item.toUpperCase()}
//           <br />
//         </label>
//       ))}

//       <p>✅ Checked Items: {checkedItems.map((item) => item.toUpperCase()).join(", ")}</p>
//     </div>
//   );
// }

// export default ArrayBasedCheckbox;


// ========================= Multipal Checkbox Example Object Based Checkbox Handling ============================ //
// kaam 100% same hi ho raha hai — sirf data ka structure alag hai, aur handle karne ka tareeka thoda different hai. Array and object dono me checkbox handle karne ka logic similar hai, bas data structure alag hai. Array me items ko push ya filter karte ho, aur object me key-value pairs update karte ho

// ChatGPT se liya hua syntex --->   multipal checkbox example Object Based Checkbox.js
// 1. Har checkbox ka ek name hota hai.
// 2. Us name ki value true ya false hoti hai.
// 3. On change: setCheckedItems({ ...prev, [name]: checked })

// import React, { useState } from "react";

// function ObjectBasedCheckbox() {
//   const [checkedItems, setCheckedItems] = useState({
//     html: false,
//     css: false,
//     js: false,
//   });

//   const handleChange = (e) => {
//     const { name, checked } = e.target;
//     setCheckedItems((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   return (
//     <div>
//       <h2>🔘 Object Based</h2>

//       <label>
//         <input
//           type="checkbox"
//           name="html"
//           value={"html"}
//           checked={checkedItems.html}
//           onChange={handleChange}
//         />
//         HTML
//       </label>
//       <br />

//       <label>
//         <input
//           type="checkbox"
//           name="css"
//           checked={checkedItems.css}
//           onChange={handleChange}
//         />
//         CSS
//       </label>
//       <br />

//       <label>
//         <input
//           type="checkbox"
//           name="js"
//           checked={checkedItems.js}
//           onChange={handleChange}
//         />
//         JavaScript
//       </label>

//       <p>
//         ✅ Checked Items:{" "}
//         {Object.entries(checkedItems)
//           .filter(([key, value]) => value)
//           .map(([key]) => key.toUpperCase())
//           .join(", ")}
//       </p>
//     </div>
//   );
// }

// export default ObjectBasedCheckbox;




// =========================================== Interview Questions ============================================== //
// ChatGPT se liya hua syntex --->  Interview Me Kaise Bolna Hai?
// "React me checkbox handle karne ke 2 common ways hote hain. Best practice ye hai ki hum e.target.checked ka use karein kyunki ye DOM se directly checkbox ka actual state deta hai — true ya false. Ye method especially helpful hota hai jab multiple checkboxes ya form inputs ho. Agar hum toggle banana chahte hain ek hi checkbox ke liye, to !isChecked bhi kaam karta hai, lekin stale state ka issue aa sakta hai agar hum functional update na use karein. Isliye e.target.checked zyada safe aur scalable method hai."