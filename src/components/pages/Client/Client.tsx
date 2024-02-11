import React, { useEffect, useState } from "react";
import axios from "axios";
import { Client, ClientFormData } from "./Client.static";
import ClientForm from "../../form/ClientForm";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { Container, Table, Title } from "../../table/table.style";
import { useNavigate } from "react-router-dom";
import { Button, RedButton } from "../../button/button.style";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";

const ClientInfo: React.FC = () => {
  const [records, setRecords] = useState<Client[]>([]);
  const [showForm, setShowForm] = useState(false);
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

  const handleSubmit = (formData: ClientFormData | Client) => {
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
                <Button type="submit">Update</Button>
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
      <br />
      <Button type="button" onClick={toggleForm}>
        Register new client
      </Button>
      <br />
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
        Back
      </Button>
      {showForm && <ClientForm onCancel={toggleForm} onSubmit={handleSubmit} />}
    </Container>
  );
};

export default ClientInfo;
