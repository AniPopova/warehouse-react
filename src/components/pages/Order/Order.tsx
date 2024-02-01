import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Order, Client, orderUrl, Warehouse } from "./Order.static";
import axios from "axios";
import { clientUrl } from "../Client/Client.static";
// import { warehouseUrl } from "../Warehouse/Warehouse.static";
import { StyledButton, StyledTable } from "./Order.style";
import { backToHomePage } from "../../../utils/utils";
import OrderForm from "../../forms/OrderForm";

function OrderList() {
  const [records, setRecords] = useState<Order[]>([]);
  const [clients, setClients] = useState<Client[] | Warehouse[]>([]);

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

    axios
      .get(clientUrl)
      .then((res) => {
        const data: Client[] = res.data;
        if (data.length > 0) {
          setClients(data);
        }
      })
      //     .catch((err) => console.error(err));

      // axios
      // .get(warehouseUrl)
      // .then((res) => {
      //   const data: Warehouse[] = res.data;
      //   if (data.length > 0) {
      //     setWarehouses(data);
      //   }
      // })
      .catch((err) => console.error(err));
  }, []);

  const registerNewOrder = () => {
    navigate("../../forms/OrderForm");
  };
  const getClientNameById = (clientId: string): string => {
    const clientOrWarehouse: Client | Warehouse | undefined = clients.find(
      (c) => c.id === clientId
    );

    if (clientOrWarehouse && "name" in clientOrWarehouse) {
      return clientOrWarehouse.name;
    }
    return "Warehouse";
  };

  return (
    <div className="container">
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
                <td>{getClientNameById(record.clientId)}</td>
                <td>{new Date(record.createdAt).toLocaleString()}</td>
                <td>
                  <button type="button" onClick={OrderForm}>
                    Update
                  </button>
                </td>
                <td>
                  <button type="button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
        <div className="container">
          <br />
          <StyledButton type="button" onClick={registerNewOrder}>
            Register new order
          </StyledButton>
          <br />
          <StyledButton type="button" onClick={backToHomePage}>
            Back
          </StyledButton>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
