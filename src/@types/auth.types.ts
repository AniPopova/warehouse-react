import { ReactNode } from "react";
import { UserRights } from "../components/form/UserForm";

//Authentication
export interface Token {
  id: string;
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

export interface User {
  id?: string;
  name?: string;
  email?: string;
  userRole?: UserRights;
}

export interface AuthContextValue {
  user: User | null;
  signIn: (newUser: User, callback: () => void) => void;
  signOut: (callback: () => void) => void;
}

export interface AuthContextProviderProps {
  children: ReactNode;
}

export interface AuthContextProps {
  user: User | null;
  signIn: (newUser: User, callback: () => void) => void;
  signOut: (callback: () => void) => void;
}

export interface AuthContextType {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
}

export interface ProvideAuthProps {
  children: ReactNode;
}

export interface JWTPayload {
  username: string;
  email: string;
  userRole: UserRights;
}

