import React from 'react'


// function RenderList({number, firstName}) {//parameter destucturing. is ki jaga props bhi nuse kar sakte te.
// function RenderList(props) {
function RenderList({id, name}) {
  return (
    <div>
     {/* <h3> {props.number} {props.firstName} </h3> */}
     <h3> {id} {name} </h3>
     
    </div>
  )
}

export default RenderList






// =============================================== List Render =================================================== //
// ChatGPT Se Liya Hua Syntex ---> 1. List Render Karne ka Basic Concept.
// React me, agar aapko kisi array ko list me render karna ho, to aap .map() method ka use karte hain. Ye method array ke har element par ek function apply karta hai aur naya array return karta hai.


// ========================================== Rendering Lists in JSX ============================================= //
// ChatGPT Se Liya Hua Syntex ---> 2. Rendering Lists in JSX
// Jab aap list ko render karte hain, to aap JSX me directly .map() ka use kar sakte hain. Har element ke liye ek unique key prop dena zaroori hota hai taaki React efficiently re-render kar sake.