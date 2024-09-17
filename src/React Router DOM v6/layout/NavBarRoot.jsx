import React from "react";
import styles from "./NavBarRoot.module.css";
import { Outlet , Link} from "react-router-dom";

function NavBarRoot() { // Yeh NavBarRoot component ko page ke sharee components me dikhana hai.
return (
    <div>
         <div className={styles.navbarContainer}>
    <nav>
      <ul>
      <li><Link to="/">Home</Link></li>{/* Yeh component ek link create karta hai jo user ko Home page par le jayega. 'to' prop se hum specify karte hain ki user ko kis page par redirect karna hai. */}

        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/post">Post</Link></li>
      </ul>
    </nav>
   
  </div>
    <main>
    <h1>Mian contant</h1>
  <Outlet /> {/* Yeh component current route ke andar jo bhi child route hoga, uska component yahan render karega yani dikhayega. Iska use nested routes dikhane ke liye hota hai. Note karein ki yeh 'children' prop se alag hai. */}
</main>

    </div>
   
  );
}

export default NavBarRoot;
