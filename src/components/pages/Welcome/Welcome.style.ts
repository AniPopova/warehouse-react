import styled from 'styled-components';

export const RegBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: black;
  height: 200px;
  width: 200px;
  margin-top: 40px;
  border: 1px solid brown;
  background-color: bisque;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 6px 10px rgba(29, 27, 27, 0.1);
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  font-size: 12px;
  color: #000;
  height: 300px;
  width: 300px;
  margin: 60px auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const WelcomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  font-size: 12px;
  color: #000;
  height: 300px;
  width: 300px;
  margin: 60px auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 8px;
  color: black;
  margin-bottom: 3px;
`;

export const StyledInput = styled.input`
  font-size: 8px;
  background-color: bisque;
  color: #212529;
  padding: 10px;
  border: 1px solid #ffc107;
  border-radius: 4px;
  margin-bottom: 10px;

  &:focus {
    box-shadow: 0 0 9px rgba(255, 193, 7, 0.5);
  }
`;

export const Question = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding-bottom: 20px;
`;

export const StyledLi = styled.li`
  font-size: 11px;
  color: bisque;
  text-shadow: 9px;
`;

export const StyledOption = styled.option`
  font-size: 10px;
  background-color: bisque;
  border-color: grey;
`;
