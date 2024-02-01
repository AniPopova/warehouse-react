export interface Product{
  name: string;
  type: ProductType;
  unit: UnitType;
  createdAt: string;
}

export enum ProductType {
  LIQUID = 'LIQUID',
  NON_LIQUID = 'NON_LIQUID',
}

export enum UnitType {
  KILOGRAMS = 'kg',
  LITTERS = 'l',
}


export const productUrl = 'http://localhost:3000/product'

