import React, { createContext, useState, useContext } from 'react';
import { AuthContextProviderProps, AuthContextType, ProvideAuthProps } from '../../@types/types';

interface AuthContextProps extends AuthContextType {
  login: (user: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const ProvideAuth: React.FC<ProvideAuthProps> = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (user: string) => setUser(user);
  const logout = () => setUser(null);

  const authContextValue: AuthContextProps = {
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('Auth problem!!!');
  }
  return context;
};
