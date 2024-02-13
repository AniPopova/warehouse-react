import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 14px;
  background-color: grey;
  color: #fff;
  padding: 10px;
  text-align: center;
  z-index: 1000;
  
  @media only screen and (max-width: 768px) {
    font-size: 12px; 
    padding: 8px; 
  }
`;
