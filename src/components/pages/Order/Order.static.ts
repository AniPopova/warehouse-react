import { Client } from "../Client/Client.static";
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
}

export type OrderFormProps = {
  onSubmit: (formData: Order | OrderFormData ) => void;
  onCancel: () => void;
}

export interface CreateOrderDto {
  type: string;
  clientId: string;
  warehouseId: string | null;
}

export interface OrderDetail {
  warehouseId: string;
  productId: string;
  quantity: number;
  price: number;
}




