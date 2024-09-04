let dynamicKey1 = "email";
let dynamicKey2 = "phoneNumber";

let person = {
  firstName: "Tausif",
  lastName: "Khan",
  [dynamicKey1]: "tausif@example.com",
  [dynamicKey2]: "1234567890"
};

console.log(person)
console.log(person[dynamicKey1]);
