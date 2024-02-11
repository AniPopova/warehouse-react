import React, { useEffect, useState } from "react";
import axios from "axios";
import { Client, ClientFormData } from "./Client.static";
import ClientForm from "../../form/ClientForm";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { Container, Table, Title } from "../../table/table.style";
import { useNavigate } from "react-router-dom";
import { Button, RedButton } from "../../button/button.style";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import UpdateModal from "./ClientDetails/UpdateModal";

const ClientInfo: React.FC = () => {
  const [records, setRecords] = useState<Client[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get<Client[]>(`${BASE_URL}${ROUTES.CLIENT}`, { headers })
      .then((res) => {
        const data: Client[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteClient = (clientId: string) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .delete<Client>(`${BASE_URL}${ROUTES.CLIENT}/${clientId}`, { headers })
      .then((res) => {
        setRecords(records.filter((record) => record.id !== clientId));
        return res;
      })
      .catch((err) => console.error(err));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const openUpdateModal = (client: Client) => {
    setSelectedClient(client);
    setShowUpdateModal(true);
  };

  const handleSubmit = (formData: ClientFormData) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const newClient: Client = {
      id: "",
      createdAt: "",
      ...formData,
    };

    axios
      .post<Client>(`${BASE_URL}${ROUTES.CLIENT}`, newClient, { headers })
      .then((res) => {
        const newRecord: Client = res.data;
        setRecords([...records, newRecord]);
        toggleForm();
      })
      .catch((err) => console.error(err));
  };

  const updateClient = (clientId: string, updatedData: ClientFormData) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .patch<Client>(`${BASE_URL}${ROUTES.CLIENT}/${clientId}`, updatedData, {
        headers,
      })
      .then((res) => {
        const updatedRecord: Client = res.data;
        setRecords((prevRecords) =>
          prevRecords.map((record) =>
            record.id === updatedRecord.id ? updatedRecord : record
          )
        );
      })
      .catch((err) => console.error(err));
  };

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
      <Button type="button" onClick={toggleForm}>
        Register new client
      </Button>
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
        Back
      </Button>
      {showForm && <ClientForm onCancel={toggleForm} onSubmit={handleSubmit} />}
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
