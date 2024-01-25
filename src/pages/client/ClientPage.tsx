import React from "react";
import ClientDetails from "./ClientDetails";
import ClientList from "./ClientList";
import ClientForm, { ClientFormData } from "../../components/forms/ClientForm";
import { StyledButton } from "../../components/layouts/ButtonsLayout";
import { PageWrapper, Explanation } from "../../components/layouts/PageLayout";

const ClientPage = () => {
  const [isNewClient, setIsNewClient] = React.useState<boolean | null>(null);

  const handleAnswer = (answer: boolean) => {
    setIsNewClient(answer);
  };

  const handleBackToPreviousPage = () => {
    history.back();
  };

  function onSignUp(formData: ClientFormData): void {
    console.log(formData);

    throw new Error("Function not implemented."); //TODO
  }

  return (
    <PageWrapper>
      {isNewClient === null ? (
        <>
          <div>
            <Explanation>
              Here is explained what does clients can do...
            </Explanation>
            <br />
            <p>Choose one of the options</p>
            <br />
            <StyledButton type="button" onClick={() => handleAnswer(true)}>
              Register new client
            </StyledButton>
            <br />
            <StyledButton type="button" onClick={() => handleAnswer(true)}>
              Update existing client
            </StyledButton>
            <br />
            <StyledButton type="button" onClick={() => handleAnswer(false)}>
              See All Clients
            </StyledButton>
            <br />
            <StyledButton type="button" onClick={handleBackToPreviousPage}>
              Back
            </StyledButton>
            <br />
          </div>
        </>
      ) : isNewClient ? (
        <ClientForm onSubmit={onSignUp} />
      ) : (
        <>
          <ClientList />
          <ClientDetails />
          <br />
          <StyledButton type="button" onClick={handleBackToPreviousPage}>
            Back
          </StyledButton>
        </>
      )}
    </PageWrapper>
  );
};

export default ClientPage;

//form, accepts fields, has validation, map all fields and create input elements based on the fields
