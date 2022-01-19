import React, { useState, createContext, useContext } from "react";

const userContext = createContext(null);

export const useUser = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(false);
  console.log(isUser);

  const value = {
    isUser,
    setIsUser,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
