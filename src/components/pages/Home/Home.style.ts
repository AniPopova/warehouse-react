import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 20px;
  height: 80vh;
`;


export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  color: brown;
`;

export const Card = styled.div`
  background-color: bisque;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px; 
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    width: calc(90% - 30px);
  }

  @media (min-width: 1024px) {
    width: calc(75% - 50px);
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;
