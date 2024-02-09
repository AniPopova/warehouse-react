import { Client } from "../Client/Client.static";
import { Product } from "../Product/Product.static";
import { Warehouse } from "../Warehouse/Warehouse.static";

export interface Order {
  id: string;
  type: OrderType;
  clientId: string; 
  createdAt: string;
}


export enum OrderType {
  TRANSFER = 'TRANSFER',
  ORDER = 'ORDER',
  DELIVERY = 'DELIVERY'
}

export interface OrderFormData {
  type: OrderType;
  clientId: Client["id"];
  warehouseId: Warehouse["id"];
  productId: Product["id"];
  quantity: number;
  price: number;
}

export type OrderFormProps = {
  onSubmit: (formData: Order | OrderFormData ) => void;
  onCancel: () => void;
}


export const orderUrl = 'http://localhost:3000/order'
export const createOrderUrl = 'http://localhost:3000/order'
