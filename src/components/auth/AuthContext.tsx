import React, { useState, useEffect, createContext } from 'react';
import { AuthContextProps, ProvideAuthProps, User } from '../../@types/types';

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<ProvideAuthProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const authenticatedUser = localStorage.getItem('token');
    if (authenticatedUser) {
      setUser(JSON.parse(authenticatedUser));
    }
  }, []);

  const signIn = (newUser: User, callback: () => void): void => {
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    callback();
  };

  const signOut = (callback: () => void): void => {
    localStorage.removeItem('user');
    setUser(null);
    callback();
  };

  const value: AuthContextProps = {
    user,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
