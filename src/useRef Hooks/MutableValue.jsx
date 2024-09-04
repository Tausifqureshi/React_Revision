// ============================================== Mutable Values ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Mutable Values.

// 1. Modifiable: Mutable values aisi values hoti hain jinhe modify kiya ja sakta hai. Jaise ki agar ek object ya array ki value change ki ja sake, to usse hum mutable value kehte hain.

// 2. Reference-Based Updates: Mutable values ko jab change kiya jata hai, to actual memory location par store hui value change hoti hai, yani naye object ki zaroorat nahi hoti. Iska matlab agar do variables ek hi mutable object ko reference kar rahe hain, aur us object mein koi change kiya jata hai, to dono variables mein wo change reflect hoga.


// Example: Mutable Value in JavaScript
let person = { name: 'John', age: 25 };

// Mutable value: We can change the properties of the object
person.age = 26;

console.log(person.age); // Output: 26



// ========================================= Mutable Values Use Case ============================================ //
// ChatGPT Se Liya Hua Syntex ---> Mutable Values ka Use Case
// Mutable values ka upyog un scenarios mein hota hai jaha performance ko optimize karna hota hai ya jaha frequent updates ki zaroorat hoti hai. Kuch use cases:

// Data Structures: Mutable data structures jaise arrays, lists, objects jaha aapko values ko add, remove ya update karne ki zaroorat padti hai.

// State Management: Jab aapko application ke state ko manage karna hota hai aur aapko kisi object ya array ke specific properties ko frequently update karna hota hai.

// Low-Level Programming: Jab aapko directly memory manipulation karna padta hai (e.g., C/C++ mein pointers ke saath kaam karte hue).




// ============================================= Immutable Values ================================================ //
// ChatGPT Se Liya Hua Syntex ---> Immutable values mein, jab bhi ek value change hoti hai, ek naya object create hota hai jisme wo nayi value hoti hai. Immutable data structures ka upyog functional programming mein hota hai jaha state changes ko avoid kiya jata hai.

// Example: Immutable Value in JavaScript.
let name = 'John';

// Immutable value: You can't change the string directly
name[0] = 'J'; // No effect
console.log(name); // Output: 'John'

// But you can create a new string
name = 'Jon'; 
console.log(name); // Output: 'Jon'




// Mutable vs Immutable
//1.  Mutable: Aisi values jo change ho sakti hain. Example: Arrays, Objects.
// 2. Immutable: Aisi values jo change nahi ho sakti hain. Example: Strings, Numbers (in JavaScript), Immutable.js objects.