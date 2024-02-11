import { Client } from "../Client/Client.static";
import { InvoiceFormProps } from "../Invoice/Invoice.static";
import { OrderDetailFormProps } from "../OrderDetails/OrderDetails.static";
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

export interface OrderFormProps extends OrderDetailFormProps, InvoiceFormProps {
  onSubmit: (newOrder: unknown) => void;
  onCancel: () => void;
}







