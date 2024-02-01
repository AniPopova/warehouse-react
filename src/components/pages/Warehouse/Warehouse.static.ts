export interface Warehouse {
  id: string;
  name: string;
  type: string;
  createdAt: string;
}

export const warehouseUrl = 'http://localhost:3000/warehouse';