import React, { useEffect, useState } from "react";
import {
  OrderFormData,
  OrderFormProps,
} from "../pages/Order/Order.static";
import { Button } from "../button/button.style";
import { Product } from "../pages/Product/Product.static";
import { Warehouse } from "../pages/Warehouse/Warehouse.static";
import { Client } from "../pages/Client/Client.static";
import { getClients } from "../pages/Client/Client.logic";
import { getWarehouses } from "../pages/Warehouse/Warehouse.logic";
import { getProducts } from "../pages/Product/Product.logic";
import axios from "axios";
import { BASE_URL, ROUTES } from "../../routes/routes.static";
import { GetAuthToken } from "../../utils/auth.utils";


const OrderForm: React.FC<OrderFormProps> = ({ onSubmit, onCancel }: OrderFormProps) => {
  const [formData, setFormData] = useState<OrderFormData>({
    createOrderDto: {
      id: "",
      type: "",
      clientId: "",
      warehouseId: "",
    },
    createOrderDetailDto: {
      warehouseId:"",
      productId: "",
      quantity: 0,
      price: 0,
    },
    createInvoiceDto: {
      orderId: "",
    },
  });

  const handleInputChange = (key: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = GetAuthToken();
      const response = await axios.post(`${BASE_URL}${ROUTES.ORDER}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        console.log('Order created successfully');
        onSubmit(response.data);
      } else {
        console.error('Failed to create order');
      }
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  };

  const handleCancel = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      createOrderDto: {
        id: "",
        type: "",
        clientId: "",
        warehouseId: "",
      },
      createOrderDetailDto: {
        warehouseId:"",
        productId: "",
        quantity: 0,
        price: 0,
      },
      createInvoiceDto: {
        orderId: "",
      },
    });

    onCancel();
  };

  const [clients, setClients] = useState<Client[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsData = await getClients();
        setClients(clientsData);
      } catch (error) {
        console.error("Failed to fetch clients:", error);
      }
    };

    fetchClients();
  }, []);

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const warehousesData = await getWarehouses();
        setWarehouses(warehousesData);
      } catch (error) {
        console.error("Failed to fetch warehouses:", error);
      }
    };

    fetchWarehouses();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);



  return (
    <div>
      <h2>Register new order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select
            name="type"
            value={formData.createOrderDto.type}
            onChange={(e) => handleInputChange("createOrderDto.type", e.target.value)}
            required
          >
            <option value="">Select Type</option>
            <option value="ORDER">ORDER</option>
            <option value="DELIVERY">DELIVERY</option>
            <option value="TRANSFER">TRANSFER</option>
          </select>
        </label>
        <label>
          Client:
          <select
            value={formData.createOrderDto.clientId}
            onChange={(e) => handleInputChange("createOrderDto.clientId", e.target.value)}
          >
            <option value="">Select Client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Warehouse:
          <select
            value={formData.createOrderDto.warehouseId}
            onChange={(e) => handleInputChange("createOrderDto.warehouseId", e.target.value)}
          >
            <option value="">Select Warehouse</option>
            {warehouses.map((warehouse) => (
              <option key={warehouse.id} value={warehouse.id}>
                {warehouse.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Warehouse Supplier:
          <select
            value={formData.createOrderDetailDto.warehouseId}
            onChange={(e) => handleInputChange("createOrderDetailDto.warehouseId", e.target.value)}
          >
            <option value="">Select Warehouse Supplier</option>
            {warehouses.map((warehouse) => (
              <option key={warehouse.id} value={warehouse.id}>
                {warehouse.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Product:
          <select
            value={formData.createOrderDetailDto.productId}
            onChange={(e) => handleInputChange("createOrderDetailDto.productId", e.target.value)}
          >
            <option value="">Select Product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </label>
  
        <label>
          Quantity:
          <input
            type="number"
            value={formData.createOrderDetailDto.quantity}
            onChange={(e) => handleInputChange("createOrderDetailDto.quantity", e.target.value)}
          />
        </label>
  
        <label>
          Price:
          <input
            type="number"
            step="0.01"
            value={formData.createOrderDetailDto.price}
            onChange={(e) => handleInputChange("createOrderDetailDto.price", e.target.value)}
          />
        </label>
        <Button type="submit">Create Order</Button>
        <Button type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default OrderForm;

