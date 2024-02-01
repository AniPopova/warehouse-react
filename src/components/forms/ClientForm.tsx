import { useState } from "react";

import axios from "axios";
import { backToHomePage } from "../../utils/utils";
import { createClientUrl } from "../pages/Client/Client.static";
import { StyledForm, StyledLabel, StyledInput, StyledButton } from "../navbar/navbar.style";
import { SignUpBox } from "../pages/Auth/Auth.style";

function ClientForm()  {
  const [name, setClientName] = useState("");
  const [address, setAddress] = useState("");
  const [identificationCode, setIdentificationCode] = useState("");
 // const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      const response = await axios.post(createClientUrl, {
        name,
        address,
        identificationCode,
      });
      console.log("New Client created", response.data);
      return backToHomePage;

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
            <StyledLabel>
              Name:
              <StyledInput
                type="text"
                name="name"
                onChange={(e) => setClientName(e.target.value)}
                required
              />
            </StyledLabel>
            <StyledLabel>
              Address:
              <StyledInput
                type="text"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </StyledLabel>
            <StyledLabel>
              UIC:
              <StyledInput
                type="text"
                name="Uic"
                onChange={(e) => setIdentificationCode(e.target.value)}
                required
              />
            </StyledLabel>
            <StyledButton type="button" onClick={handleCreate}>
              Create
            </StyledButton>
            <StyledButton type="button" onClick={backToHomePage}>
              Back
            </StyledButton>
          </StyledForm>
        </div>
      </div>
    </SignUpBox>
  );
}

export default ClientForm;
