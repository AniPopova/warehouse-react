import React from "react";
import { Container } from "./Logout.style";
import { Button } from "../../button/button.style";
import { useNavigate } from "react-router-dom";

const LogoutPage: React.FC = () => {
  const goToRegPage = useNavigate();
  return (
    <Container>
      <h2>You have been logged out</h2>
      <p>Thank you for using our application!</p>
      <br />
      <Button type="button" onClick={() => goToRegPage("/auth")}>
        Back
      </Button>
    </Container>
  );
};

export default LogoutPage;
