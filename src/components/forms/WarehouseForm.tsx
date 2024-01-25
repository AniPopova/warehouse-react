import React, { useState } from "react";

interface WarehouseFormProps {
  onSubmit: (formData: WarehouseFormData) => void;
}

export enum ProductType {
  LIQUID = "LIQUID",
  NON_LIQUID = "NON_LIQUID",
}


export interface WarehouseFormData {
  name: string;
  warehouseType: ProductType | "";
}

const WarehouseForm: React.FC<WarehouseFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<WarehouseFormData>({
    name:"",
    warehouseType: "", 
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
      warehouseType: "",
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
          />
        </label>
        <br />
        <label>
          Warehouse Type:
          <select
            name="WarehouseType"
            value={formData.warehouseType}
            onChange={handleChange}
          >
            <option value="">Select Warehouse Type</option>
            <option value={ProductType.LIQUID}>liquid</option>
            <option value={ProductType.NON_LIQUID}>non-liquid</option>
          </select>
        </label>
        <br />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WarehouseForm;
