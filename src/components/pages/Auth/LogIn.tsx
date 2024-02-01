import { useState } from "react";
import axios from "axios";
import { loginUrl } from "./Auth.static";
import {
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledForm,
  SignUpBox,
} from "./Auth.style";
import { backToHomePage } from "../../../utils/utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(loginUrl, { email, password });

      console.log("You are successfully logged in", response.data);
      saveTokenToLocalStorage(response.data.token);
      return backToHomePage;
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const saveTokenToLocalStorage = (token: string) => {
    localStorage.setItem("token", token);
  };

  return (
    <SignUpBox>
      <h2>Login</h2>
      <StyledForm>
        <br />
        <StyledLabel>
          <br />
          E-mail:
          <br />
          <StyledInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </StyledLabel>
        <br />
        <StyledLabel>
          <br />
          Password:
          <br />
          <StyledInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </StyledLabel>
        <br />
        <StyledButton
          className="btn btn-success btn-sm"
          type="button"
          onClick={handleLogin}
        >
          Login
        </StyledButton>
        <StyledButton
          className="btn btn-success btn-sm"
          type="button"
          onClick={backToHomePage}
        >
          Back
        </StyledButton>
      </StyledForm>
    </SignUpBox>
  );
};

export default Login;
