import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Invoice, invoiceUrl } from "./Invoice.constants";

function InvoiceList() {
  const [columns, setColumns] = useState<string[]>([]);
  const [records, setRecords] = useState<Invoice[]>([]);

  useEffect(() => {
    axios
      .get(invoiceUrl)
      .then((res) => {
        const data: Invoice[] = res.data;
        if (data.length > 0) {
          setColumns(Object.keys(data[0]));
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Issued invoices</h3>
        <table className="table table-bordered">
          <thead className="thead-dark">
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
                <td><button type="submit">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InvoiceList;
