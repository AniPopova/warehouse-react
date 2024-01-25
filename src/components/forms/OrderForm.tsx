import React, { useState } from "react";

interface OrderFormProps {
  onSubmit: (formData: OrderFormData) => void;
}

export enum OrderType {
  TRANSFER = "TRANSFER",
  ORDER = "ORDER",
  DELIVERY = "DELIVERY",
}

interface OrderFormData {
  orderType: OrderType | "";
  clientId: string;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    orderType: "", 
    clientId: "",
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
      orderType: "",
      clientId: "",
    });
  };

  return (
    <div>
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Order Type:
          <select
            name="orderType"
            value={formData.orderType}
            onChange={handleChange}
          >
            <option value="">Select Order Type</option>
            <option value={OrderType.TRANSFER}>Transfer</option>
            <option value={OrderType.ORDER}>Order</option>
            <option value={OrderType.DELIVERY}>Delivery</option>
          </select>
        </label>
        <br />
        <label>
          Client ID:
          <input
            type="text"
            name="clientId"
            value={formData.clientId}
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
