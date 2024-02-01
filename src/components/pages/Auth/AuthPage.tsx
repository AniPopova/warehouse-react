import { useState } from "react";
import { Question, RegBox, StyledButton} from "./Auth.style";
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
              className="btn btn-success btn-sm" 
              onClick={() => handleAnswer(true)}
            >
              Yes
            </button>
            <br />
            <br />
            <StyledButton  
              onClick={() => handleAnswer(false)}
            >
              No
            </StyledButton>
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