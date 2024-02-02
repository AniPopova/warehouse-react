import { useState } from "react";
import axios from "axios";
import { BackToHomePage } from "../../utils/utils";
import { createClientUrl } from "../pages/Client/Client.static";
import { SignUpBox, StyledForm } from "../pages/Auth/Auth.style";
import { StyledButton } from "../pages/Client/Client.style";

const ClientForm = () =>  {
  const [name, setClientName] = useState("");
  const [address, setAddress] = useState("");
  const [identificationCode, setIdentificationCode] = useState("");

  const handleCreate = async () => {
    try {
      const response = await axios.post(createClientUrl, {
        name,
        address,
        identificationCode,
      });
      console.log("New Client created", response.data);
      return BackToHomePage;

    } catch (error) {
      console.log("Sorry you failed, try again.");
    }
  };


  return (
    <SignUpBox>
      <div className="card">
        <div className="card-body">
          <h4 >Create</h4>
          <br />
          <StyledForm>
            <label>
              Name:
              <input
                type="text"
                name="name"
                onChange={(e) => setClientName(e.target.value)}
                required
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
            <label>
              UIC:
              <input
                type="text"
                name="Uic"
                onChange={(e) => setIdentificationCode(e.target.value)}
                required
              />
            </label>
            <StyledButton type="button" onClick={handleCreate}>
              Create
            </StyledButton>
            <StyledButton type="button" onClick={()=> BackToHomePage()}>
              Back
            </StyledButton>
          </StyledForm>
        </div>
      </div>
    </SignUpBox>
  );
}

export default ClientForm;
