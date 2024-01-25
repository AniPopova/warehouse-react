import React from "react";
import WarehouseForm, { WarehouseFormData } from "../../components/forms/WarehouseForm";
import { StyledButton } from "../../components/layouts/ButtonsLayout";
import { PageWrapper } from "../../components/layouts/PageLayout";
import WarehouseDetails from "./WarehouseDetails";
import WarehouseList from "./WarehouseList";



const WarehousePage = () => {
  const [isNewWarehouse, setIsNewWarehouse] = React.useState<boolean | null>(null);

  const handleAnswer = (answer: boolean) => {
    setIsNewWarehouse(answer);
  };

  const handleBackToPreviousPage = () => {
    history.back();
  };

  function onSignUp(formData: WarehouseFormData): void {
    console.log(formData);

    throw new Error("Function not implemented."); //TODO
  }

  return (
    <PageWrapper>
      {isNewWarehouse === null ? (
        <>
        <div>
          <br />
          <p>Choose one of the options</p>
          <br />
            <StyledButton type="button" onClick={() => handleAnswer(true)}>
              Register new Warehouse
            </StyledButton>
            <br />
            <StyledButton type="button" onClick={() => handleAnswer(true)}>
              Update existing Warehouse
            </StyledButton>
            <br />
            <StyledButton type="button" onClick={() => handleAnswer(false)}>
              Check Warehouse list
            </StyledButton>
            <br />
            <StyledButton type="button" onClick={handleBackToPreviousPage}>
              Back
            </StyledButton>
            <br />
          </div>
        </>
      ) : isNewWarehouse ? (
        <WarehouseForm onSubmit={onSignUp} />
      ) : (
        <>
          <WarehouseList />
          <WarehouseDetails />
          <br />
          <StyledButton type="button" onClick={handleBackToPreviousPage}>
            Back
          </StyledButton>
        </>
      )}
    </PageWrapper>
  );
};

export default WarehousePage;


