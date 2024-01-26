import { useState } from "react";
import { Question, RegBox, StyledButton } from "../../styles/CommonStyles";
import Login from "./LogIn";
import SignUp from "./SignUp";

const AuthPage = () => {
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);

  const handleAnswer = (answer: boolean) => {
    setIsNewUser(answer);
  };

  return (
    <RegBox>
      {isNewUser === null ? (
        <>
          <Question>Are you a new user?</Question>
          <StyledButton onClick={() => handleAnswer(true)}>Yes</StyledButton>
          <StyledButton onClick={() => handleAnswer(false)}>No</StyledButton>
        </>
      ) : isNewUser ? (
        <SignUp />
      ) : (
        <Login />
      )}
    </RegBox>
  );
};

export default AuthPage;
