export interface OrderDetail{
  warehouseId: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number
  createdAt: string;
}

export interface BestClient{
  ordersCount: string;
  spentMoney: string;
  clientName: string;
}

export interface BestProduct{
  soldQuantity: number;
  ProductName: string;
}

export interface ProductsOnStock{
  totalQuantity: string;
  productName: string;
  warehouseName: string;
}

export const bestBuyerReportUrl = 'http://localhost:3000/order-details/best-client'
export const bestProductUrl = 'http://localhost:3000/order-details/best-product'
export const productsOnStockUrl = 'http://localhost:3000/order-details/stock'