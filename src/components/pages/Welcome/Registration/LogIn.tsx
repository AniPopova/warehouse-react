import { useState } from "react";
import axios from "axios";
import { loginUrl } from "../Welcome.static";
import {
  StyledLabel,
  StyledInput,
  StyledForm,
  SignUpBox,
  WelcomeBox,
} from "../Welcome.style";
import { BackToHomePage } from "../../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth/ProvideAuth";
import { Button } from "../../../button/button.style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(loginUrl, { email, password });
      login(response.data.access_token);
      console.log("You are successfully logged in", response.data);

      saveTokenToLocalStorage(response.data.access_token);

      BackToHomePage(navigate);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const saveTokenToLocalStorage = (token: string) => {
    localStorage.setItem("token", token);
  };

  return (
    <WelcomeBox>
    <SignUpBox>
      <h3>Login</h3>
      <br />
      <StyledForm>
        <StyledLabel>
          <StyledInput
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </StyledLabel>
        <br />
        <StyledLabel>
          <StyledInput
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </StyledLabel>
        <br />
        <Button type="button" onClick={() => handleLogin()}>
          Login
        </Button>
        <Button type="button" onClick={() => BackToHomePage(navigate)}>
          Back
        </Button>
      </StyledForm>
    </SignUpBox>
    </WelcomeBox>
  );
};

export default Login;