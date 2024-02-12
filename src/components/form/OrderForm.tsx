import React, { useEffect, useState } from "react";
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
import { Form, Input } from "antd";

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    createOrderDto: {
      type: OrderType.ORDER,
      clientId: "",
      warehouseId: "",
    },
    createOrderDetailDto: {
      productId: "",
      warehouseId: "",
      quantity: 0,
      price: 0,
    },
    createInvoiceDto: {
      orderId: "",
    },
  });

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

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newOrder = await createOrder(
        formData.createOrderDto,
        formData.createOrderDetailDto,
        formData.createInvoiceDto
      );
      onSubmit(newOrder); 
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  };

  const handleCancel = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      createOrderDto: {
        type: OrderType.ORDER,
        clientId: "",
        warehouseId: "",
      },
      createOrderDetailDto: {
        productId: "",
        warehouseId: "",
        quantity: 0,
        price: 0,
      },
      createInvoiceDto: {
        orderId: "",
      },
    });

    onCancel();
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label="Client ID">
        <select
          value={formData.createOrderDto.clientId}
          onChange={(e) =>
            handleInputChange("createOrderDto", e.target.value)
          }
        >
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
      </Form.Item>
      <Form.Item label="Warehouse ID">
        <select
          value={formData.createOrderDto.warehouseId}
          onChange={(e) =>
            handleInputChange("createOrderDto", e.target.value)
          }
        >
          {warehouses.map((warehouse) => (
            <option key={warehouse.id} value={warehouse.id}>
              {warehouse.name}
            </option>
          ))}
        </select>
      </Form.Item>
      <Form.Item label="Product ID">
        <select
          value={formData.createOrderDetailDto.productId}
          onChange={(e) =>
            handleInputChange("createOrderDetailDto", e.target.value)
          }
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </Form.Item>
      <Form.Item label="Quantity">
        <Input
          value={formData.createOrderDetailDto.quantity}
          onChange={(e) =>
            handleInputChange(
              "createOrderDetailDto",
              parseInt(e.target.value)
            )
          }
        />
      </Form.Item>
      <Form.Item label="Price">
        <Input
          value={formData.createOrderDetailDto.price}
          onChange={(e) =>
            handleInputChange(
              "createOrderDetailDto",
              parseFloat(e.target.value)
            )
          }
        />
      </Form.Item>
      <Form.Item>
        <Button type="submit">Create Order</Button>
        <Button type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderForm;
