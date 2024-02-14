import React, { useEffect, useState } from "react";
import axios from "axios";
import { BestClient } from "../OrderDetails.static";
import { GetAuthToken } from "../../../../utils/auth.utils";
import { BASE_URL, ROUTES } from "../../../../routes/routes.static";
import { Container, Table } from "../../../table/table.style";

const BestClientReport: React.FC = () => {
  const [records, setRecords] = useState<BestClient[]>([]);

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get(`${BASE_URL}${ROUTES.BEST_CLIENT}`, { headers })
      .then((res) => {
        if (res.data.length > 0) {
          setRecords(res.data);
        }
      })
      .catch((err: Error) => console.error(err));
  }, []);

  return (
    <Container>
      <h3>Client with most orders</h3>
      <Table>
        <thead>
          <tr>
            <th>Client name</th>
            <th>Orders done</th>
            <th>Money spent</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: BestClient, index) => (
            <tr key={index}>
              <td>{record.client_name}</td>
              <td>{record.orders}</td>
              <td>{record.total_money_spent}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BestClientReport;
