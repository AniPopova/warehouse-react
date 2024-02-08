import React, { ChangeEvent, useState } from "react";
import { Button } from "../button/button.style";
import { ProductType, WarehouseFormData, WarehouseFormProps, warehouseUrl } from "../pages/Warehouse/Warehouse.static";
import axios from "axios";

export const WarehouseForm: React.FC<WarehouseFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<WarehouseFormData>({
    name: "",
    type: "",
    client_id: ""
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
  
  const handleSubmit = async (formData: WarehouseFormData) => {
    try {
      // Assuming you are using a library like axios for HTTP requests
      const response = await axios.post(warehouseUrl, formData);
      onSubmit(formData);
      setFormData({
            name: "",
            type: "",
            client_id: "",
          });
      // Handle successful response, e.g., show a success message or redirect
      console.log('Success:', response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error:', error);
    }
  };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData);
    
  //   onSubmit(formData);
  
  //   setFormData({
  //     name: "",
  //     type: "",
  //     client_id: "",
  //   });
  // };
  

  return (
    <div>
      <h2>Create Warehouse</h2>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>
          Warehouse Name:
          <input
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
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Warehouse Type</option>
            <option value={ProductType.LIQUID}>LIQUID</option>
            <option value={ProductType.NON_LIQUID}>NON_LIQUID</option>
          </select>
        </label>
        <label>
          Client:
          <input
            type="text"
            name="client_id"
            value={formData.client_id}
            onChange={handleChange}
            required
          />
        </label>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default WarehouseForm;
