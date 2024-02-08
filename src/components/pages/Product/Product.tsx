import React, { useEffect, useState } from "react";
import { Product, productUrl } from "./Product.static";
import axios from "axios";
import { BackToHomePage, GetAuthToken } from "../../../utils/utils";
import { Container, Table, Title } from "../../table/table.style";
import { Button, RedButton } from "../../button/button.style";
import { useNavigate } from "react-router-dom";

const ProductList: React.FC = () => {
  const [records, setRecords] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(productUrl, { headers })
      .then((res) => {
        const data: Product[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteProduct = (productId: string) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .delete(`${productUrl}/${productId}`, { headers })
      .then((res) => {
        setRecords(records.filter((record) => record.id !== productId));
        return res;
      })
      .catch((err) => console.error(err));
  };


  const handleRegisterNewProduct = (): void => {
    throw new Error("Under Construction");
  };

  return (
    <Container>
      <Title>Registered products</Title>
      <Table>
        <thead>
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
                <Button type="submit">Update</Button>
              </td>
              <td>
              <RedButton type="button" onClick={() => deleteProduct(record.id)}>
                Delete
              </RedButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button type="button" onClick={() => handleRegisterNewProduct()}>
        Register new product
      </Button>
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
        Back
      </Button>
    </Container>
  );
};

export default ProductList;