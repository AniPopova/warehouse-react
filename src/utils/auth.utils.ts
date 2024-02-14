import {
  useNavigate,
} from "react-router-dom";

export const GetTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem("expiration");

  if (storedExpirationDate === null) {
    return 0;
  }

  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const GetAuthToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = GetTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
};

export const CheckAuthLoader = () => {
  const token = GetAuthToken();
  const navigate = useNavigate();

  if (!token) {
    navigate("/login");
  }
};

export const decodeUserRole = (token: string): string => {
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const userRole = decodedToken.userRole;
  return userRole;
};



