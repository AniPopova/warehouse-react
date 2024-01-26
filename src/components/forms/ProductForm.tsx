import React, { useState } from "react";
import {
  RegBox,
  StyledButton,
  StyledInput,
  StyledOption,
  StyledSelect,
} from "../../styles/CommonStyles";

export interface ProductFormProps {
  onSubmit: (formData: ProductFormData) => void;
}

export enum ProductType {
  LIQUID = "LIQUID",
  NON_LIQUID = "NON_LIQUID",
}

export enum UnitType {
  KILOGRAMS = "kg",
  LITTERS = "l",
}

export interface ProductFormData {
  name: string;
  productType: ProductType | "";
  unit: UnitType | "";
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
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
      name: "",
      productType: "",
      unit: "",
    });
  };

  const handleBackToMainPage = () => {
    history.back();
  };

  return (
    <RegBox>
      <h2>Register new product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <StyledInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Type:
          <StyledSelect
            name="productType"
            value={formData.productType}
            onChange={handleChange}
          >
            <StyledOption value="">Select Product Type</StyledOption>
            <StyledOption value={ProductType.LIQUID}>liquid</StyledOption>
            <StyledOption value={ProductType.NON_LIQUID}>
              non-liquid
            </StyledOption>
          </StyledSelect>
        </label>
        <br />
        <label>
          Unit Type:
          <StyledSelect
            name="productType"
            value={formData.unit}
            onChange={handleChange}
          >
            <StyledOption value="">Select Unit</StyledOption>
            <StyledOption value={UnitType.LITTERS}>l</StyledOption>
            <StyledOption value={UnitType.KILOGRAMS}>kg</StyledOption>
          </StyledSelect>
        </label>
        <br />
        <StyledButton type="button">Submit</StyledButton>
        <StyledButton type="button" onClick={handleBackToMainPage}>
          Back
        </StyledButton>
      </form>
    </RegBox>
  );
};

export default ProductForm;
