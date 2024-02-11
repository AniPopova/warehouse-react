import React, { ChangeEvent, useEffect, useState } from "react";
import {
  OrderFormData,
  OrderFormProps,
  OrderType,
} from "../pages/Order/Order.static";
import { Button } from "../button/button.style";
import { Product } from "../pages/Product/Product.static";
import { Warehouse } from "../pages/Warehouse/Warehouse.static";
import { Client } from "../pages/Client/Client.static";
import { createOrder } from "../pages/Order/Order.logic";
import { getClients } from "../pages/Client/Client.logic";
import { getWarehouses } from "../pages/Warehouse/Warehouse.logic";
import { getProducts } from "../pages/Product/Product.logic";

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    type: OrderType.ORDER,
    clientId: "",
    warehouseId: ""
  });

  const [clients, setClients] = useState<Client[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  useEffect(() => {
    async function fetchClients() {
      try {
        const clientsData = await getClients();
        setClients(clientsData);
      } catch (error) {
        console.error("Failed to fetch clients:", error);
      }
    }

    fetchClients();
  }, []);

  useEffect(() => {
    async function fetchWarehouses() {
      try {
        const warehousesData = await getWarehouses();
        setWarehouses(warehousesData);
      } catch (error) {
        console.error("Failed to fetch warehouses:", error);
      }
    }

    fetchWarehouses();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProducts();
  }, []);

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
      const newOrder = await createOrder(
        formData.type,
        formData.clientId,
      );

      onSubmit(newOrder);

      setFormData({
        type: OrderType.ORDER,
        clientId: "",
        warehouseId: ""
      });
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  };

  const handleCancel = () => {
    setFormData({
      type: OrderType.ORDER,
      clientId: "",
      warehouseId: ""
    });
    onCancel();
  };

  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value={OrderType.TRANSFER}>TRANSFER</option>
            <option value={OrderType.ORDER}>ORDER</option>
            <option value={OrderType.DELIVERY}>DELIVERY</option>
          </select>
        </label>
        <br />
        <label>
          Client:
          <select
            name="clientId"
            value={formData.clientId}
            onChange={handleChange}
          >
            <option value="">Select Client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Warehouse:
          <select
            name="warehouseId"
            value={formData.warehouseId}
            onChange={handleChange}
          >
            <option value="">Select Warehouse</option>
            {warehouses.map((warehouse) => (
              <option key={warehouse.id} value={warehouse.id}>
                {warehouse.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Product:
          <select
            name="productId"
            value={formData.productId}
            onChange={handleChange}
          >
            <option value="">Select Product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
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

export default OrderForm;
