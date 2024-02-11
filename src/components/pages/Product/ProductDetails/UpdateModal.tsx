import React, { useState } from "react";
import { ProductType, UnitType, UpdateModalProps } from "../Product.static";
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
        <h2>Update Product</h2>
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
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value as ProductType })
            }
          />
          <label>UIC:</label>
          <input
            type="text"
            value={formData.unit}
            onChange={(e) =>
              setFormData({ ...formData, unit: e.target.value as UnitType})
            }
          />
          <button onClick={handleUpdate}>Update</button>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};
export default UpdateModal;