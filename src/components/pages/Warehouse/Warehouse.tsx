import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Container, Title, Table } from "../../table/table.style";
import { BackToHomePage } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { Warehouse, warehouseUrl } from "./Warehouse.static";
import useToken from "../../../hooks/token.hook";
import { Button, RedButton } from "../../button/button.style";

const WarehouseList = () => {
  const [warehouseRecords, setWarehouseRecords] = useState<Warehouse[]>([]);
  const navigate = useNavigate();
  const token = useToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(warehouseUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;

        if (data.length > 0) {
          setWarehouseRecords(data);
        }
      } catch (error) {
        console.error("Warehouse request failed:", error);

        if (axios.isAxiosError(error)) {
          const axiosError: AxiosError = error;
          if (axiosError.response?.status === 403) {
            console.log('You are not authorized for this action.');
            navigate("/");
          }
        }
      }
    };

    fetchData();
  }, [token, navigate]);

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