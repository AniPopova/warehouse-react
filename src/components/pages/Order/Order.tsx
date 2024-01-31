import { useEffect, useState } from "react";
import axios from "axios";
import { Order, orderUrl } from "./Order.static";
import BestClientReport from "./OrderDetails/BestClientReport";
import { StyledButton, StyledTable } from "./Order.style";
import { useNavigate } from "react-router-dom";
import BestProductReport from "./OrderDetails/BestProductReport";
import ProductsOnStock from "./OrderDetails/ProductsOnStockReport";

function OrderList() {
  const [records, setRecords] = useState<Order[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(orderUrl)
      .then((res) => {
        const data: Order[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleBackToPreviousPage = () => {
    navigate('/');
  };

  function handleRegisterNewOrder(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="container">
      <br />
      <StyledButton type="button" onClick={() => BestClientReport()}>
        See best client
      </StyledButton>
      <br />
        <StyledButton type="button" onClick={() => BestProductReport()}>
          Check product on stock
        </StyledButton>
        <br />
        <StyledButton type="button" onClick={() => ProductsOnStock()}>
          See best product
        </StyledButton>
      <div className="mt-3">
        <h3>Registered orders</h3>
        <StyledTable className="table table-bordered">
          <thead className="thead-dark">
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
                <td>{record.client}</td>
                <td>
                  <button type="submit">Update</button>
                </td>
                <td>
                  <button type="submit">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
        <div className="container">
          <br />
          <StyledButton type="button" onClick={() => handleRegisterNewOrder()}>
            Register new order
          </StyledButton>
          <br />
          <StyledButton type="button" onClick={() => handleBackToPreviousPage()}>
            Back
          </StyledButton>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
