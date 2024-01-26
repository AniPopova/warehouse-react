import { useState } from "react";
import {
  StyledInput,
  StyledLabel,
  RegBox,
  StyledButton,
} from "../../styles/CommonStyles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // authentication logic here TODO FIX BACKEND and to implement it
    console.log("Logging in with:", { email, password });
    Login();
  };

  const handleBackToMainPage = () => {
    history.back();
  };
  return (
    <RegBox>
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
        <StyledButton type="button" onClick={handleLogin}>
          Login
        </StyledButton>
        <StyledButton type="button" onClick={handleBackToMainPage}>
          Back
        </StyledButton>
      </form>
    </RegBox>
  );
};
export default Login;
