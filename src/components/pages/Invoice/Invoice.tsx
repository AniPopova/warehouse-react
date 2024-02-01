import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Invoice, invoiceUrl } from "./Invoice.static";
import { StyledButton, StyledTable } from "./Invoice.style";

function InvoiceList() {
  const [records, setRecords] = useState<Invoice[]>([]);

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
    <div>
      <div>
        <h3>Issued invoices</h3>
        <StyledTable>
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
                <td><StyledButton type="submit">Delete</StyledButton></td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </div>
    </div>
  );
}

export default InvoiceList;
