
export interface LogIn{
  email: string;
  pass: string;
}

export interface SignUp {
  username: string;
  email: string;
  password: string;
}

export const loginUrl = 'http://localhost:3000/auth/login';
export const signUpUrl = 'http://localhost:3000/auth/signup';