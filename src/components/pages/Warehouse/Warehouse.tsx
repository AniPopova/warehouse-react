import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Title, Table } from "../../table/table.style";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { Warehouse, warehouseUrl } from "./Warehouse.static";
import { Button, RedButton } from "../../button/button.style";

const WarehouseList = () => {
  const [warehouseRecords, setRecords] = useState<Warehouse[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(warehouseUrl, { headers })
      .then((res) => {
        const data: Warehouse[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  function RegisterNewWarehouse() {
    navigate("../../forms/WarehouseForm");
  }

  return (
    <Container>
      <Title>Registered warehouses</Title>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Created At</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {warehouseRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.type}</td>
              <td>{new Date(record.createdAt).toLocaleString()}</td>
              <td>
                <Button type="button">Update</Button>
              </td>
              <td>
                <RedButton type="button">Delete</RedButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button type="button" onClick={RegisterNewWarehouse}>
        Register new warehouse
      </Button>
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
        Back
      </Button>
    </Container>
  );
};

export default WarehouseList;
