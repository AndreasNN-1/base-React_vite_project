import { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [user, setUser] = useState(null);

  // check log in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser === "admin@abc.dk") {
      setUser(storedUser);
    } else {
      localStorage.removeItem("user");
      setUser(null);
    }
  }, []);

  // Log in
  const signIn = async (inputIdentity, inputPassword) => {
    if (inputIdentity === "admin@abc.dk" && inputPassword === "abc123") {
      localStorage.setItem("user", inputIdentity);
      setUser("admin@abc.dk");
    }
  };

  // Log out
  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <LoginContext.Provider value={{ signIn, signOut, user }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
