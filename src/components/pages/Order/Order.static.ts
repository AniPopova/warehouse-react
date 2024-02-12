import { Invoice } from "../Invoice/Invoice.static";
import { OrderDetail } from "../OrderDetails/OrderDetails.static";

export interface Order {
  id: string;
  type: OrderType;
  clientId: string;
  warehouseId: string;
  createdAt: string;
}

export enum OrderType {
  TRANSFER = 'TRANSFER',
  ORDER = 'ORDER',
  DELIVERY = 'DELIVERY'
}

export interface CreateOrderDto {
  type: OrderType;
  clientId: string;
  warehouseId: string;
}

export interface CreateOrderDetailDto {
  productId: string;
  warehouseId: string;
  quantity: number;
  price: number;
}

export interface CreateInvoiceDto {
  orderId: string;
}

export interface OrderFormData {
  createOrderDto: CreateOrderDto;
  createOrderDetailDto: CreateOrderDetailDto;
  createInvoiceDto: CreateInvoiceDto;
}

export interface OrderFormProps {
  onSubmit: (formData: Order | OrderFormData) => void; 
  onCancel: () => void;
  formData: OrderFormData;
  setFormData: React.Dispatch<React.SetStateAction<OrderFormData>>;
}

export interface NewOrderResponse {
  newOrder: Order;
  newInvoice: Invoice;
  newOrderDetail: OrderDetail;
}
