import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-size: 8px;
  color: bisque;
`;
 
export const StyledForm = styled.form`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 20px;
  padding-bottom: 25px;
  border-bottom: 1px solid #eaeaea;
`;

export const StyledTable = styled.table`
   font-size: 10px;
   border-radius: 5px;
   align-items: center;
   background-color: rgba(248, 243, 243, 0.3);
`

export const StyledButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #218838;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
