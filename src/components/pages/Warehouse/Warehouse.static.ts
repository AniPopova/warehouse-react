export interface Warehouse {
  id: string;
  name: string;
  type: ProductType;
  clientId: string;
  createdAt: string;
}

export interface WarehouseFormProps {
  warehouse?: Warehouse;
  initialData?: WarehouseFormData | Warehouse;
  onSubmit: (formData: WarehouseFormData | Warehouse) => void;
  onCancel: () => void;
}

export enum ProductType {
  LIQUID = "LIQUID",
  NON_LIQUID = "NON_LIQUID",
}

export interface WarehouseFormData {
  id?: string;
  name: string;
  type: ProductType;
  clientId: string;
}
