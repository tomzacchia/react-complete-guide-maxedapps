import React from "react";

/**
 * NOTE: React.createContext() returns a Context object
 * By default our consumers do not need to wrapped in a provider if we
 * consume the context when there is no 'Provider' in tree. However if we
 * do have a context Provider we need to defined 'value' attribute on
 * <contextObj.Provider value={} > </contextObj.Provider> component
 */
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
