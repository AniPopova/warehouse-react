import { useEffect, useState } from "react";
import { GetAuthToken } from "../../../utils/utils";
import { UserRights } from "../../form/UserForm";
import { Container, Title } from "../../table/table.style";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { RegBox } from "../Welcome/Welcome.style";

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  userRole: UserRights;
}

const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState<User>();

  useEffect(() => {
    const token = GetAuthToken();

    const fetchProfile = async () => {
      try {
        const response = await fetch(`${BASE_URL}${ROUTES.USER}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
        } else {
          console.error("Failed to fetch user profile data");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, []);

  return (
    <Container>
      <Title>User Profile</Title>
      {profileData ? (
        <RegBox>
          <p>Username: {profileData.username}</p>
          <p>Email: {profileData.email}</p>
          <p>Role: {profileData.userRole}</p>
        </RegBox>
      ) : (
        <p>Loading profile...</p>
      )}
    </Container>
  );
};

export default Profile;