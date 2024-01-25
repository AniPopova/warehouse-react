import React, { useState } from 'react';

export interface LoginProps {
  onLogin: (email: string, password: string) => void;
}


const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // authentication logic here TODO FIX BACKEND and to implement it
    console.log('Logging in with:', { email, password });
    onLogin(email, password);
  };

  const handleBackToMainPage = () => {
   window.location.href = '/home';
  };
  return (
    <div className='login'>
      <h2>Login</h2>
      <form>
        <label>
          E-mail:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <br />
        <button type="button" onClick={handleBackToMainPage}>
          Back to main page
        </button>
      </form>
    </div>
  );
};
export default Login;

