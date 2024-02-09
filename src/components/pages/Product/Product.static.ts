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
  onSubmit: (formData: ProductFormData | Product) => void;
  onCancel: () => void;
};
export interface ProductFormData {
  name: string;
  type: ProductType;
  unit: UnitType;
}


export const productUrl = 'http://localhost:3000/product'

