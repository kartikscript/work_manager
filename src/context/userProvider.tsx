// UserProvider.tsx
'use client'
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface UserContextType {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const contextValue: UserContextType = {
    isLogin,
    setIsLogin,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
export { UserContext };
