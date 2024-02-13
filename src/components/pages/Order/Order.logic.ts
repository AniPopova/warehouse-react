import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { GetAuthToken } from "../../../utils/auth.utils";
import {
  Order,
  OrderFormData,
  OrderType,
} from "./Order.static";
import axios from "axios";
import { Invoice } from "../Invoice/Invoice.static";

export const createOrder =  async() => {
    const createOrderDto = {
      clientId: '',
      warehouseId: '',
      type: OrderType,
    };
  
    const createOrderDetailDto = {
      productId: '',
      senderWarehouseId: '',
      quantity: 0,
      price: 0,
    };
  
    const token = GetAuthToken(); 
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    };
  
    try {
      const response = await axios.post(`${BASE_URL}${ROUTES.ORDER}`, { createOrderDto, createOrderDetailDto }, config);
      console.log('New Order:', response.data.newOrder);
      console.log('New Invoice:', response.data.newInvoice);
      console.log('New Order Detail:', response.data.newOrderDetail);
      return response.data; 
    } catch (error) {
      console.error('Error creating order:', error);
    }
  }
  

  export const UpdateOrder = async (id: string, formData: OrderFormData) => {
    const token = GetAuthToken();
    
    try {
      const response = await axios.patch(`${BASE_URL}${ROUTES.ORDER}/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status !== 200) {
        throw new Error('Failed to update order');
      }
  
      const updatedOrder: Order = response.data;
  
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

    const response = await axios.get<Order[]>(`${BASE_URL}${ROUTES.ORDER}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch clients:", error);
    throw error;
  }
};

export const createInvoice = async (orderId: Order["id"]): Promise<Invoice> => {
  try {
    const token = GetAuthToken();
    const response = await axios.post(`${BASE_URL}${ROUTES.INVOICE}`, {
      orderId: orderId,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error(`Failed to create invoice.`);
    }

    return response.data;
  } catch (error) {
    console.error(`Failed to create invoice, try again: `, error);
    throw error;
  }
};
