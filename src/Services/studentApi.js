const BASE_URL =
  "http://localhost:3001/students";

const studentApi = {
  async getAllStudents() {
    const response = await fetch(
      BASE_URL
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch students"
      );
    }

    return response.json();
  },

  async getStudentById(id) {
    const response = await fetch(
      `${BASE_URL}/${id}`
    );

    if (!response.ok) {
      throw new Error(
        "Student not found"
      );
    }

    return response.json();
  },

  async addStudent(student) {
    const response = await fetch(
      BASE_URL,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(
          student
        ),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to add student"
      );
    }

    return response.json();
  },

  async updateStudent(
    id,
    student
  ) {
    const response = await fetch(
      `${BASE_URL}/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(
          student
        ),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to update student"
      );
    }

    return response.json();
  },

  async deleteStudent(id) {
    const response = await fetch(
      `${BASE_URL}/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to delete student"
      );
    }

    return true;
  },
};

export default studentApi;