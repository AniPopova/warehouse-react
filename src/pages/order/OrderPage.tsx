import React from "react";
import styled from "styled-components";
import OrderForm, { OrderFormData } from "../../components/forms/OrderForm";
import OrderList from "./OrderList";
import OrderDetails from "./OrderDetails";
import { StyledButton } from "../../components/layouts/ButtonsLayout";

const OrderPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Explanation = styled.p`
  display: flex;
  color: red;
  font-size: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
`;

const OrderPage = () => {
  const [isNewOrder, setIsNewOrder] = React.useState<boolean | null>(null);

  const handleAnswer = (answer: boolean) => {
    setIsNewOrder(answer);
  };

  const handleBackToPreviousPage = () => {
    history.back();
  };

  function onSignUp(formData: OrderFormData): void {
    console.log(formData);

    throw new Error("Function not implemented."); //TODO
  }

  return (
    <OrderPageWrapper>
      {isNewOrder === null ? (
        <>
          <Explanation>
            Here is explained what does Orders can do...
          </Explanation>
          <div>
            <br />
            <p>Choose one of the options</p>
            <br /> 
            <StyledButton type="button" onClick={() => handleAnswer(true)}>
              Register new Order
            </StyledButton>
            <br />
            <StyledButton type="button"onClick={() => handleAnswer(false)}>
              See All Orders
            </StyledButton>
            <br />
            <StyledButton type="button" onClick={handleBackToPreviousPage}>
              Back
            </StyledButton>
            <br />
          </div>
        </>
      ) : isNewOrder ? (
        <OrderForm onSubmit={onSignUp} />
      ) : (
        <>
          <OrderList />
          <OrderDetails />
          <br />
          <StyledButton type="button" onClick={handleBackToPreviousPage}>
            Back
          </StyledButton>
        </>
      )}
    </OrderPageWrapper>
  );
};

export default OrderPage;
