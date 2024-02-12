import { styled } from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
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
      margin: 10px;
      padding: 8px 12px;
      font-size: 12px;
      background-color: #32465c;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media only screen and (max-width: 768px) {
    font-size: 8px;
    padding: 6px 10px;
    }
  }
}
`;