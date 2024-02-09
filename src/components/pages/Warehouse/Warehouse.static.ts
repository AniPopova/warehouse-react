

export interface Warehouse {
  id: string;
  name: string;
  type: ProductType;
  clientId: string;
  createdAt: string;
}

export type WarehouseFormProps = {
  onSubmit: (formData: WarehouseFormData | Warehouse) => void;
  onCancel: () => void;
};

export enum ProductType {
  LIQUID = "LIQUID",
  NON_LIQUID = "NON_LIQUID",
}

export interface WarehouseFormData {
  name: string;
  type: ProductType;
  clientId: string;
}



export const warehouseUrl = 'http://localhost:3000/warehouse';