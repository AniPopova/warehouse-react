import React, { useState, useEffect, createContext, useContext } from 'react';
import { AuthContextProps, ProvideAuthProps, User } from '../../@types/types';

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('helper hook for AuthProvider');
  }
  return context;
}

export const AuthProvider: React.FC<ProvideAuthProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const authenticatedUser = localStorage.getItem('user'); 
    if (authenticatedUser) {
      try {
        const parsedUser = JSON.parse(authenticatedUser) as User;
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse authenticated user:', error);
      }
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
