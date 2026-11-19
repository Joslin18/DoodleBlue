import React, { useState } from "react";
import Input from "../CommonComponents/Input";
import Select from "../CommonComponents/Select";
import Button from "../CommonComponents/Button";
import { runStudentValidation } from "../../Constants/validation";
import { departmentOptions, yearOptions } from "../../Constants/options";

export default function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    year: "",
    cgpa: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = runStudentValidation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      department: "",
      year: "",
      cgpa: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <Input
        label="Student Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Student Name"
        error={errors.name}
      />

      <Input
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Email"
        error={errors.email}
      />

      <Select
        label="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        error={errors.department}
        options={departmentOptions}
      />

      <Select
        label="Year"
        name="year"
        value={formData.year}
        onChange={handleChange}
        error={errors.year}
        options={yearOptions}
      />

      <Input
        label="CGPA"
        name="cgpa"
        type="number"
        value={formData.cgpa}
        onChange={handleChange}
        placeholder="Enter CGPA"
        error={errors.cgpa}
      />

      <Button type="submit" className="btn-submit-block">
        Add Student
      </Button>
    </form>
  );
}
