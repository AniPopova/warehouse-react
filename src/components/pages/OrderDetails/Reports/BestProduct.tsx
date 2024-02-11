import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../button/button.style";
import { Container, Table } from "../../../table/table.style";
import { BASE_URL, ROUTES } from "../../../../routes/routes.static";
import { GetAuthToken } from "../../../../utils/utils";
import { BestProduct } from "../OrderDetails.static";

const BestProductReport: React.FC = () => {
  const [records, setRecords] = useState<BestProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    axios
      .get<BestProduct[]>(`${BASE_URL}${ROUTES.BEST_PRODUCT}`, {
        headers,
      })
      .then((res) => {
        const data: BestProduct[] = res.data;
        if (data.length > 0) {
          setRecords(res.data);
        }
      })
      .catch((err: Error) => console.error(err));
  }, []);

  return (
    <Container>
      <h3>Most wanted product</h3>
      <Table>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Merit unit</th>
            <th>Sold quantity</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: BestProduct, index) => (
            <tr key={index}>
              <td>{record.product_name}</td>
              <td>{record.unit}</td>
              <td>{record.sold_quantity}</td>
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

export default BestProductReport;
