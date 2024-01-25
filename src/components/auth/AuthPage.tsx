import React, { useState } from 'react';
import styled from 'styled-components';
import Login, { LoginProps } from './LogIn';
import { SignUpFormProps, SignUpForm } from './SignUp';

export interface AuthPageProps {
  onLogin: LoginProps['onLogin'];
  onSignUp: SignUpFormProps['onSignUp'];
}

const AuthPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Question = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const AuthPage: React.FC<AuthPageProps> = ({ onLogin, onSignUp }) => {
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);

  const handleAnswer = (answer: boolean) => {
    setIsNewUser(answer);
  };

  return (
    <AuthPageWrapper>
      {isNewUser === null ? (
        <>
          <Question>Are you a new user?</Question>
          <button onClick={() => handleAnswer(true)}>Yes</button>
          <button onClick={() => handleAnswer(false)}>No</button>
        </>
      ) : isNewUser ? (
        <SignUpForm onSignUp={onSignUp} />
      ) : (
        <Login onLogin={onLogin} />
      )}
    </AuthPageWrapper>
  );
};

export default AuthPage;
