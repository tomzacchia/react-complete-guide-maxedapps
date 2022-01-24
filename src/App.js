import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [otherState, setOtherState] = useState(0);

  useEffect(() => {
    const userLoginInformation = localStorage.getItem("isLoggedIn");
    if (userLoginInformation === "1") setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = React.useCallback(() => {
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  function otherStateHandler() {
    setOtherState((prevState) => {
      return (prevState += 1);
    });
  }

  return (
    <AuthContext.Provider
      value={React.useMemo(
        () => ({
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
        }),
        [isLoggedIn, logoutHandler]
      )}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && (
          <Home
            onLogout={logoutHandler}
            onOtherStateClick={otherStateHandler}
            otherStateValue={otherState}
          />
        )}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
