import React from "react";
import { Client, ClientFormData } from "./Client.static";
import ClientForm from "../../form/ClientForm";
import { Container, Table, Title } from "../../table/table.style";
import { useNavigate } from "react-router-dom";
import { Button, RedButton } from "../../button/button.style";
import UpdateModal from "./ClientUpdate/ClientModal";
import { useClientInfo } from "../../../hooks/client.hook";
import { BackToHomePage } from "../../../utils/utils";

const ClientInfo: React.FC = () => {

  const navigate = useNavigate();
  const {
    records,
    showForm,
    setShowForm,
    showUpdateModal,
    setShowUpdateModal,
    selectedClient,
    deleteClient,
    openUpdateModal,
    handleSubmit,
    updateClient,
  } = useClientInfo();

  return (
    <Container>
      <Title>Registered clients</Title>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>UIC</th>
            <th>Created At</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: Client, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.address}</td>
              <td>{record.identificationCode}</td>
              <td>
                {record.createdAt && typeof record.createdAt === "string"
                  ? new Date(record.createdAt).toLocaleString()
                  : "Invalid Date"}
              </td>
              <td>
                <Button type="button" onClick={() => openUpdateModal(record)}>
                  Update
                </Button>
              </td>
              <td>
                <RedButton
                  type="button"
                  onClick={() => deleteClient(record.id)}
                >
                  Delete
                </RedButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button type="button" onClick={()=>setShowForm(true)}>
        Register new client
      </Button>
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
        Back
      </Button>
      {showForm && <ClientForm onCancel={()=>setShowForm} onSubmit={handleSubmit} />}
      {showUpdateModal && selectedClient && (
        <UpdateModal
          initialData={{
            name: selectedClient.name,
            address: selectedClient.address,
            identificationCode: selectedClient.identificationCode,
          }}
          onUpdate={(updatedData: ClientFormData) => {
            updateClient(selectedClient.id, updatedData);
            setShowUpdateModal(false);
          }}
          onCancel={() => setShowUpdateModal(false)}
        />
      )}
    </Container>
  );
};

export default ClientInfo;
