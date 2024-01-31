import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginUrl } from "./Auth.static";
import {
  StyledLabel,
  StyledInput,
  StyledButton,
  SignUpBox,
} from "./Auth.style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(loginUrl, { email, password });

      console.log("You are successfully logged in", response.data);
      saveTokenToLocalStorage(response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const saveTokenToLocalStorage = (token: string) => {
    localStorage.setItem("token", token);
  };

  const handleBackToMainPage = () => {
    navigate("/");
  };

  return (
    <SignUpBox>
      <h2>Login</h2>
      <form>
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
          onClick={() => handleBackToMainPage()}
        >
          Back
        </StyledButton>
      </form>
    </SignUpBox>
  );
};

export default Login;
