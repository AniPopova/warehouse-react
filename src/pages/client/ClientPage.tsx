import React from "react";
import ClientForm from "../../components/forms/ClientForm";
import {
  PageWrapper,
  Explanation,
  StyledButton,
} from "../../styles/CommonStyles";
import ClientDetails from "./ClientDetails";
import ClientList from "./ClientList";

const ClientPage = () => {
  const [isNewClient, setIsNewClient] = React.useState<boolean | null>(null);

  const handleAnswer = (answer: boolean) => {
    setIsNewClient(answer);
  };

  const handleBackToPreviousPage = () => {
    history.back();
  };

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
        <ClientForm
          onSubmit={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
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
