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

export interface CreateInvoiceDto {
  orderId: string;
}

export interface CreateOrderDto {
  id: string;
  type: OrderType;
  clientId?: string;
  warehouseId?: string;
}

export interface CreateOrderDetailDto {
  warehouseId: string;
  productId: string;
  quantity: number;
  price: number;
}

export interface OrderFormData {
  createOrderDto: CreateOrderDto & { id: string };
  createOrderDetailDto: CreateOrderDetailDto;
  createInvoiceDto?: CreateInvoiceDto;
}

export interface OrderFormProps {
  onSubmit: (data: OrderFormData) => void; 
  onCancel: () => void; 
}


