import React from "react";
import { Container, Table, Title } from "../../table/table.style";
import { Button, RedButton } from "../../button/button.style";
import ProductForm from "../../form/ProductForm";
import { Product, ProductFormData } from "./Product.static";
import UpdateModal from "./ProductDetails/ProductModal";
import { BackToHomePage } from "../../../utils/utils";
import useProductInfo from "../../../hooks/product.hook";

const ProductList: React.FC = () => {
  const {
    records,
    showForm,
    showUpdateModal,
    setShowUpdateModal,
    selectedProduct,
    openUpdateModal,
    updateProduct,
    deleteProduct,
    handleSubmit,
    handleFormVisibility,
  } = useProductInfo();
  


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
                <Button type="button" onClick={() => openUpdateModal(record)}>
                  Update
                </Button>
              </td>
              <td>
                <RedButton
                  type="button"
                  onClick={() => deleteProduct(record.id)}
                >
                  Delete
                </RedButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button type="button" onClick={()=> handleFormVisibility()}>
        Register new product
      </Button>
      <Button type="button" onClick={() => BackToHomePage}>
        Back
      </Button>
      {showForm && (
        <ProductForm onCancel={()=>handleFormVisibility()} onSubmit={handleSubmit} />
      )}
      {showUpdateModal && selectedProduct && (
        <UpdateModal
          initialData={{
            name: selectedProduct.name,
            type: selectedProduct.type,
            unit: selectedProduct.unit,
          }}
          onUpdate={(updatedData: ProductFormData) =>{
            updateProduct(selectedProduct.id, updatedData);
            setShowUpdateModal(false);
          }}
          onCancel={() => setShowUpdateModal(false)}
        />
      )}
    </Container>
  );
};

export default ProductList;


