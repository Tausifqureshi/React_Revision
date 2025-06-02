// ================================================ Text Input =================================================== //
// ChatGPT SE liya hus sentex --->  Basic difference between text input and checkbox/radio in React controlled components:

// 1. Text Input (<input type="text" />)
// Value jo dikhta hai woh value attribute se control hota hai.

// React me jab bhi user type karta hai, onChange event se nayi value milti hai event.target.value.

// Isliye, React me text input me state ko value prop se bind karte hain.


// ChatGPT SE liya hus sentex --->  inut ke text me value attribute me state vaibe q dalte hai
// Text Input (<input type="text" />)
// Value jo dikhta hai woh value attribute se control hota hai.
// React me jab bhi user type karta hai, onChange event se nayi value milti hai event.target.value.
// Isliye, React me text input me state ko value prop se bind karte hain.

// ================================================= CheckBox ==================================================== //
// // ChatGPT SE liya hus sentex ---> 2. Checkbox (<input type="checkbox" />)
// Checkbox me checked attribute se control hota hai.

// React me jab bhi user checkbox ko check/uncheck karta hai, onChange event se nayi checked state milti hai event.target.checked.
// Isliye, React me checkbox me state ko checked prop se bind karte hain.


// ChatGPT SE liya hus sentex ---> Checkbox (<input type="checkbox" />) checkbox and radio  button ke checked attribute ne state varible  ko q datlte hai.

// Checked state jo dikhta hai woh checked attribute se control hota hai.
// User ke check/uncheck hone par event.target.checked milta hai, jo boolean hota hai (true or false).
// Isliye React me checkbox/radio ko state se checked prop se bind karte hain.

// ============================================== Radio Button  ================================================= //
// ChatGPT SE liya hus sentex ---> 3. Radio Button (<input type="radio" />)

// Radio button me bhi checked attribute se control hota hai.
// Lekin, radio buttons group me hote hain, toh unka value attribute bhi important hota hai.
// React me jab bhi user radio button select karta hai, onChange event se nayi checked state milti hai event.target.checked.
// Isliye, React me radio buttons me state ko checked prop se bind karte hain.

