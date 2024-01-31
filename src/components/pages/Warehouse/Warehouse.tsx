import { useEffect, useState } from "react";
import { Warehouse, warehouseUrl } from "./Warehouse.static";
import axios from "axios";
import { StyledTable } from "./Warehouse.style";

function WarehouseList() {
  // const [columns, setColumns] = useState<string[]>([]);
  const [records, setRecords] = useState<Warehouse[]>([]);

  useEffect(() => {
    axios
      .get(warehouseUrl)
      .then((res) => {
        const data: Warehouse[] = res.data;
        if (data.length > 0) {
          // setColumns(Object.keys(data[0]));
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleBackToPreviousPage = () => {
    history.back();
  };

  function handleRegisterNewWarehouse(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Registered warehouses</h3>
        <br />
        <StyledTable className="table table-unordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Created At</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record: Warehouse, index) => (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.type}</td>
                <td>{new Date(record.createdAt).toLocaleString()}</td>
                <td>
                  <button className="btn btn-primary btn-sm" type="submit">Update</button>
                </td>
                <td>
                  <button className="btn btn-warning btn-sm" type="submit">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
        <br />
        <button className="btn btn-success btn-sm" type="button" onClick={() => handleRegisterNewWarehouse()}>
          Register new warehouse
        </button>
        <br />
        <br />
        <button className="btn btn-success btn-sm" type="button" onClick={() => handleBackToPreviousPage()}>
          Back
        </button>
      </div>
    </div>
  );
}

export default WarehouseList;
