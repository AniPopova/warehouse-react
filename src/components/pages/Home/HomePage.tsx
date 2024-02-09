import React, { useEffect, useState } from "react";
import { Card, PageContainer, Title } from "./Home.style";
import { UserRights } from "../../form/UserForm";
import { User } from "../../../@types/types";
import { useNavigate } from 'react-router-dom';
import { Button } from "../../button/button.style";
import { getUsers } from "../User/User.logic";
import { ROUTES } from "../../../routes/routes.static";

interface JWTPayload {
  username: string;
  email: string;
  userRole: UserRights;
}


const parseJwt = (token: string): JWTPayload => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window.atob(base64)
        .split('')
        .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    throw new Error('Error in decoding JWT.');
  }
}

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();
  const storedToken = localStorage.getItem('token');
  const userPayload = storedToken ? parseJwt(storedToken) : null;
  const userName = userPayload ? userPayload.username : 'user';

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

  const handleProfileClick = () => {
    navigate(`${ROUTES.USER}`); 
  };

  return (
    <PageContainer>
      <Card>
        <Title>Welcome {userName}!</Title>
        <Button type="button" onClick={handleProfileClick}>
          Profile
        </Button>
      </Card>
    </PageContainer>
  );
};

export default HomePage;
