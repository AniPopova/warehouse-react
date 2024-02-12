import { styled } from "styled-components";

export const ModalContainer = styled.div`
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: bisque;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 80%; 

  @media (max-width: 768px) {
    width: 90%;  
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 5px;
    }

    input {
      margin-bottom: 10px;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    button {
      align-self: flex-end;
      padding: 8px 16px;
      margin-top: 10px;
      border: none;
      border-radius: 3px;
      background-color: blue;
      color: #fff;
      cursor: pointer;
    }
  }
`;