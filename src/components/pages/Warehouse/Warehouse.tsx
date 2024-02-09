import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Title, Table } from "../../table/table.style";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { Warehouse, WarehouseFormData, warehouseUrl } from "./Warehouse.static";
import { Button, RedButton } from "../../button/button.style";
import WarehouseForm from "../../form/WarehouseForm";

const WarehouseList: React.FC = () => {
  const [records, setRecords] = useState<Warehouse[]>([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get<Warehouse[]>(warehouseUrl, { headers })
      .then((res) => {
        const data: Warehouse[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteWarehouse = (warehouseId: string) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .delete<Warehouse>(`${warehouseUrl}/${warehouseId}`, { headers })
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
      .post<Warehouse>(warehouseUrl, newWarehouse, { headers })
      .then((res) => {
        const newRecord: Warehouse = res.data;
        setRecords([...records, newRecord]);
        toggleForm();
      })
      .catch((err) => console.error(err));
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
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.type}</td>
              <td>{record.clientId}</td>
              <td>{new Date(record.createdAt).toLocaleString()}</td>
              <td>
                <Button type="button">Update</Button>
              </td>
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
    </Container>
  );
};

export default WarehouseList;
