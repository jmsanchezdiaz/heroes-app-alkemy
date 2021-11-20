import { createContext, useEffect, useState } from "react";
import { AuthContextType, ProviderProps } from "../types/types";

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [userToken, setUserToken] = useState(
    JSON.parse(window.localStorage.getItem("token") as string) || null
  );

  useEffect(() => {
    window.localStorage.setItem("token", JSON.stringify(userToken));
  }, [userToken]);

  const logIn = (newToken: string) => {
    setUserToken(newToken);
  };

  const logOut = () => setUserToken(null);

  return (
    <AuthContext.Provider value={{ userToken, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
