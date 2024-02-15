import {
  useNavigate,
} from "react-router-dom";


export const GetAuthToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
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



