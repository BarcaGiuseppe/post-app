import React, { createContext, useContext, useState } from "react";
import { utilityGetAuthFromLS } from "../utils/utilityLS";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

interface PropsProvider {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const setAuthToLs = (value: boolean) => {
  //const isAuthValue = JSON.parse(localStorage.getItem("isAuth")!);
  value
    ? localStorage.setItem("isAuth", "true")
    : localStorage.removeItem("isAuth");
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    utilityGetAuthFromLS()
  );

  console.log(utilityGetAuthFromLS());

  const login = () => {
    setAuthToLs(true);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setAuthToLs(false);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
