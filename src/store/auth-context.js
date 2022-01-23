import React from "react";

// NOTE: we can pass in default context for auto-completion purposes
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

export default AuthContext;
