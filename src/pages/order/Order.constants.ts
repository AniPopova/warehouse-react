export interface Order{
  type: OrderType;
  client: string;
  createdAt: string;
}

export enum OrderType {
  TRANSFER = 'TRANSFER',
  ORDER = 'ORDER',
  DELIVERY = 'DELIVERY'
}

export interface BestClient{
  order_count: string;
  spent_money: string;
  client_name: string;
}

export const orderUrl = 'http://localhost:3000/order'
export const bestBuyerReportUrl = 'http://localhost:3000/order-details/best-client'
export const bestProductUrl = 'http://localhost:3000/order-details/best-product'
export const productsOnStockUrl = 'http://localhost:3000/order-details/stock'