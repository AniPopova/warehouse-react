
export interface OrderDetail{
  id: string;
  senderWarehouseId: string;
  receiverWarehouseId?:string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  totalPrice: string;
  createdAt: string;
}

export interface BestClient{
  orders: string;
  total_money_spent: string;
  client_name: string;
}

export interface BestProduct{
  sold_quantity: string;
  unit: string;
  product_name: string;
}

export interface ProductsOnStock{
  total_quantity: string;
  product_name: string;
  warehouse_name: string;
}
