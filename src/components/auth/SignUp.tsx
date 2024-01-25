import React, { useState } from 'react';

export interface SignUpFormData {
  username: string;
  email: string;
  password: string;
}

export interface SignUpFormProps {
  onSignUp: (formData: SignUpFormData) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUp }) => {
  const [formData, setFormData] = useState<SignUpFormData>({
    username: '',
    email: '',
    password: '',
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
    onSignUp(formData);
// reset form submission
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  const handleBackToMainPage = () => {
    window.location.href = '/home';
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
        <br />
        <button type="button" onClick={handleBackToMainPage}>
          Back to main page
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
