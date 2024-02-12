import { useState } from "react";
import axios from "axios";
import {
  SignUpBox,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../Welcome.style";
import { BackToHomePage } from "../../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../button/button.style";
import { Title } from "../../Home/Home.style";
import { BASE_URL, ROUTES } from "../../../../routes/routes.static";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${BASE_URL}${ROUTES.SIGNUP}`, {
        username,
        email,
        password,
      });
      console.log("Sign Up successfully", response.data);
      return BackToHomePage(navigate);
    } catch (error) {
      console.log("Sorry you failed, try again.");
    }
  };

  return (
    <SignUpBox>
      <Title>Sign Up</Title>
      <StyledForm>
        <StyledLabel>
          <StyledInput 
            type="text" 
            name="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </StyledLabel>
        <StyledLabel>  
          <StyledInput
            type="email"
            name="email" 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            type="password"  
            name="password"
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </StyledLabel>

        <Button type="button" onClick={() => handleSignUp()}>
          Sign Up
        </Button>

        <Button type="button" onClick={() => BackToHomePage(navigate)}>
          Back
        </Button>

      </StyledForm>
    </SignUpBox>
  );
};

export default SignUp;