import React, { useEffect, useState } from "react";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { Container, Table, Title } from "../../../components/table/table.style";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { User } from "../../../@types/types";
import { Button } from "../../button/button.style";
import { useNavigate } from "react-router-dom";
import { parseJwt } from "./User.logic";

const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState<User | null>(null);
  const storedToken = localStorage.getItem("token");
  const userPayload = storedToken ? parseJwt(storedToken) : null;
  const userName = userPayload ? userPayload.username : "user";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = GetAuthToken();
        if (!token) {
          console.error("Authorization token is not available");
          return;
        }

        const userId = decodeUserId(token);

        const response = await fetch(`${BASE_URL}${ROUTES.USER}/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user profile data");
        }

        const data: User = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  const decodeUserId = (token: string): string => {
    const decodedToken: { sub: string } = JSON.parse(atob(token.split(".")[1]));

    return decodedToken.sub;
  };

  return (
    <Container>
      <Title>Your Profile</Title>
      {profileData && (
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userName}</td>
              <td>{profileData.email}</td>
              <td>{profileData.userRole}</td>
            </tr>
          </tbody>
        </Table>
      )}
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
        Back
      </Button>
    </Container>
  );
};

export default Profile;
