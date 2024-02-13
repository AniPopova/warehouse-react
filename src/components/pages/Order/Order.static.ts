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
  id: string;
  type: OrderType;
  clientId?: string;
  warehouseId?: string;
}

export interface CreateOrderDetailDto {
  senderWarehouseId: string;
  receiverWarehouseId?:string;
  productId: string;
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

// export interface OrderFormProps {
//   onSubmit: (formData: Order | OrderFormData | NewOrderResponse) => void; 
//   onCancel: () => void;
//   formData: OrderFormData;
//   setFormData: React.Dispatch<React.SetStateAction<OrderFormData>>;
// }

export interface OrderFormProps {
  onSubmit: (data: OrderData) => void; // Function to handle form submission
  onCancel: () => void; // Function to handle form cancellation
}


export interface OrderData {
  createOrderDto: {
    type: OrderType.ORDER;
    clientId: string;
    warehouseId: string;
  };
  createOrderDetailDto: {
    productId: string;
    warehouseId: string;
    quantity: number;
    price: number;
  };
  createInvoiceDto: {
    orderId: string;
  };
}

export interface NewOrderResponse {
  newOrder: Order;
  newOrderDetail: OrderDetail;
  newInvoice: Invoice;
}
