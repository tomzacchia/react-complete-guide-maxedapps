import React, { useContext } from "react";
import AuthContext from "store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  // NOTE: pass in pointer to AuthContext instance, we get back context value
  const context = useContext(AuthContext);

  console.log("NAV rendered");

  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            {/* NOTE: consuming context method */}
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
