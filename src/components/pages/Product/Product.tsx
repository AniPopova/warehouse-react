import { useEffect, useState } from "react";
import { Product, productUrl } from "./Product.constants";
import axios from "axios";

function ProductList() {
  // const [columns, setColumns] = useState<string[]>([]);
  const [records, setRecords] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(productUrl)
      .then((res) => {
        const data: Product[] = res.data;
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

  function handleRegisterNewProduct(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Registered products</h3>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Unit</th>
              <th>Created At</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record: Product, index) => (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.type}</td>
                <td>{record.unit}</td>
                <td>{new Date(record.createdAt).toLocaleString()}</td>
                <td>
                  <button type="submit">Update</button>
                </td>
                <td>
                  <button type="submit">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button type="button" onClick={() => handleRegisterNewProduct()}>
          Register new product
        </button>
        <br />
        <br />
        <button type="button" onClick={handleBackToPreviousPage}>
          Back
        </button>
      </div>
    </div>
  );
}


export default ProductList;
