// import { useState } from 'react';

// const initialFormData = {
//   username: '',
//   email: '',
//   password: '',
// };

// const formFields = [
//   { label: 'Username', name: 'username', type: 'text', required: true },
//   { label: 'Email', name: 'email', type: 'email', required: true },
//   { label: 'Password', name: 'password', type: 'password', required: true },
// ];

// const Form = () => {
//   const [formData, setFormData] = useState(initialFormData);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

    // Validate form fields
    // const newErrors = {};
    // formFields.forEach((field) => {
    //   if (field.required && !formData[field.name]) {
    //     newErrors[field.name] = `${field.label} is required.`;
    //   }
    // });

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // Handle form submission (you can send data to the server or perform other actions)
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {formFields.map((field) => (
//         <div key={field.name}>
//           <label htmlFor={field.name}>{field.label}</label>
//           <input
//             type={field.type}
//             id={field.name}
//             name={field.name}
//             value={formData[field.name]}
//             onChange={handleChange}
//           />
//           {errors[field.name] && <span style={{ color: 'red' }}>{errors[field.name]}</span>}
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;
