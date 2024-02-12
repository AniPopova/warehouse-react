import React from "react";
import { Container, Title, Table } from "../../table/table.style";
import { BackToHomePage } from "../../../utils/utils";
import { Warehouse } from "./Warehouse.static";
import { Button, RedButton } from "../../button/button.style";
import WarehouseForm from "../../form/WarehouseForm";
import UpdateWarehouseModal from "./WarehouseDetails/WarehouseModal";
import useWarehouseLogic from "../../../hooks/warehouse.hook";

const WarehouseInfo: React.FC = () => {

  const {
    records,
    showForm,
    showUpdateModal,
    setShowUpdateModal,
    selectedWarehouse,
    navigate,
    toggleForm,
    handleSubmit,
    handleWarehouseUpdate,
    openUpdateModal,
    deleteWarehouse,
    getClientName,
  } = useWarehouseLogic();

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
        <UpdateWarehouseModal
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