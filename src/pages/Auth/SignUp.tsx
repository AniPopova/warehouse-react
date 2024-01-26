import { useState } from "react";
import {
  StyledForm,
  StyledButton,
  StyledLabel,
  StyledInput,
} from "../../styles/CommonStyles";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("SignUp ", { username, email, password });
    SignUp();
  };

  const handleBackToMainPage = () => {
    history.back();
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <StyledForm>
        <br />
        <StyledLabel>
          Username:
          <StyledInput
            type="text"
            name="text"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </StyledLabel>
        <br />
        <StyledLabel>
          Email:
          <StyledInput
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </StyledLabel>
        <br />
        <StyledLabel>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </StyledLabel>
        <br />
        <StyledButton type="button" onClick={handleSignUp}>
          Sign Up
        </StyledButton>
        <br />
        <StyledButton type="button" onClick={handleBackToMainPage}>
          Back to main page
        </StyledButton>
      </StyledForm>
    </div>
  );
};

// const SignUp: React.FC = () => {
//   return (
//     <MDBContainer fluid className=''>
//       <MDBCardBody className='px-5'>
//         <h2>Create an account</h2>
//         <Wrapper>
//           <StyledMDBInput label='Your Name' type='text'/>
//           <StyledMDBInput label='Your Email' type='email'/>
//           <StyledMDBInput label='Password' type='password'/>
//           <StyledMDBInput label='Repeat your password' type='password'/>
//         </Wrapper>
//       </MDBCardBody>
//     </MDBContainer>
//   );
// }

export default SignUp;
