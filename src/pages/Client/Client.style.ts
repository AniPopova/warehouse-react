import { styled } from "styled-components";


export const StyledButton = styled.button`
  background-color: #28a745; 
  color: #fff;              
  padding: 0.25rem 0.5rem;   
  font-size: 0.875rem;      
  border: none;
  border-radius: 5px;           
  cursor: pointer;

  &:hover {
    background-color: #218838; 
    border-color: #1e7e34; 
  }
  `
  
export const StyledButtonDelete = styled.button`
  background-color: orangered; 
  color: black;              
  padding: 0.25rem 0.5rem;   
  font-size: 0.875rem;      
  border: none;
  border-radius: 2px; 
  box-shadow: 9px;          
  cursor: pointer;

  &:hover {
    background-color: #218838; 
    border-color: #1e7e34; 
  }
`

export const StyledButtonUpdate = styled.button`
  background-color: #218838; 
  color: #fff;              
  padding: 0.25rem 0.5rem;   
  font-size: 0.875rem;      
  border: none;
  border-radius: 2px;           
  cursor: pointer;

  &:hover {
    background-color: #218838; 
    border-color: #1e7e34; 
  }
`

export const StyledTable = styled.table`
   font-size: 10px;
   border-radius: 5px;
   align-items: center;
   background-color: rgba(248, 243, 243, 0.9);
`