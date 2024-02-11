import { useEffect, useState } from "react";
import { Container, Table, Title } from "../../table/table.style";
import { Invoice } from "./Invoice.static";
import axios from "axios";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { Button } from "../../button/button.style";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { Order } from "../Order/Order.static";
import { getOrders } from "../Order/Order.logic";
import { Product } from "../Product/Product.static";
import { getProducts } from "../Product/Product.logic";
import { getOrderDetails } from "../OrderDetails/OrderDetails.logic";
import { OrderDetail } from "../OrderDetails/OrderDetails.static";
import { Client } from "../Client/Client.static";
import { getClients } from "../Client/Client.logic";

const InvoiceList = () => {
  const [records, setRecords] = useState<Invoice[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [orderDetails, setOrderDetails] = useState<OrderDetail[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInvoices = async () => {
      const token = GetAuthToken();
      try {
        const response = await axios.get(`${BASE_URL}${ROUTES.INVOICE}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.data.length > 0) {
          setRecords(response.data);
        }
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orderDetailsData = await getOrderDetails();
        setOrderDetails(orderDetailsData);
        
        const productsData = await getProducts();
        setProducts(productsData);
        
        const clientsData = await getClients();
        setClients(clientsData);

        const ordersData = await getOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const getProductName = (orderId: string): string => {
    const orderDetail = orderDetails.find((od) => od.orderId === orderId);
    const product = orderDetail ? products.find((p) => p.id === orderDetail.productId) : undefined;
    return product ? product.name : 'N/A';
  };

  const getClientName = (orderId: string): string => {
    const order = orders.find((o) => o.id === orderId);
    const client = order ? clients.find((c) => c.id === order.clientId) : undefined;
    return client ? client.name : 'N/A';
  };


  return (
    <Container>
      <Title>Issued invoices</Title>
      <Table>
        <thead>
          <tr>
            <th>Invoice Nr.</th>
            <th>Product</th>
            <th>Client</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: Invoice) => (
            <tr key={record.id}>
              <td>{record.invNumber}</td>
              <td>{getProductName(record.orderId)}</td>
              <td>{getClientName(record.orderId)}</td>
              <td>{new Date(record.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
        Back
      </Button>
    </Container>
  );
};

export default InvoiceList;
