import React, { useEffect, useState } from "react";
import { Card, CardsContainer, PageContainer, Title } from "./Home.style";
import { User } from "../../../@types/auth.types";
import { useNavigate } from "react-router-dom";
import { Button } from "../../button/button.style";
import { getUsers, parseJwt } from "../User/User.logic";
import { ROUTES } from "../../../routes/routes.static";

const HomePage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");
  const userPayload = storedToken ? parseJwt(storedToken) : null;
  const userName = userPayload ? userPayload.username : "user";

  const modules = [
    { name: "Client", path: "/client" },
    { name: "Product", path: "/product" },
    { name: "Order", path: "/order" },
    { name: "Warehouse", path: "/warehouse" },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const showProfile = () => {
    navigate(`${ROUTES.USER}`);
  };

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <PageContainer>
      <Card>
        <Title>Welcome {userName}!</Title>
        <Button type="button" onClick={showProfile}>
          Profile
        </Button>
      </Card>
      <CardsContainer>
        {modules.map((module, index) => (
          <Card key={index} onClick={() => handleCardClick(module.path)}>
            {module.name}
          </Card>
        ))}
      </CardsContainer>
    </PageContainer>
  );
};

export default HomePage;
