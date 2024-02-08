export interface Invoice{
  id: string;
  orderId: string;
  invNumber: string;
  createdAt: string;
}

export const invoiceUrl = 'http://localhost:3000/invoice';