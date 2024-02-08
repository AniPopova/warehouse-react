import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: brown;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const Card = styled.div`
  width: 400px;
  height: 200px;
  background-color: bisque;
  border: 1px solid brown;
  border-radius: 4px;
  box-shadow: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;