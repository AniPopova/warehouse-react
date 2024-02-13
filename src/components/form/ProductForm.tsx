import React, { ChangeEvent, useState } from "react";
import {
  ProductFormData,
  ProductFormProps,
  ProductType,
  UnitType,
} from "../pages/Product/Product.static";
import { Button } from "../button/button.style";
import { createProduct } from "../pages/Product/Product.logic";

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    type: ProductType.LIQUID,
    unit: UnitType.LITTERS,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newProduct = await createProduct(
        formData.name,
        formData.type,
        formData.unit
      );
      onSubmit(newProduct);

      setFormData({
        name: "",
        type: ProductType.LIQUID,
        unit: UnitType.LITTERS,
      });
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      type: ProductType.LIQUID,
      unit: UnitType.LITTERS,
    });
    onCancel();
  };

  return (
    <div>
      <h2>Register new product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Type:
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value={ProductType.LIQUID}>LIQUID</option>
            <option value={ProductType.NON_LIQUID}>
              NON_LIQUID
            </option>
          </select>
        </label>
        <br />
        <label>
          Unit Type:
          <select
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            required
          >
            <option value={UnitType.LITTERS}>l</option>
            <option value={UnitType.KILOGRAMS}>kg</option>
          </select>
        </label>
        <br />
        <Button type="submit">Save</Button>
        <Button type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
