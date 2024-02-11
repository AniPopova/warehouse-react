import React, { useState } from "react";
import { UpdateModalProps } from "../Client.static";
import { ModalContainer, ModalContent } from "./Modal.style";



const UpdateModal: React.FC<UpdateModalProps> = ({
  initialData,
  onUpdate,
  onCancel,
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleUpdate = () => {
    onUpdate(formData);
    onCancel();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>Update Client</h2>
        <form>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <label>Address:</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          <label>UIC:</label>
          <input
            type="text"
            value={formData.identificationCode}
            onChange={(e) =>
              setFormData({ ...formData, identificationCode: e.target.value })
            }
          />
          <button onClick={handleUpdate}>Update</button>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};
export default UpdateModal;
