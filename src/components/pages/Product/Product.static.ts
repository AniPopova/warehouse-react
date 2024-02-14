export interface Product{
  id: string;
  name: string;
  type: ProductType;
  unit: UnitType;
  createdAt: string;
}


export enum ProductType {
  LIQUID = "LIQUID",
  NON_LIQUID = "NON_LIQUID",
}

export enum UnitType {
  KILOGRAMS = "kg",
  LITTERS = "l",
}

export type ProductFormProps = {
  onSubmit: (formData: ProductFormData) => void;
  onCancel: () => void;
};
export interface ProductFormData {
  name: string;
  type: ProductType;
  unit: UnitType;
}

export interface UpdateProductDto {
  id: string;
  updatedName?: string;
  updatedType?: string;
  updatedUnit?: string;
}

export interface UpdateModalProps {
  initialData: ProductFormData;
  onUpdate: (data: ProductFormData) => void;
  onCancel: () => void;
}

