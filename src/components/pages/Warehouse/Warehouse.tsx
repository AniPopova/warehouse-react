import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Title, Table } from "../../table/table.style";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { Warehouse, WarehouseFormData } from "./Warehouse.static";
import { Button, RedButton } from "../../button/button.style";
import WarehouseForm from "../../form/WarehouseForm";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { updateWarehouse } from "./Warehouse.logic";
import UpdateModal from "./WarehouseDetails/warehouseModal";
import { Client } from "../Client/Client.static";
import { getClients } from "../Client/Client.logic";

const WarehouseInfo: React.FC = () => {
  const [records, setRecords] = useState<Warehouse[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState<Warehouse | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get<Warehouse[]>(`${BASE_URL}${ROUTES.WAREHOUSE}`, { headers })
      .then((res) => {
        const data: Warehouse[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {       
        const clientsData = await getClients();
        setClients(clientsData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const getClientName = (clientId: string): string => {
    const client = clients.find((c) => c.id === clientId);
    return client ? client.name : '';
  };

  const deleteWarehouse = (warehouseId: string) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .delete<Warehouse>(`${BASE_URL}${ROUTES.WAREHOUSE}/${warehouseId}`, { headers })
      .then((res) => {
        setRecords(records.filter((record) => record.id !== warehouseId));
        return res;
      })
      .catch((err) => console.error(err));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (formData: WarehouseFormData) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  
    const newWarehouse: Warehouse = {
      id: "",
      createdAt: "", 
      ...formData,
    };
  
    axios
      .post<Warehouse>(`${BASE_URL}${ROUTES.WAREHOUSE}`, newWarehouse, { headers })
      .then((res) => {
        const newRecord: Warehouse = res.data;
        setRecords([...records, newRecord]);
        toggleForm();
      })
      .catch((err) => console.error(err));
  };

  const openUpdateModal = (warehouse: Warehouse) => {
    setSelectedWarehouse(warehouse);
    setShowUpdateModal(true);
  };

  const handleWarehouseUpdate = async (updatedData: WarehouseFormData) => {
    try {
      if (selectedWarehouse) {
        const updatedProduct = await updateWarehouse(selectedWarehouse.id, updatedData);
        setRecords((prevRecords) =>
          prevRecords.map((record) =>
            record.id === updatedProduct.id ? updatedProduct : record
          )
        );
      }
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Failed to update warehouse: ", error);
    }
  };

  return (
    <Container>
      <Title>Registered warehouses</Title>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Client</th>
            <th>Created At</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: Warehouse, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.type}</td>
              <td>{getClientName(record.clientId)}</td>
              <td>{new Date(record.createdAt).toLocaleString()}</td>
              <Button type="button" onClick={() => openUpdateModal(record)}>
                  Update
                </Button>
              <td>
                <RedButton type="button" onClick={() => deleteWarehouse(record.id)}>
                  Delete
                </RedButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button type="button" onClick={toggleForm}>
        Register new warehouse
      </Button>
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
        Back
      </Button>
      {showForm && <WarehouseForm onCancel={toggleForm} onSubmit={handleSubmit} />}
      {showUpdateModal && selectedWarehouse && (
        <UpdateModal
          initialData={{
            name: selectedWarehouse.name,
            type: selectedWarehouse.type,
            clientId: selectedWarehouse.clientId,
          }}
          onUpdate={handleWarehouseUpdate}
          onCancel={() => setShowUpdateModal(false)}
        />
      )} 
    </Container>
  );
};

export default WarehouseInfo;