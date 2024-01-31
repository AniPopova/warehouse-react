import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Client, clientUrl } from "./Client.constants";
import { StyledButton, StyledButtonDelete, StyledButtonUpdate, StyledTable } from "./Client.style";


function ClientList() {

  const [records, setRecords] = useState<Client[]>([]);

  useEffect(() => {
    axios
      .get(clientUrl)
      .then((res) => {
        const data: Client[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleBackToPreviousPage = () => {
    history.back();
  };

  function handleRegisterNewClient(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Registered clients</h3>
        <br />
        <StyledTable className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>UIC</th>
              <th>Created At</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record: Client, index) => (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.address}</td>
                <td>{record.identificationCode}</td>
                <td>{new Date(record.createdAt).toLocaleString()}</td>
                <td><StyledButtonUpdate type="submit">Update</StyledButtonUpdate></td>
                <td><StyledButtonDelete type="submit">Delete</StyledButtonDelete></td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
        <br />
        <StyledButton type="button" onClick={() => handleRegisterNewClient()}>
          Register new client
        </StyledButton>
        <br />
        <br />
        <StyledButton type="button" onClick={() => handleBackToPreviousPage()}>
          Back
        </StyledButton>
      </div>
    </div>
  );
}

export default ClientList;
