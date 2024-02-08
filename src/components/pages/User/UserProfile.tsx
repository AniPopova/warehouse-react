import { useEffect, useState } from "react";
import { GetAuthToken, baseUrl } from "../../../utils/utils";
import { UserRights } from "../../form/UserForm";
import { Container, Title } from "../../table/table.style";

interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  userRole: UserRights;
}

const Profile = () => {
  const [profileData, setProfileData] = useState<User | null>(null);

  useEffect(() => {
    const token = GetAuthToken();

    const fetchProfile = async () => {
      try {
        const response = await fetch(baseUrl, {
          method: "POST",
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
        <div>
          <p>Username: {profileData.username}</p>
          <p>Email: {profileData.email}</p>
          <p>Role: {profileData.userRole}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </Container>
  );
};

export default Profile;