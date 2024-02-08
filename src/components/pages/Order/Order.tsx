import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Order, orderUrl } from "./Order.static";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { Container, Table, Title } from "../../table/table.style";
import { Button, RedButton } from "../../button/button.style";
import { Client, clientUrl } from "../Client/Client.static";


const OrderList: React.FC = () => {
  const [records, setRecords] = useState<Order[]>([]);
  const [clients, setClients] = useState<Client[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get<Order[]>(orderUrl, { headers })
      .then((res) => {
        const data: Order[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));

    axios
      .get<Client[]>(clientUrl)
      .then((res) => {
        const data: Client[] = res.data;
        if (data.length > 0) {
          setClients(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleUpdateClick = (orderId: string) => {
    navigate(`../../forms/OrderForm/${orderId}`);
  };

  const getClientNameById = (clientId: string): string => {
    const client: Client | undefined = clients.find((c) => c.id === clientId);
    if (client && "name" in client) {
      return client.name;
    }
    return "Warehouse";
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
          {records.map((record: Order, index) => (
            <tr key={index}>
              <td>{record.type}</td>
              <td>{getClientNameById(record.clientId)}</td>
              <td>{new Date(record.createdAt).toLocaleString()}</td>
              <td>
                <Button
                  type="button"
                  onClick={() => handleUpdateClick(record.id)}
                >
                  Update
                </Button>
              </td>
              <td>
                <RedButton type="button">Delete</RedButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button type="button" onClick={() => navigate("../../forms/OrderForm")}>
        Register new order
      </Button>
      <Button type="button" onClick={() => navigate("/invoiceList")}>
        Issued invoices
      </Button>
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
        Back
      </Button>
    </Container>
  );
};

export default OrderList;
