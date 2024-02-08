
export interface Order {
  id: string;
  type: OrderType;
  clientId: string; 
  createdAt: string;
}

export interface Client {
  id: string;
  name: string;
  address: string;
  identificationCode: string;
  createdAt: string;
}

export interface Warehouse {
  id: string;
  name: string;
  type: string;
  createdAt: string;
}


export enum OrderType {
  TRANSFER = 'TRANSFER',
  ORDER = 'ORDER',
  DELIVERY = 'DELIVERY'
}



export const orderUrl = 'http://localhost:3000/order'
export const createOrderUrl = 'http://localhost:3000/order'
