import React, { useState } from "react";
import { RegBox, StyledButton, StyledInput } from "../../styles/CommonStyles";

export interface ClientFormProps {
  onSubmit: (formData: ClientFormData) => void;
}

export interface ClientFormData {
  name: string;
  address: string;
  identificationCode: string;
}

const ClientForm: React.FC<ClientFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ClientFormData>({
    name: "",
    address: "",
    identificationCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);

    setFormData({
      name: "",
      address: "",
      identificationCode: "",
    });
  };

  const handleBackToPreviousPage = () => {
    history.back();
  };

  return (
    <RegBox>
      <h2>Register new client</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          Name:
          <StyledInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <StyledInput
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          UIC:
          <StyledInput
            type="text"
            name="identificationCode"
            value={formData.identificationCode}
            onChange={handleChange}
          />
        </label>
        <br />
        <StyledButton type="button">Submit</StyledButton>
        <StyledButton type="button" onClick={handleBackToPreviousPage}>
          Back
        </StyledButton>
      </form>
    </RegBox>
  );
};

export default ClientForm;
