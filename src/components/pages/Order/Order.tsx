import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table, Title } from "../../table/table.style";
import { Button, RedButton } from "../../button/button.style";
import OrderForm from "../../form/OrderForm";
import OrderDetailsInfo from "../OrderDetails/OrderDetails";
import { useOrderLogic } from "../../../hooks/order.hook";
import { BackToHomePage, getClientName } from "../../../utils/utils";
import { Order } from "./Order.static";

const OrderList: React.FC = () => {

  const navigate = useNavigate();

  const {
    records,
    clients,
    showForm,
    setShowForm,
    showOrderDetailsInfo,
    setShowOrderDetailsInfo,
    handleSubmit,
    deleteOrder,
    getWarehouseName
  } = useOrderLogic();

  

  return (
    <Container>
      <Title>Registered orders</Title>
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Client</th>
            <th>Warehouse</th>
            <th>Created At</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: Order) => (
            <tr key={record.id}>
              <td>{record.type}</td>
              <td>{getClientName(clients, record.clientId)}</td>
              <td>{getWarehouseName(record.warehouseId)}</td>
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
      <Button type="button" onClick={()=>setShowForm(true)}>
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
      {showForm && <OrderForm onCancel={()=>setShowForm} onSubmit={handleSubmit} />}
    </Container>
  );
};

export default OrderList;