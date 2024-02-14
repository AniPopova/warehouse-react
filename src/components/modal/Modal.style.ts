import { styled } from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  margin: 50px;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: bisque;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 80%; 

  @media (min-width: 768px) {
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
      background-color: brown;
      color: #fff;
      cursor: pointer;
    }
  }
`;