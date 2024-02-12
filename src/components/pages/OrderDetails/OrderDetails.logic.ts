import axios from "axios";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { GetAuthToken } from "../../../utils/utils";
import { OrderDetail } from "./OrderDetails.static";
import { Warehouse } from "../Warehouse/Warehouse.static";
import { Order } from "../Order/Order.static";
import { MethodType } from "../../../services/app.requests";
import { Product } from "../Product/Product.static";

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


export const createOrderDetail = async (
  warehouseId: Warehouse['id'],
  productId: Product['id'],
  orderId: Order['id'],
  quantity: number,
  price: number,
): Promise<OrderDetail> => {
  try {
    const response = await fetch(`${BASE_URL}${ROUTES.ORDER_DETAILS}`, {
      method: MethodType.POST,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        warehouseId: warehouseId,
        productId: productId,
        orderId: orderId,
        quantity: quantity,  
        price: price,  
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to create order detail: ${errorMessage}`);
      throw new Error(`Failed to create order detail: ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to create order detail, try again: `, error);
    throw error;
  }
};