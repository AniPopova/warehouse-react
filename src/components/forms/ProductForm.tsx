import React, { useState } from "react";

interface ProductFormProps {
  onSubmit: (formData: ProductFormData) => void;
}

export enum ProductType {
  LIQUID = "LIQUID",
  NON_LIQUID = "NON_LIQUID",
}

export enum UnitType {
  KILOGRAMS = 'kg',
  LITTERS = 'l',
}

interface ProductFormData {
  name: string;
  productType: ProductType | "";
  unit: UnitType | "";
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name:"",
    productType: "", 
    unit: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);

    setFormData({
      name:"",
      productType: "",
      unit: "",
    });
  };

  return (
    <div>
      <h2>Create product</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Type:
          <select
            name="productType"
            value={formData.productType}
            onChange={handleChange}
          >
            <option value="">Select Product Type</option>
            <option value={ProductType.LIQUID}>liquid</option>
            <option value={ProductType.NON_LIQUID}>non-liquid</option>
          </select>
        </label>
        <br />
        <label>
          Unit Type:
          <select
            name="productType"
            value={formData.unit}
            onChange={handleChange}
          >
            <option value="">Select Unit</option>
            <option value={UnitType.LITTERS}>l</option>
            <option value={UnitType.KILOGRAMS}>kg</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
