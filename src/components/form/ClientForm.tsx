import React, { useState } from "react";
import { ClientFormData, ClientFormProps } from "../pages/Client/Client.static";
import { Button } from "../button/button.style";
import { createClient } from "../pages/Client/Client.logic";


const ClientForm: React.FC<ClientFormProps> = ({ onSubmit , onCancel}) => {
  const [formData, setFormData] = useState<ClientFormData>({
    name: "",
    address: "",
    identificationCode: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  
    try {
      const newClient = await createClient(
        formData.name,
        formData.address,
        formData.identificationCode
      );

      onSubmit(newClient);

      setFormData({
        name: "",
        address: "",
        identificationCode: "",
      });
    } catch (error) {
      console.error(`Failed to create client: `, error);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      address: "",
      identificationCode: ""
    });
    onCancel();
  };

  return (
    <div>
      <h2>Register new client</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Client Name:
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
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          UIC:
          <input
            type="text"
            name="identificationCode"
            value={formData.identificationCode}
            onChange={handleChange}
            required
          />
        </label>
        <Button type="submit">Save</Button>
        <Button type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default ClientForm;
