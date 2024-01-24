/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';

interface OrderFormProps {
  onSubmit: (formData: OrderFormData) => void;
}

export enum OrderType {
  TRANSFER = 'TRANSFER',
  ORDER = 'ORDER',
  DELIVERY = 'DELIVERY'
}

interface OrderFormData {
  orderType: OrderType | '';
  clientId: string;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    orderType: '',
    clientId: ''
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

export default OrderForm;
