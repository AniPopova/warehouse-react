import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../button/button.style";
import {
  ProductType,
  WarehouseFormData,
  WarehouseFormProps,
} from "../pages/Warehouse/Warehouse.static";
import { createWarehouse} from "../pages/Warehouse/Warehouse.logic";
import { Client } from "../pages/Client/Client.static";
import { getClients } from "../pages/Client/Client.logic";

const WarehouseForm: React.FC<WarehouseFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<WarehouseFormData>({
    name: "",
    type: ProductType.LIQUID,
    clientId: ""
  });
  const [clients, setClients] = useState<Client[]>([]);

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
      const newWarehouse = await createWarehouse(
        formData.name,
        formData.type,
        formData.clientId
      );
      onSubmit(newWarehouse);

      setFormData({
        name: "",
        type: ProductType.LIQUID,
        clientId: "",
      });
    } catch (error) {
      console.error("Failed to create warehouse:", error);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      type: ProductType.LIQUID,
      clientId: "",
    });
    onCancel();
  };

  return (
    <div>
      <h2>Register new warehouse</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
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
          Type:
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value={ProductType.LIQUID}>LIQUID</option>
            <option value={ProductType.NON_LIQUID}>NON_LIQUID</option>
          </select>
        </label>
        <br />
        <label>
          Client:
          <select
            name="clientId"
            value={formData.clientId}
            onChange={handleChange}
            required
          >
            <option value="">Select a client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
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

export default WarehouseForm;