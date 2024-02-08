import React, { useState } from "react";
import { OrderType } from "../pages/Order/Order.static";
import { useNavigate } from "react-router-dom";

export interface OrderFormData {
  orderType: OrderType | "";
  clientId: string;
}

function OrderForm() {
  const [formData, setFormData] = useState<OrderFormData>({
    orderType: "",
    clientId: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //const createOrder = (data: Partial<Order>) => {

  //   fetch(endpoint.order, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(data),
  //   });
  // };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

   // createOrder(formData);

    setFormData({
      orderType: "",
      clientId: "",
    });
  };

  const handleBackToPreviousPage = () => {
    navigate("/");
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
        <br />
        <button type="button" onClick={handleBackToPreviousPage}>
          Back
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
