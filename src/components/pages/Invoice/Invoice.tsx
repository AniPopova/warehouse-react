import { useEffect, useState } from "react";
import { Container, Table, Title } from "../../table/table.style";
import { Invoice, invoiceUrl } from "./Invoice.static";
import axios from "axios";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { RedButton, Button } from "../../button/button.style";

const InvoiceList = () => {
  const [records, setRecords] = useState<Invoice[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    axios
     .get(invoiceUrl, { headers })
      .then((res) => {
        if (res.data.length > 0) {
          setRecords(res.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  
  const deleteInvoice = (invoiceId: string) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .delete(`${invoiceUrl}/${invoiceId}`, { headers })
      .then((res) => {
        setRecords(records.filter((record) => record.id !== invoiceId));
        return res;
      })
      .catch((err) => console.error(err));
  };

  
  return (
    <Container>
      <Title>Issued invoices</Title>
      <Table>
        <thead>
          <tr>
            <th>Invoice Nr.</th>
            <th>Created At</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: Invoice, index) => (
            <tr key={index}>
              <td>{record.invNumber}</td>
              <td>{new Date(record.createdAt).toLocaleString()}</td>
              <td>  <RedButton type="button" onClick={() => deleteInvoice(record.id)}>
                Delete
              </RedButton></td>
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