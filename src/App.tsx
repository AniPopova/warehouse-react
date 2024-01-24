import React from 'react';
import './App.css'
import Login from './components/auth/LogIn';
import ClientForm from './components/forms/ClientForm';


const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {

    console.log('Login credentials:', { email, password });
  };

  return (
    <div>
      <h1>Warehouse Management</h1>
      <Login onLogin={handleLogin} />
    </div>
    
  );
};

export default App
