import axios from "axios";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { GetAuthToken } from "../../../utils/utils";
import { OrderDetail } from "./OrderDetails.static";

export const getOrderDetails = async (): Promise<OrderDetail[]> => {
  try {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await axios.get<OrderDetail[]>(`${BASE_URL}${ROUTES.ORDER_DETAILS}`, { headers });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}