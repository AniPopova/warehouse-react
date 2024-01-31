import { useState } from "react";
import { Question, RegBox } from "./Auth.style";
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
          <div>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleAnswer(true)}
            >
              Yes
            </button>
            <br />
            <br />
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleAnswer(false)}
            >
              No
            </button>
          </div>
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
