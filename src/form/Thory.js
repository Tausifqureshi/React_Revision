// ================================================ Text Input =================================================== //
// ChatGPT SE liya hus sentex --->  Basic difference between text input and checkbox/radio in React controlled components.

// ChatGPT SE liya hus sentex ---> 1. input ke text me value attribute me state vaibe q dalte hai
// Text Input (<input type="text" />)
// Value jo dikhta hai woh value attribute se control hota hai.
// React me jab bhi user type karta hai, onChange event se nayi value milti hai event.target.value.
// Isliye, React me text input me state ko value prop se bind karte hain.



// ================= Checkbox and radio button me value me ham state varible name q nhi dete  ==================== //
// chatGPT se liya hua syntex --->  Tera Sawal ----> Radio/Checkbox me value me hum state ka naam kyun nahi dete.Jabki text input me value={state} likhte hain.

//  Simple Samjho —  1. Text Input: value={state}

// 1. Yahan value ka matlab hota hai... Jo bhi user input likhe, wo state me store hoga — aur wahi value wapas input box me dikhegi.

// 2. Agar tu value={username} nahi dega to user input uncontrolled ho jayega.
// 3. Isliye text input me humesha value={state} likhte hain — React se control karne ke liye.

// const [username, setUsername] = useState("");
// <input
//   type="text"
//   value={username}       // 🟢 state bind ho rahi hai.yeh React ko batata hai — "jo state me hai wahi box me dikhao"
//   onChange={(e) => setUsername(e.target.value)}
// />

// ➡️ Yahan value ka kaam hai input box ka content show karna
// ➡️ Ye ek controlled component hai. Jo bhi likhoge, wo state me jayega, aur fir wahi wapas input me dikhega.



