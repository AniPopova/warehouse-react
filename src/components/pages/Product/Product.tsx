import { useEffect, useState } from "react";
import { Product, productUrl } from "./Product.constants";
import axios from "axios";
import { BackToHomePage } from "../../../utils/utils";
import { StyledTable, StyledButton } from "./Product.style";

const ProductList = () => {
  const [records, setRecords] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(productUrl)
      .then((res) => {
        const data: Product[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);


  function handleRegisterNewProduct(): void {
    throw new Error("Under Construction");
  }

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Registered products</h3>
        <StyledTable className="table table-unordered">
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
        </StyledTable>
        <br />
        <StyledButton type="button" onClick={() => handleRegisterNewProduct()}>
          Register new product
        </StyledButton>
        <br />
        <br />
        <StyledButton type="button" onClick={()=> BackToHomePage()}>
          Back
        </StyledButton>
      </div>
    </div>
  );
}


export default ProductList;
