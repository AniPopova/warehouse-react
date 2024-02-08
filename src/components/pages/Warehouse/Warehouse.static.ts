export interface Warehouse {
  id: string;
  name: string;
  type: string;
  createdAt: string;
}

export interface WarehouseFormProps {
  onSubmit: (formData: WarehouseFormData) => void;
}

export enum ProductType {
  LIQUID = "LIQUID",
  NON_LIQUID = "NON_LIQUID",
}

export interface WarehouseFormData {
  name: string;
  type: ProductType | '';
}

export const warehouseUrl = 'http://localhost:3000/warehouse';