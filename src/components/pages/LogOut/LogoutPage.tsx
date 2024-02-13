import React from "react";
import { Container } from "./Logout.style";


const LogoutPage: React.FC = () => {
  return (
    <Container>
      <h2>You have been logged out</h2>
      <p>Thank you for using our application!</p>
    </Container>
  );
};

export default LogoutPage;
