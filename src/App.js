import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /** NOTE: useEFfect and dependencies array
   * If there are no dependencies our anonymous function would run once;
   * when the App starts. Although we update the state within our effect
   * triggering all subsequent Component logic to run our callback into
   * useEffect won't run again due to there being no changes in our
   * dependcy array.
   *
   * Our "effect" only executes after React has performed all DOM updates
   */
  useEffect(() => {
    const userLoginInformation = localStorage.getItem("isLoggedIn");
    if (userLoginInformation === "1") setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
