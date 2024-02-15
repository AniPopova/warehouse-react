import { styled } from "styled-components";

export const Button = styled.button`
  margin: 10px;
  padding: 8px 12px;
  font-size: 14px;
  background-color: #32465c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 6px 10px;
  }`;

export const RedButton = styled.button`
margin: 10px;
padding: 8px 12px;
font-size: 14px;
background-color: brown;
color: whitesmoke;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover {
  background-color: #0056b3;
}

@media only screen and (max-width: 768px) {
  font-size: 12px;
  padding: 6px 10px;
}`;