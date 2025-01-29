'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/app/lib/store";
interface UserContextType {
  user: { email: string } | null;
  isLoggedIn: boolean;
  setUser: React.Dispatch<React.SetStateAction<{ email: string } | null>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, setIsLoggedIn }}>
      <Provider store={store}>
      {children}
      </Provider>
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
