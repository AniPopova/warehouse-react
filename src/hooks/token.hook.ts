import { jwtDecode } from "jwt-decode";
import { Token } from "../@types/auth.types";

export const useToken = () => {
  const validToken = localStorage.getItem("token");

  try {
    if (!validToken) {
      throw new Error('Missing token!');
    }
    const decodedToken = jwtDecode(validToken);
    return decodedToken as Token;
  } catch (error) {
    console.error("Error while decoding token:", error);
    return null;
  }
};

export default useToken;