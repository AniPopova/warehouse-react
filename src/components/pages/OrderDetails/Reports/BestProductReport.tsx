import { useEffect, useState } from "react";
import axios from "axios";
import { BestClient, bestBuyerReportUrl } from "../../Order/Order.static";
import { StyledButton } from "../../Order/Order.style";

function BestProductReport() {
  const [records, setRecords] = useState<BestClient[]>([]);

  useEffect(() => {
    axios
      .get(bestBuyerReportUrl)
      .then((res) => {
        const data: BestClient[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleBackToPreviousPage = () => {
    history.back();
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Client with most orders</h3>
        <table className="table table">
          <thead className="thead-dark">
            <tr>
              <th>Client name</th>
              <th>Orders done</th>
              <th>Money spent</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record: BestClient, index) => (
              <tr key={index}>
                <td>{record.clientName}</td>
                <td>{record.ordersCount}</td>
                <td>{record.spentMoney}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="container">
          <br />
          <StyledButton type="button" onClick={handleBackToPreviousPage}>
            Back
          </StyledButton>
        </div>
      </div>
    </div>
  );
}

export default BestProductReport;