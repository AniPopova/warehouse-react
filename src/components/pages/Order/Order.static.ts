import { Client } from "../Client/Client.static";
import { Warehouse } from "../Warehouse/Warehouse.static";

export interface Order {
  id: string;
  type: OrderType;
  clientId: Client['id']; 
  warehouseId: string;
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

export interface OrderFormProps {
  onSubmit: (newOrder: Order) => void; 
  onCancel: () => void;
}







