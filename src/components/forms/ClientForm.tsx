import React, { useState } from 'react';

interface ClientFormProps {
  onSubmit: (formData: ClientFormData) => void;
}

interface ClientFormData {
  name: string;
  address: string;
  identificationCode: string;
}

const ClientForm: React.FC<ClientFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ClientFormData>({
    name: '',
    address: '',
    identificationCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      name: '',
      address: '',
      identificationCode:''
    });
  };

  return (
    <div>
      <h2>Client Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            />
          </label>
          <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ClientForm;
