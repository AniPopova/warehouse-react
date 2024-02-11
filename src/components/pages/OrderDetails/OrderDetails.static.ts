export interface OrderDetail{
  id: string;
  warehouseId: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  totalPrice: string;
  createdAt: string;
}

export interface BestClient{
  ordersCount: string;
  spentMoney: string;
  clientName: string;
}

export interface BestProduct{
  soldQuantity: string;
  unit: string;
  productName: string;
}

export interface ProductsOnStock{
  totalQuantity: string;
  productName: string;
  warehouseName: string;
}
