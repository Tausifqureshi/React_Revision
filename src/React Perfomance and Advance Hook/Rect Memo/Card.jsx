import React, { memo } from "react";
// import { useTime } from "./useTime";
// import { format } from "date-fns";

function Card({ state1 }) {
  console.log("Card Components");
  // const time = useTime();

  return (
    <div
      style={{
        background: state1 ? "green" : "red",
        width: "300px",
        height: "150px",
        color: "white",
        fontWeight: "bold",
        fontSize: "1.2rem",
        textAlign: "center",
        padding: "1rem",
        marginTop: "1rem",
      }}
    >
      <h3 style={{ color: "white" }}>Card based on state1</h3>

      {/* {JSON.stringify(tiem)} */}
      {/* <h2> Time : {format(time, "hh:mm:ss a")}</h2> */}
    </div>
  );
}

export default memo(Card); // `memo` ka use yaha isliye kiya gaya hai, taaki jab `Card` component ko `state1` ke props milein, sirf tab hi yeh re-render ho. Agar hum `state2` ko check/change kar rahe hain, toh yeh component render nahi hoga, kyunki `memo` ke saath ye optimization hoti hai.
// `memo` hook ka bhi yeh hi fayda hai, par uska use tab kiya jata hai jab kisi calculation ya expensive function ko repeatedly run hone se rokna ho. `memo` puri component re-rendering ko control karta hai, jabki `useMemo` specific values ko memoize karke React ki performance enhance karta hai.
