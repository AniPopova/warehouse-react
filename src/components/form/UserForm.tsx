import React, { useState } from "react";
import { Button } from "../button/button.style";

interface UserFormProps {
  onSubmit: (formData: UserFormData) => void;
}

export enum UserRights {
  OWNER = "OWNER",
  OPERATOR = "OPERATOR",
  VIEWER = "VIEWER",
}

interface UserFormData {
  username: string;
  email: string;
  password: string;
  userRole: UserRights | "";
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserFormData>({
    username: "",
    email: "",
    password: "",
    userRole: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);

    setFormData({
      username: "",
      email: "",
      password: "",
      userRole: "",
    });
  };

  return (
    <div>
      <h2>Registration for new users</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          User email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            name="username"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          User rights:
          <select
            name="userRole"
            value={formData.userRole}
            onChange={handleChange}
          >
            <option value="">Select User Role</option>
            <option value={UserRights.OWNER}>OWNER</option>
            <option value={UserRights.OPERATOR}>OPERATOR</option>
            <option value={UserRights.VIEWER}>VIEWER</option>
          </select>
        </label>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default UserForm;
