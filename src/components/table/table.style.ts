import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 80%;
  margin-top: 20px;
  border-collapse: collapse;
  border: 1px solid brown;

  th, td {
    border: 0.1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color:  grey;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  @media only screen and (max-width: 768px) {
    th, td {
      font-size: 8px;
      padding: 6px;
    }
  }
`;

