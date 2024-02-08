import React, { useState } from "react";
import { Question, RegBox, WelcomeBox } from "./Welcome.style";
import Login from "./Registration/LogIn";
import SignUp from "./Registration/SignUp";
import { Button } from "../../button/button.style";

const WelcomePage: React.FC = () => {
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);

  const handleAnswer = (answer: boolean) => {
    setIsNewUser(answer);
  };

  return (
    <WelcomeBox>
      {isNewUser === null ? (
        <RegBox>
          <Question>Welcome to WHM.</Question>
          <Question>Are you a new user?</Question>
          <div>
            <Button onClick={() => handleAnswer(true)}>Yes</Button>
            <Button onClick={() => handleAnswer(false)}>No</Button>
          </div>
        </RegBox>
      ) : isNewUser ? (
        <SignUp />
      ) : (
        <Login />
      )}
    </WelcomeBox>
  );
};

export default WelcomePage;