import { Order } from "../Order/Order.static";

export interface Invoice{
  id: string;
  orderId: Order['id'];
  invNumber: number;
  createdAt: string;
}

export interface InvoiceFormData {
  orderId: Order['id']
}

export interface InvoiceFormProps {
  onSubmit: (formData: InvoiceFormData ) => void;
  onCancel: () => void;
}

