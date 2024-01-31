import styled from 'styled-components';

export const RegBox = styled.div`
  padding: 100px;
  box-direction: normal;
  font-size: 8px;
  color: black;
  height: 300px;
  width: 300px;
  margin: auto;
  @media (max-width: 600px) {
    padding: 3px;
  }
`;

export const StyledButton = styled.button`
  margin: 10px;
  padding: 8px 10px; 
  font-size: 10px; 
  background-color: #28a745; 
  color: #fff;
  border: 1px solid #28a745; 
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838; 
    border-color: #1e7e34; 
  }
`;

export const SignUpBox = styled.div`
  padding: 1.25rem; 
  justify-content: center;
  border-radius: 0.25rem; 
  font-size: 10px; 
  color: #000; 
  height: 300px;
  width: 300px;
  margin: auto;
  
  @media (max-width: 600px) {
    padding: 0.5rem; 
  }
`;

export const StyledLabel = styled.label`
  font-size: 12px; 
  color: black; 
  margin-bottom: 0.5rem; 
`;

export const StyledInput = styled.input`
  font-size: 10px; 
  background-color: bisque; 
  color: #212529; 
  padding: 0.375rem 0.75rem; 
  border: 1px solid #ffc107; 
  border-radius: 0.25rem; 
  margin-bottom: 1rem;

  &:focus {
    box-shadow: 9px rgba(255, 193, 7, 0.5); 
  }
`;

export const Question = styled.p`
  font-size: 14px; 
  margin-bottom: 1.25rem; 
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem; 
  padding-bottom: 1.25rem; 
  border-bottom: 1px solid #eaeaea; 
`;


export const StyledLi = styled.li`
  font-size: 9px;
  color: bisque;
  text-shadow: 9px;
`;

export const StyledOption = styled.option`
  font-size: 0.6em;
  background-color: bisque;
  border-color: grey;
`
