export interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

export interface SignUpFormProps {
  onSignUp: (username: string, email: string, password: string) => void;
}
