import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Order, OrderFormData } from "./Order.static";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { Container, Table, Title } from "../../table/table.style";
import { Button, RedButton } from "../../button/button.style";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import OrderForm from "../../form/OrderForm";

const OrderList: React.FC = () => {
  const [records, setRecords] = useState<Order[]>([]);
  const [showForm, setShowForm] = useState(false);
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
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.type}</td>
              <td>{record.clientId}</td>
              <td>{new Date(record.createdAt).toLocaleString()}</td>
              <td>
                <Button type="button">Update</Button>
              </td>
              <td>
                <RedButton
                  type="button"
                  onClick={() => deleteOrder(record.id)}
                >
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
      <Button type="button" onClick={() => navigate("/orderDetailsData")}>
        Analyses
      </Button>
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
        Back
      </Button>
      {showForm && <OrderForm onCancel={toggleForm} onSubmit={handleSubmit} />}
    </Container>
  );
};

export default OrderList;
