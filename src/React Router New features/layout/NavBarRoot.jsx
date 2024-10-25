import React from "react";
import styles from "./NavBarRoot.module.css";
import { Outlet, Link , useNavigation} from "react-router-dom";
import { useAuth } from "../context API/ContextAuth";
function NavBarRoot() {
  const {isLogin, setIsLogin} = useAuth();
  function logOut (){
    setIsLogin(false); //Post ka data show nhi hoga LogIn button dehke ga false kara se.
  }
  const navigation = useNavigation();
  console.log("Use Navigation" ,navigation);
  return (
    <div className={styles.container}>
      <header className={styles.navbarContainer}>
        <nav>
          <ul className={styles.navList}>
            <li><Link to="/home">Home</Link></li> {/* Yeh component ek link create karta hai jo user ko Home page par le jayega. 'to' prop se hum specify karte hain ki user ko kis page par redirect karna hai. */}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/post">Post</Link></li>
            {!isLogin &&  <li><Link to="/login">Login</Link></li>}
            {/* User login nhi tu hi login page pe bheje ga ye logic */}
           
            {isLogin &&  <li onClick={logOut}>LogOut</li>}
            {/* User Login tohi logout ka button show hoga warna login button show hoga */}
          </ul>
          
        </nav>
      </header>

      <main className={styles.mainContent}>
        <h1>Main Content</h1>
        <Outlet /> {/* Yeh component current route ke andar jo bhi child route hoga, uska component yahan render karega yani dikhayega. Iska use nested routes dikhane ke liye hota hai. Note karein ki yeh 'children' prop se alag hai. */}
      </main>
    </div>
  );
}

export default NavBarRoot;



// Navlink Code.
// import React from "react";
// import styles from "./NavBarRoot.module.css";
// import { Outlet, NavLink } from "react-router-dom";
// NavLink me inta fark hai bus ya active class deta hai navlik and link or same hi hai work karte hai.

// function NavBarRoot() {
//   return (
//     <div className={styles.container}>
//       <header className={styles.navbarContainer}>
//         <nav>
//           <ul className={styles.navList}>
//             {/* NavLink ka use karein aur 'activeClassName' ya 'className' me active class ko handle karein */}
//             <li><NavLink to="/home" className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink></li>
//             <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>About</NavLink></li>
//             <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ""}>Contact</NavLink></li>
//             <li><NavLink to="/post" className={({ isActive }) => isActive ? styles.active : ""}>Post</NavLink></li>
//           </ul>
//         </nav>
//       </header>

//       <main className={styles.mainContent}>
//         <h1>Main Content</h1>
//         <Outlet /> {/* Nested Routes ke liye */}
//       </main>
//     </div>
//   );
// }

// export default NavBarRoot;
