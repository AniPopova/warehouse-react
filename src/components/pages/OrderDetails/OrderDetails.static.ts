import { Order } from "../Order/Order.static";
import { Product } from "../Product/Product.static";
import { Warehouse } from "../Warehouse/Warehouse.static";

export interface OrderDetail{
  id: string;
  warehouseId: Warehouse['id'];
  orderId: Order['id'];
  productId: Product['id'];
  quantity: number;
  price: number;
  totalPrice: string;
  createdAt: string;
}


export interface OrderDetailFormData {
  warehouseId: Warehouse["id"];
  orderId: Order['id'];
  productId: Product['id'];
  quantity: number;
  price: number;
}

export type OrderDetailFormProps = {
  onSubmit: (formData: OrderDetail | OrderDetailFormData ) => void;
  onCancel: () => void;
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
