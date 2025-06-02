// Handle To Checkbox component

// ============================================================================================================== //
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
import React, { useState } from "react";
function CheckboxComponent() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                Check me!
            </label>
            {isChecked ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
        </div>
    );
}

// export default CheckboxComponent;

// ============================================================================================================== //
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
import React, { useState } from "react";
 function Checkbos() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check me!
      </label>
      {isChecked ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
    </div>
  );
}

// export default Checkbos;


// ============================================================================================================== //
// ChatGPT se liya hua syntex ---> Multipal Checkbox Example
// 1. Multiple checkboxes handle karne ke liye, state ko array ya object me store karte hain.

// Multipal Checkbox Example
import React, { useState } from "react";
function CheckboxComponent() {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (e) => {
   
    const  {name, checked} = e.target; // Destructuring to get name and checked state
    setCheckedItems((prev) => {
      if (checked) {
        return [...prev, name]; // Add the name if checked
      } else {
        return prev.filter((item) => item !== name); // Remove the name if unchecked
      }
    });


    // const { value, checked } = e.target;
    // setCheckedItems((prev) => {
    //   if (checked) {
    //     return [...prev, value]; // Add the value if checked
    //   } else {
    //     return prev.filter((item) => item !== value); // Remove the value if unchecked
    //   }
    // });
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="item1"
         value="HTML "
          onChange={handleCheckboxChange}
        />
        Item 1
      </label>

      <label>
        <input
          type="checkbox"
          name="item2"
        value="JavaScript"
          onChange={handleCheckboxChange}
        />
        Item 2
      </label>

      <label>
        <input
          type="checkbox"
          name="item3"
          onChange={handleCheckboxChange}
          value="React"
        />
        Item 3
      </label>
      <div>
        {/* {Object.entries(checkedItems).map(([key, value]) => (
          <p key={key}>{`${key} is ${value ? "checked" : "unchecked"}`}</p>
        ))} */}

           <h1> itme print {checkedItems.join(", ")}</h1>
      </div>
    </div>
  );
}
export default CheckboxComponent;



//  multipal checkbox example
const [checkedItems, setCheckedItems] = useState({
  option1: false,
  option2: false,
});

const handleChange = (e) => {
  const { name, checked } = e.target;
  setCheckedItems(prev => ({
    ...prev,
    [name]: checked,
    
  }));
};

return (
  <>
    <label>
      <input
        type="checkbox"
        name="option1"
        checked={checkedItems.option1}
        onChange={handleChange}
      />
      Option 1
    </label>

    <label>
      <input
        type="checkbox"
        name="option2"
        checked={checkedItems.option2}
        onChange={handleChange}
      />
      Option 2
    </label>
  </>
);




// Multipal Checkbox Example
// const [checkedItems, setCheckedItems] = useState({
//   option1: false,
//   option2: false,
// });

// const handleChange = (e) => {
//   const { name, checked } = e.target;
//   setCheckedItems(prev => ({
//     ...prev,
//     [name]: checked,
//   }));
// };

// return (
//   <>
//     <label>
//       <input
//         type="checkbox"
//         name="option1"
//         checked={checkedItems.option1}
//         onChange={handleChange}
//       />
//       Option 1
//     </label>

//     <label>
//       <input
//         type="checkbox"
//         name="option2"
//         checked={checkedItems.option2}
//         onChange={handleChange}
//       />
//       Option 2
//     </label>
//   </>
// );




// =========================================== Interview Questions ============================================== //
// ChatGPT se liya hua syntex --->  Interview Me Kaise Bolna Hai?
// "React me checkbox handle karne ke 2 common ways hote hain. Best practice ye hai ki hum e.target.checked ka use karein kyunki ye DOM se directly checkbox ka actual state deta hai — true ya false. Ye method especially helpful hota hai jab multiple checkboxes ya form inputs ho. Agar hum toggle banana chahte hain ek hi checkbox ke liye, to !isChecked bhi kaam karta hai, lekin stale state ka issue aa sakta hai agar hum functional update na use karein. Isliye e.target.checked zyada safe aur scalable method hai."