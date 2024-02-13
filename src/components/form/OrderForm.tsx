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
import { getClients } from "../pages/Client/Client.logic";
import { getWarehouses } from "../pages/Warehouse/Warehouse.logic";
import { getProducts } from "../pages/Product/Product.logic";
import axios from "axios";
import { BASE_URL, ROUTES } from "../../routes/routes.static";
import { GetAuthToken } from "../../utils/auth.utils";


const OrderForm: React.FC<OrderFormProps> = ({ onSubmit, onCancel }: OrderFormProps) => {
  const [formData, setFormData] = useState<OrderFormData>({
    createOrderDto: {
      type: OrderType.ORDER,
      clientId: "",
      warehouseId: "",
      id: ""
    },
    createOrderDetailDto: {
      productId: "",
      senderWarehouseId: "",
      quantity: 0,
      price: 0,
    },
    createInvoiceDto: {
      orderId: "",
    },
  });

  const handleInputChange = (field: string, value: string | number) => {
    const [parentField, childField] = field.split(".");
    setFormData((prevData) => ({
      ...prevData,
      [parentField]: {
        ...prevData[parentField as keyof OrderFormData],
        [childField]: value,
      },
    }));
  };
  const createOrder = async () => {
    const data = {
      createOrderDto: {
        type: "ORDER",
        clientId: "7398fac9-a2a3-4f41-9292-14039af0e24f",
        warehouseId: null
      },
      createOrderDetailDto: {
        productId: "904a550d-9ba1-4d47-95fc-a434fd72cdab",
        quantity: 150,
        price: 9
      }
    };
  
    try {
      const token = GetAuthToken();
      const response = await axios.post(`${BASE_URL}${ROUTES.ORDER}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (response.status === 200) {
        console.log('Order created successfully');
      } else {

        console.error('Failed to create order');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const orderData = {
        createOrderDto: formData.createOrderDto,
        createOrderDetailDto: formData.createOrderDetailDto,
      };
      const token = GetAuthToken();
      const response = await axios.post(`${BASE_URL}${ROUTES.ORDER}`, orderData, {
      
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        console.log('Order created successfully');
        onSubmit(response.data); // Assuming the response contains the created order data
      } else {
        console.error('Failed to create order');
      }
    } catch (error) {
      console.error("Failed to create order:", error);
    }
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

  const handleCancel = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      createOrderDto: {
        type: OrderType.ORDER,
        clientId: "",
        warehouseId: "",
        id: ""
      },
      createOrderDetailDto: {
        productId: "",
        senderWarehouseId: "",
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
            <option value={OrderType.ORDER}>ORDER</option>
            <option value={OrderType.DELIVERY}>DELIVERY</option>
            <option value={OrderType.TRANSFER}>TRANSFER</option>
          </select>
          </label>
        <label>
          Client:
          <select
            value={formData.createOrderDto.clientId}
            onChange={(e) =>
              handleInputChange("createOrderDto.clientId", e.target.value)
            }
          >
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
            onChange={(e) =>
              handleInputChange("createOrderDto.senderWarehouseId", e.target.value)
            }
          >
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
            onChange={(e) =>
              handleInputChange(
                "createOrderDetailDto.productId",
                e.target.value
              )
            }
          >
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
            onChange={(e) =>
              handleInputChange("createOrderDetailDto.quantity", e.target.value)
            }
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            step="0.01"
            value={formData.createOrderDetailDto.price}
            onChange={(e) =>
              handleInputChange("createOrderDetailDto.price", e.target.value)
            }
          />
        </label>
        <Button type="submit"onClick={createOrder}>Create Order</Button>
        <Button type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default OrderForm;
