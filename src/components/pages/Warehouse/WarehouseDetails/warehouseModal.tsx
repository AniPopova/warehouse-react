import React, { useState } from "react";
import { ModalContainer, ModalContent } from "./Modal.style";
import { ProductType, UpdateModalProps } from "../Warehouse.static";



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
        <h2>Update Warehouse</h2>
        <form>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <label>Type:</label>
          <select
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value as ProductType })
            }
          >
            <option value={ProductType.LIQUID}>LIQUID</option>
            <option value={ProductType.NON_LIQUID}>NON_LIQUID</option>
          </select>
          <label>Client:</label>
          <input
            type="text"
            value={formData.clientId}
            onChange={(e) =>
              setFormData({ ...formData, clientId: e.target.value })
            }
          />
          <button onClick={handleUpdate}>Update</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};
export default UpdateModal;
