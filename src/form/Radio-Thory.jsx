// ============================================== Radio Button  ================================================= //
// ChatGPT SE liya hus sentex ---> 3. Radio Button (<input type="radio" />)

// 1.  Radio button me bhi checked attribute se control hota hai.
// 2. Lekin, radio buttons group me hote hain, toh unka value attribute bhi important hota hai.
// 3. React me jab bhi user radio button select karta hai, onChange event se nayi checked state milti hai event.target.checked.
// 4. Isliye, React me radio buttons me state ko checked prop se bind karte hain.


// ChatGPT SE liya hus sentex ---> Checkbox (<input type="checkbox" />) checkbox and radio  button ke checked attribute me state varible  ko q datlte hai.

// 1. Checked state jo dikhta hai woh checked attribute se control hota hai.
// 2. User ke check/uncheck hone par event.target.checked milta hai, jo boolean hota hai (true or false).
// 3. Isliye React me checkbox/radio ko state se checked prop se bind karte hain.



// ================= checkbox aur radio button dono React me alag tareeke se handle hote hain ==================== //

//ChatGPT SE liya hus sentex ---> checkbox aur radio button dono React me alag tareeke se handle hote hain, kyunki dono ka behavior alag hota hai.

//  Radio button ka use kab hota hai. Jab user sirf ek option select kar sakta hai
// 1. Gender kya hai? 🔘 Male 🔘 Female 🔘 Other
// 2. User ek hi option select kar sakta hai


// React me kaise handle karte hain?
const [gender, setGender] = useState("");
const handleRadioChange = (e) => {
  setGender(e.target.value);
};

// ✔️ Har radio button ka value="..." hota hai
// ✔️ checked={gender === "male"} jaisa comparison use hota hai
// ✔️ Sirf ek value state me store hoti hai

// ========================== Radio Button me e.target.checked kyun use nahi karte  ============================== //
// ChatGPT SE liya hus sentex ---> Radio button me hum e.target.checked kyun use nahi karte directly jaise checkbox me karte hain. Aur hum mostly e.target.value kyun use karte hain. 


// ChatGPT SE liya hus sentex --->  Seedha Answer:
// Kyunki radio button me hamesha ek hi option select hota hai, aur uski pehchaan uske value se hoti hai — na ki checked se.


// ChatGPT SE liya hus sentex ---> 📌 Ab agar tu ye kare:
if (e.target.checked) {
  setGender(e.target.value);
}
// Ye chalega, lekin pointless hai. Kyunki jab radio button change hota hai, tab hamesha checked === true hota hai.
// To if (e.target.checked) likhne ka koi faida nahi



// ChatGPT SE liya hus sentex ---> Radio buttons ka group hota hai — aur sirf ek hi active ho sakta hai
 <input
  type="radio"
  value="male"
  checked={gender === "male"} // react is controlling this
  onChange={(e) => setGender(e.target.value)} // sirf value use hoti hai
 /> 

// Agar tu e.target.checked use karega to wo to true hi aayega — lekin usse pata nahi chalega kaunsa radio select hua.Isliye hum value ka use karte hain.



// ChatGPT SE liya hus sentex --->Final Line:
// 1. Radio button me e.target.value best hota hai
// 2. Checkbox me e.target.checked kaafi useful hota hai
// 3. Radio me hum value set karte hain, checkbox me true/false check karte hain — isliye unka handle karne ka style alag hota hai.