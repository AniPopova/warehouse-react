import { useNavigate } from "react-router-dom";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { GetAuthToken } from "../../../utils/utils";
import { CreateOrderDto, Order, OrderFormData } from "./Order.static";
import axios from "axios";
import { Invoice } from "../Invoice/Invoice.static";
import { OrderDetail } from "../OrderDetails/OrderDetails.static";

export const createOrder = async (
  createOrderDto: CreateOrderDto,
  createOrderDetail: OrderDetail,
): Promise<{ newOrder: Order; newInvoice: Invoice; newOrderDetail: OrderDetail }> => {
  try {
    const token = GetAuthToken();
    const response = await fetch(`${BASE_URL}${ROUTES.ORDER}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        createOrderDto,
        createOrderDetail,
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData?.error?.message || "Unknown error occurred";
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