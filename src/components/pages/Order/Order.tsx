import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Order, OrderFormData } from "./Order.static";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { Container, Table, Title } from "../../table/table.style";
import { Button, RedButton } from "../../button/button.style";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import OrderForm from "../../form/OrderForm";
import { Client } from "../Client/Client.static";
import { getClients } from "../Client/Client.logic";
import OrderDetailsInfo from "../OrderDetails/OrderDetails";

const OrderList: React.FC = () => {
  const [records, setRecords] = useState<Order[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [showOrderDetailsInfo, setShowOrderDetailsInfo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get<Order[]>(`${BASE_URL}${ROUTES.ORDER}`, { headers })
      .then((res) => {
        const data: Order[] = res.data;
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
    };

    fetchData();
  }, []);

  const deleteOrder = (orderId: string) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .delete<Order>(`${BASE_URL}${ROUTES.ORDER}/${orderId}`, { headers })
      .then((res) => {
        setRecords((currentRecords) =>
          currentRecords.filter((record) => record.id !== orderId)
        );
        return res;
      })
      .catch((err) => console.error(err));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (formData: Order | OrderFormData) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const newOrder: Order = {
      id: "",
      createdAt: "",
      ...formData,
    };

    axios
      .post<Order>(`${BASE_URL}${ROUTES.ORDER}`, newOrder, { headers })
      .then((res) => {
        const newRecord: Order = res.data;
        setRecords([...records, newRecord]);
        toggleForm();
      })
      .catch((err) => console.error(err));
  };

  const getClientName = (orderId: string): string => {
    const order = records.find((o) => o.id === orderId);
    const client = order
      ? clients.find((c) => c.id === order.clientId)
      : undefined;
    return client ? client.name : "N/A";
  };

  return (
    <Container>
      <Title>Registered orders</Title>
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Client</th>
            <th>Created At</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: Order) => (
            <tr key={record.id}>
              <td>{record.type}</td>
              <td>{getClientName(record.id)}</td>
              <td>{new Date(record.createdAt).toLocaleString()}</td>
              <td>
                <Button type="button">Update</Button>
              </td>
              <td>
                <RedButton type="button" onClick={() => deleteOrder(record.id)}>
                  Delete
                </RedButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button type="button" onClick={toggleForm}>
        Register new order
      </Button>
      <Button type="button" onClick={() => navigate("/invoiceList")}>
        Issued invoices
      </Button>
      <Button type="button" onClick={() => setShowOrderDetailsInfo(true)}>
        Analyses
      </Button>
      {showOrderDetailsInfo && <OrderDetailsInfo />}
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
        Back
      </Button>
      {showForm && <OrderForm onCancel={toggleForm} onSubmit={handleSubmit} />}
    </Container>
  );
};

export default OrderList;

