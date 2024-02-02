import { useState } from "react";
import { Question, RegBox, SignUpBox, StyledButton } from "./Welcome.style";
import Login from "./Registration/LogIn";
import SignUp from "./Registration/SignUp";

const AuthPage = () => {
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);
  const handleAnswer = (answer: boolean) => {
    setIsNewUser(answer);
  };

  return (
    <SignUpBox>
      {isNewUser === null ? (
        <>
          <RegBox>
            <Question>Welcome to WHM.</Question>
            <Question>Are you a new user?</Question>
            <div>
              <StyledButton onClick={() => handleAnswer(true)}>
                Yes
              </StyledButton>
              <br />
              <br />
              <StyledButton onClick={() => handleAnswer(false)}>
                No
              </StyledButton>
            </div>
          </RegBox>
        </>
      ) : isNewUser ? (
        <SignUp />
      ) : (
        <Login />
      )}
    </SignUpBox>
  );
};

export default AuthPage;
