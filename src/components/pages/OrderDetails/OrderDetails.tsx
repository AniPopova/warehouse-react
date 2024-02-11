import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { OrderDetail } from "./OrderDetails.static";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { Container, Table } from "../../table/table.style";
import { Button, RedButton } from "../../button/button.style";
import BestClientReport from "./Reports/BestClient";
import BestProductReport from "./Reports/BestProduct";
import AvailabilityReport from "./Reports/Availability";

const OrderDetailsInfo: React.FC = () => {
  const [records, setRecords] = useState<OrderDetail[]>([]);
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

  return (
    <Container>
      <br />
      <Button type="button" onClick={()=> BestClientReport}>
        See best client
      </Button>
      <br />
      <Button type="button" onClick={() => BestProductReport}>
        Check product on stock
      </Button>
      <br />
      <Button type="button" onClick={() => AvailabilityReport}>
        See best product
      </Button>
      <h3>Registered orders with details</h3>
      <Table>
        <thead>
          <tr>
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
              <td>{record.warehouseId}</td>
              <td>{record.orderId}</td>
              <td>{record.productId}</td>
              <td>{record.quantity}</td>
              <td>{record.price}</td>
              <td>{record.totalPrice}</td>
              <td>{new Date(record.createdAt).toLocaleString()}</td>
              <td>
                <RedButton type="submit">Delete</RedButton>
              </td>
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

export default OrderDetailsInfo;
