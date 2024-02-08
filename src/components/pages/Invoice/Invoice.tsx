import { useEffect, useState } from "react";
import { Container, Table, Title } from "../../table/table.style";
import { Invoice, invoiceUrl } from "./Invoice.static";
import axios from "axios";
import { BackToHomePage } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { RedButton, Button } from "../../button/button.style";

const InvoiceList = () => {
  const [records, setRecords] = useState<Invoice[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(invoiceUrl)
      .then((res) => {
        const data: Invoice[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <Title>Issued invoices</Title>
      <Table>
        <thead>
          <tr>
            <th>Invoice Nr.</th>
            <th>Created At</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: Invoice, index) => (
            <tr key={index}>
              <td>{record.invNumber}</td>
              <td>{record.createdAt}</td>
              <td><RedButton type="submit">Delete</RedButton></td>
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