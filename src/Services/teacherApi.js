const BASE_URL =
  "http://localhost:3001/teachers";

const teacherApi = {
  async getAllTeachers() {
    const response = await fetch(
      BASE_URL
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch teachers"
      );
    }

    return response.json();
  },

  async getTeacherById(id) {
    const response = await fetch(
      `${BASE_URL}/${id}`
    );

    if (!response.ok) {
      throw new Error(
        "Teacher not found"
      );
    }

    return response.json();
  },

  async addTeacher(teacher) {
    const response = await fetch(
      BASE_URL,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(
          teacher
        ),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to add teacher"
      );
    }

    return response.json();
  },

  async updateTeacher(
    id,
    teacher
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
          teacher
        ),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to update teacher"
      );
    }

    return response.json();
  },

  async deleteTeacher(id) {
    const response = await fetch(
      `${BASE_URL}/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to delete teacher"
      );
    }

    return true;
  },
};

export default teacherApi;