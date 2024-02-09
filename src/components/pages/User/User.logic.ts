import axios from "axios";
import { User } from "../../../@types/types";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { GetAuthToken } from "../../../utils/utils";

export const getUsers = async (): Promise<User[]> => {
  try {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await axios.get<User[]>(`${BASE_URL}${ROUTES.USER}`, { headers });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch clients:", error);
    throw error;
  }
}