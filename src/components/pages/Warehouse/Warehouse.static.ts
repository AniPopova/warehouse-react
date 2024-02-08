

export interface Warehouse {
  id: string;
  name: string;
  type: string;
  createdAt: string;
}

export type WarehouseFormProps = {
  onSubmit: (formData: WarehouseFormData) => void;
  onCancel: () => void;
};

export enum ProductType {
  LIQUID = "LIQUID",
  NON_LIQUID = "NON_LIQUID",
}

export interface WarehouseFormData {
  name: string;
  type: ProductType | '';
  client_id: string;
}



export const warehouseUrl = 'http://localhost:3000/warehouse';