// import { useState } from "react";
// import Modal from "react-modal";
// import WarehouseForm from "../../../components/forms/WarehouseForm";
// import { StyledButton } from "../../../styles/CommonStyles";

// // Make sure to set the root app element for react-modal
// Modal.setAppElement("#root");

// const WarehouseRegistrationModal = ({ isOpen, onClose }) => {
//   const [warehouseFormData, setWarehouseFormData] = useState({
//     name: "",
//     type: "",
//     // ...other fields
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setWarehouseFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     // Implement your logic to handle form submission (e.g., API call)
//     console.log("Submitting warehouse data:", warehouseFormData);
//     // Reset form data if needed
//     setWarehouseFormData({
//       name: "",
//       type: "",
//       // ...other fields
//     });
//     // Close the modal
//     onClose();
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Warehouse Registration Modal"
//     >
//       <h2>Register New Warehouse</h2>
//       <WarehouseForm
//         warehouseFormData={warehouseFormData}
//         onInputChange={handleInputChange}
//       />
//       <StyledButton onClick={handleSubmit}>Register</StyledButton>
//       <StyledButton onClick={onClose}>Cancel</StyledButton>
//     </Modal>
//   );
// };

// export default WarehouseRegistrationModal;
