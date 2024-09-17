import React from 'react'

function Home() {
  return (
    <div>
        <h1> Home Page Welcome </h1>
    </div>
  )
}

export default Home


// return (
//     <div>
//          <div className={styles.navbarContainer}>
//     <nav>
//       <ul>
//       <Link to="/">Home</Link> {/* Yeh component ek link create karta hai jo user ko Home page par le jayega. 'to' prop se hum specify karte hain ki user ko kis page par redirect karna hai. */}
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/post">Post</Link></li>
//       </ul>
//     </nav>
   
//   </div>
//    <main>
//     <Outlet /> {/* Yeh component current route ke andar jo bhi child route hoga, uska component yahan render karega, yani dikhayega */}
//     </main>
//     </div>
   
//   );