// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { Button } from '../button/button.style';

// interface FormData {
//   [key: string]: string;
// }

// const initialFormData: FormData = {};

// const GenericForm: React.FC<GenericFormProps> = ({ formFields, onSubmit }) => {
//   const [formData, setFormData] = useState<FormData>(initialFormData);
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' });
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();

//     const newErrors: Record<string, string> = {};
//     formFields.forEach((field) => {
//       if (field.required && !formData[field.name]) {
//         newErrors[field.name] = `${field.label} is required.`;
//       }
//     });

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // Handle form submission
//     onSubmit(formData);
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
//             value={formData[field.name] || ''}
//             onChange={handleChange}
//           />
//           {errors[field.name] && <span style={{ color: 'red' }}>{errors[field.name]}</span>}
//         </div>
//       ))}
//       <Button type="submit">Submit</Button>
//     </form>
//   );
// };

// export default GenericForm;