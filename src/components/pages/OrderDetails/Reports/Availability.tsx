import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../button/button.style";
import { Container, Table } from "../../../table/table.style";
import { BASE_URL, ROUTES } from "../../../../routes/routes.static";
import { GetAuthToken } from "../../../../utils/utils";
import { ProductsOnStock } from "../OrderDetails.static";

const AvailabilityReport: React.FC = () => {
  const [records, setRecords] = useState<ProductsOnStock[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    axios
      .get<ProductsOnStock[]>(`${BASE_URL}${ROUTES.AVAILABILITY}`, {
        headers,
      })
      .then((res) => {
        const data: ProductsOnStock[] = res.data;
        if (data.length > 0) {
          setRecords(res.data);
        }
      })
      .catch((err: Error) => console.error(err));
  }, []);

  return (
    <Container>
      <h3>Warehouse with highest stock availability</h3>
      <Table>
        <thead>
          <tr>
            <th>Available quantity</th>
            <th>Product name</th>
            <th>Warehouse name</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: ProductsOnStock, index) => (
            <tr key={index}>
              <td>{record.warehouseName}</td>
              <td>{record.productName}</td>
              <td>{record.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <Button type="button" onClick={() => navigate(-1)}>
        Back
      </Button>
    </Container>
  );
};

export default AvailabilityReport;
