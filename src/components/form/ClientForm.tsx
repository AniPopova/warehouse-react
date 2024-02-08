import React, { useState } from "react";
import { ClientFormData, ClientFormProps } from "../pages/Client/Client.static";
import { SignUpBox } from "../pages/Welcome/Welcome.style";
import { Button } from "../button/button.style";

const ClientForm: React.FC<ClientFormProps> = ({ onSubmit }) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);

    setFormData({
      name: "",
      address: "",
      identificationCode: "",
    });
  };

  return (
    <SignUpBox>
      <h2>Create Warehouse</h2>
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
      </form>
    </SignUpBox>
  );
};

export default ClientForm;
