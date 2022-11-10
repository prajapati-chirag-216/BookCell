import React from "react";

const LoginContext = React.createContext({
  onLogin: () => {},
  onLogout: () => {},
  isLoggedIn: false,
});
export default LoginContext;
