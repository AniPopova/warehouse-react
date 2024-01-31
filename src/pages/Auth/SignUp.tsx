import { useState } from "react";
import { signUpUrl } from "./Auth.static";
import axios from "axios";
import {
  SignUpBox,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./Auth.style";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post(signUpUrl, {
        username,
        email,
        password,
      });
      console.log("Sign Up successfully", response.data);
      navigate('/');
    } catch (error) {
      console.log("Sorry you failed, try again.");
    }
  };

  const handleBackToMainPage = () => {
    window.history.back();
  };

  return (
    <SignUpBox>
      <div className="card">
        <div className="card-body">
          <h4 >Sign Up</h4>
          <br />
          <StyledForm>
            <StyledLabel>
              Username:
              <StyledInput
                type="text"
                name="text"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </StyledLabel>
            <StyledLabel>
              Email:
              <StyledInput
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </StyledLabel>
            <StyledLabel>
              Password:
              <StyledInput
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </StyledLabel>
            <StyledButton type="button" onClick={handleSignUp}>
              Sign Up
            </StyledButton>
            <StyledButton type="button" onClick={handleBackToMainPage}>
              Back
            </StyledButton>
          </StyledForm>
        </div>
      </div>
    </SignUpBox>
  );
};

export default SignUp;
