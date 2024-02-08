import React, { useState } from "react";
import { Button } from "../button/button.style";
import { ProductType, WarehouseFormData, WarehouseFormProps } from "../pages/Warehouse/Warehouse.static";

export const WarehouseForm: React.FC<WarehouseFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<WarehouseFormData>({
    name: "",
    type: "",
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
      type: "",
    });
  };

  return (
    <div>
      <h2>Create Warehouse</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Warehouse Name:
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
          Warehouse Type:
          <select
            name="WarehouseType"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Warehouse Type</option>
            <option value={ProductType.LIQUID}>liquid</option>
            <option value={ProductType.NON_LIQUID}>non-liquid</option>
          </select>
        </label>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default WarehouseForm;
