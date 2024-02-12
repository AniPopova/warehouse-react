import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Order, OrderFormProps } from "./Order.static";
import { BackToHomePage } from "../../../utils/utils";
import { Container, Table, Title } from "../../table/table.style";
import { Button, RedButton } from "../../button/button.style";
import OrderForm from "../../form/OrderForm";
import OrderDetailsInfo from "../OrderDetails/OrderDetails";
import { useOrderLogic } from "../../../hooks/order.hook";

const OrderList: React.FC = () => {
  const navigate = useNavigate();

  const {
    records,
    showForm,
    showOrderDetailsInfo,
    setShowOrderDetailsInfo,
    deleteOrder,
    toggleForm,
    handleSubmit,
    getClientName,
  } = useOrderLogic();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formData, setFormData] = useState<any>(null); 

  const orderFormProps: OrderFormProps = {
    onCancel: toggleForm,
    onSubmit: handleSubmit,
    formData: formData,
    setFormData: setFormData,
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
      {showForm && <OrderForm {...orderFormProps} />}
    </Container>
  );
};

export default OrderList;
