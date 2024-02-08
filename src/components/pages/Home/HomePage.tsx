import React from "react";
import { Card, PageContainer, Title } from "./Home.style";

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Title>Welcome user!</Title>
      </Card>
    </PageContainer>
  );
};

export default HomePage;
