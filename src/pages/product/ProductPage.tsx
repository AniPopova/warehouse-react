import React from "react";
import ProductList from "./ProductList";
import ProductForm, { ProductFormData } from "../../components/forms/ProductForm";
import { StyledButton } from "../../components/layouts/ButtonsLayout";
import { PageWrapper } from "../../components/layouts/PageLayout";
import ProductDetails from "./ProductDetail";


const ProductPage = () => {
  const [isNewProduct, setIsNewProduct] = React.useState<boolean | null>(null);

  const handleAnswer = (answer: boolean) => {
    setIsNewProduct(answer);
  };

  const handleBackToPreviousPage = () => {
    history.back();
  };

  function onSignUp(formData: ProductFormData): void {
    console.log(formData);

    throw new Error("Function not implemented."); //TODO
  }

  return (
    <PageWrapper>
      {isNewProduct === null ? (
        <>
        <div>
          <br />
          <p>Choose one of the options</p>
            <br />
            <StyledButton type="button" onClick={() => handleAnswer(true)}>
              Register new product
            </StyledButton>
            <br />
            <StyledButton type="button" onClick={() => handleAnswer(true)}>
              Update existing product
            </StyledButton>
            <br />
            <StyledButton onClick={() => handleAnswer(false)}>
              Check product list
            </StyledButton>
            <br />
            <StyledButton type="button" onClick={handleBackToPreviousPage}>
              Back
            </StyledButton>
            <br />
          </div>
        </>
      ) : isNewProduct ? (
        <ProductForm onSubmit={onSignUp} />
      ) : (
        <>
          <ProductList />
          <ProductDetails />
          <br />
          <StyledButton type="button" onClick={handleBackToPreviousPage}>
            Back
          </StyledButton>
        </>
      )}
    </PageWrapper>
  );
};

export default ProductPage;


