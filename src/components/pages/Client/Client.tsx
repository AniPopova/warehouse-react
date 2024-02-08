import { useEffect, useState } from "react";
import axios from "axios";
import { Client, ClientFormData, clientUrl } from "./Client.static";
import ClientForm from "../../form/ClientForm";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { Container, Table, Title } from "../../table/table.style";
import { useNavigate } from "react-router-dom";
import { Button, RedButton } from "../../button/button.style";

const ClientList: React.FC = () => {
  const [records, setRecords] = useState<Client[]>([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get<Client[]>(clientUrl, { headers })
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
    };

    axios
      .delete<Client>(`${clientUrl}/${clientId}`, { headers })
      .then((res) => {
        setRecords(records.filter((record) => record.id !== clientId));
       return res;
      })
      .catch((err) => console.error(err));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (formData: ClientFormData) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    const newClient: Client = {
      id: "",
      createdAt: "",
      ...formData,
    };
  
    axios
      .post<Client>(clientUrl, newClient, { headers })
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
              <td>{new Date(record.createdAt).toLocaleString()}</td>
              <td>
                <Button type="submit">Update</Button>
              </td>
              <td>
              <RedButton type="button" onClick={() => deleteClient(record.id)}>
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

export default ClientList;
