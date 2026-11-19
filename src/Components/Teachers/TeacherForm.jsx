import React, { useState, useEffect } from "react";
import Input from "../CommonComponents/Input";
import Select from "../CommonComponents/Select";
import Button from "../CommonComponents/Button";
import { runTeacherValidation } from "../../Constants/validation";
import { departmentOptions } from "../../Constants/options";

export default function TeacherForm({ initialData = null, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    subject: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        email: initialData.email || "",
        department: initialData.department || "",
        subject: initialData.subject || ""
      });
    } else {
      setFormData({
        name: "",
        email: "",
        department: "",
        subject: ""
      });
    }
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = runTeacherValidation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSubmit(formData);

    if (!initialData) {
      setFormData({
        name: "",
        email: "",
        department: "",
        subject: ""
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="teacher-form">
      <Input
        label="Teacher Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Teacher Name"
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

      <Input
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Enter Subject"
        error={errors.subject}
      />

      <Select
        label="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        error={errors.department}
        options={departmentOptions}
      />

      <Button type="submit" className="btn-submit-block">
        {initialData ? "Update Teacher" : "Add Teacher"}
      </Button>
    </form>
  );
}
