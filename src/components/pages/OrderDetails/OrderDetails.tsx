import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { OrderDetail } from "./OrderDetails.static";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { Container, Table } from "../../table/table.style";
import { Button } from "../../button/button.style";
import BestClientReport from "./Reports/BestClient";
import BestProductReport from "./Reports/BestProduct";
import AvailabilityReport from "./Reports/Availability";
import { Order } from "../Order/Order.static";
import { Product } from "../Product/Product.static";
import { Client } from "../Client/Client.static";
import { getProducts } from "../Product/Product.logic";
import { getClients } from "../Client/Client.logic";
import { getOrders } from "../Order/Order.logic";
import { Warehouse } from "../Warehouse/Warehouse.static";
import { getWarehouses } from "../Warehouse/Warehouse.logic";

const OrderDetailsInfo: React.FC = () => {
  const [records, setRecords] = useState<OrderDetail[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [showBestClientReport, setShowBestClientReport] = useState(false);
  const [showBestProductReport, setShowBestProductReport] = useState(false);
  const [showAvailabilityReport, setShowAvailabilityReport] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get<OrderDetail[]>(`${BASE_URL}${ROUTES.ORDER_DETAILS}`, {headers})
      .then((res) => {
        const data: OrderDetail[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        
        const clientsData = await getClients();
        setClients(clientsData);

        const ordersData = await getOrders();
        setOrders(ordersData);

        const warehouseData = await getWarehouses();
        setWarehouses(warehouseData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const getProductName = (productId: string): string => {
    const product = products.find((p) => p.id === productId);
    return product ? product.name : 'N/A';
  };

  const getWarehouseName = (warehouseId: string): string => {
    const warehouse = warehouses.find((w) => w.id === warehouseId);
    return warehouse ? warehouse.name : 'N/A';
  };
  const getClientName = (orderId: string): string => {
    const order = orders.find(o => o.id === orderId);
    const client = order ? clients.find(c => c.id === order.clientId) : undefined;
    return client ? client.name : 'N/A';
  };

  const getOrderType = (orderId: string): string => {
    const order = orders.find((o) => o.id === orderId);
    return order ? order.type : 'N/A';
  };

  return (
    <Container>
      <h3>Registered orders with details</h3>
      <Table>
        <thead>
          <tr>
          <th>Client</th>
            <th>Warehouse</th>
            <th>Order</th>
            <th>Product</th>
            <th>Q-ty</th>
            <th>Single price</th>
            <th>Total price</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: OrderDetail, index) => (
            <tr key={index}>
              <td>{getClientName(record.orderId)}</td>
              <td>{getWarehouseName(record.warehouseId)}</td>
              <td>{getOrderType(record.orderId)}</td>
              <td>{getProductName(record.productId)}</td>
              <td>{record.quantity}</td>
              <td>{record.price}</td>
              <td>{record.totalPrice}</td>
              <td>{new Date(record.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button type="button" onClick={() => setShowBestClientReport(true)}>
        See best client
      </Button>
      {showBestClientReport && <BestClientReport />}
      <Button type="button" onClick={() => setShowBestProductReport(true)}>
        Check product on stock
      </Button>
      {showBestProductReport && <BestProductReport />}
      <Button type="button" onClick={() => setShowAvailabilityReport(true)}>
        See best product
      </Button>
      {showAvailabilityReport && <AvailabilityReport />}
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
        Back
      </Button>
    </Container>
  );
};

export default OrderDetailsInfo;
