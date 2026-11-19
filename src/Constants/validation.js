export const VALIDATION_LIMITS = {
  MIN_NAME_LENGTH: 3,
  MIN_CGPA: 0,
  MAX_CGPA: 10,
};

export const REGEX_PATTERNS = {
  EMAIL:
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

export const runStudentValidation = (
  formData
) => {
  const errors = {};

  if (!formData.name?.trim()) {
    errors.name =
      "Student name is required";
  } else if (
    formData.name.trim().length <
    VALIDATION_LIMITS.MIN_NAME_LENGTH
  ) {
    errors.name =
      "Minimum 3 characters required";
  }

  if (!formData.email?.trim()) {
    errors.email =
      "Email is required";
  } else if (
    !REGEX_PATTERNS.EMAIL.test(
      formData.email
    )
  ) {
    errors.email =
      "Invalid email address";
  }

  if (!formData.department) {
    errors.department =
      "Department is required";
  }

  if (!formData.year) {
    errors.year =
      "Year is required";
  }

  if (!formData.cgpa) {
    errors.cgpa =
      "CGPA is required";
  } else if (
    Number(formData.cgpa) <
      VALIDATION_LIMITS.MIN_CGPA ||
    Number(formData.cgpa) >
      VALIDATION_LIMITS.MAX_CGPA
  ) {
    errors.cgpa =
      "CGPA must be between 0 and 10";
  }

  return errors;
};

export const runTeacherValidation = (
  formData
) => {
  const errors = {};

  if (!formData.name?.trim()) {
    errors.name =
      "Teacher name is required";
  }

  if (!formData.email?.trim()) {
    errors.email =
      "Email is required";
  } else if (
    !REGEX_PATTERNS.EMAIL.test(
      formData.email
    )
  ) {
    errors.email =
      "Invalid email";
  }

  if (!formData.department) {
    errors.department =
      "Department is required";
  }

  if (!formData.subject?.trim()) {
    errors.subject =
      "Subject is required";
  }

  return errors;
};