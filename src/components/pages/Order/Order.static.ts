import { Client } from "../Client/Client.static";
import { Invoice } from "../Invoice/Invoice.static";
import { OrderDetail } from "../OrderDetails/OrderDetails.static";
import { Product } from "../Product/Product.static";
import { Warehouse } from "../Warehouse/Warehouse.static";

export interface Order {
  id: string;
  type: OrderType;
  clientId: Client['id'];
  warehouseId: Warehouse['id'];
  createdAt: string;
}

export enum OrderType {
  TRANSFER = 'TRANSFER',
  ORDER = 'ORDER',
  DELIVERY = 'DELIVERY'
}

export interface CreateOrderDto {
  clientId: Client['id'];
  warehouseId: Warehouse['id'];
  type: OrderType;
}

export interface CreateOrderDetailDto {
  productId: Product['id'];
  warehouseId: Warehouse['id'];
  quantity: number;
  price: number;
}

export interface CreateInvoiceDto {
  orderId: Order['id'];
}

export interface OrderFormData {
  createOrderDto: CreateOrderDto;
  createOrderDetailDto: CreateOrderDetailDto;
  createInvoiceDto: CreateInvoiceDto;
}

export interface OrderFormProps {
  onSubmit: (newOrder: NewOrderResponse) => void;
  onCancel: () => void;
  formData: OrderFormData;
  setFormData: React.Dispatch<React.SetStateAction<OrderFormData>>;
}

export interface NewOrderResponse {
  newOrder: Order;
  newInvoice: Invoice;
  newOrderDetail: OrderDetail;
}
