import { useEffect, useState } from "react";
import axios from "axios";

import { StyledButton } from "../../Order/Order.style";
import { BestClient, bestBuyerReportUrl } from "../OrderDetails.static";
import { BackToHomePage } from "../../../../utils/utils";

function ProductsOnStock() {
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


  return (
    <div >
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
                {/* <td>{record.client_name}</td>
                <td>{record.order_count}</td>
                <td>{record.spent_money}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="container">
          <br />
          <StyledButton type="button" onClick={()=> BackToHomePage()}>
            Back
          </StyledButton>
        </div>
      </div>
    </div>
  );
}

export default ProductsOnStock;
