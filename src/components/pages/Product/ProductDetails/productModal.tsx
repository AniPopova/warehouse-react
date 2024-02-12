import React, { useState } from "react";
import { ProductType, UnitType, UpdateModalProps } from "../Product.static";
import { ModalContainer, ModalContent } from "../../../modal/Modal.style";


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
          <label>Unit:</label>
          <select
            value={formData.unit}
            onChange={(e) =>
              setFormData({ ...formData, unit: e.target.value as UnitType })
            }
          >
            <option value={UnitType.KILOGRAMS}>KILOGRAMS</option>
            <option value={UnitType.LITTERS}>LITTERS</option>
          </select>

            <button onClick={handleUpdate}>Update</button>
            <button type="button" onClick={onCancel}>Cancel</button>
  
        </form>
      </ModalContent>
    </ModalContainer>
  );
};
export default UpdateModal;
