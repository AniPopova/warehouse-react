import { useEffect, useState } from "react";
import { Container, Table, Title } from "../../table/table.style";
import { Invoice } from "./Invoice.static";
import axios from "axios";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { RedButton, Button } from "../../button/button.style";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { getClients } from "../Client/Client.logic";
import { Client } from "../Client/Client.static";
import { Order } from "../Order/Order.static";
import { getOrders } from "../Order/Order.logic";

const InvoiceList = () => {
  const [records, setRecords] = useState<Invoice[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  // const [clients, setClients] = useState<Client[]>([]);
  // const [clients, setClients] = useState<Client[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    axios
     .get(`${BASE_URL}${ROUTES.INVOICE}`, { headers })
      .then((res) => {
        if (res.data.length > 0) {
          setRecords(res.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

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

  useEffect(() => {
    async function fetchOrders() {
      try {
        const ordersData = await getOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    }

    fetchOrders();
  }, []);
  
  
  const deleteInvoice = (invoiceId: string) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .delete(`${BASE_URL}${ROUTES.INVOICE}/${invoiceId}`, { headers })
      .then((res) => {
        setRecords(records.filter((record) => record.id !== invoiceId));
        return res;
      })
      .catch((err) => console.error(err));
  };

  
  return (
    <Container>
      <Title>Issued invoices</Title>
      <Table>
        <thead>
          <tr>
            <th>Invoice Nr.</th>
            <th>Client</th>
            <th>Created At</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
      {records.map((record) => {
        const order = orders.find((o) => o.id === record.orderId);
        const client = clients.find((c) => order && c.id === order.clientId);
        return (
          <tr key={record.id}>
            <td>{record.invNumber}</td>
            <td>{client ? client.name : 'Client not found'}</td>
            <td>{new Date(record.createdAt).toLocaleString()}</td>
            <td>
              <RedButton type="button" onClick={() => deleteInvoice(record.id)}>
                Delete
              </RedButton>
            </td>
          </tr>
        );
      })}
    </tbody>
      </Table>
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
          Back
        </Button>
    </Container>
  );
};

export default InvoiceList;