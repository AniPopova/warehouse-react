import { useNavigate } from "react-router-dom";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { GetAuthToken } from "../../../utils/utils";
import { Order, OrderFormData } from "./Order.static";
import axios from "axios";

export const createOrder = async (
  type: string,
  clientId: string,
  warehouseId: string,
  productId: string,
  quantity: number,
  price: number,
): Promise<Order> => {
  try {
    const token = GetAuthToken();
    const response = await fetch(`${BASE_URL}${ROUTES.ORDER}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type,
        clientId,
        warehouseId,
        productId,
        quantity,
        price
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to create order: ${errorMessage}`);
      throw new Error(`Failed to create order: ${errorMessage}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to create order, try again: `, error);
    throw error;
  }
};

export const UpdateOrder = async (formData: OrderFormData) => {
  const refresh = useNavigate();
  const token = GetAuthToken();

  try {
    const response = await fetch(`${BASE_URL}${ROUTES.ORDER}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to update order');
    }

    const updatedOrder: Order = await response.json();

    refresh(`${BASE_URL}${ROUTES.PRODUCT}`);

    return updatedOrder;

  } catch (error) {
    console.error('An error occurred:', error);
  }
};

export const getOrders = async (): Promise<Order[]> => {
  try {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await axios.get<Order[]>(`${BASE_URL}${ROUTES.ORDER}`, { headers });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch clients:", error);
    throw error;
  }
}